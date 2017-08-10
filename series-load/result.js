const dataUrl = 'http://g01dlapp01.galileosuite.com:3000/series';

const options = {
  chart: {
    zoomType: 'x'
  },
  title: {
    text: 'Highcharts Series Test'
  },
  legend: {
    enabled: true
  },
  xAxis: {
    title: {
      text: 'series total'
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
    name: `${ser.chartsTotal} charts ${ser.dataPointsTotal} data points`,
    data: ser.result.map(res => ({
      x: res.seriesTotal,
      y: _.sum(res.time)
    }))
  }));
  options.series = seriesData;
  $('#box').highcharts(options);
});