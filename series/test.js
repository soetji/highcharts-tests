const saveData = false;
const chartsTotal = 10;
const dataPointsTotal = 300;
const seriesTotal = getUrlValue();
const seriesMax = 2;
const dataUrl = 'http://g01dlapp01.galileosuite.com:3000/series';

const initialData = {
    date: new Date(),
    userAgent: navigator.userAgent,
    chartsTotal: chartsTotal,
    dataPointsTotal: dataPointsTotal,
    seriesMax: seriesMax
}

const makeResult = (loadTime) => ({ seriesTotal: seriesTotal, loadTime: loadTime });
const isFinalPage = () => seriesTotal >= seriesMax;
const getPageVal = () => seriesTotal;

go();
