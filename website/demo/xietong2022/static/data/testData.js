const ProLists=[{
  role:'1',   //1 院领导  2负责人  3设计师
  name:'北京嘉豪国际A座-一期',
  Idnumber:'TSZPRO20220906102737',
  type:'公共建筑',
  responsiblor:'李小华',
  childItem:[{
    name:'1号楼'
  },{
    name:'2号楼'
  },{
    name:'3号楼'
  }],
  member:'4',
  buildunit:'河北电力设计院',
  unit:'设计一部',
  mater:[{},{},{},{}],
  totalMoney:'200000',
  recevieMoney:'80000',
  state:1,    //1进行 2归档 3关闭
},{
  role:'2',   //1 院领导  2负责人  3设计师
  name:'嘉豪时代阳光城-一期',
  Idnumber:'TSZPRO20220906102736',
  type:'住宅',
  responsiblor:'李小华',
  childItem:[{
    name:'1号楼'
  },{
    name:'2号楼'
  },{
    name:'3号楼'
  }],
  member:'10',
  buildunit:'北京市政',
  unit:'建筑一部',
  mater:[{},{},{},{},{},{}],
  totalMoney:'100000',
  recevieMoney:'80000',
  state:2,    //1进行 2归档 3关闭
},{
  role:'3',   //1 院领导  2负责人  3设计师
  name:'新新大学博物馆-一期',
  Idnumber:'TSZPRO20220906102735',
  type:'学校',
  responsiblor:'李小华',
  member:'20',
  childItem:[{
    name:'1号楼'
  },{
    name:'2号楼'
  },{
    name:'3号楼'
  }],
  buildunit:'西北市政设计院',
  unit:'电力一部',
  mater:[{}],
  totalMoney:'160000',
  recevieMoney:'90000',
  state:3,    //1进行 2归档 3关闭
}]

const activitiesData=[{
  size: 'large',
  color: '#0bbd87',
  type: 'primary',
  icon:'Select',
  name:'提供报审图',
  amount:'30',
  remark:'1号楼',
  responsiblor:'李小华',
  endtime:'2022/07/01',
  tasknumber:'C1-项目编号-20220901',
  state:1,
},
{
  size: 'large',
  color:'#ff3535',
  type: 'primary',
  icon:'WarningFilled',
  name:'提供报审图',
  amount:'30',
  remark:'1号楼',
  responsiblor:'李小华',
  endtime:'2022/07/01',
  tasknumber:'C1-项目编号-20220901',
  state:2,
},
{
  size: 'large',
  type: 'info',
  icon:'QuestionFilled',
  name:'提供报审图',
  amount:'30',
  remark:'2号楼',
  responsiblor:'李小华',
  endtime:'2022/07/01',
  tasknumber:'C1-项目编号-20220901',
  state:3,
},
{
  size: 'large',
  color:'#ff3535',
  type: 'primary',
  icon:'WarningFilled',
  name:'提供报审图',
  amount:'30',
  remark:'1号楼',
  responsiblor:'李小华',
  endtime:'2022/07/01',
  tasknumber:'C1-项目编号-20220901',
  state:2,
},
{
  size: 'large',
  type: 'info',
  icon:'QuestionFilled',
  name:'提供报审图',
  amount:'30',
  remark:'2号楼',
  responsiblor:'李小华',
  endtime:'2022/07/01',
  tasknumber:'C1-项目编号-20220901',
  state:3,
},
{
  size: 'large',
  color:'#ff3535',
  type: 'primary',
  icon:'WarningFilled',
  name:'提供报审图',
  amount:'30',
  remark:'1号楼',
  responsiblor:'李小华',
  endtime:'2022/07/01',
  tasknumber:'C1-项目编号-20220901',
  state:2,
},
{
  size: 'large',
  type: 'info',
  icon:'QuestionFilled',
  name:'提供报审图',
  amount:'30',
  remark:'2号楼',
  responsiblor:'李小华',
  endtime:'2022/07/01',
  tasknumber:'C1-项目编号-20220901',
  state:3,
},
{
  size: 'large',
  color:'#ff3535',
  type: 'primary',
  icon:'WarningFilled',
  name:'提供报审图',
  amount:'30',
  remark:'1号楼',
  responsiblor:'李小华',
  endtime:'2022/07/01',
  tasknumber:'C1-项目编号-20220901',
  state:2,
},
{
  size: 'large',
  type: 'info',
  icon:'QuestionFilled',
  name:'提供报审图',
  amount:'30',
  remark:'2号楼',
  responsiblor:'李小华',
  endtime:'2022/07/01',
  tasknumber:'C1-项目编号-20220901',
  state:3,
}]

const DesignData=[{
  size: 'large',
  color: '#0bbd87',
  type: 'primary',
  icon:'Select',
  name:'提供报审图',
  amount:'30',
  remark:'1号楼',
  responsiblor:'李小华、李磊',
  endtime:'2022/07/01',
  tasknumber:'C1-项目编号-20220901',
  state:1,
},
{
  size: 'large',
  color:'#ff3535',
  type: 'primary',
  icon:'WarnTriangleFilled',
  name:'提供报审图',
  amount:'30',
  remark:'1号楼',
  responsiblor:'李小华、李磊',
  endtime:'2022/07/01',
  tasknumber:'C1-项目编号-20220901',
  state:2,
},
{
  size: 'large',
  type: 'info',
  icon:'QuestionFilled',
  name:'提供报审图',
  amount:'30',
  remark:'2号楼',
  responsiblor:'李小华、李磊',
  endtime:'2022/07/01',
  tasknumber:'C1-项目编号-20220901',
  state:3,
},
{
  size: 'large',
  type: 'info',
  icon:'QuestionFilled',
  name:'提供报审图',
  amount:'30',
  remark:'2号楼',
  responsiblor:'李小华、李磊',
  endtime:'2022/07/01',
  tasknumber:'C1-项目编号-20220901',
  state:3,
},
{
  size: 'large',
  type: 'info',
  icon:'QuestionFilled',
  name:'提供报审图',
  amount:'30',
  remark:'2号楼',
  responsiblor:'李小华、李磊',
  endtime:'2022/07/01',
  tasknumber:'C1-项目编号-20220901',
  state:3,
}]

