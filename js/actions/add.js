class Add {
    constructor() {
        this.urlPart = 'add';
        this.chartTitle = 'Add';
    }

    __handleLoad() {
        // this is chart object
        const newSeries = this.options.test.makeSeries();
        this.options.test.startTime = Date.now();
        this.addSeries(newSeries, true, true);
    };

    __handleRedraw() {
        // this is chart object
        this.options.test.saveData(this.options.test.startTime);
    };
    
    assignOptions(element, options, saveData, makeSeries) {
        // Do this before calling highcharts
        options.test = {
            saveData: saveData,
            makeSeries: makeSeries
        };
        options.chart.events.load = this.__handleLoad;
        options.chart.events.redraw = this.__handleRedraw;
        return options;
    }
}

const Action = Add;