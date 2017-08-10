const uri = new URI(location.href);

function __handlePointClick() {
    console.log(this.options.debugTitle, this.options.times);
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
        case 'ave': return Math.round(_.sum(times) / times.length);
        case 'max': return _.max(times);
        case 'min': return _.min(times);
        default: return null;
    }
}

function getOptions() {
    return {
        chart: {
            zoomType: 'x'
        },
        title: {
            text: chartTitle
        },
        legend: {
            enabled: true
        },
        xAxis: {
            title: {
                text: xAxisTitle
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
            formatter: tooltipFormatter
        },
        yAxis: {
            title: {
                text: 'milliseconds'
            }
        }
    }
};

function go() {
    const options = getOptions();
    $.get(dataUrl).then(data => {
        const seriesData = data.map(ser => ({
            name: makeSeriesName(ser),
            data: ser.result.map(res => ({
                x: res.chartsTotal,
                y: getY(res.times),
                debugTitle: makePointDebugTitle(ser, res),
                times: res.times
            }))
        }));
        options.series = seriesData;
        $('#box').highcharts(options);
    });
}
