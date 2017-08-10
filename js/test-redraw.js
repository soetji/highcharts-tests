function handleLoad () {
    this.options.test.startTime = Date.now();
    this.redraw();
}

function handleRedraw () {
    saveData.call(this);
};

function setup(chartIndex) {
    // Do this before calling highcharts
    options.chart.events.load = handleLoad;
    options.chart.events.redraw = handleRedraw;
    options.test = {};
    options.test.chartIndex = chartIndex;
    options.test.chartsTotal = chartsTotal;
}