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
      '刀小蛮云南米线(万达店)':[116.232438,39.911831],
      '刀小蛮云南米线(华贸中心店)':[116.487496,39.914788]
    },
    ax: {
      '阿香米线(卜蜂莲花店)':[116.700969,23.369061],
      '阿香米线(奉贤大润发店)':[121.451469,30.912548],
      '阿香米线(共和新路店)':[121.454467,31.30446],
      '阿香米线(华润五彩城店)':[121.324188,31.317639],
      '阿香米线(江桥万达店)':[121.330851,31.246703],
      '阿香米线(康桥大润发店)':[121.586272,31.140301],
      '阿香米线(平型关大润发店)':[121.473101,31.272674],
      '阿香米线(杨高中路店)':[121.5611,31.237921],
      '阿香米线(壹丰广场店)':[121.490046,31.2584]
    },
    hflm: {
      '和府捞面(虹口龙之梦店)':[121.483739,31.277006],
      '和府捞面(1788广场店)':[121.450797,31.228698],
      '和府捞面(96广场店)':[121.531519,31.232999],
      '和府捞面(福州路店)':[121.486656,31.238722],
      '和府捞面(港汇店)':[121.444212,31.20122],
      '和府捞面(虹桥机场店)':[121.487755,31.2312],
      '和府捞面(乐虹坊店)':[121.378191,31.182642],
      '和府捞面(南丰城店)':[121.41382,31.21293],
      '和府捞面(浦东食品城店)':[121.52554,31.234295],
      '和府捞面(五角场店)':[121.520025,31.308938]
    },
    jmj: {
      '西面馆（肖家河店)':[116.277445,40.021216],
      '西手工面(上地华联店)':[116.317584,40.035105],
      '西手工面(回龙观店)':[116.317584,40.035105],
      '西面馆(万柳华联店)':[116.301278,39.979218],
      '西面馆(新顺南大街店)':[116.659619,40.134802],
      '西面馆(肖家河店)':[116.277445,40.021216],
      '西手工面(九洲新世界广场店)':[119.956254,31.771549],
      '西面馆(凯德店)':[113.750902,23.020874],
      '西面馆(东城万达店)':[113.786601,23.042817],
      '西手工面(华南摩尔店)':[113.733176,23.042699],
      '西手工面(长安万达店)':[113.826978,22.814277],
      '西面馆(东营万达店)':[118.545713,37.46333],
      '西面馆(佛山三水店)':[112.900268,23.178639],
      '西面馆(凯德店)':[113.147181,23.0393],
      '西面馆(怡翠世嘉店)':[113.160513,23.017929],
      '西面馆(嘉洲广场店)':[113.195983,23.115517],
      '西老面馆(东方店)':[113.126747,23.04535],
      '西面馆(铂顿城店)':[113.119685,23.032469],
      '西面馆(德顺广场店)':[113.280145,22.833255],
      '西面馆(天佑城店)':[113.27741,22.766398],
      '西面馆(新都会店)':[113.130411,23.116321],
      '西面馆(新一城店)':[113.277738,22.840939],
      '西面馆(英皇店)':[113.123381,23.018138],
      '西手工面(保利水城店)':[113.155025,23.068284],
      '西手工面(金沙洲店)':[113.208554,23.146617],
      '西手工面(南海万科店)':[113.160872,23.043421],
      '西手工面(顺德龙江盈信店)':[113.083281,22.878034],
      '西手工面(高德置地店)': [113.329208,23.126181],
      '西面馆(来又来店)':[113.238983,23.403239],
      '西面馆(黄沙店)':[113.247191,23.117298],
      '西面馆(恒宝店)':[113.247705,23.122564],
      '西面馆(百信广场店)':[113.267567,23.201009],
      '西手工面(中山五路店)':[113.269895,23.131374],
      '西面馆(光明广场店)':[113.273535,23.12905],
      '西手工面(保利中环店)':[113.287963,23.144205],
      '西面馆(广怡店)':[113.294646,23.140018],
      '西面馆(天河北店)':[113.327964,23.151534],
      '西面馆(东方宝泰店)':[113.331399,23.153497],
      '西面馆(太阳新天地店)':[113.35027,23.129123],
      '西面馆(马场店)':[113.350838,23.12594],
      '西面馆(番禺万达店)':[113.35504,23.012615],
      '西面馆(天河南店)':[113.339374,23.137403],
      '西面馆(G5店)':[113.271677,23.186766],
      '西面馆(奥体店)':[113.422631,23.137418],
      '西面馆(奥园广场店)':[113.363884,22.929929],
      '西面馆(百脑汇店)':[113.346521,23.141046],
      '西面馆(广百新一城店)':[113.272314,23.100035],
      '西面馆(花城汇北店)':[113.331195,23.132079],
      '西面馆(花都华润店)':[113.216809,23.388491],
      '西面馆(荔园新天地店)':[113.352805,22.925628],
      '西面馆(洛溪新地店)':[113.307836,23.04879],
      '西面馆(名盛店)':[113.276351,23.129278],
      '西面馆(水荫店)':[113.317647,23.149546],
      '西面馆(四季天地店)':[113.334602,23.106132],
      '西面馆(万达店)':[113.473799,23.17515],
      '西面馆(万国广场店)':[113.279441,23.107846],
      '西面馆(燕汇广场店)':[113.283617,23.088508],
      '西面馆(增城万达店)':[113.821106,23.281967],
      '西面馆(中八店)':[113.247163,23.131766],
      '西面馆(中大轻纺城店)':[113.30261,23.093032],
      '西面馆(中华广场店)':[113.288928,23.131676],
      '西手工面(广州白云机场店)':[113.308369,23.392344],
      '西手工面(佳润广场店)':[113.32719,23.186822],
      '西手工面(龙洞店)':[113.373062,23.198833],
      '西手工面(萝岗万达店)':[113.473799,23.17515],
      '西手工面(天娱广场店)':[113.346521,23.141046],
      '西手工面(同和店)':[113.333535,23.193444],
      '西手工面(万菱汇店)':[113.336019,23.138585],
      '西面馆(秀英店)':[ 110.293654,20.017093],
      '西面馆(海秀旗舰店)':[110.33373,20.025531],
      '西面馆(名门店)':[110.358839,20.028506],
      '西手工面(白龙南路店)':[110.368475,20.035823],
      '西面馆(国贸店)':[110.32707,20.0312],
      '西面馆(海甸店)':[110.331918,20.067799],
      '西面馆(望海店)':[110.351854,20.035903],
      '西面馆(友谊店)':[110.343741,20.043503],
      '西手工面(国秀店)':[110.383406,20.020848],
      '西手工面(南亚广场店)':[110.358292,20.037357],
      '西面馆(河源商业中心店)':[114.72626,23.77504],
      '西手工面(黄石万达店)':[115.065399,30.249715],
      '西面馆(时尚公园店)':[114.360759,23.030315],
      '西面馆(港惠店)':[114.422956,23.074418],
      '西面馆(华贸店)':[114.420372,23.109791],
      '西面馆(源东大厦店)':[114.416455,23.086747],
      '西手工面(汇悦城店)':[113.090462,22.623526],
      '西面馆(江门万达店)':[113.091773,22.621449],
      '西手工面(江宁万达店)':[118.793034,32.044735],
      '西手工面(鹏欣水游城店)':[118.791586,32.029491],
      '西手工面(新一城店)':[118.728251,32.146533],
      '西面馆(青岛万达店)':[120.441924,36.175024],
      '西面馆(三亚机场店)':[109.508032,18.257682],
      '西手工面(大东海店)':[109.535572,18.228142],
      '西手工面(国购分店)':[109.512368,18.241826],
      '西手工面(胜利店)':[109.508266,18.257215],
      '西手工面(金山万达店)':[121.340748,30.75992],
      '西手工面(富通城店)':[113.862583,22.575939],
      '西手工面(花园城店)':[113.929769,22.508372],
      '西面馆(星河盛世店)':[114.052642,22.608427],
      '西手工面(民治店)':[114.062079,22.623719],
      '西面馆(华强茂业店)':[114.092803,22.551615],
      '西面馆(八号仓店)':[114.062079,22.623719],
      '西面馆(东门茂业店)':[114.127817,22.553386],
      '西面馆(欢乐颂店)':[113.926661,22.540808],
      '西面馆(皇庭店)':[114.06693,22.539782],
      '西面馆(南山海雅百货店)':[113.935927,22.524304],
      '西面馆(沙井京基百纳店)':[113.813199,22.732785],
      '西面馆(时代城店)':[113.874497,22.573025],
      '西面馆(世纪汇店)':[114.090378,22.547004],
      '西面馆(星河盛世店)':[114.052642,22.608427],
      '西面馆(星河时代店)':[114.23586,22.6979],
      '西手工面(百佳华店)':[114.027094,22.661252],
      '西手工面(海雅缤纷城店)':[113.912314,22.564644],
      '西手工面(金光华店)':[114.126221,22.546003],
      '西手工面(太阳百货店)':[114.12764,22.553435],
      '西手工面(太仓万达店)':[121.144385,31.466042],
      '西面馆(万柳华联店)':[116.301278,39.979218],
      '西手工面(中北永旺店)':[117.097919,39.148962],
      '西面馆(大悦城店)':[117.187038,39.139045],
      '西手工面(万达广场店)':[117.259493,39.130966],
      '西手工面(泰达广场店)':[17.730579,39.040104],
      '西面馆(津南店)':[117.394578,38.994572],
      '西面馆(水游城店)':[117.176652,39.153958],
      '西面馆(新业广场店)':[117.220416,39.083765],
      '西面馆(荟聚广场店)':[114.172587,30.622468],
      '西手工面(经开万达店)':[114.179469,30.511749],
      '西面馆(梦乐城店)':[114.246175,30.65688],
      '西手工面(凯德1818店)':[114.346093,30.558519],
      '西面馆(武胜凯德店)':[114.346691,30.559112],
      '西面馆(群星城店)':[ 114.355934,30.591252],
      '西面馆(群星城店)':[114.360038,30.58819],
      '西面馆(众圆广场店)':[114.382145,30.63114],
      '西面馆(宜兴万达店)':[119.857675,31.370142],
      '西手工面(大信南路店)':[113.388031,22.538101],
      '西面馆(利和店)':[113.390383,22.519175],
      '西面馆(兴中广场店)':[113.373409,22.530357],
      '西手工面(珠海华发店)':[113.516486,22.231027],
      '西面馆(珠海百货店)':[113.586424,22.261341],
      '西面馆(富华里店)':[113.546697,22.239161],
      '西手工面(珠海华润店)':[113.531779,22.273226]
    }
  };

  var convertData = utils.convertData(data);

  // 地图组件
  var map = {
    id: 'chart_maps',
    option: {
      title : {
        text: '店铺查看 — 美食地图',
        // subtext: '店铺分布图',
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
            symbol :'circle',
            symbolSize: 8,
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
          zoom: 26,
          markPoint: {
            symbolSize: 10
          }
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
        }
      });

    } else {
      this.setOption({
        series: [{
          zoom: 2,
          center: [126.472644, 31.231706],
          markPoint: {
            symbolSize: 8
          }
        }]
      });
    }
  });

  // 顾客评价条形图
  var bar = {
    id: 'chart_bar',
    option: {
        tooltip: {
            trigger: "axis",
            axisPointer: {
                type: "shadow"
            }
        },
        legend: {
            data: ["非常好", "很好", "好", "一般", "差"]
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
                    type: ["line", "bar", "stack", "tiled"]
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
                            show: true,
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
                            show: true,
                            position: "insideRight"
                        }
                    }
                },
                data: [549, 488, 585]
            },
            {
                name: "差",
                type: "bar",
                stack: "总量",
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
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
                dataView: {
                    show: true,
                    readOnly: true
                },
                magicType: {
                    show: false,
                    type: ["line", "bar", "stack", "tiled"]
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
                            show: true,
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
                            show: true,
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
                            show: true,
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
                dataView: {
                    show: true,
                    readOnly: true
                },
                magicType: {
                    show: false,
                    type: ["line", "bar", "stack", "tiled"]
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
                            show: true,
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
                            show: true,
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
                            show: true,
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
              dataView: {
                  show: true,
                  readOnly: true
              },
              magicType: {
                  show: false,
                  type: ["line", "bar", "stack", "tiled"]
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
                          show: true,
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
                          show: true,
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
                          show: true,
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
                dataView: {
                    show: true,
                    readOnly: true
                },
                magicType: {
                    show: false,
                    type: ["line", "bar", "stack", "tiled"]
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
                            show: true,
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
                            show: true,
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
                            show: true,
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

});
