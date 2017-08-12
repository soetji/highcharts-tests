const dataUrl = dbDomain + 'data-points-load';
const saveDataToDb = false;
const highchartsBoost = true;
const chartsTotal = 2;
const dataPointsTotal = getUrlValue();
const seriesTotal = 200;
const dataPointsMax = 900;
const chartType = 'line';
const chartStacking = false;

const initialData = {
    date: new Date(),
    userAgent: navigator.userAgent,
    chartsTotal: chartsTotal,
    dataPointsMax: dataPointsMax,
    seriesTotal: seriesTotal
}

const makeResult = (times) => ({ dataPointsTotal: dataPointsTotal, times: times });
const isFinalPage = () => dataPointsTotal >= dataPointsMax;

$.getScript('js/test-load.js').then(go);
