class Hide {
    constructor() {
        this.urlPart = 'hide';
        this.chartTitle = 'Hide';
    }

    __handleLoad() {
        // this is chart object
        if (this.options.test.maxSeriesToHide === undefined) {
            this.options.test.startTime = Date.now();
            this.series[0].hide();
        } else {
            this.series.slice(0, this.options.test.maxSeriesToHide)
                .forEach(ser => ser.setVisible(false, false));
            this.options.test.startTime = Date.now();
            this.redraw();
        }
    };

    __handleRedraw() {
        // this is chart object
        if (this.options.test.startTime !== undefined) {
            this.options.test.saveData(this.options.test.startTime);
        }
    };
    
    assignOptions(element, options, saveData, makeSeries) {
        // Do this before calling highcharts
        options.test = {
            saveData: saveData,
            makeSeries: makeSeries,
            maxSeriesToHide: element.maxSeriesToHide
        };
        options.chart.events.load = this.__handleLoad;
        options.chart.events.redraw = this.__handleRedraw;
        return options;
    }
}

const Action = Hide;