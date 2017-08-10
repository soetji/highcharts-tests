const dataUrl = 'http://g01dlapp01.galileosuite.com:3000/dataPoints';

const options = {
  chart: {
    zoomType: 'x'
  },
  title: {
    text: 'Highcharts Data Points Test'
  },
  legend: {
    enabled: true
  },
  xAxis: {
    title: {
      text: 'data points total'
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
    name: `${ser.chartsTotal} charts ${ser.seriesTotal} series`,
    data: ser.result.map(res => ({
      x: res.dataPointsTotal,
      y: _.sum(res.time)
    }))
  }));
  options.series = seriesData;
  $('#box').highcharts(options);
});