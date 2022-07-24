const data2 = [
  { Date: '2022/5/3', name: ' 全部应用', 点击量: 3265 },
  { Date: '2022/5/4', name: ' 全部应用', 点击量: 3965 },
  { Date: '2022/5/5', name: ' 全部应用', 点击量: 4317 },
  { Date: '2022/5/6', name: ' 全部应用', 点击量: 4717 },
  { Date: '2022/5/7', name: ' 全部应用', 点击量: 5717 },
  { Date: '2022/5/8', name: ' 全部应用', 点击量: 6569 },
  { Date: '2022/5/9', name: ' 全部应用', 点击量: 7769 },

  { Date: '2022/5/3', name: ' 易批注', 点击量: 1800 },
  { Date: '2022/5/4', name: ' 易批注', 点击量: 2546 },
  { Date: '2022/5/5', name: ' 易批注', 点击量: 3566 },
  { Date: '2022/5/6', name: ' 易批注', 点击量: 3777 },
  { Date: '2022/5/7', name: ' 易批注', 点击量: 4569 },
  { Date: '2022/5/8', name: ' 易批注', 点击量: 5236 },
  { Date: '2022/5/9', name: ' 易批注', 点击量: 6233 },

  { Date: '2022/5/3', name: ' 校审云授权', 点击量: 524 },
  { Date: '2022/5/4', name: ' 校审云授权', 点击量: 700 },
  { Date: '2022/5/5', name: ' 校审云授权', 点击量: 352 },
  { Date: '2022/5/6', name: ' 校审云授权', 点击量: 400 },
  { Date: '2022/5/7', name: ' 校审云授权', 点击量: 1000 },
  { Date: '2022/5/8', name: ' 校审云授权', 点击量: 852 },
  { Date: '2022/5/9', name: ' 校审云授权', 点击量: 1200 },
];


const linePlot2 = new G2Plot.Line('index_user_line1-7day', {
  data:data2,
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

linePlot2.render();






