var map
var limitHeight
function initMap(options) {
  // 合并属性参数，可覆盖config.json中的对应配置
  var mapOptions = mars3d.Util.merge(options, {
    scene: {
      center: { lat: 25.092295, lng: 102.64431, alt: 2815, heading: 104, pitch: -32 }
    }
  })

  // 创建三维地球场景
  map = new mars3d.Map("mars3dContainer", mapOptions)

  // 固定光照，避免gltf模型随时间存在亮度不一致。
  map.fixedLight = true

  // 加模型
  var tilesetLayer = new mars3d.layer.TilesetLayer({
    url: "//data.mars3d.cn/3dtiles/qx-xiaoqu/tileset.json",
    maximumScreenSpaceError: 6,
    maximumMemoryUsage: 2048
  })
  map.addLayer(tilesetLayer)

  // 限高分析类
  limitHeight = new mars3d.thing.LimitHeight({
    color: "rgba(255,0,0,0.5)",
    height: 80, // 限高
    bottomHeight: 1865, // 模型地面的海拔高度（单位：米）
    positions: [
      [102.662083, 25.09593, 0],
      [102.665105, 25.078242, 0],
      [102.650108, 25.085209, 0],
      [102.655136, 25.097225, 0]
    ]
  })
  map.addThing(limitHeight)

  // 自动读取模型的高度，但不一定准确。
  // tilesetLayer.on(mars3d.EventType.load, function (event) {
  //   limitHeight.bottomHeight = mars3d.LatLngPoint.fromCartesian(tilesetLayer.boundingSphere.center).alt
  // })
}

// 滑动条
function currHeight(value) {
  limitHeight.height = value
}

// 绘制矩形
function drawExtent() {
  map.graphicLayer.clear()
  map.graphicLayer.startDraw({
    type: "rectangle",
    style: {
      color: "#ffff00",
      opacity: 0.3,
      clampToGround: true
    },
    success: function (graphic) {
      // 绘制成功后回调
      var positions = graphic.getOutlinePositions(false)
      limitHeight.positions = positions

      map.graphicLayer.clear()
    }
  })
}

// 绘制面
function drawPolygon() {
  map.graphicLayer.clear()
  map.graphicLayer.startDraw({
    type: "polygon",
    style: {
      color: "#ffff00",
      opacity: 0.3,
      clampToGround: true
    },
    success: function (graphic) {
      // 绘制成功后回调
      var positions = graphic.positionsShow
      limitHeight.positions = positions

      map.graphicLayer.clear()
      console.log(JSON.stringify(mars3d.PointTrans.cartesians2lonlats(positions))) // 打印下边界
    }
  })
}
function clear() {
  limitHeight.clear()
  map.graphicLayer.clear()
}