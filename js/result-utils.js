function __handlePointClick() {
    console.log(this.options.fullname, this.options.times);
}

function getMode() {
    const uri = new URI(location.href);
    const params = uri.search(true);
    return params.mode ? params.mode : 'sum';
}

function getY(times) {
    if (times.length === 0) return null;

    switch (getMode()) {
        case 'sum': return _.sum(times);
        case 'ave': return _.sum(times) / times.length;
        case 'max': return _.max(times);
        case 'min': return _.min(times);
        default: return null;
    }
}

const options = {
    chart: {
        zoomType: 'x'
    },
    title: {
        text: 'Highcharts Charts Test'
    },
    legend: {
        enabled: true
    },
    xAxis: {
        title: {
            text: 'charts total'
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
                    click: __handlePointClick
                }
            }
        }
    },
    tooltip: {
        formatter: function () {
            return `${this.series.name}:<br/><b>${this.x}</b> charts <b>${this.y}</b> millisecs`
        }
    },
    yAxis: {
        title: {
            text: 'milliseconds'
        }
    }
};

function go() {
    $.get(dataUrl).then(data => {
        const seriesData = data.map(ser => ({
            name: `${ser.dataPointsTotal} data points ${ser.seriesTotal} series`,
            data: ser.result.map(res => ({
                x: res.chartsTotal,
                y: getY(res.times),
                fullname: `${res.chartsTotal} charts ${ser.dataPointsTotal} data points ${ser.seriesTotal} series`,
                times: res.times
            }))
        }));
        options.series = seriesData;
        $('#box').highcharts(options);
    });
}
