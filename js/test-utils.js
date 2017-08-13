const uri = new URI(location.href);
const params = uri.search(true);
const isLocalDb = true;
const dbDomain = isLocalDb ? 'http://localhost:3000/' : 'http://g01dlapp01.galileosuite.com:3000/';
const pageChartData = [];
const myStorage = window.localStorage;
const testIncrement = 5;
let loadedChartsTotal = 0;
let options;

Highcharts.setOptions({
    global: {
        useUTC: false
    }
});

function postData(data) {
    return $.ajax({
        method: 'POST',
        url: dataUrl,
        contentType: 'application/json',
        data: JSON.stringify(data)
    })
}

function putData(id, data) {
    return $.ajax({
        method: 'PUT',
        url: dataUrl + '/' + id,
        contentType: 'application/json',
        data: JSON.stringify(data)
    })
}

function getUrlValue() {
    const params = uri.search(true);
    return params.val === undefined ? undefined : Number(params.val);
}

function nextUrl() {
    const params = uri.search(true);
    const val = getUrlValue();
    params.val = val === 1 ? testIncrement : val + testIncrement;
    return uri.search(params).toString();
}

function saveData() {
    const res = JSON.parse(myStorage.getItem('sessionTimeData'));
    pageChartData[this.options.test.chartIndex] = Date.now() - this.options.test.startTime;
    res.push(makeResult(pageChartData));
    loadedChartsTotal++;
    if (loadedChartsTotal === this.options.test.chartsTotal) {
        if (isFinalPage()) {
            const data = JSON.parse(myStorage.getItem('initialData'));
            myStorage.removeItem('initialData');
            myStorage.removeItem('sessionTimeData');
            data.result = res;
            console.log(data);
            if (saveDataToDb) {
                postData(data);
            }
        } else {
            myStorage.setItem('sessionTimeData', JSON.stringify(res));
            location.href = nextUrl();
        }
    }
};

function init(initialData) {
    const params = uri.search(true);
    params.val = 1;
    initialData.highchartsBoost = highchartsBoost;
    initialData.chartType = chartType;
    initialData.chartStacking = chartStacking;
    myStorage.setItem('sessionTimeData', '[]');
    myStorage.setItem('initialData', JSON.stringify(initialData));
    location.href = uri.search(params).toString();
}

function highchartsSetup() {
    options = {
        chart: {
            events: {
                load: null
            },
            type: chartType,
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

    options.plotOptions[chartType] = { stacking: chartStacking };
}

function go() {
    const _go = () => {
        for (let i = 0; i < chartsTotal; i++) {
            _.merge(options, {
                plotOptions: {
                    series: {
                        pointInterval: 24 * 3600000 / dataPointsTotal
                    }
                },
                series: Array.from(Array(seriesTotal)).map(() => ({ data: Array.from(Array(dataPointsTotal)).map(() => Math.random()) }))
            });

            setup(i);
            $('<div class="hc-box" />').appendTo('#box').highcharts(options);
        }
    }

    if (getUrlValue() === undefined || myStorage.getItem('sessionTimeData') === null) {
        init(initialData);
    } else {
        highchartsSetup();
        if (highchartsBoost) {
            $.getScript('http://code.highcharts.com/modules/boost.js')
            .then(_go);
        } else {
            _go();
        }
    }
}

if (params.test) {
    $.getScript(`${params.test}/test.js`);
}