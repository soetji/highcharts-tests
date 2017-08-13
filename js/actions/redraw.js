class Redraw {
    handleLoad() {
        // this is chart object
        this.options.test.startTime = Date.now();
        this.redraw();
    };

    handleRedraw() {
        // this is chart object
        this.options.test.saveData(this.options.test.startTime);
    };
    
    assignOptions(options, saveData) {
        // Do this before calling highcharts
        options.test = {
            saveData: saveData
        };
        options.chart.events.load = this.handleLoad;
        options.chart.events.redraw = this.handleRedraw;
        return options;
    }
}

const action = new Redraw();