const taskitemData=[{
  name:'提供报审图',
  amount:'35',
  remark:'3号楼',
  responsiblor:'李小华',
  endtime:'2022/7/1',
  tasknumber:'C1-项目编号-20220901',
  state:'1', //1完成  2完成超期 3未完成
},{
  name:'外审通过',
  amount:'30',
  remark:'1号楼',
  responsiblor:'李小华',
  endtime:'2022/8/1',
  tasknumber:'C1-项目编号-20220902',
  state:'2', //1完成  2完成超期 3未完成
},{
  name:'提供报审图',
  amount:'30',
  remark:'1号楼',
  responsiblor:'李小华',
  endtime:'2022/7/1',
  tasknumber:'C1-项目编号-20220901',
  state:'3', //1完成  2完成超期 3未完成
},{
  name:'外审通过',
  amount:'30',
  remark:'1号楼',
  responsiblor:'李小华',
  endtime:'2022/8/1',
  tasknumber:'C1-项目编号-20220902',
  state:'2', //1完成  2完成超期 3未完成
},{
  name:'提供报审图',
  amount:'30',
  remark:'1号楼',
  responsiblor:'李小华',
  endtime:'2022/7/1',
  tasknumber:'C1-项目编号-20220901',
  state:'3', //1完成  2完成超期 3未完成
}]

const fileList=[{
  name:"北京模方大型购物商场-1#-建筑-施工图.dwg",
  mark:"8",
  label:"建筑、结构",
  size:"500Kb",
  sendTime:"2022/05/29：14：37",
  format:"DWG",
},{
  name:"北京模方大型购物商场-1#-结构-施工图.doc",
  mark:"3",
  label:"建筑、结构",
  size:"22Kb",
  sendTime:"2022/05/29：14：37",
  format:"DOC",
},{
  name:"北京模方大型购物商场-1#-水-施工图.pdf",
  mark:"7",
  label:"给排水",
  size:"545Kb",
  sendTime:"2022/05/29：14：37",
  format:"PDF",
},{
  name:"北京模方大型购物商场-1#-暖-施工图.xml",
  mark:"2",
  label:"暖通",
  size:"2.3Mb",
  sendTime:"2022/05/29：14：37",
  format:"XML",
},{
  name:"北京模方大型购物商场-1#-电气-施工图.pdf",
  mark:"5",
  label:"电力",
  size:"300Kb",
  sendTime:"2022/05/29：14：37",
  format:"PDF",
},{
  name:"北京模方大型购物商场-2#-建筑-施工图.pdf",
  mark:"8",
  label:"建筑、结构",
  size:"500Kb",
  sendTime:"2022/05/29：14：37",
  format:"PDF",
},{
  name:"北京模方大型购物商场-2#-结构-施工图.pdf",
  mark:"3",
  label:"建筑、结构",
  size:"22Kb",
  sendTime:"2022/05/29：14：37",
  format:"PDF",
},{
  name:"北京模方大型购物商场-2#-水-施工图.pdf",
  mark:"7",
  label:"给排水",
  size:"545Kb",
  sendTime:"2022/05/29：14：37",
  format:"PDF",
},{
  name:"北京模方大型购物商场-2#-暖-施工图.pdf",
  mark:"2",
  label:"暖通",
  size:"2.3Mb",
  sendTime:"2022/05/29：14：37",
  format:"PDF",
},{
  name:"北京模方大型购物商场-2#-电气-施工图.pdf",
  mark:"5",
  label:"电力",
  size:"300Kb",
  sendTime:"2022/05/29：14：37",
  format:"PDF",
}]

const treedatas=[{
  label: '项目名称',
  icon:'my-icon-tree-mypro mytree',
  children: [{
    label: '回收站',
    icon:'my-icon-tree-hsz mytree',
  },{
    label: '项目资料',
    icon:'my-icon-tree-source mytree',
  },{
    label: '方案',
    icon:'my-icon-tree-floder mytree',
  },{
    label: '建筑',
    icon:'my-icon-tree-floder mytree',
  },{
    label: '结构',
    icon:'my-icon-tree-floder mytree',
  },{
    label: '给排水',
    icon:'my-icon-tree-floder mytree',
  },{
    label: '暖通',
    icon:'my-icon-tree-floder mytree',
  },{
    label: '电气',
    icon:'my-icon-tree-floder mytree',
  },{
    label: '协作-中心文件',
    icon:'my-icon-tree-floder mytree',
  },{
    label: '审查记录',
    icon:'my-icon-tree-floder mytree',
  },{
    label: '碰撞报告',
    icon:'my-icon-tree-floder mytree',
  },{
    label: '设计发布',
    icon:'my-icon-tree-floder mytree',
  },{
    label: '算量',
    icon:'my-icon-tree-floder mytree',
  },{
    label: '归档',
    icon:'my-icon-tree-floder mytree',
  }]
}]