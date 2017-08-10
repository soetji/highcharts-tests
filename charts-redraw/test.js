const saveData = false;
const chartsTotal = getUrlValue();
const dataPointsTotal = 300;
const seriesTotal = 100;
const chartsMax = 1;
const dataUrl = 'http://g01dlapp01.galileosuite.com:3000/charts';

const initialData = {
    date: new Date(),
    userAgent: navigator.userAgent,
    chartsMax: chartsMax,
    dataPointsTotal: dataPointsTotal,
    seriesTotal: seriesTotal
}

const makeResult = (time) => ({ chartsTotal: chartsTotal, time: time });
const isFinalPage = () => chartsTotal >= chartsMax;
const getPageVal = () => chartsTotal;

go();
