const dataUrl = 'http://g01dlapp01.galileosuite.com:3000/charts-redraw';
const saveData = true;
const chartsTotal = getUrlValue();
const dataPointsTotal = 300;
const seriesTotal = 100;
const chartsMax = 50;

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

go();
