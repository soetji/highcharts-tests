const dataUrl = 'http://g01dlapp01.galileosuite.com:3000/series-load';
const chartTitle = 'Series Load';
const xAxisTitle = 'Series total';

function makeSeriesName(series) {
    return `${series.chartsTotal} charts ${series.dataPointsTotal} data points`;
}

function makePointFullname(series, point) {
    return `${series.chartsTotal} charts ${series.dataPointsTotal} data points ${point.seriesTotal} series`
}

function tooltipFormatter(point) {
    return `${this.series.name}:<br/><b>${this.x}</b> series <b>${this.y}</b> millisecs`
}

go();