const saveData = false;
const chartsTotal = getUrlValue();
const dataPointsTotal = 300;
const seriesTotal = 200;
const chartsMax = 1;
const dataUrl = 'http://g01dlapp01.galileosuite.com:3000/charts';

const initialData = {
    date: new Date(),
    userAgent: navigator.userAgent,
    chartsMax: chartsMax,
    dataPointsTotal: dataPointsTotal,
    seriesTotal: seriesTotal
}

const makeResult = (loadTime) => ({ chartsTotal: chartsTotal, loadTime: loadTime });
const isFinalPage = () => chartsTotal >= chartsMax;
const getPageVal = () => chartsTotal;

go();
