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
      tooltip: {
        trigger: 'item',
        formatter: '{b}'
      },
      series: [
        {
          name: '中国',
          type: 'map',
          mapType: 'china',
          selectedMode : 'multiple',
          label: {
            normal: {
              show: true
            },
            emphasis: {
              show: true
            }
          },
          data:[
            {name:'广东', selected:true}
          ]
        }
      ]
    }
  };

  // 启动地图组件
  utils.init(map);

});
