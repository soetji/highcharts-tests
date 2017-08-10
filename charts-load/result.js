const dataUrl = 'http://g01dlapp01.galileosuite.com:3000/charts';

const options = {
  chart: {
    zoomType: 'x'
  },
  title: {
    text: 'Highcharts Charts Test'
  },
  legend: {
    enabled: true
  },
  xAxis: {
    title: {
      text: 'charts total'
    }
  },
  legend: {
    enabled: true
  },
  yAxis: {
    title: {
      text: 'milliseconds'
    }
  }
};

$.get(dataUrl).then(data => {
  const seriesData = data.map(ser => ({
    name: `${ser.dataPointsTotal} data points ${ser.seriesTotal} series`,
    data: ser.result.map(res => ({
      x: res.chartsTotal,
      y: _.sum(res.loadTime)
    }))
  }));
  options.series = seriesData;
  $('#box').highcharts(options);
});