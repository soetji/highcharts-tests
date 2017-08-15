class Load {
    __handleLoad() {
        // this is chart object
        this.options.test.saveData(this.options.test.startTime);
    };
    
    assignOptions(options, saveData) {
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