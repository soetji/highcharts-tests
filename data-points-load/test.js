const dataUrl = 'http://g01dlapp01.galileosuite.com:3000/data-points-load';
const saveData = false;
const chartsTotal = 1;
const dataPointsTotal = getUrlValue();
const seriesTotal = 200;
const dataPointsMax = 9;

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

$.getScript('js/test-load.js').then(go);
