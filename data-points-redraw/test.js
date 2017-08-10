const dataUrl = 'http://g01dlapp01.galileosuite.com:3000/data-points-redraw';
const saveData = false;
const chartsTotal = 1;
const dataPointsTotal = getUrlValue();
const seriesTotal = 10;
const dataPointsMax = 900;

const initialData = {
    date: new Date(),
    userAgent: navigator.userAgent,
    chartsTotal: chartsTotal,
    dataPointsMax: dataPointsMax,
    seriesTotal: seriesTotal
}

const makeResult = (times) => ({ dataPointsTotal: dataPointsTotal, times: times });
const isFinalPage = () => dataPointsTotal >= dataPointsMax;
const getPageVal = () => dataPointsTotal;

$.getScript('js/test-redraw.js').then(go);
