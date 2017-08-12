const dataUrl = dbDomain + 'charts-load';
const saveDataToDb = false;
const highchartsBoost = true;
const chartsTotal = getUrlValue();
const dataPointsTotal = 9;
const seriesTotal = 5;
const chartsMax = 1;
const chartType = 'area';
const chartStacking = true;

const initialData = {
    date: new Date(),
    userAgent: navigator.userAgent,
    chartsMax: chartsMax,
    dataPointsTotal: dataPointsTotal,
    seriesTotal: seriesTotal
}

const makeResult = (times) => ({ chartsTotal: chartsTotal, times: times });
const isFinalPage = () => chartsTotal >= chartsMax;

$.getScript('js/test-load.js').then(go);
