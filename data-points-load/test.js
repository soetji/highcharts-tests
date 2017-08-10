const saveData = false;
const chartsTotal = 1;
const dataPointsTotal = getUrlValue();
const seriesTotal = 200;
const dataPointsMax = 9;
const dataUrl = 'http://g01dlapp01.galileosuite.com:3000/dataPoints';

const initialData = {
    date: new Date(),
    userAgent: navigator.userAgent,
    chartsTotal: chartsTotal,
    dataPointsMax: dataPointsMax,
    seriesTotal: seriesTotal
}

const makeResult = (time) => ({ dataPointsTotal: dataPointsTotal, time: time });
const isFinalPage = () => dataPointsTotal >= dataPointsMax;
const getPageVal = () => dataPointsTotal;

go();
