const dataUrl = dbDomain + 'charts-load';
const chartTitle = 'Charts Load';
const xAxisTitle = 'Charts total';

function getX(result) {
    return result.chartsTotal
}

function makeSeriesName(series) {
    return `${series.dataPointsTotal} data points ${series.seriesTotal} series`;
}

function makePointDebugTitle(series, point) {
    return `${point.chartsTotal} charts ${series.dataPointsTotal} data points ${series.seriesTotal} series. Time per chart:`;
}

function tooltipFormatter(point) {
    return `${this.series.name}:<br/><b>${this.x}</b> charts <b>${this.y}</b> msec`
}

go();