
var map
var graphicLayer

function initMap(options) {
  // 合并属性参数，可覆盖config.json中的对应配置
  var mapOptions = mars3d.Util.merge(options, {})

  // 创建三维地球场景
  map = new mars3d.Map("mars3dContainer", mapOptions)


  // 创建矢量数据图层
  graphicLayer = new mars3d.layer.GraphicLayer()
  map.addLayer(graphicLayer)

  // 图层管理的相关处理，代码在\js\graphicManager.js
  // eslint-disable-next-line no-undef
  initLayerManager(graphicLayer)

  // 加一些演示数据
  addGraphic_01(graphicLayer)
  addGraphic_02(graphicLayer)
  addGraphic_03(graphicLayer)
  addGraphic_04(graphicLayer)
  addGraphic_05(graphicLayer)
}

// 显示隐藏 绑定popup和tooltip和右键菜单以及是否编辑
function bindShowHide(val) {
  graphicLayer.show = val
}
function bindPopup(val) {
  if (val) {
    // eslint-disable-next-line no-undef
    bindLayerPopup(graphicLayer)
  } else {
    graphicLayer.unbindPopup()
  }
}
function bindTooltip(val) {
  if (val) {
    graphicLayer.bindTooltip("我是layer上绑定的Tooltip")
  } else {
    graphicLayer.unbindTooltip()
  }
}
function bindRightMenu(val) {
  if (val) {
    // eslint-disable-next-line no-undef
    bindLayerContextMenu(graphicLayer)
  } else {
    graphicLayer.unbindContextMenu(true)
  }
}
function bindEdit(val) {
  graphicLayer.hasEdit = val
}

// 按钮事件
function btnDrawModel() {
  // 开始绘制
  graphicLayer.startDraw({
    type: "ellipse",
    style: {
      color: "#ffff00",
      opacity: 0.6,
      clampToGround: false
    }
  })
}
function btnDrawModelExtruded() {
  // 开始绘制
  graphicLayer.startDraw({
    type: "ellipse",
    style: {
      color: "#ff0000",
      opacity: 0.6,
      diffHeight: 600
    }
  })
}
function btnClear() {
  graphicLayer.clear()
}
function btnExpFile() {
  // eslint-disable-next-line no-undef
  expFile(graphicLayer)
}
function btnImpFile(file) {
  // eslint-disable-next-line no-undef
  impFile(graphicLayer, file)
}

// 定位至模型
var modelTest
function centerAtModel() {
  if (!modelTest) {
    modelTest = new mars3d.layer.TilesetLayer({
      url: "//data.mars3d.cn/3dtiles/qx-simiao/tileset.json",
      position: { alt: 80.6 },
      maximumScreenSpaceError: 1,
      maximumMemoryUsage: 1024,
      flyTo: true
    })
    map.addLayer(modelTest)
  }
}

//
function addGraphic_01(graphicLayer) {
  var graphic = new mars3d.graphic.EllipseEntity({
    position: [116.282587, 30.859197, 544.31],
    style: {
      semiMajorAxis: 800, // 长半轴 半径
      semiMinorAxis: 600, // 短半轴 半径
      color: "#00ff00",
      opacity: 0.3,
      outline: true,
      outlineWidth: 3,
      outlineColor: "#ffffff",
      clampToGround: true
    }
  })
  graphicLayer.addGraphic(graphic) // 还可以另外一种写法: graphic.addTo(graphicLayer)

  // 演示个性化处理graphic，代码在\js\graphicManager.js
  // eslint-disable-next-line no-undef
  initGraphicManager(graphic)
}

//
function addGraphic_02(graphicLayer) {
  var graphic = new mars3d.graphic.EllipseEntity({
    position: new mars3d.LatLngPoint(116.329199, 30.881595, 390.3),
    style: {
      semiMajorAxis: 1500, // 长半轴 半径
      semiMinorAxis: 900, // 短半轴 半径
      material: mars3d.MaterialUtil.createMaterialProperty(mars3d.MaterialType.CircleWave, {
        color: "#ff0000",
        count: 1, // 单个圆圈
        speed: 40
      })
    }
  })
  graphicLayer.addGraphic(graphic) // 还可以另外一种写法: graphic.addTo(graphicLayer)
}

//
function addGraphic_03(graphicLayer) {
  var _rotation = Math.random()

  var graphic = new mars3d.graphic.EllipseEntity({
    position: new mars3d.LatLngPoint(116.392526, 30.903729, 933.55),
    style: {
      semiMajorAxis: 1500, // 长半轴 半径
      semiMinorAxis: 900, // 短半轴 半径
      material: mars3d.MaterialUtil.createMaterialProperty(mars3d.MaterialType.CircleWave, {
        image: "img/textures/circleScan.png",
        color: "#5fc4ee"
      }),
      stRotation: new Cesium.CallbackProperty(function (e) {
        _rotation -= 0.1
        return _rotation
      }, false),
      classificationType: Cesium.ClassificationType.BOTH
    }
  })
  graphicLayer.addGraphic(graphic) // 还可以另外一种写法: graphic.addTo(graphicLayer)
}

//
function addGraphic_04(graphicLayer) {
  var graphic = new mars3d.graphic.EllipseEntity({
    position: [116.244399, 30.920459],
    style: {
      semiMinorAxis: 1100, // 短半轴 半径
      semiMajorAxis: 2000, // 长半轴 半径
      height: 200,
      material: mars3d.MaterialUtil.createMaterialProperty(mars3d.MaterialType.CircleWave, {
        color: "#ffff00",
        count: 2,
        speed: 20
      }),
      label: {
        text: "我是原始的",
        font_size: 18,
        color: "#ffffff",
        pixelOffsetY: -10,
        distanceDisplayCondition: true,
        distanceDisplayCondition_far: 500000,
        distanceDisplayCondition_near: 0
      }
    }
  })
  graphicLayer.addGraphic(graphic) // 还可以另外一种写法: graphic.addTo(graphicLayer)

  // graphic转geojson
  var geojson = graphic.toGeoJSON()
  console.log("转换后的geojson", geojson)
  addGeoJson(geojson, graphicLayer)
}

// 添加单个geojson为graphic，多个直接用graphicLayer.loadGeoJSON
function addGeoJson(geojson, graphicLayer) {
  var graphicCopy = mars3d.Util.geoJsonToGraphics(geojson)[0]
  delete graphicCopy.attr
  // 新的坐标
  graphicCopy.position = [116.301991, 30.933872, 624.03]
  graphicCopy.style.label = graphicCopy.style.label || {}
  graphicCopy.style.label.text = "我是转换后生成的"
  graphicLayer.addGraphic(graphicCopy)
}

function addGraphic_05(graphicLayer) {
  var graphic = new mars3d.graphic.EllipseEntity({
    position: new mars3d.LatLngPoint(116.37617, 30.847384, 396.12),
    style: {
      semiMajorAxis: 1500, // 长半轴 半径
      semiMinorAxis: 900, // 短半轴 半径
      diffHeight: 1000.0,
      color: "#00ff00",
      opacity: 0.3,
      rotationDegree: 45,

      label: { text: "鼠标移入会高亮", pixelOffsetY: -30 },
      // 高亮时的样式（默认为鼠标移入，也可以指定type:'click'单击高亮），构造后也可以openHighlight、closeHighlight方法来手动调用
      highlight: {
        color: "#00ff00",
        opacity: 0.7
      }
    }
  })
  graphicLayer.addGraphic(graphic) // 还可以另外一种写法: graphic.addTo(graphicLayer)
}