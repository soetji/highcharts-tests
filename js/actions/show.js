class Show {
    constructor() {
        this.urlPart = 'show';
        this.chartTitle = 'Show';
    }

    __handleLoad() {
        // this is chart object
        this.series[0].hide();
    };

    __handleRedraw() {
        // this is chart object
        if (this.series[0].visible) {
            this.options.test.saveData(this.options.test.startTime);
        } else {
            this.options.test.startTime = Date.now();
            this.series[0].show();
        }
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

const Action = Show;