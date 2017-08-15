class Result {
    constructor(element, action) {
        this.isLocalDb = true;
        this.dbDomain = this.isLocalDb ? 'http://localhost:3000/' : 'http://g01dlapp01.galileosuite.com:3000/';
    
        this.el = element;
        this.action = action;
        this.uri = new URI(location.href);
        this.params = this.uri.search(true);
    }

    static getParams() {
        const uri = new URI(location.href);
        return uri.search(true);
    }
    
    static getUrlValue() {
        const params = this.getParams();
        return params.val === undefined ? undefined : Number(params.val);
    }
    
    static go() {
        const params = this.getParams();
        if (params.el && params.act) {
            $.when($.getScript(`js/elements/${params.el}.js`), $.getScript(`js/actions/${params.act}.js`))
            .then(() => {
                const element = new Element(this.getUrlValue());
                const action = new Action();
                const result = new Result(element, action);
                result.go();
            });
        }
    }
    
    static goMode(mode) {
        const uri = new URI(location.href);
        const params = uri.search(true);
        params.mode = mode;
        location.href = uri.search(params).toString();
    }
    
    static goSum() {
        this.goMode('sum');
    }
    
    static goAve() {
        this.goMode('ave');
    }
    
    static goMax() {
        this.goMode('max');
    }
    
    static goMin() {
        this.goMode('min');
    }
    
    __handlePointClick() {
        console.log(this.options.debugTitle, this.options.times);
    }
    
    getMode() {
        const params = Result.getParams();
        return params.mode ? params.mode : 'sum';
    }
    
    getY(times) {
        if (times.length === 0) return null;
    
        switch (this.getMode()) {
            case 'sum': return _.sum(times);
            case 'ave': return Math.round(_.sum(times) / times.length);
            case 'max': return _.max(times);
            case 'min': return _.min(times);
            default: return null;
        }
    }
    
    makeOptions() {
        return {
            chart: {
                zoomType: 'x'
            },
            title: {
                text: this.el.chartTitle
            },
            legend: {
                enabled: true
            },
            xAxis: {
                title: {
                    text: this.el.xAxisTitle
                }
            },
            legend: {
                enabled: true
            },
            plotOptions: {
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: this.__handlePointClick
                        }
                    }
                }
            },
            tooltip: {
                formatter: this.el.tooltipFormatter
            },
            yAxis: {
                title: {
                    text: 'milliseconds'
                }
            }
        }
    };
    
    go() {
        const options = this.makeOptions();
        $.get(this.dbDomain + this.el.dataUrl).then(data => {
            const seriesData = data.map(ser => {
                const boost = ser.highchartsBoost ? ' (boost)' : '';
                return {
                    name: this.el.makeSeriesName(ser) + boost,
                    data: ser.result.map(res => ({
                        x: this.el.getX(res),
                        y: this.getY(res.times),
                        debugTitle: this.el.makePointDebugTitle(ser, res),
                        times: res.times
                    }))
                }
            });
            options.series = seriesData;
            $('#box').highcharts(options);
        });
    }
    
}