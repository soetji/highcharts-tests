class Redraw {
    constructor() {
        this.urlPart = 'redraw';
        this.chartTitle = 'Redraw';
    }

    __handleLoad() {
        // this is chart object
        this.options.test.startTime = Date.now();
        this.redraw();
    };

    __handleRedraw() {
        // this is chart object
        this.options.test.saveData(this.options.test.startTime);
    };
    
    assignOptions(element, options, saveData) {
        // Do this before calling highcharts
        options.test = {
            saveData: saveData
        };
        options.chart.events.load = this.__handleLoad;
        options.chart.events.redraw = this.__handleRedraw;
        return options;
    }
}

const Action = Redraw;