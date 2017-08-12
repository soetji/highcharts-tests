const dataUrl = dbDomain + 'charts-redraw';
const saveDataToDb = false;
const chartsTotal = getUrlValue();
const dataPointsTotal = 300;
const seriesTotal = 10;
const chartsMax = 1;
const chartType = 'line';
const chartStacking = false;

const initialData = {
    date: new Date(),
    userAgent: navigator.userAgent,
    chartsMax: chartsMax,
    dataPointsTotal: dataPointsTotal,
    seriesTotal: seriesTotal
}

const makeResult = (times) => ({ chartsTotal: chartsTotal, times: times });
const isFinalPage = () => chartsTotal >= chartsMax;

$.getScript('js/test-redraw.js').then(go);
