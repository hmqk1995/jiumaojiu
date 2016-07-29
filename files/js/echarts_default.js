$(function(){
  var utils = {
    init: function(item) {
      var chart = echarts.init(document.getElementById(item.id));
      chart.setOption(item.option);
      return chart;
    },
    // 转换数据成打点标准格式
    convertData: function(data) {
        var res = [];
        for (prop in data) {
          for (item in data[prop]) {
            res.push({
              name: item,
              coord: data[prop][item]
            });
          };
        };
        console.log(res);
        return res;
    }
  };

  // 所有餐厅数据（刀小蛮、阿香、和府捞面、九毛九）
  var data = {
      dxm: {
        '刀小蛮云南米线(万达店)':[116.232438,39.911831, 42.432],
        '刀小蛮云南米线(华贸中心店)':[116.487496,39.914788, 42.835]
      },
      ax: {
        '阿香米线(卜蜂莲花店)':[116.700969,23.369061, 43.806],
        '阿香米线(奉贤大润发店)':[121.451469,30.912548, 42.494],
        '阿香米线(共和新路店)':[121.454467,31.30446, 43.454],
        '阿香米线(华润五彩城店)':[121.324188,31.317639, 42.494],
        '阿香米线(江桥万达店)':[121.330851,31.246703, 43.453],
        '阿香米线(康桥大润发店)':[121.586272,31.140301, 42.167],
        '阿香米线(平型关大润发店)':[121.473101,31.272674, 41.436],
        '阿香米线(杨高中路店)':[121.5611,31.237921, 41.201],
        '阿香米线(壹丰广场店)':[121.490046,31.2584, 42.365]
      },
      hflm: {
        '和府捞面(虹口龙之梦店)':[121.483739,31.277006, 43.098],
        '和府捞面(1788广场店)':[121.450797,31.228698, 44.201],
        '和府捞面(96广场店)':[121.531519,31.232999, 43.857],
        '和府捞面(福州路店)':[121.486656,31.238722, 42.813],
        '和府捞面(港汇店)':[121.444212,31.20122, 43.276],
        '和府捞面(虹桥机场店)':[121.487755,31.2312, 45.182],
        '和府捞面(乐虹坊店)':[121.378191,31.182642, 43.387],
        '和府捞面(南丰城店)':[121.41382,31.21293, 44.052],
        '和府捞面(浦东食品城店)':[121.52554,31.234295, 44.227
  ],
        '和府捞面(五角场店)':[121.520025,31.308938, 43.317
  ]
      },
      jmj: {
        '西面馆（肖家河店)':[116.277445,40.021216, 40.546],
        '西手工面(上地华联店)':[116.317584,40.035105, 40.875],
        '西手工面(回龙观店)':[116.317584,40.035105, 43.023],
        '西面馆(万柳华联店)':[116.301278,39.979218, 41.460],
        '西面馆(新顺南大街店)':[116.659619,40.134802, 45.033],
        '西面馆(肖家河店)':[116.277445,40.021216, 40.546],
        '西手工面(九洲新世界广场店)':[119.956254,31.771549, 42.353
  ],
        '西面馆(凯德店)':[113.750902,23.020874, 42.458],
        '西面馆(东城万达店)':[113.786601,23.042817, 42.917],
        '西手工面(华南摩尔店)':[113.733176,23.042699, 43.889],
        '西手工面(长安万达店)':[113.826978,22.814277, 42.941],
        '西面馆(东营万达店)':[118.545713,37.46333, 47.222],
        '西面馆(佛山三水店)':[112.900268,23.178639, 44.713],
        '西面馆(凯德店)':[113.147181,23.0393, 42.458],
        '西面馆(怡翠世嘉店)':[113.160513,23.017929, 43.092],
        '西面馆(嘉洲广场店)':[113.195983,23.115517, 43.333],
        '西老面馆(东方店)':[113.126747,23.04535, 43.810],
        '西面馆(铂顿城店)':[113.119685,23.032469, 42.302],
        '西面馆(德顺广场店)':[113.280145,22.833255, 44.833],
        '西面馆(天佑城店)':[113.27741,22.766398, 43.452],
        '西面馆(新都会店)':[113.130411,23.116321, 45.952],
        '西面馆(新一城店)':[113.277738,22.840939, 43.167],
        '西面馆(英皇店)':[113.123381,23.018138, 42.561],
        '西手工面(保利水城店)':[113.155025,23.068284, 43.919],
        '西手工面(金沙洲店)':[113.208554,23.146617, 41.988],
        '西手工面(南海万科店)':[113.160872,23.043421, 44.265],
        '西手工面(顺德龙江盈信店)':[113.083281,22.878034, 42.667],
        '西手工面(高德置地店)': [113.329208,23.126181, 42.410],
        '西面馆(来又来店)':[113.238983,23.403239, 41.291],
        '西面馆(黄沙店)':[113.247191,23.117298, 42.411],
        '西面馆(恒宝店)':[113.247705,23.122564, 42.830],
        '西面馆(百信广场店)':[113.267567,23.201009, 43.659],
        '西手工面(中山五路店)':[113.269895,23.131374, 42.507],
        '西面馆(光明广场店)':[113.273535,23.12905, 42.989],
        '西手工面(保利中环店)':[113.287963,23.144205, 43.299],
        '西面馆(广怡店)':[113.294646,23.140018, 42.994],
        '西面馆(天河北店)':[113.327964,23.151534, 42.674],
        '西面馆(东方宝泰店)':[113.331399,23.153497, 41.635],
        '西面馆(太阳新天地店)':[113.35027,23.129123, 42.287],
        '西面馆(马场店)':[113.350838,23.12594, 42.785],
        '西面馆(番禺万达店)':[113.35504,23.012615, 43.934],
        '西面馆(天河南店)':[113.339374,23.137403, 42.261],
        '西面馆(G5店)':[113.271677,23.186766, 42.532],
        '西面馆(奥体店)':[113.422631,23.137418, 42.309],
        '西面馆(奥园广场店)':[113.363884,22.929929, 42.944],
        '西面馆(百脑汇店)':[113.346521,23.141046, 44.487],
        '西面馆(广百新一城店)':[113.272314,23.100035, 42.807],
        '西面馆(花城汇北店)':[113.331195,23.132079, 42.014],
        '西面馆(花都华润店)':[113.216809,23.388491, 42.636],
        '西面馆(荔园新天地店)':[113.352805,22.925628, 43.369],
        '西面馆(洛溪新地店)':[113.307836,23.04879, 43.208],
        '西面馆(名盛店)':[113.276351,23.129278, 42.115],
        '西面馆(水荫店)':[113.317647,23.149546, 43.316],
        '西面馆(四季天地店)':[113.334602,23.106132, 42.740],
        '西面馆(万达店)':[113.473799,23.17515, 42.027],
        '西面馆(万国广场店)':[113.279441,23.107846, 42.536
  ],
        '西面馆(燕汇广场店)':[113.283617,23.088508, 44.651],
        '西面馆(增城万达店)':[113.821106,23.281967, 46.310],
        '西面馆(中八店)':[113.247163,23.131766, 43.246],
        '西面馆(中大轻纺城店)':[113.30261,23.093032, 42.789],
        '西面馆(中华广场店)':[113.288928,23.131676, 42.938],
        '西手工面(广州白云机场店)':[113.308369,23.392344, 41.111],
        '西手工面(佳润广场店)':[113.32719,23.186822, 43.252],
        '西手工面(龙洞店)':[113.373062,23.198833, 44.516],
        '西手工面(萝岗万达店)':[113.473799,23.17515, 45.417],
        '西手工面(天娱广场店)':[113.346521,23.141046, 45.758],
        '西手工面(同和店)':[113.333535,23.193444, 42.222],
        '西手工面(万菱汇店)':[113.336019,23.138585, 42.840],
        '西面馆(秀英店)':[ 110.293654,20.017093, 45.455],
        '西面馆(海秀旗舰店)':[110.33373,20.025531, 45.758],
        '西面馆(名门店)':[110.358839,20.028506, 43.333],
        '西手工面(白龙南路店)':[110.368475,20.035823, 41.111],
        '西面馆(国贸店)':[110.32707,20.0312, 44.348],
        '西面馆(海甸店)':[110.331918,20.067799, 40.185],
        '西面馆(望海店)':[110.351854,20.035903, 43.596],
        '西面馆(友谊店)':[110.343741,20.043503, 43.333],
        '西手工面(国秀店)':[110.383406,20.020848, 44.815],
        '西手工面(南亚广场店)':[110.358292,20.037357, 44.444],
        '西面馆(河源商业中心店)':[114.72626,23.77504, 47.667],
        '西手工面(黄石万达店)':[115.065399,30.249715, 44.762],
        '西面馆(时尚公园店)':[114.360759,23.030315, 43.333],
        '西面馆(港惠店)':[114.422956,23.074418, 40.333],
        '西面馆(华贸店)':[114.420372,23.109791, 42.342],
        '西面馆(源东大厦店)':[114.416455,23.086747, 45.417],
        '西手工面(汇悦城店)':[113.090462,22.623526, 42.444],
        '西面馆(江门万达店)':[113.091773,22.621449, 43.871],
        '西手工面(江宁万达店)':[118.793034,32.044735, 44.010],
        '西手工面(鹏欣水游城店)':[118.791586,32.029491, 44.913],
        '西手工面(新一城店)':[118.728251,32.146533, 44.841],
        '西面馆(青岛万达店)':[120.441924,36.175024, 47.500],
        '西面馆(三亚机场店)':[109.508032,18.257682, 45.000],
        '西手工面(大东海店)':[109.535572,18.228142, 42.469],
        '西手工面(国购分店)':[109.512368,18.241826, 44.000],
        '西手工面(胜利店)':[109.508266,18.257215, 43.889],
        '西手工面(金山万达店)':[121.340748,30.75992, 46.019],
        '西手工面(富通城店)':[113.862583,22.575939, 41.717],
        '西手工面(花园城店)':[113.929769,22.508372, 41.970],
        '西面馆(星河盛世店)':[114.052642,22.608427, 43.072],
        '西手工面(民治店)':[114.062079,22.623719, 42.506
  ],
        '西面馆(华强茂业店)':[114.092803,22.551615, 44.410],
        '西面馆(八号仓店)':[114.062079,22.623719, 43.507],
        '西面馆(东门茂业店)':[114.127817,22.553386, 42.732],
        '西面馆(欢乐颂店)':[113.926661,22.540808, 41.130],
        '西面馆(皇庭店)':[114.06693,22.539782, 42.661],
        '西面馆(南山海雅百货店)':[113.935927,22.524304, 45.988],
        '西面馆(沙井京基百纳店)':[113.813199,22.732785, 45.278],
        '西面馆(时代城店)':[113.874497,22.573025, 44.729],
        '西面馆(世纪汇店)':[114.090378,22.547004, 43.534],
        '西面馆(星河盛世店)':[114.052642,22.608427, 43.072],
        '西面馆(星河时代店)':[114.23586,22.6979, 42.378],
        '西手工面(百佳华店)':[114.027094,22.661252, 36.667],
        '西手工面(海雅缤纷城店)':[113.912314,22.564644, 42.519],
        '西手工面(金光华店)':[114.126221,22.546003, 44.125],
        '西手工面(太阳百货店)':[114.12764,22.553435, 43.951],
        '西手工面(太仓万达店)':[121.144385,31.466042, 44.510],
        '西面馆(万柳华联店)':[116.301278,39.979218, 41.460],
        '西手工面(中北永旺店)':[117.097919,39.148962, 44.941],
        '西面馆(大悦城店)':[117.187038,39.139045, 43.432],
        '西手工面(万达广场店)':[117.259493,39.130966, 43.915],
        '西手工面(泰达广场店)':[17.730579,39.040104, 46.173],
        '西面馆(津南店)':[117.394578,38.994572, 45.256],
        '西面馆(水游城店)':[117.176652,39.153958, 44.437],
        '西面馆(新业广场店)':[117.220416,39.083765, 44.541],
        '西面馆(荟聚广场店)':[114.172587,30.622468, 43.617],
        '西手工面(经开万达店)':[114.179469,30.511749, 43.212],
        '西面馆(梦乐城店)':[114.246175,30.65688, 43.211],
        '西手工面(凯德1818店)':[114.346093,30.558519, 42.439
  ],
        '西面馆(武胜凯德店)':[114.346691,30.559112, 45.000],
        '西面馆(群星城店)':[ 114.355934,30.591252, 42.987],
        '西面馆(群星城店)':[114.360038,30.58819, 42.987],
        '西面馆(众圆广场店)':[114.382145,30.63114, 42.912],
        '西面馆(宜兴万达店)':[119.857675,31.370142, 46.905],
        '西手工面(大信南路店)':[113.388031,22.538101, 43.421],
        '西面馆(利和店)':[113.390383,22.519175, 43.333],
        '西面馆(兴中广场店)':[113.373409,22.530357, 45.227],
        '西手工面(珠海华发店)':[113.516486,22.231027, 43.846],
        '西面馆(珠海百货店)':[113.586424,22.261341, 43.333],
        '西面馆(富华里店)':[113.546697,22.239161, 45.641, 45.641],
        '西手工面(珠海华润店)':[113.531779,22.273226, 42.299]
      }
  };


  var convertData = utils.convertData(data);

  // 地图组件
  var map = {
    id: 'chart_maps',
    option: {
      title : {
        text: '店铺查看 — 美食地图',
        subtext: '点击具体店铺的圆点查看店铺详细信息，店铺评分为多因素综合评分。分值越高餐厅标记越大',
        left: 'center',
        textStyle : {
          color: '#fff',
          fontSize: '40'
        }
      },
      backgroundColor: '#954040',
      tooltip: {
        trigger: 'item',
        formatter: '{b}'
      },
      series: [
        {
          zoom: 2,
          center: [126.472644, 31.231706],
          name: '中国',
          type: 'map',
          mapType: 'china',
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
              areaColor: '#bd5251'
            }
          },
          markPoint : {
            symbol :'pin',
            symbolSize: function(val,obj){
              return (obj.data.coord[2] - 40) * 3;
            },
            label:{
              normal : {
                show : false,
                formatter: '{b}'
              },
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 10
            },
            itemStyle : {
              normal: {
                color: '#ffd96a',
                borderColor: '#f78f58',
                borderWidth: 1
              }
            },
            data: convertData
          }
        }
      ]
    }
  };

  // 启动地图组件
  var mapChart = utils.init(map);
  mapChart.on('click', function(params){
    if (params.componentType === "markPoint") {
      console.log(params);
      this.setOption({
        animationDurationUpdate: 1000,
        animationEasingUpdate: 'cubicInOut',
        series: [{
          center: [params.data.coord[0]+0.5, params.data.coord[1]],
          zoom: 26
        }]
      });
      // 百度地图API功能
      var mapPanel = new BMap.Map("maps_tooltip");    // 创建Map实例
      mapPanel.centerAndZoom(new BMap.Point(params.data.coord[0], params.data.coord[1]), 18);  // 初始化地图,设置中心点坐标和地图级别
      mapPanel.addControl(new BMap.MapTypeControl());   //添加地图类型控件
      mapPanel.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
      mapPanel.enableScrollWheelZoom(false);     //开启鼠标滚轮缩放
      var marker = new BMap.Marker(new BMap.Point(params.data.coord[0], params.data.coord[1])); // 创建点
      mapPanel.addOverlay(marker);   //增加点

      // 百度地图反向地理编码获取经纬度对应的地址
      var myGeo = new BMap.Geocoder();
      myGeo.getLocation(new BMap.Point(params.data.coord[0], params.data.coord[1]), function(result){
        if (result){
           console.log(result.address);
           $('#maps_name').text(params.name);
           $('#maps_address').text(result.address);
           $('#maps_score').text(params.data.coord[2]);
        }
      });

      $('#maps_panel').css({'opacity':'1'});

    } else {
      this.setOption({
        series: [{
          zoom: 2,
          center: [126.472644, 31.231706]
        }]
      });
      $('#maps_panel').css({'opacity':'0'});
    }
  });

  // 顾客评价条形图
  var bar = {
    id: 'chart_bar',
    option: {
        title : {
          text: '九毛九西面馆',
          bottom: '0',
          left: 'center',
          textStyle : {
            // color: '#fff',
            // fontSize: '40'
          }
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },
        legend: {
            data: ["非常好", "很好", "好", "一般", "很差"]
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                magicType: {
                    show: false,
                    type: ["line", "bar", "stack", "tiled"]
                }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: "value"
            }
        ],
        yAxis: [
            {
                type: "category",
                data: ["口味", "环境", "服务"]
            }
        ],
        series: [
            {
                name: "非常好",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: "insideRight"
                        }
                    }
                },
                data: [7599, 7701, 7912]
            },
            {
                name: "很好",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: "insideRight"
                        }
                    }
                },
                data: [5288, 5274, 4863]
            },
            {
                name: "好",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: "insideRight"
                        }
                    }
                },
                data: [2156, 2223, 2148]
            },
            {
                name: "一般",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: "insideRight"
                        }
                    }
                },
                data: [549, 488, 585]
            },
            {
                name: "很差",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: "insideTop"
                        }
                    }
                },
                data: [267, 173, 340]
            }
        ]
    }
  };
  // 启动条形图组件
  var barChart = utils.init(bar);

  // bar2
  var bar2 = {
    id: 'chart_bar2',
    option: {
        title : {
          text: '云海肴云南菜',
          bottom: '0',
          left: 'center',
          textStyle : {
            // color: '#fff',
            // fontSize: '40'
          }
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },
        legend: {
            data: ["非常好", "很好", "好", "一般", "很差"]
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                magicType: {
                    show: false,
                    type: ["line", "bar", "stack", "tiled"]
                }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: "value"
            }
        ],
        yAxis: [
            {
                type: "category",
                data: ["口味", "环境", "服务"]
            }
        ],
        series: [
            {
                name: "非常好",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: "insideRight"
                        }
                    }
                },
                data: [8126, 7599, 7988]
            },
            {
                name: "很好",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: "insideRight"
                        }
                    }
                },
                data: [4015, 4124, 3797]
            },
            {
                name: "好",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: "insideRight"
                        }
                    }
                },
                data: [1230, 1431, 1367]
            },
            {
                name: "一般",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: "insideRight"
                        }
                    }
                },
                data: [264, 408, 343]
            },
            {
                name: "很差",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: "insideTop"
                        }
                    }
                },
                data: [123, 196, 263]
            }
        ]
    }
  };

  // 启动条形图组件2
  var barChart2 = utils.init(bar2);

  // bar3
  var bar3 = {
    id: 'chart_bar3',
    option: {
        title : {
          text: '刀小蛮云南米线',
          bottom: '0',
          left: 'center',
          textStyle : {
            // color: '#fff',
            // fontSize: '40'
          }
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },
        legend: {
            data: ["非常好", "很好", "好", "一般", "很差"]
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                magicType: {
                    show: false,
                    type: ["line", "bar", "stack", "tiled"]
                }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: "value"
            }
        ],
        yAxis: [
            {
                type: "category",
                data: ["环境", "口味", "服务"]
            }
        ],
        series: [
            {
                name: "非常好",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: "insideRight"
                        }
                    }
                },
                data: [91, 80, 85]
            },
            {
                name: "很好",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: "insideRight"
                        }
                    }
                },
                data: [54, 47, 53]
            },
            {
                name: "好",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: "insideRight"
                        }
                    }
                },
                data: [13, 22, 19]
            },
            {
                name: "一般",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: "insideRight"
                        }
                    }
                },
                data: [3, 10, 4]
            },
            {
                name: "很差",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: "insideTop"
                        }
                    }
                },
                data: [3, 5, 3]
            }
        ]
    }
  };

  // 启动条形图组件3
  var barChart3 = utils.init(bar3);

  // bar4
  var bar4 = {
    id: 'chart_bar4',
    option: {
      title : {
        text: '阿香米线',
        bottom: '0',
        left: 'center',
        textStyle : {
          // color: '#fff',
          // fontSize: '40'
        }
      },
      tooltip: {
          trigger: "axis",
          axisPointer: {
              type: "shadow"
          }
      },
      legend: {
          data: ["非常好", "很好", "好", "一般", "很差"]
      },
      toolbox: {
          show: true,
          feature: {
              mark: {
                  show: true
              },
              magicType: {
                  show: false,
                  type: ["line", "bar", "stack", "tiled"]
              }
          }
      },
      calculable: true,
      xAxis: [
          {
              type: "value"
          }
      ],
      yAxis: [
          {
              type: "category",
              data: ["服务", "环境", "口味"]
          }
      ],
      series: [
          {
              name: "非常好",
              type: "bar",
              stack: "总量",
              itemStyle: {
                  normal: {
                      label: {
                          show: true,
                          position: "insideRight"
                      }
                  }
              },
              data: [917, 901, 976]
          },
          {
              name: "很好",
              type: "bar",
              stack: "总量",
              itemStyle: {
                  normal: {
                      label: {
                          show: true,
                          position: "insideRight"
                      }
                  }
              },
              data: [532, 569, 562]
          },
          {
              name: "好",
              type: "bar",
              stack: "总量",
              itemStyle: {
                  normal: {
                      label: {
                          show: false,
                          position: "insideRight"
                      }
                  }
              },
              data: [223, 243, 192]
          },
          {
              name: "一般",
              type: "bar",
              stack: "总量",
              itemStyle: {
                  normal: {
                      label: {
                          show: false,
                          position: "insideRight"
                      }
                  }
              },
              data: [64, 56, 35]
          },
          {
              name: "很差",
              type: "bar",
              stack: "总量",
              itemStyle: {
                  normal: {
                      label: {
                          show: false,
                          position: "insideTop"
                      }
                  }
              },
              data: [59, 26, 30]
          }
      ]
  }
  };

  // 启动条形图组件4
  var barChart4 = utils.init(bar4);

  // bar5
  var bar5 = {
    id: 'chart_bar5',
    option: {
        title : {
          text: '和府捞面',
          bottom: '0',
          left: 'center',
          textStyle : {
            // color: '#fff',
            // fontSize: '40'
          }
        },
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },
        legend: {
            data: ["非常好", "很好", "好", "一般", "很差"]
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                magicType: {
                    show: false,
                    type: ["line", "bar", "stack", "tiled"]
                }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: "value"
            }
        ],
        yAxis: [
            {
                type: "category",
                data: ["环境", "口味", "服务"]
            }
        ],
        series: [
            {
                name: "非常好",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: "insideRight"
                        }
                    }
                },
                data: [6140, 5396, 5677]
            },
            {
                name: "很好",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: "insideRight"
                        }
                    }
                },
                data: [3658, 3834, 3755]
            },
            {
                name: "好",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: "insideRight"
                        }
                    }
                },
                data: [1031, 1393, 1265]
            },
            {
                name: "一般",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: "insideRight"
                        }
                    }
                },
                data: [147, 302, 238]
            },
            {
                name: "很差",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: false,
                            position: "insideTop"
                        }
                    }
                },
                data: [49, 100, 90]
            }
        ]
    }
  };

  // 启动条形图组件5
  var barChart5 = utils.init(bar5);

  // 下次再来的意愿的五个饼图
  //下次再来
  var pie = {
    id: 'chart_pie',
    option: {
        title : {
          text: '九毛九西面馆',
          bottom: '0',
          left: 'center',
          textStyle : {
            // color: '#fff',
            // fontSize: '40'
          }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: "vertical",
            x: "left",
            data: ["下次不来", "下次再来"]
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                }
            }
        },
        calculable: true,
        series: [
            {
                type: "pie",
                name: "",
                data: [
                    {
                        value: 2.7,
                        name: "下次不来"
                    },
                    {
                        value: 9.3,
                        name: "下次再来"
                    }
                ]
            }
        ]
    }
  };
  // 启动饼图组件1
  var pieChart = utils.init(pie);

  var pie2 = {
    id: 'chart_pie2',
    option: {
        title : {
          text: '云海肴云南菜',
          bottom: '0',
          left: 'center',
          textStyle : {
            // color: '#fff',
            // fontSize: '40'
          }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: "vertical",
            x: "left",
            data: ["下次不来", "下次再来"]
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                }
            }
        },
        calculable: true,
        series: [
            {
                type: "pie",
                name: "",
                data: [
                    {
                        value: 3.3,
                        name: "下次不来"
                    },
                    {
                        value: 10.1,
                        name: "下次再来"
                    }
                ]
            }
        ]
    }
  };
  // 启动饼图组件2
  var pieChart2 = utils.init(pie2);

  var pie3 = {
    id: 'chart_pie3',
    option: {
        title : {
          text: '刀小蛮云南米线',
          bottom: '0',
          left: 'center',
          textStyle : {
            // color: '#fff',
            // fontSize: '40'
          }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: "vertical",
            x: "left",
            data: ["下次不来", "下次再来"]
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                }
            }
        },
        calculable: true,
        series: [
            {
                type: "pie",
                name: "",
                data: [
                    {
                        value: 4.9,
                        name: "下次不来"
                    },
                    {
                        value: 12.2,
                        name: "下次再来"
                    }
                ]
            }
        ]
    }
  };
  // 启动饼图组件3
  var pieChart3 = utils.init(pie3);

  var pie4 = {
    id: 'chart_pie4',
    option: {
        title : {
          text: '阿香米线',
          bottom: '0',
          left: 'center',
          textStyle : {
            // color: '#fff',
            // fontSize: '40'
          }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: "vertical",
            x: "left",
            data: ["下次不来", "下次再来"]
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                }
            }
        },
        calculable: true,
        series: [
            {
                type: "pie",
                name: "",
                data: [
                    {
                        value: 3.2,
                        name: "下次不来"
                    },
                    {
                        value: 11.1,
                        name: "下次再来"
                    }
                ]
            }
        ]
    }
  };
  // 启动饼图组件4
  var pieChart4 = utils.init(pie4);

  var pie5 = {
    id: 'chart_pie5',
    option: {
        title : {
          text: '和府捞面',
          bottom: '0',
          left: 'center',
          textStyle : {
            // color: '#fff',
            // fontSize: '40'
          }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: "vertical",
            x: "left",
            data: ["下次不来", "下次再来"]
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                }
            }
        },
        calculable: true,
        series: [
            {
                type: "pie",
                name: "",
                data: [
                    {
                        value: 2.4,
                        name: "下次不来"
                    },
                    {
                        value: 10.5,
                        name: "下次再来"
                    }
                ]
            }
        ]
    }
  };
  // 启动饼图组件5
  var pieChart5 = utils.init(pie5);

  var pie4 = {
    id: 'chart_pie4',
    option: {
        title : {
          text: '阿香米线',
          bottom: '0',
          left: 'center',
          textStyle : {
            // color: '#fff',
            // fontSize: '40'
          }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: "vertical",
            x: "left",
            data: ["下次不来", "下次再来"]
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                }
            }
        },
        calculable: true,
        series: [
            {
                type: "pie",
                name: "",
                data: [
                    {
                        value: 3.2,
                        name: "下次不来"
                    },
                    {
                        value: 11.1,
                        name: "下次再来"
                    }
                ]
            }
        ]
    }
  };
  // 启动饼图组件4
  var pieChart4 = utils.init(pie4);

  var contrast = {
    id: 'chart_contrast',
    option: {
        title: {
            text: "顾客行为对比",
            subtext: "尝鲜顾客和忠诚顾客"
        },
        tooltip: {
            trigger: "axis"
        },
        legend: {
            data: ["首次来店（尝鲜顾客）", "来店频繁（忠诚度）"]
        },
        toolbox: {
            show: true,
            feature: {
                mark: {
                    show: true
                },
                dataView: {
                    show: true,
                    readOnly: true
                },
                magicType: {
                    show: false,
                    type: ["line", "bar"]
                },
                restore: {
                    show: true
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        calculable: true,
        xAxis: [
            {
                type: "category",
                data: ["九毛九西面店", "云海肴", "刀小蛮云南米线", "阿香米线", "和府捞面"]
            }
        ],
        yAxis: [
            {
                type: "value"
            }
        ],
        series: [
            {
                name: "首次来店（尝鲜顾客）",
                type: "bar",
                data: [3.6, 5.9, 6.1, 3.7, 4.6]
            },
            {
                name: "来店频繁（忠诚度）",
                type: "bar",
                data: [16.7, 15.1, 12.2, 19.6, 11.3]
            }
        ]
    }
  };
  // 启动对比图
  var contrastChart = utils.init(contrast);
});
