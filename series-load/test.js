const dataUrl = 'http://g01dlapp01.galileosuite.com:3000/series-load';
const saveData = true;
const chartsTotal = 10;
const dataPointsTotal = 900;
const seriesTotal = getUrlValue();
const seriesMax = 200;

const initialData = {
    date: new Date(),
    userAgent: navigator.userAgent,
    chartsTotal: chartsTotal,
    dataPointsTotal: dataPointsTotal,
    seriesMax: seriesMax
}

const makeResult = (times) => ({ seriesTotal: seriesTotal, times: times });
const isFinalPage = () => seriesTotal >= seriesMax;
const getPageVal = () => seriesTotal;

go();
