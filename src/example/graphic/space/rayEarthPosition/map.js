var map
var weixin
var graphicLayer
var graphicTriangle
var weixinData = {}
function initMap(options) {
  // 合并属性参数，可覆盖config.json中的对应配置
  var mapOptions = mars3d.Util.merge(options, {
    scene: {
      // 此处参数会覆盖config.json中的对应配置
      center: { lat: 5.459746, lng: 68.238291, alt: 36261079, heading: 143, pitch: -89 },
      cameraController: {
        zoomFactor: 3.0,
        minimumZoomDistance: 1000,
        maximumZoomDistance: 300000000,
        constrainedAxis: false // 解除在南北极区域鼠标操作限制
      }
    },
    control: {
      animation: true, // 是否创建动画小器件，左下角仪表
      timeline: true, // 是否显示时间线控件
      compass: { top: "10px", left: "5px" }
    }
  })

  // 创建三维地球场景
  map = new mars3d.Map("mars3dContainer", mapOptions)
  // 因为animation面板遮盖，修改底部bottom值
  const toolbar = document.getElementsByClassName("cesium-viewer-toolbar")[0]
  toolbar.style.bottom = "110px"

  // 创建矢量数据图层
  graphicLayer = new mars3d.layer.GraphicLayer()
  map.addLayer(graphicLayer)

  graphicLayer.on(mars3d.EventType.click, function (event) {
    console.log("单击了卫星", event)
  })

  weixin = new mars3d.graphic.Satellite({
    name: "GAOFEN 1",
    tle1: "1 39150U 13018A   21180.50843864  .00000088  00000-0  19781-4 0  9997",
    tle2: "2 39150  97.8300 252.9072 0018449 344.7422  15.3253 14.76581022440650",
    model: {
      url: "//data.mars3d.cn/gltf/mars/weixin.gltf",
      scale: 1,
      minimumPixelSize: 90
    },
    cone: {
      sensorType: mars3d.graphic.SatelliteSensor.Type.Rect,
      angle1: 10,
      angle2: 0.01,
      color: "#6ef500",
      opacity: 0.5,
      show: false
    },
    path: {
      color: "#00ff00",
      opacity: 0.5,
      width: 1,
      show: true
    }
  })
  graphicLayer.addGraphic(weixin)

  setTimeout(() => {
    weixin.flyTo({
      radius: 900000, // 距离目标点的距离
      pitch: -60 // 相机方向
    })
  }, 3000)

  // 卫星朝向的中线地面点
  const graphic = new mars3d.graphic.PolylineEntity({
    positions: new Cesium.CallbackProperty(function (time) {
      var pt1 = weixin.position
      var pt2 = weixin.groundPosition
      if (!pt1 || !pt2) {
        return []
      }
      return [pt1, pt2]
    }, false),
    style: {
      width: 2,
      color: "#ff0000",
      arcType: Cesium.ArcType.NONE
    }
  })
  graphicLayer.addGraphic(graphic)

  weixinData.name = weixin.name
  weixinData.tle1 = weixin.options.tle1
  weixinData.tle2 = weixin.options.tle2

  // 显示实时坐标和时间
  weixin.on(mars3d.EventType.change, (e) => {
    const date = Cesium.JulianDate.toDate(map.clock.currentTime)
    weixinData.time = mars3d.Util.formatDate(date, "yyyy-MM-dd HH:mm:ss")
    if (weixin.position) {
      var point = mars3d.LatLngPoint.fromCartesian(weixin.position)
      weixinData.td_jd = point.lng
      weixinData.td_wd = point.lat
      weixinData.td_gd = mars3d.MeasureUtil.formatDistance(point.alt)
    }
  })
}

function centerPoint(angle1) {
  if (graphicTriangle) {
    graphicTriangle.show = false
  }
  graphicTriangle = new mars3d.graphic.PolylineEntity({
    positions: new Cesium.CallbackProperty(function (time) {
      var pt1 = weixin.position

      var hpr = new Cesium.HeadingPitchRoll(
        Cesium.Math.toRadians(weixin.heading),
        Cesium.Math.toRadians(weixin.pitch),
        Cesium.Math.toRadians(weixin.roll + angle1)
      )
      var ptLeft = mars3d.PointUtil.getRayEarthPosition(pt1, hpr, true)

      var hdr2 = new Cesium.HeadingPitchRoll(
        Cesium.Math.toRadians(weixin.heading),
        Cesium.Math.toRadians(weixin.pitch),
        Cesium.Math.toRadians(weixin.roll - angle1)
      )
      var ptRight = mars3d.PointUtil.getRayEarthPosition(pt1, hdr2, true)

      if (!ptRight || !ptLeft) {
        return []
      }

      return [ptLeft, pt1, ptRight, ptLeft]
    }, false),
    style: {
      width: 2,
      color: "#0000ff",
      arcType: Cesium.ArcType.NONE
    }
  })
  graphicLayer.addGraphic(graphicTriangle)
}

// 俯仰角
function pitchChange(value) {
  weixin.pitch = value
}

// 左右角
function rollChange(value) {
  weixin.roll = value
}

function angle(value) {
  weixin.angle1 = value
  centerPoint(weixin.angle1)
}

function chkShowModelMatrix(val) {
  weixin.coneShow = val // 显示关闭视锥体
}

function locate() {
  weixin.flyTo()
}