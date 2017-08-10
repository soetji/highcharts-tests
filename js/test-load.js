function handleLoad() {
    saveData.call(this);
};

function setup(chartIndex) {
    // Do this before calling highcharts
    options.test = {
        chartIndex: chartIndex,
        chartsTotal: chartsTotal,
        startTime: Date.now()
    };
    options.chart.events.load = handleLoad;
}