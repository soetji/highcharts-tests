class Chart {
    constructor(urlVal) {
        this.urlPart = 'chart';
        this.highchartsBoost = true;
        this.chartsTotal = urlVal;
        this.dataPointsTotal = 300;
        this.seriesTotal = 200;
        this.chartsMax = 200;
        this.chartType = 'area';
        this.chartStacking = true;

        // Result
        this.chartTitle = 'Charts';
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