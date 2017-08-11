const dataUrl = dbDomain + 'series-load';
const chartTitle = 'Series Load';
const xAxisTitle = 'Series total';

function getX(result) {
    return result.seriesTotal
}

function makeSeriesName(series) {
    return `${series.chartsTotal} charts ${series.dataPointsTotal} data points`;
}

function makePointDebugTitle(series, point) {
    return `${series.chartsTotal} charts ${series.dataPointsTotal} data points ${point.seriesTotal} series. Time per series:`;
}

function tooltipFormatter(point) {
    return `${this.series.name}:<br/><b>${this.x}</b> series <b>${this.y}</b> msec`
}

go();