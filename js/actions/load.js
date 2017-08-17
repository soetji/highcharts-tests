class Load {
    constructor() {
        this.urlPart = 'load';
        this.chartTitle = 'Load';
    }

    __handleLoad() {
        // this is chart object
        this.options.test.saveData(this.options.test.startTime);
    };
    
    assignOptions(element, options, saveData) {
        // Do this before calling highcharts
        options.test = {
            saveData: saveData,
            startTime: Date.now()
        };
        options.chart.events.load = this.__handleLoad;
        return options;
    }
}

const Action = Load;