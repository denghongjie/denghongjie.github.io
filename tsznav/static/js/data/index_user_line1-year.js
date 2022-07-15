const data4 = [
  { Date: '1月', name: ' 全部应用', 点击量: 3265 },
  { Date: '2月', name: ' 全部应用', 点击量: 3965 },
  { Date: '3月', name: ' 全部应用', 点击量: 4317 },
  { Date: '4月', name: ' 全部应用', 点击量: 4717 },
  { Date: '5月', name: ' 全部应用', 点击量: 5717 },
  { Date: '6月', name: ' 全部应用', 点击量: 6569 },
  { Date: '7月', name: ' 全部应用', 点击量: 7769 },
  { Date: '8月', name: ' 全部应用', 点击量: 7769 },
  { Date: '9月', name: ' 全部应用', 点击量: 7769 },
  { Date: '10月', name: ' 全部应用', 点击量: 7769 },
  { Date: '11月', name: ' 全部应用', 点击量: 7769 },
  { Date: '12月', name: ' 全部应用', 点击量: 7769 },

  { Date: '1月', name: ' 易批注', 点击量: 1800 },
  { Date: '2月', name: ' 易批注', 点击量: 2546 },
  { Date: '3月', name: ' 易批注', 点击量: 3566 },
  { Date: '4月', name: ' 易批注', 点击量: 3777 },
  { Date: '5月', name: ' 易批注', 点击量: 4569 },
  { Date: '6月', name: ' 易批注', 点击量: 5236 },
  { Date: '7月', name: ' 易批注', 点击量: 6233 },
  { Date: '8月', name: ' 易批注', 点击量: 6233 },
  { Date: '9月', name: ' 易批注', 点击量: 6233 },
  { Date: '10月', name: ' 易批注', 点击量: 6233 },
  { Date: '11月', name: ' 易批注', 点击量: 6233 },
  { Date: '12月', name: ' 易批注', 点击量: 6233 },

  { Date: '1月', name: ' 校审云授权', 点击量: 524 },
  { Date: '2月', name: ' 校审云授权', 点击量: 700 },
  { Date: '3月', name: ' 校审云授权', 点击量: 352 },
  { Date: '4月', name: ' 校审云授权', 点击量: 400 },
  { Date: '5月', name: ' 校审云授权', 点击量: 1000 },
  { Date: '6月', name: ' 校审云授权', 点击量: 852 },
  { Date: '7月', name: ' 校审云授权', 点击量: 1200 },
  { Date: '8月', name: ' 校审云授权', 点击量: 1200 },
  { Date: '9月', name: ' 校审云授权', 点击量: 1200 },
  { Date: '10月', name: ' 校审云授权', 点击量: 1200 },
  { Date: '11月', name: ' 校审云授权', 点击量: 1200 },
  { Date: '12月', name: ' 校审云授权', 点击量: 1200 },
];


const linePlot4 = new G2Plot.Line('index_user_line1-year', {
  data:data4,
  xField: 'Date',
  yField: '点击量',
  seriesField: 'name',
  yAxis: {
    label: {
      // formatter: (v) => `${(v / 10e8).toFixed(1)} 亿次`,
    },
  },
  legend: {
    position: 'top',
  },
  point :{
    shape: 'circle'
  },
  // smooth: true,
  // 配置折线趋势填充
  // area: {
  //   style: {
  //     fillOpacity: 0.15,
  //   },
  // },
  // animation: {
  //   appear: {
  //     animation: 'wave-in',
  //     duration: 3000,
  //   },
  // },
});

linePlot4.render();






