var map
function initMap(options) {
  // 合并属性参数，可覆盖config.json中的对应配置
  var mapOptions = mars3d.Util.merge(options, {
    // 方式1：在创建地球前的传参中配置 terrain 参数[目前1个球只支持1个地形服务]
    terrain: {
      url: "http://data.mars3d.cn/terrain",
      show: true
    }
  })

  // 创建三维地球场景
  map = new mars3d.Map("mars3dContainer", mapOptions)
  // 方式2：在创建地球后更新terrainProvider(用 mars3d.layer.createTerrainProvider工厂方法创建)[目前1个球只支持1个地形服务]
  map.terrainProvider = mars3d.LayerUtil.createTerrainProvider({
    url: "http://data.mars3d.cn/terrain"
  })
}
function radioTerrain(type) {
  switch (type) {
    default:
    case "none": // 无地形
      map.terrainProvider = mars3d.LayerUtil.getNoTerrainProvider()
      break
    case "xyz": // 标准xyz服务
      map.terrainProvider = mars3d.LayerUtil.createTerrainProvider({
        url: "http://data.mars3d.cn/terrain"
      })
      break
    case "arcgis": // ArcGIS地形服务
      map.terrainProvider = mars3d.LayerUtil.createTerrainProvider({
        type: "arcgis",
        url: "https://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"
      })
      break
    case "ion": // cesium官方ion在线服务
      globalMsg("ION服务在国外，加载略慢，请耐心等候。")
      map.terrainProvider = mars3d.LayerUtil.createTerrainProvider({
        type: "ion",
        requestWaterMask: true,
        requestVertexNormals: true
      })
      break
    case "gee": // 谷歌地球企业服务
      map.terrainProvider = mars3d.LayerUtil.createTerrainProvider({
        type: "gee",
        url: "http://www.earthenterprise.org/3d",
        proxy: "//server.mars3d.cn/proxy/"
      })
      break
    case "vr": // vr地形服务
      map.terrainProvider = mars3d.LayerUtil.createTerrainProvider({
        type: "vr",
        url: "https://www.vr-theworld.com/vr-theworld/tiles1.0.0/73/"
      })
      break
  }
}

// 可以开启和关闭地形
function enabledTerrain(val) {
  map.hasTerrain = val
}
// 三角网
function enabledSanjiaowang(val) {
  map.scene.globe._surface.tileProvider._debug.wireframe = val
}