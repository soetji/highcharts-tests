class Series {
    constructor(urlVal) {
        this.dataUrl = 'series-load';
        this.saveDataToDb = false;
        this.highchartsBoost = true;
        this.chartsTotal = 10;
        this.dataPointsTotal = 900;
        this.seriesTotal = urlVal;
        this.seriesMax = 200;
        this.chartType = 'line';
        this.chartStacking = false;
    }

    makeInitialData() {
        return {
            date: new Date(),
            userAgent: navigator.userAgent,
            chartsTotal: this.chartsTotal,
            dataPointsTotal: this.dataPointsTotal,
            seriesMax: this.seriesMax,
            highchartsBoost: this.highchartsBoost,
            chartType: this.chartType,
            chartStacking: this.chartStacking
        };
    }

    makeResult(times) {
        return { seriesTotal: this.seriesTotal, times: times };
    }
    
    isFinalPage() {
        return this.seriesTotal >= this.seriesMax;
    }
}

const element = new Series(Test.getUrlValue());