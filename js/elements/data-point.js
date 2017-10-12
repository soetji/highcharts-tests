class DataPoint {
    constructor(urlVal) {
        this.chartsTotal = 1;
        this.seriesTotal = 200;
        this.highchartsBoost = true;
        this.dataPointsMax = 900;
        this.chartType = 'area';
        this.chartStacking = true;
        // this.highchartsVersion = '5.0.14';
        this.highchartsVersion = '6.0.1';
        this.urlPart = 'data-point';
        this.dataPointsTotal = urlVal;

        // Result
        this.chartTitle = 'Data Points';
    }

    makeInitialData() {
        return {
            date: new Date(),
            userAgent: navigator.userAgent,
            chartsTotal: this.chartsTotal,
            dataPointsMax: this.dataPointsMax,
            seriesTotal: this.seriesTotal,
            highchartsBoost: this.highchartsBoost,
            chartType: this.chartType,
            chartStacking: this.chartStacking
        };
    }

    makeResult(times) {
        return { dataPointsTotal: this.dataPointsTotal, times: times };
    }
    
    isFinalPage() {
        return this.dataPointsTotal >= this.dataPointsMax;
    }
    
    getX(result) {
        return result.dataPointsTotal
    }
    
    makeSeriesName(series) {
        return `${series.chartsTotal} charts ${series.seriesTotal} series`;
    }
    
    makePointDebugTitle(series, point) {
        return `${series.chartsTotal} charts ${point.dataPointsTotal} data points ${series.seriesTotal} series. Time per data point:`;
    }
    
    tooltipFormatter(point) {
        return `${this.series.name}:<br/><b>${this.x}</b> data points <b>${this.y}</b> msec`
    }
}

const Element = DataPoint;