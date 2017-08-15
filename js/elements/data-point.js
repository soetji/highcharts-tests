class DataPoint {
    constructor(urlVal) {
        this.dataUrl = 'data-points-load';
        this.saveDataToDb = false;
        this.highchartsBoost = true;
        this.chartsTotal = 1;
        this.dataPointsTotal = urlVal;
        this.seriesTotal = 200;
        this.dataPointsMax = 900;
        this.chartType = 'line';
        this.chartStacking = false;
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
}

const Element = DataPoint;