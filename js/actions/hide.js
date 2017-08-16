class Hide {
    constructor() {
        this.urlPart = 'hide';
        this.chartTitle = 'Hide';
    }

    __handleLoad() {
        // this is chart object
        this.options.test.startTime = Date.now();
        this.series[0].hide();
    };

    __handleHide() {
        // this is chart object
        this.options.test.saveData(this.options.test.startTime);
    };
    
    assignOptions(options, saveData, makeSeries) {
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

const Action = Hide;