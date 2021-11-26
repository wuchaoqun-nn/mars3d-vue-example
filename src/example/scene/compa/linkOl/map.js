//
var map

function initMap(options) {
  // 合并属性参数，可覆盖config.json中的对应配置
  creat2dDom()
  var mapOptions = mars3d.Util.merge(options, {
    scene: {
      center: { lat: 31.841977, lng: 117.141788, alt: 1043, heading: 90, pitch: -51 },
      fxaa: true
    }
  })
  delete mapOptions.terrain

  // 创建三维地球场景
  map = new mars3d.Map("mars3dContainer", mapOptions)
  setTimeout(() => {
    mapManager.createMap2D(map)
  }, 1000)
}

// 二三维地图联动控制
var mapManager = {
  createMap2D: function (viewer) {
    const tileWorldImagery = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        crossOrigin: "Anonymous"
      })
    })

    const map2d = new ol.Map({
      target: "map2d",
      projection: "EPSG:3857",
      layers: [tileWorldImagery],
      view: new ol.View({
        center: ol.proj.fromLonLat([134.364805, 26.710497]),
        zoom: 4,
        minZoom: 2
      })
    })
    this.map2d = map2d

    // 联动控制器
    this.ol3d = new olcs.OLCesium({ map: map2d, viewer: viewer })

    mapManager.viewTo23D() // 默认
  },
  viewTo23D: function () {
    var dom2d = document.getElementById("centerDiv")
    var dom3d = document.getElementById("centerDiv3D")
    dom3d.style.left = "50%"
    dom2d.style.width = "50%"
    dom3d.style.width = "50%"

    this.map2d.updateSize()
  }
}

function creat2dDom() {
  const mapDiv = mars3d.DomUtil.create("div", "", document.body)
  mapDiv.setAttribute("id", "centerDiv")
  const map2ds = mars3d.DomUtil.create("div", "", mapDiv)
  map2ds.setAttribute("id", "map2d")
  map2ds.setAttribute("class", "mars2d-container")
}