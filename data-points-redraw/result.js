const dataUrl = dbDomain + 'data-points-redraw';
const chartTitle = 'Data Points Redraw';
const xAxisTitle = 'Data points total';

function getX(result) {
    return result.dataPointsTotal
}

function makeSeriesName(series) {
    return `${series.chartsTotal} charts ${series.seriesTotal} series`;
}

function makePointDebugTitle(series, point) {
    return `${series.chartsTotal} charts ${point.dataPointsTotal} data points ${series.seriesTotal} series. Time per data point:`;
}

function tooltipFormatter(point) {
    return `${this.series.name}:<br/><b>${this.x}</b> data points <b>${this.y}</b> msec`
}

go();