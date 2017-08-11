const isLocalDb = true;
const dbDomain = isLocalDb ? 'http://localhost:3000/' : 'http://g01dlapp01.galileosuite.com:3000/';
const uri = new URI(location.href);
const pageChartData = [];
const myStorage = window.localStorage;
const testIncrement = 5;
let loadedChartsTotal = 0;

Highcharts.setOptions({
    global: {
        useUTC: false
    }
});

const options = {
    chart: {
        events: {
            load: null
        },
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

function init() {
    const params = uri.search(true);
    params.val = 1;
    myStorage.setItem('sessionTimeData', '[]');
    myStorage.setItem('initialData', JSON.stringify(initialData));
    location.href = uri.search(params).toString();
}

function go() {
    if (getUrlValue() === undefined || myStorage.getItem('sessionTimeData') === null) {
        init();
    } else {
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
}