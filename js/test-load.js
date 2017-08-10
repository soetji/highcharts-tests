function handleLoad() {
    const pageVal = getPageVal();
    const res = JSON.parse(myStorage.getItem('sessionTimeData'));
    pageChartData[this.options.test.chartIndex] = Date.now() - this.options.test.startTime;
    res[pageVal - 1] = makeResult(pageChartData);
    loadedChartsTotal++;
    if (loadedChartsTotal === this.options.test.chartsTotal) {
        if (isFinalPage()) {
            const data = JSON.parse(myStorage.getItem('initialData'));
            myStorage.removeItem('initialData');
            myStorage.removeItem('sessionTimeData');
            data.result = res;
            console.log(data);
            if (saveData) {
                postData(data);
            }
        } else {
            myStorage.setItem('sessionTimeData', JSON.stringify(res));
            location.href = newUrl(pageVal + 1);
        }
    }
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