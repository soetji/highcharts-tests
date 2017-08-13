class Chart {
    constructor(urlVal) {
        this.dataUrl = 'charts-load';
        this.saveDataToDb = false;
        this.highchartsBoost = true;
        this.chartsTotal = urlVal;
        this.dataPointsTotal = 9;
        this.seriesTotal = 5;
        this.chartsMax = 1;
        this.chartType = 'area';
        this.chartStacking = true;
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
}

const element = new Chart(Test.getUrlValue());