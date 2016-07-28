$(function(){
  var utils = {
    init: function(item) {
      var chart = echarts.init(document.getElementById(item.id));
      chart.setOption(item.option);
    }
  };

  // 地图组件
  var map = {
    id: 'chart_maps',
    option: {
      title : {
        text: '美食地图',
        subtext: '店铺分布图',
        left: 'center',
        textStyle : {
          color: '#fff'
        }
      },
      backgroundColor: '#954040',
      tooltip: {
        trigger: 'item',
        formatter: '{b}'
      },
      series: [
        {
          zoom: 1,
          // center: [117.472644, 31.231706],
          name: '中国',
          type: 'map',
          mapType: 'china',
          selectedMode : 'multiple',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#d35b5a',
              borderColor: '#f78f58'
            },
            emphasis: {
              areaColor: '#ffbb8c'
            }
          },
          markPoint : {
              symbol :'pin',
              symbolSize: 30,
              label:{
                normal : {
                  show : true,
                  formatter: '{b}'
                }
              },
              itemStyle : {},
              data: [{
                name: '刀小蛮云南米线(万达店)',
                coord: [116.232438,39.911831]
              }],
          }
        }
      ]
    }
  };

  // 启动地图组件
  utils.init(map);

});
