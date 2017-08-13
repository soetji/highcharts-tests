Highcharts.setOptions({
    global: {
        useUTC: false
    }
});

class Test {
    constructor(element, action) {
        this.isLocalDb = true;
        this.dbDomain = this.isLocalDb ? 'http://localhost:3000/' : 'http://g01dlapp01.galileosuite.com:3000/';
        this.pageChartData = [];
        this.myStorage = window.localStorage;
        this.testIncrement = 5;
        this.loadedChartsTotal = 0;

        this.el = element;
        this.action = action;
        this.uri = new URI(location.href);
        this.params = this.uri.search(true);
        this.urlVal = Test.getUrlValue();
    }

    static go() {
        const uri = new URI(location.href);
        const params = uri.search(true);
        if (params.el && params.act) {
            $.when($.getScript(`js/elements/${params.el}.js`), $.getScript(`js/actions/${params.act}.js`))
            .then(() => {
                const test = new Test(element, action);
                test.go();
            });
        }
    }

    static getUrlValue() {
        const params = (new URI(location.href)).search(true);
        return params.val === undefined ? undefined : Number(params.val);
    }

    postData(data) {
        return $.ajax({
            method: 'POST',
            url: this.el.dataUrl,
            contentType: 'application/json',
            data: JSON.stringify(data)
        })
    }
    
    putData(id, data) {
        return $.ajax({
            method: 'PUT',
            url: this.el.dataUrl + '/' + id,
            contentType: 'application/json',
            data: JSON.stringify(data)
        })
    }
    
    init() {
        this.myStorage.setItem('sessionTimeData', '[]');
        this.myStorage.setItem('initialData', JSON.stringify(this.el.makeInitialData()));
        this.params.val = 1;
        location.href =this.uri.search(this.params).toString();
    }

    goNextPage() {
        this.params.val = this.urlVal === 1 ? testIncrement : this.urlVal + testIncrement;
        location.href = this.uri.search(this.params).toString();
    }

    saveData(chartIndex, startTime) {
        // this is chart object
        const res = JSON.parse(this.myStorage.getItem('sessionTimeData'));
        this.pageChartData[chartIndex] = Date.now() - startTime;
        res.push(this.el.makeResult(this.pageChartData));
        this.loadedChartsTotal++;
        if (this.loadedChartsTotal === this.el.chartsTotal) {
            if (this.el.isFinalPage()) {
                const data = JSON.parse(this.myStorage.getItem('initialData'));
                this.myStorage.removeItem('initialData');
                this.myStorage.removeItem('sessionTimeData');
                data.result = res;
                console.log(data);
                if (this.el.saveDataToDb) {
                    this.postData(data);
                }
            } else {
                this.myStorage.setItem('sessionTimeData', JSON.stringify(res));
                this.goNextPage();
            }
        }
    }

    makeOptions() {
        const options = {
            chart: {
                events: {
                    load: null
                },
                type: this.el.chartType,
                zoomType: 'x'
            },
            title: {
                text: 'Zoom Test'
            },
            legend: {
                enabled: false
            },
            xAxis: {
                type: 'datetime',
                min: Date.now() - 24 * 3600000,
                max: Date.now()
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    pointStart: Date.now() - 24 * 3600000,
                }
            }
        };
    
        options.plotOptions[this.el.chartType] = { stacking: this.el.chartStacking };
        return options;
    }

    go() {
        const _go = () => {
            const options = this.makeOptions();
            for (let chartIndex = 0, max = this.el.chartsTotal; chartIndex < max; chartIndex++) {
                _.merge(options, {
                    plotOptions: {
                        series: {
                            pointInterval: 24 * 3600000 / this.el.dataPointsTotal
                        }
                    },
                    series: Array.from(Array(this.el.seriesTotal)).map(() => ({ data: Array.from(Array(this.el.dataPointsTotal)).map(() => Math.random()) }))
                });

                this.action.assignOptions(options, this.saveData.bind(this, chartIndex));
                $('<div class="hc-box" />').appendTo('#box').highcharts(options);
            }
        }
    
        if (this.urlVal === undefined || this.myStorage.getItem('sessionTimeData') === null) {
            this.init();
        } else {
            if (this.el.highchartsBoost) {
                $.getScript('http://code.highcharts.com/modules/boost.js')
                .then(_go);
            } else {
                _go();
            }
        }

    }
}