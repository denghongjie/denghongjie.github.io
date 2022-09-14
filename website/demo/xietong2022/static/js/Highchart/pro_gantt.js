

Highcharts.ganttChart('container', {
    
    title: {
        text: ''
    },
    xAxis: {
        // currentDateIndicator: true
        currentDateIndicator: false
    },
    yAxis: {
        // uniqueNames: true,
        
    },
    tooltip: {
        // dateTimeLabelFormats: {
        //     day: '%Y/%m/%d'
        // },
        pointFormat: `<h2>123</h2> <span>Rented To: {point.rentedTo}</span><br/><span>From: {point.start:%e. %b}</span><br/><span>To: {point.end:%e. %b}</span>`
    },
    navigator: {
        enabled: true,
        liveRedraw: true,
        series: {
            type: 'gantt',
            pointPlacement: 0.5,
            pointPadding: 0.25
        },
        yAxis: {
            min: 0,
            max: 3,
            reversed: true,
            categories: []
        }
    },
    scrollbar: {
        enabled: true
    },
    rangeSelector: {
        enabled: true,
        selected: 0
    },
    

    series: [{
        name: '北京项目一期',
        data: [{
            start: Date.UTC(2018, 1, 2),
            end: Date.UTC(2018, 4, 2),
            completed: 0.95,
            name: '1号楼-提资建筑提条件'
        }, {
            start: Date.UTC(2018, 1, 2),
            end: Date.UTC(2018, 11, 5),
            completed: 0.5,
            name: '1号楼-校审-其它专业回条件'
        }, {
            start: Date.UTC(2018, 11, 8),
            end: Date.UTC(2018, 11, 9),
            completed: 0.15,
            name: '1号楼-校审-发布施工图'
        }, {
            start: Date.UTC(2018, 11, 9),
            end: Date.UTC(2018, 11, 19),
            completed: {
                amount: 0.3,
                fill: '#fa0'
            },
            name: '1号楼-设计-施工图'
        }, {
            start: Date.UTC(2018, 11, 10),
            end: Date.UTC(2018, 11, 23),
            name: '1号楼-审批-施工图'
        }, {
            start: Date.UTC(2018, 11, 25, 8),
            end: Date.UTC(2018, 11, 25, 16),
            name: '1号楼-验收-施工图'
        }]
    }],
    dataLabels: {

        enabled: true

      }
});