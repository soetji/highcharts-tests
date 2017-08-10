const dataUrl = 'http://g01dlapp01.galileosuite.com:3000/charts-redraw';
const saveData = false;
const chartsTotal = getUrlValue();
const dataPointsTotal = 300;
const seriesTotal = 10;
const chartsMax = 1;

const initialData = {
    date: new Date(),
    userAgent: navigator.userAgent,
    chartsMax: chartsMax,
    dataPointsTotal: dataPointsTotal,
    seriesTotal: seriesTotal
}

const makeResult = (times) => ({ chartsTotal: chartsTotal, times: times });
const isFinalPage = () => chartsTotal >= chartsMax;
const getPageVal = () => chartsTotal;

$.getScript('js/test-redraw.js').then(go);
