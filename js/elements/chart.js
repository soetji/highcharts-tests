class Chart {
    constructor(urlVal) {
        this.dataPointsTotal = 300;
        this.seriesTotal = 10;
        this.highchartsBoost = false;
        this.chartType = 'area';
        this.chartStacking = true;
        this.chartsMax = 200;
        // this.maxSeriesToHide = 10;
        // this.highchartsVersion = '5.0.14';
        this.highchartsVersion = '6.0.1';
        this.urlPart = 'chart';
        this.chartsTotal = urlVal;

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
            highchartsVersion: this.highchartsVersion,
            chartType: this.chartType,
            chartStacking: this.chartStacking,
            maxSeriesToHide: this.maxSeriesToHide
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