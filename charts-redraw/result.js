const dataUrl = 'http://g01dlapp01.galileosuite.com:3000/charts-redraw';
const chartTitle = 'Charts Redraw';
const xAxisTitle = 'Charts total';

function makeSeriesName(series) {
    return `${series.dataPointsTotal} data points ${series.seriesTotal} series`;
}

function makePointDebugTitle(series, point) {
    return `${point.chartsTotal} charts ${series.dataPointsTotal} data points ${series.seriesTotal} series. Time per chart:`;
}

function tooltipFormatter(point) {
    return `${this.series.name}:<br/><b>${this.x}</b> charts <b>${this.y}</b> millisecs`
}

go();