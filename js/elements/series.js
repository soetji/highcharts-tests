class Series {
    constructor(urlVal) {
        this.urlPart = 'series';
        this.highchartsBoost = true;
        this.chartsTotal = 10;
        this.dataPointsTotal = 900;
        this.seriesTotal = urlVal;
        this.seriesMax = 200;
        this.chartType = 'line';
        this.chartStacking = false;
        // this.maxSeriesToLoad = 25;

        // Result
        this.chartTitle = 'Series';
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
            chartStacking: this.chartStacking,
            maxSeriesToLoad: this.maxSeriesToLoad
        };
    }

    makeResult(times) {
        return { seriesTotal: this.seriesTotal, times: times };
    }
    
    isFinalPage() {
        return this.seriesTotal >= this.seriesMax;
    }
    
    getX(result) {
        return result.seriesTotal
    }
    
    makeSeriesName(series) {
        return `${series.chartsTotal} charts ${series.dataPointsTotal} data points`;
    }
    
    makePointDebugTitle(series, point) {
        return `${series.chartsTotal} charts ${series.dataPointsTotal} data points ${point.seriesTotal} series. Time per series:`;
    }
    
    tooltipFormatter(point) {
        return `${this.series.name}:<br/><b>${this.x}</b> series <b>${this.y}</b> msec`
    }
}

const Element = Series;