class Chart {
    constructor(urlVal) {
        this.dataUrl = 'charts-load';
        this.saveDataToDb = false;
        this.highchartsBoost = true;
        this.chartsTotal = urlVal;
        this.dataPointsTotal = 9;
        this.seriesTotal = 5;
        this.chartsMax = 10;
        this.chartType = 'area';
        this.chartStacking = true;

        // Result
        this.chartTitle = 'Charts Load';
        this.xAxisTitle = 'Charts total';
    }

    makeInitialData() {
        return {
            date: new Date(),
            userAgent: navigator.userAgent,
            chartsMax: this.chartsMax,
            dataPointsTotal: this.dataPointsTotal,
            seriesTotal: this.seriesTotal,
            highchartsBoost: this.highchartsBoost,
            chartType: this.chartType,
            chartStacking: this.chartStacking
        };
    }

    makeResult(times) {
        return { chartsTotal: this.chartsTotal, times: times };
    }
    
    isFinalPage() {
        return this.chartsTotal >= this.chartsMax;
    }

    getX(result) {
        return result.chartsTotal
    }

    makeSeriesName(series) {
        return `${series.dataPointsTotal} data points ${series.seriesTotal} series`;
    }

    makePointDebugTitle(series, point) {
        return `${point.chartsTotal} charts ${series.dataPointsTotal} data points ${series.seriesTotal} series. Time per chart:`;
    }

    tooltipFormatter(point) {
        return `${this.series.name}:<br/><b>${this.x}</b> charts <b>${this.y}</b> msec`
    }
}

const Element = Chart;