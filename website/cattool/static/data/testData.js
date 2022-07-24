const userTypes=[
    {
        value: '选项1',
        label: '全部用户'
      }, {
        value: '选项2',
        label: '公海'
      }, {
        value: '选项3',
        label: '正式企业'
      }, {
        value: '选项4',
        label: '试用企业'
      }
  ]
  const userOpts=[
    {
        value: '选项1',
        label: '全部用户'
      }, {
        value: '选项2',
        label: '李小管'
      }, {
        value: '选项3',
        label: '张小管'
      }, {
        value: '选项4',
        label: '王小管'
      }
  ]
  
  const companyTypes=[
    {
        value: '选项1',
        label: '全部企业'
      }, {
        value: '选项2',
        label: '试用企业'
      }, {
        value: '选项3',
        label: '正式企业'
      }
  ]
  const province=[
    {
        value: '选项1',
        label: '全部'
      }, {
        value: '选项2',
        label: '北京'
      }, {
        value: '选项3',
        label: '辽宁'
      }, {
        value: '选项4',
        label: '青海'
      }, {
        value: '选项5',
        label: '山东'
      }, {
        value: '选项6',
        label: '江西'
      }
  ]
  
  const liverOpt=[
    {
        value: '选项1',
        label: '近30天活跃'
      }, {
        value: '选项2',
        label: '近1天有点击'
      }, {
        value: '选项3',
        label: '近7天有点击'
      }
  ]
  
  const appOpts=[
    {
        value: '选项1',
        label: '全部应用'
      }, {
        value: '选项2',
        label: 'TSDP校审软件'
      }, {
        value: '选项3',
        label: '易打印'
      }, {
        value: '选项4',
        label: '易批注'
      }, {
        value: '选项5',
        label: 'TSSD'
      }
  ]
  const majorOpts=[
    {
        value: '选项1',
        label: '全部专业'
      }, {
        value: '选项2',
        label: '建筑'
      }, {
        value: '选项3',
        label: '结构'
      }, {
        value: '选项4',
        label: '给排水'
      }, {
        value: '选项5',
        label: '暖通'
      }, {
        value: '选项6',
        label: '电气'
      }
  ]
  const visionOpts=[
    {
        value: '选项1',
        label: '全部版本'
      }, {
        value: '选项2',
        label: 'v1.1'
      }, {
        value: '选项3',
        label: 'v1.2'
      }, {
        value: '选项4',
        label: 'v1.3'
      }
  ]
  
  const ascconpanyOpts=[{
      value: '选项1',
      label: '按名称升序'
    }, {
      value: '选项2',
      label: '按点击量降序'
    }, {
      value: '选项3',
      label: '按审查总量降序'
    }, {
      value: '选项4',
      label: '按强条降序'
  }]
  
  const selectcompanyOpts=[{
    value: '选项1',
    label: '全部企业'
  }, {
    value: '选项2',
    label: '北京探索者软件股份有限公司'
  }, {
    value: '选项3',
    label: '北京建筑设计院有限公司'
  }]
  const selectSalorOpts=[{
    value: '选项1',
    label: '全部销售'
  }, {
    value: '选项2',
    label: '王宇'
  }, {
    value: '选项3',
    label: '王凯'
  }, {
    value: '选项3',
    label: '奇骏'
  }]
  // 审查总量项
  const selectproinfoOpts=[{
    value: '选项1',
    label: '全部'
  }, {
    value: '选项2',
    label: '北京商业一期'
  }, {
    value: '选项3',
    label: '北京商业二期'
  }]
  const selectchildinfoOpts=[{
    value: '选项1',
    label: '全部'
  }, {
    value: '选项2',
    label: '1#一单元'
  }, {
    value: '选项3',
    label: '1#二单元'
  }, {
    value: '选项4',
    label: '1#三单元'
  }]
  const selectcheckOpts=[{
    value: '选项1',
    label: '全部'
  }, {
    value: '选项2',
    label: '墙'
  }, {
    value: '选项3',
    label: '梁'
  }, {
    value: '选项3',
    label: '板'
  }, {
    value: '选项4',
    label: '柱'
  }]
  const selectchecktypeOpts=[{
    value: '选项1',
    label: '全部'
  }, {
    value: '选项2',
    label: '类型1'
  }, {
    value: '选项3',
    label: '类型2'
  }, {
    value: '选项3',
    label: '类型3'
  }, {
    value: '选项4',
    label: '类型4'
  }]
  const selectcheckclassOpts=[{
    value: '选项1',
    label: '全部'
  }, {
    value: '选项2',
    label: '强条'
  }, {
    value: '选项3',
    label: '不应'
  }, {
    value: '选项3',
    label: '不宜'
  }]
  const selectcheckresultOpts=[{
    value: '选项1',
    label: '全部'
  }, {
    value: '选项2',
    label: '通过'
  }, {
    value: '选项3',
    label: '未通过'
  }, {
    value: '选项3',
    label: '未识别'
  }, {
    value: '选项3',
    label: '配筋过大'
  }]
  const selectcheckpeopleOpts=[{
    value: '选项1',
    label: '全部'
  }, {
    value: '选项2',
    label: '李小管'
  }, {
    value: '选项3',
    label: '赵小管'
  }, {
    value: '选项4',
    label: '孙小管'
  }, {
    value: '选项5',
    label: '吴小管'
  }]
  
  // 飞传
  const senderOpts=[{
    value: '选项1',
    label: '全部'
  }, {
    value: '选项2',
    label: '李小管'
  }, {
    value: '选项3',
    label: '赵小管'
  }, {
    value: '选项4',
    label: '孙小管'
  }, {
    value: '选项5',
    label: '吴小管'
  }]
  
  const receiverOpts=[{
    value: '选项1',
    label: '全部'
  }, {
    value: '选项2',
    label: '张大帅'
  }, {
    value: '选项3',
    label: '赵小管'
  }, {
    value: '选项4',
    label: '孙小管'
  }, {
    value: '选项5',
    label: '吴小管'
  }]
  
  
  
  const condOpts=[
    {
        value: '选项1',
        label: '全部命令'
      }, {
        value: '选项2',
        label: '批注飞传'
      }, {
        value: '选项3',
        label: '梁校审'
      }, {
        value: '选项4',
        label: '柱校审'
      }
  ]
  
  const userData=[{
    type:1,   //
    uName:'王晓丽',
    uphone:'12233623562',
    company:'',
    registDate:'2020/5/12',
    authEndDate:'2022/5/12',
    state:1,
    ip:'192.168.2.23',
    province:'天津',
    appName:'易批注',
    comandName:'批注飞传',
    comandCode:'CNDY',
    clickNum:'523',
  },{
    type:1,   //
    uName:'赵飞',
    uphone:'12233623562',
    company:'',
    registDate:'2020/2/15',
    authEndDate:'2022/9/11',
    state:1,
    ip:'192.125.3.33',
    province:'辽宁',
    appName:'易批注',
    comandName:'批注飞传',
    comandCode:'NFCB',
    clickNum:'125',
  },{
    type:2,   //
    uName:'张二林',
    uphone:'12233623562',
    company:'东北院',
    registDate:'2020/5/12',
    authEndDate:'2022/5/12',
    state:1,
    ip:'192.168.2.23',
    province:'吉林',
    appName:'易批注',
    comandName:'批注飞传',
    comandCode:'WBFC',
    clickNum:'5230',
  },{
    type:2,   //
    uName:'张大力',
    uphone:'18656596566',
    company:'北京院',
    registDate:'2020/5/12',
    authEndDate:'2022/5/12',
    state:1,
    ip:'223.234.168.204',
    province:'北京',
    appName:'易批注',
    comandName:'批注飞传',
    comandCode:'WYFC',
    clickNum:'1258',
  }]
  const companyData=[{
    cName:'中南建筑设计院股份有限公司',
    sortName:'中南院',
    cNum:'159',
    cType:0,   //1 正式用户   0试用用户
    cNote:'300',
    cAutEndDate:'2022/12/12',
    cState:1,   //1 授权   0 未授权
    cProvince:'湖北',
  },{
    cName:'深圳市建筑设计研究总院',
    sortName:'深圳总院',
    cNum:'854',
    cType:1,   //1 正式用户   0试用用户
    cNote:'1000',
    cAutEndDate:'2023/12/1',
    cState:1,   //1 授权   0 未授权
    cProvince:'广东',
  },{
    cName:'安徽寰宇建筑设计院',
    sortName:'寰宇院',
    cNum:'125',
    cType:0,   //1 正式用户   0试用用户
    cNote:'200',
    cAutEndDate:'2021/8/13',
    cState:0,   //1 授权   0 未授权
    cProvince:'安徽',
  }]
  const majorTable=[{
    major:"结构",
    title:"建筑高层设计规范",
    content:"不满足3.1.2要求增加加强构件",
    namber:"100",
  },{
    major:"结构",
    title:"建筑高层设计规范",
    content:"不满足3.1.2要求增加加强构件",
    namber:"70",
  },{
    major:"建筑",
    title:"建筑高层设计规范",
    content:"不满足3.1.2要求增加加强构件",
    namber:"50",
  },{
    major:"给排水",
    title:"建筑高层设计规范",
    content:"不满足3.1.2要求增加加强构件",
    namber:"44",
  },{
    major:"电气",
    title:"建筑高层设计规范",
    content:"不满足3.1.2要求增加加强构件",
    namber:"22",
  },{
    major:"建筑",
    title:"建筑高层设计规范",
    content:"不满足3.1.2要求增加加强构件",
    namber:"123",
  },{
    major:"给排水",
    title:"建筑高层设计规范",
    content:"不满足3.1.2要求增加加强构件",
    namber:"100",
  },{
    major:"结构",
    title:"建筑高层设计规范",
    content:"不满足3.1.2要求增加加强构件",
    namber:"245",
  },{
    major:"结构",
    title:"建筑高层设计规范",
    content:"不满足3.1.2要求增加加强构件",
    namber:"222",
  },{
    major:"结构",
    title:"建筑高层设计规范",
    content:"不满足3.1.2要求增加加强构件",
    namber:"45",
  },{
    major:"结构",
    title:"建筑高层设计规范",
    content:"不满足3.1.2要求增加加强构件",
    namber:"32",
  },{
    major:"结构",
    title:"建筑高层设计规范",
    content:"不满足3.1.2要求增加加强构件",
    namber:"44",
  }]
  
  const tsdpCompany=[{
    name:"北京探索者软件股份有限公司",
    area:"北京",
    saler:[{
      name:"王宇"
    }],
    usernum:"20",
    tsdpauthNum:"15",
    proInfoNum:"0",
    fileInfoNum:"150",
    dwgInfoNum:"200",
    sendTimes:"50",
    strongBarNum:"100",
    checkTotalNum:"200",
    clickTotalNum:"1000",
    lastClickTime:"2022-06-14 12:30",
    lastClickuser:"李小管"
  },{
    name:"北京建筑设计院有限公司",
    area:"北京",
    saler:[{
      name:"刘启月"
    }],
    usernum:"100",
    tsdpauthNum:"30",
    proInfoNum:"2",
    fileInfoNum:"200",
    dwgInfoNum:"300",
    sendTimes:"20",
    strongBarNum:"50",
    checkTotalNum:"100",
    clickTotalNum:"2000",
    lastClickTime:"2022-06-14 12:30",
    lastClickuser:"李小管"
  }]
  const tsdpMyCompany=[{
    name:"北京探索者软件",
    area:"北京",
    saler:[{
      name:"王宇"
    }],
    usernum:"20",
    tsdpauthNum:"15",
    proInfoNum:"0",
    fileInfoNum:"150",
    dwgInfoNum:"200",
    sendTimes:"50",
    strongBarNum:"100",
    checkTotalNum:"200",
    clickTotalNum:"1000",
    lastClickTime:"2022-06-14 12:30",
    lastClickuser:"李小管"
  },{
    name:"北京建筑设计院有限公司",
    area:"北京",
    saler:[],
    usernum:"100",
    tsdpauthNum:"30",
    proInfoNum:"2",
    fileInfoNum:"200",
    dwgInfoNum:"300",
    sendTimes:"20",
    strongBarNum:"50",
    checkTotalNum:"100",
    clickTotalNum:"2000",
    lastClickTime:"2022-06-14 12:30",
    lastClickuser:"13900010012"
  }]
  // 审查总量表
  const totalTable=[{
    title:"北京商业项目一期",
    childname:"1#一单元",
    checkitem:"梁",
    checktype:"json校核类型",
    fileName:"北京商业项目一期施工图纸.pdf",
    drawName:"北京商业项目一期施工图纸.dwg",
    subunit:"json构件名称",
    checkcontent:"json详细内容",
    checkclassfly:"强条",
    checkresult:"通过",
    checktime:"2022/06/08 16:24:26",
    checker:"李晓管",
  },{
    title:"北京商业项目一期",
    childname:"1#一单元",
    checkitem:"板",
    checktype:"json校核类型",
    fileName:"北京商业项目一期施工图纸.pdf",
    drawName:"北京商业项目一期施工图纸.dwg",
    subunit:"json构件名称",
    checkcontent:"json详细内容",
    checkclassfly:"不应",
    checkresult:"通过",
    checktime:"2022/06/08 16:24:26",
    checker:"李晓管",
  },{
    title:"北京商业项目一期",
    childname:"1#一单元",
    checkitem:"柱",
    checktype:"json校核类型",
    fileName:"北京商业项目一期施工图纸.pdf",
    drawName:"北京商业项目一期施工图纸.dwg",
    subunit:"json构件名称",
    checkcontent:"json详细内容",
    checkclassfly:"不宜",
    checkresult:"未识别",
    checktime:"2022/06/08 16:24:26",
    checker:"李晓管",
  },{
    title:"北京商业项目一期",
    childname:"1#一单元",
    checkitem:"墙",
    checktype:"json校核类型",
    fileName:"北京商业项目一期施工图纸.pdf",
    drawName:"北京商业项目一期施工图纸.dwg",
    subunit:"json构件名称",
    checkcontent:"json详细内容",
    checkclassfly:"",
    checkresult:"配筋过大",
    checktime:"2022/06/08 16:24:26",
    checker:"李晓管",
  }]
  const clicktable=[{
    name:"李小管",
    appName:"TSDP校审软件",
    functionName:"AAJSKDL",
    optContent:"修改abc为cdf",
    optTime:"2022-6-14 12:30",
    ip:"123.212.235.211",
    clickNum:"125"
  },{
    name:"李小管",
    appName:"TSDP校审软件",
    functionName:"NNYSDK",
    optContent:"删除NO854248#墙板",
    optTime:"2022-6-14 12:30",
    ip:"123.212.235.211",
    clickNum:"75"
  },{
    name:"18545435457",
    appName:"TSDP校审软件",
    functionName:"AUMYTRB",
    optContent:"查询'墙'",
    optTime:"2022-6-14 12:30",
    ip:"123.212.235.211",
    clickNum:"100"
  }]
  const allusertable=[{
    name:"李小管",
    proNum:"2",
    childinfo:"5",
    fileInfoNum:"5",
    dwgInfoNum:"10",
    sendTimes:"20",
    strongBarNum:"50",
    checkTotalNum:"100",
    clickTotalNum:"2000",
    lastClickTime:"2022-06-14 12:30"
  },{
    name:"赵小管",
    proNum:"2",
    childinfo:"5",
    fileInfoNum:"5",
    dwgInfoNum:"10",
    sendTimes:"20",
    strongBarNum:"50",
    checkTotalNum:"100",
    clickTotalNum:"2000",
    lastClickTime:"2022-06-14 12:30"
  },{
    name:"钱小管",
    proNum:"2",
    childinfo:"5",
    fileInfoNum:"5",
    dwgInfoNum:"10",
    sendTimes:"20",
    strongBarNum:"50",
    checkTotalNum:"100",
    clickTotalNum:"2000",
    lastClickTime:"2022-06-14 12:30"
  },{
    name:"孙小管",
    proNum:"2",
    childinfo:"5",
    fileInfoNum:"5",
    dwgInfoNum:"10",
    sendTimes:"20",
    strongBarNum:"50",
    checkTotalNum:"100",
    clickTotalNum:"2000",
    lastClickTime:"2022-06-14 12:30"
  },{
    name:"李小管",
    proNum:"2",
    childinfo:"5",
    fileInfoNum:"5",
    dwgInfoNum:"10",
    sendTimes:"20",
    strongBarNum:"50",
    checkTotalNum:"100",
    clickTotalNum:"2000",
    lastClickTime:"2022-06-14 12:30"
  },{
    name:"周小管",
    proNum:"2",
    childinfo:"5",
    fileInfoNum:"5",
    dwgInfoNum:"10",
    sendTimes:"20",
    strongBarNum:"50",
    checkTotalNum:"100",
    clickTotalNum:"2000",
    lastClickTime:"2022-06-14 12:30"
  },{
    name:"吴小管",
    proNum:"2",
    childinfo:"5",
    fileInfoNum:"5",
    dwgInfoNum:"10",
    sendTimes:"20",
    strongBarNum:"50",
    checkTotalNum:"100",
    clickTotalNum:"2000",
    lastClickTime:"2022-06-14 12:30"
  },{
    name:"郑小管",
    proNum:"2",
    childinfo:"5",
    fileInfoNum:"5",
    dwgInfoNum:"10",
    sendTimes:"20",
    strongBarNum:"50",
    checkTotalNum:"100",
    clickTotalNum:"2000",
    lastClickTime:"2022-06-14 12:30"
  },{
    name:"王小管",
    proNum:"2",
    childinfo:"5",
    fileInfoNum:"5",
    dwgInfoNum:"10",
    sendTimes:"20",
    strongBarNum:"50",
    checkTotalNum:"100",
    clickTotalNum:"2000",
    lastClickTime:"2022-06-14 12:30"
  },{
    name:"冯小管",
    proNum:"2",
    childinfo:"5",
    fileInfoNum:"5",
    dwgInfoNum:"10",
    sendTimes:"20",
    strongBarNum:"50",
    checkTotalNum:"100",
    clickTotalNum:"2000",
    lastClickTime:"2022-06-14 12:30"
  }]
  
  const allprotable=[{
    name:"北京商业项目一期",
    childinfo:"2",
    aboutpeople:"5",
    fileInfoNum:"5",
    dwgInfoNum:"10",
    sendTimes:"20",
    strongBarNum:"50",
    checkTotalNum:"100",
    clickTotalNum:"2000",
    lastClickTime:"2022-06-14 12:30"
  },{
    name:"北京商业项目二期",
    childinfo:"2",
    aboutpeople:"2",
    fileInfoNum:"5",
    dwgInfoNum:"10",
    sendTimes:"20",
    strongBarNum:"50",
    checkTotalNum:"100",
    clickTotalNum:"2000",
    lastClickTime:"2022-06-14 12:30"
  }]
  
  const allsendtable=[{
    sendname:"李小管",
    receivname:"张大师",
    proname:"北京商业项目一期",
    childname:"",
    major:"建筑",
    filename:"建筑一层平面图.dwg",
    markname:"不满足建筑3.2.1诡诞要求",
    otherinfo:"这里需要修改",
    time:"2022-06-14 12:30",
    scene:"",
  },{
    sendname:"李小管",
    receivname:"张大师",
    proname:"北京商业项目一期",
    childname:"",
    major:"建筑",
    filename:"建筑一层平面图.dwg",
    markname:"不满足建筑3.2.1诡诞要求1诡诞要求1诡诞要求1诡诞要求1诡诞要求1诡诞要求1诡诞要求1诡诞要求1诡诞要求1诡诞要求1诡诞要求1诡诞要求1诡诞要求1诡诞要求1诡诞要求1诡诞要求1诡诞要求1诡诞要求",
    otherinfo:"这里需要修改",
    time:"2022-06-14 12:30",
    scene:"",
  }]
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  const armdata=[{
    companyarm:{
      companytotal:'1268',
      betweenComNum:'888',
      isVipComNum:'755',
      payRate:'60%',
      todayComNum:'12'
    },
    userarm:{
      allusers:'125621',
      betweenUsersNum:'85642',
      liverUserNum:'90023',
      liveRate:'72%',
      todayUserNum:'3251',
    },
    apparm:{
      appAllclick:'215亿次',
      todayAppclick:'231万次',
      mounthAppClick:'7850万次',
      quarterAppClick:'2亿次',
      yearAppClick:'8亿次',
      companysClick:'132亿次',
      usersClick:'83亿次',
      appNum:'42'
    }
  }]
  const armdata2=[{
    companyarm:{
      companytotal:'1268',
      betweenComNum:'888',
      isVipComNum:'755',
      payRate:'60%',
      todayComNum:'12'
    },
    userarm:{
      allusers:'125621',
      betweenUsersNum:'85642',
      liverUserNum:'90023',
      liveRate:'72%',
      todayUserNum:'3251',
    },
    apparm:{
      appAllclick:'215亿次',
      todayAppclick:'231万次',
      mounthAppClick:'7850万次',
      quarterAppClick:'2亿次',
      yearAppClick:'8亿次',
      companysClick:'132亿次',
      usersClick:'83亿次',
      appNum:'42'
    }
  }]
  
  const partners=[{
          name:"北京探索者软件",
          username:'张晓华',
          province:'北京',
          city:'海淀区',
          date:'2022/05/06',
          app:'易打软件',
          clickTotal:'25万',
          srcImg:"./imgs/logo_a.png"
      },{
          name:"上海环球",
          username:'张晓华2',
          province:'上海',
          city:'宝山区',
          date:'2022/05/05',
          app:'易批注',
          clickTotal:'25万',
          srcImg:"./imgs/TSZ.png"
      },{
          name:"深圳市建筑设计研究总院",
          username:'张晓华3',
          province:'广州',
          city:'深圳市',
          date:'2022/05/04',
          app:'易签章',
          clickTotal:'25万',
          srcImg:"./imgs/logo_a.png"
      },{
          name:"河北设计院",
          username:'张晓华4',
          province:'河北',
          city:'石家庄市',
          date:'2022/05/03',
          app:'易协同',
          clickTotal:'25万',
          srcImg:"./imgs/logo_a.png"
      },{
          name:"河南设计院",
          username:'张晓华5',
          province:'河南',
          city:'郑州市',
          date:'2022/05/02',
          app:'TSSD',
          clickTotal:'25万',
          srcImg:"./imgs/TSZ.png"
      },{
          name:"太原建筑设计院",
          username:'张晓华',
          province:'山西',
          city:'太原市',
          date:'2022/05/01',
          app:'TS3D',
          clickTotal:'25万',
          srcImg:"./imgs/logo_a.png"
      }
  ]
  const mapoptions=[
      {
          value: '选项1',
          label: '企业分布总览'
        }, {
          value: '选项2',
          label: '付费企业分布'
        }, {
          value: '选项3',
          label: '新增企业分布'
        }, {
          value: '选项4',
          label: '新增付费企业分布'
        }
  ]
  const sortType=[
    {
        value: 'a',
        label: '按日期统计'
      }, {
        value: 'b',
        label: '按应用统计'
      }, {
        value: 'c',
        label: '按省份统计'
      }
  ]
  const sortType2=[
     {
        value: 'a',
        label: '按应用统计'
      }, {
        value: 'b',
        label: '按省份统计'
      }
  ]
  const sortType3=[
    {
       value: 'b',
       label: '按日期统计'
     }, {
       value: 'a',
       label: '按企业统计'
     }
  ]
  const useropts=[
      {
          value: '选项1',
          label: '全部用户分布'
        }, {
          value: '选项2',
          label: '公海用户分布'
        }, {
          value: '选项3',
          label: '企业用户分布'
        }, {
          value: '选项4',
          label: '新增全部用户分布'
        }, {
          value: '选项5',
          label: '新增公海用户分布'
        }, {
          value: '选项6',
          label: '新增企业用户分布'
        }
  ]
  const usetyperopts=[
    {
        value: '选项1',
        label: '全部'
      }, {
        value: '选项2',
        label: '公海'
      }, {
        value: '选项3',
        label: '企业'
      }
  ]
  const provinceoptions=[{
      value: '选项1',
      label: '全部'
    }, {
      value: '选项2',
      label: '北京'
    }, {
      value: '选项3',
      label: '上海'
    }, {
      value: '选项4',
      label: '天津'
    }]
  const cityoptions=[{
      value: '选项1',
      label: '全部'
    }, {
      value: '选项2',
      label: '安阳市'
    }, {
      value: '选项3',
      label: '沧州市'
    }, {
      value: '选项4',
      label: '霸州市'
    }]
  const payoptions=[{
      value: '选项1',
      label: '全部'
    }, {
      value: '选项2',
      label: '付费'
    }, {
      value: '选项2',
      label: '收费'
    }]
  const appoptions=[{
      value: '选项1',
      label: '全部'
    }, {
      value: '选项2',
      label: '易打印'
    }, {
      value: '选项3',
      label: '易签章'
    }, {
      value: '选项4',
      label: '易批注'
    }]
  const appoptions2=[{
      value: '选项1',
      label: 'TSSD'
    }, {
      value: '选项2',
      label: '易打印'
    }, {
      value: '选项3',
      label: '易签章'
    }, {
      value: '选项4',
      label: '易批注'
    }]
  const useroptions=[{
      date:'2022/04/18',
      name:'李雨薇',
      phone:'18685455435',
      iscompany:true,
      province:'北京',
      city:'海淀区',
      apps:[{
          name:"易打印"
      },{
          name:"易批注"
      }]
  },{
      date:'2022/04/18',
      name:'詹小虎',
      phone:'18685455425',
      iscompany:false,
      province:'北京',
      city:'海淀区',
      apps:[{
          name:"易打印"
      }]
  },
  {
      date:'2022/04/18',
      name:'林达',
      phone:'18685455466',
      iscompany:true,
      province:'北京',
      city:'海淀区',
      apps:[{
          name:"易打印"
      }]
  },{
      date:'2022/04/18',
      name:'邱谷渠',
      phone:'18685455425',
      iscompany:true,
      province:'北京',
      city:'海淀区',
      apps:[{
          name:"易打印"
      }]
  },{
      date:'2022/04/18',
      name:'白大奇',
      phone:'18685455439',
      iscompany:true,
      province:'北京',
      city:'海淀区',
      apps:[{
          name:"易打印"
      }]
  }]
  const companydata=[{
      date:"2021-05-06",
      name:"深圳设计院",
      isVip:true,
      peoplenum:"459",
      province:"广东",
      city:"深圳",
      apps:[{
          name:"易批注"
      },{
          name:"易打印"
      },{
          name:"易签章"
      }],
  },{
      date:"2018-11-06",
      name:"郑州设计院",
      isVip:true,
      peoplenum:"459",
      province:"河南",
      city:"郑州",
      apps:[{
          name:"易打印"
      },{
          name:"易签章"
      }],
  },{
      date:"2021-04-06",
      name:"西北市政设计院",
      isVip:true,
      peoplenum:"459",
      province:"甘肃",
      city:"兰州",
      apps:[{
          name:"易批注"
      }],
  }]
  const appsdata=[{
      date:"2022/05/21",
      name:"易批注", 
      companyName:"公海",
      clickTotal:"235万次" 
  },{
      date:"2022/05/01",
      name:"易打印", 
      companyName:"南京设计院",
      clickTotal:"5563万次" 
  }]
  