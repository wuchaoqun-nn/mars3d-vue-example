/**
 * 第3方公共类库配置文件
 *
 * @copyright 火星科技 mars3d.cn
 * @author 木遥 2021-11-26
 */

var isLocal = true //是否使用本地lib

if (isLocal) {
  //lib类库管理js
  window.configLibs = {
    //////////////////////////mars3d及其插件////////////////////////
    mars3d: [
      // 三维地球“主库”
      "Cesium/Widgets/widgets.css", // cesium
      "Cesium/Cesium.js",
      "turf/turf.min.js",
      "mars3d/mars3d.css", // mars3d
      "mars3d/mars3d.js"
    ],
    "mars3d-space": [
      // 卫星插件
      "mars3d/plugins/space/mars3d-space.js"
    ],
    "mars3d-echarts": [
      // echarts支持插件
      "echarts/echarts.min.js",
      "echarts/echarts-gl/echarts-gl.min.js",
      "mars3d/plugins/echarts/mars3d-echarts.js"
    ],
    "mars3d-mapv": [
      // mapv支持插件
      "mapV/mapv.min.js",
      "mars3d/plugins/mapv/mars3d-mapv.js"
    ],
    "mars3d-heatmap": [
      // heatmap热力图支持插件
      "mars3d/plugins/heatmap/heatmap.min.js",
      "mars3d/plugins/heatmap/mars3d-heatmap.js"
    ],
    "mars3d-wind": [
      // 风场图层插件
      "mars3d/plugins/wind/netcdfjs.js", // m10_windLayer解析nc
      "mars3d/plugins/wind/mars3d-wind.js"
    ],
    "mars3d-tdt": [
      // 天地图三维
      "mars3d/plugins/tdt/mars3d-tdt.js"
    ],

    //////////////////////////cesium相关第3方插件////////////////////////
    "cesium-pbf": [
      // pbf矢量瓦片支持
      "mars3d/thirdParty/pbf/ol.js",
      "mars3d/thirdParty/pbf/olms.js",
      "mars3d/thirdParty/pbf/mvt.js",
      "mars3d/thirdParty/pbf/style/MapboxStreetsV6.js"
    ],
    "cesium-weiVectorTile": [
      // 项目矢量瓦片方式加载GeoJson插件
      "mars3d/thirdParty/weiVectorTile/CesiumVectorTile.min.js",
      "mars3d/thirdParty/weiVectorTile/WeiVectorTileLayer.js"
    ],
    "cesium-meshVisualizer": [
      //ammo物理引擎支持
      "three/three.js",
      "ammo/ammo.js",
      "ammo/ex/ConvexObjectBreaker.js", //仅convexBreak使用
      "ammo/ex/QuickHull.js", //仅convexBreak使用
      "ammo/ex/geometries/ConvexGeometry.js", //仅convexBreak使用
      "mars3d/thirdParty/meshVisualizer/CesiumMeshVisualizer.js"
    ],

    //////////////////////////mars2d及其插件////////////////////////

    mars2d: [
      "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css", //leaflet
      "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",
      "https://cdn.jsdelivr.net/npm/mars2d@3.0.0/dist/mars2d.css", //mars2d
      "https://cdn.jsdelivr.net/npm/mars2d@3.0.0/dist/mars2d.js",
      "https://cdn.jsdelivr.net/npm/mars2d-esri@3.0.0/dist/mars2d-esri.js"
    ],


    //////////////////////////其他地图渲染相关库////////////////////////
    echarts: ["echarts/echarts.min.js", "echarts/dark.js"],
    "echarts-gl": ["echarts/echarts.min.js", "echarts/echarts-gl/echarts-gl.min.js"],
    "echarts-liquidfill": ["echarts/echarts.min.js", "echarts/echarts-liquidfill/echarts-liquidfill.js"],
    terraformer: ["terraformer/terraformer-1.0.9.min.js", "terraformer/terraformer-wkt-parser-1.2.0.min.js"],
    kmlGeojson: [
      // 项目KML/KMZ解析加载GeoJson插件
      "kml/kml-geojson.js"
    ],
    kriging: ["kriging/kriging.min.js"],
    three: ["three/three.js"],
    olcesium: ["ol/ol.css", "ol/ol.js", "ol/ol-cesium/olcesium.js"],
    hls: ["video/hls/hls.js", "video/hls/hls.js.map"],
    datgui: ["datgui/dat.gui.min.js"]
  }
} else {
  //lib类库管理js CDN版本
  window.configLibs = {
    //////////////////////////mars3d及其插件////////////////////////
    mars3d: [
      // 三维地球“主库”
      "https://cdn.jsdelivr.net/npm/mars3d-cesium@1.87.0/Build/Cesium/Widgets/widgets.css", // cesium
      "https://cdn.jsdelivr.net/npm/mars3d-cesium@1.87.0/Build/Cesium/Cesium.js",
      "https://unpkg.com/@turf/turf/turf.min.js",
      // "https://cdn.jsdelivr.net/npm/mars3d@3.1.12/dist/mars3d.css", // mars3d npm稳定版
      // "https://cdn.jsdelivr.net/npm/mars3d@3.1.12/dist/mars3d.js"
      "https://mars3d.cn/lib/mars3d/mars3d.css", //mars3d 最新开发版
      "https://mars3d.cn/lib/mars3d/mars3d.js"
    ],
    "mars3d-space": [
      // 卫星插件
      "https://cdn.jsdelivr.net/npm/mars3d-space@3.1.12/dist/mars3d-space.js"
    ],
    "mars3d-echarts": [
      // echarts支持插件
      "https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js",
      "https://cdn.jsdelivr.net/npm/echarts-gl/dist/echarts-gl.min.js",
      "https://cdn.jsdelivr.net/npm/mars3d-echarts@3.1.12/dist/mars3d-echarts.js"
    ],
    "mars3d-mapv": [
      // mapv支持插件
      "https://cdn.jsdelivr.net/npm/mapv/build/mapv.min.js",
      "https://cdn.jsdelivr.net/npm/mars3d-mapv@3.1.12/dist/mars3d-mapv.js"
    ],
    "mars3d-heatmap": [
      // heatmap热力图支持插件
      "https://mars3d.cn/lib/mars3d/plugins/heatmap/heatmap.min.js",
      "https://cdn.jsdelivr.net/npm/mars3d-heatmap@3.1.12/dist/mars3d-heatmap.js"
    ],
    "mars3d-wind": [
      // 风场图层插件
      "https://mars3d.cn/lib/mars3d/plugins/wind/netcdfjs.js", // m10_windLayer解析nc
      "https://cdn.jsdelivr.net/npm/mars3d-wind@3.1.12/dist/mars3d-wind.js"
    ],
    "mars3d-tdt": [
      // 天地图三维
      "https://cdn.jsdelivr.net/npm/mars3d-tdt@3.1.12/dist/mars3d-tdt.js"
    ],

    //////////////////////////mars2d及其插件////////////////////////

    mars2d: [
      "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css", //leaflet
      "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js",
      "https://cdn.jsdelivr.net/npm/mars2d@3.0.0/dist/mars2d.css", //mars2d
      "https://cdn.jsdelivr.net/npm/mars2d@3.0.0/dist/mars2d.js",
      "https://cdn.jsdelivr.net/npm/mars2d-esri@3.0.0/dist/mars2d-esri.js"
    ],

    //////////////////////////cesium相关第3方插件////////////////////////
    "cesium-pbf": [
      // pbf矢量瓦片支持
      "https://mars3d.cn/lib/mars3d/thirdParty/pbf/ol.js",
      "https://mars3d.cn/lib/mars3d/thirdParty/pbf/olms.js",
      "https://mars3d.cn/lib/mars3d/thirdParty/pbf/mvt.js",
      "https://mars3d.cn/lib/mars3d/thirdParty/pbf/style/MapboxStreetsV6.js"
    ],
    "cesium-weiVectorTile": [
      // 项目矢量瓦片方式加载GeoJson插件
      "https://mars3d.cn/lib/mars3d/thirdParty/weiVectorTile/CesiumVectorTile.min.js",
      "https://mars3d.cn/lib/mars3d/thirdParty/weiVectorTile/WeiVectorTileLayer.js"
    ],
    "cesium-meshVisualizer": [
      //ammo物理引擎支持
      "https://cdn.jsdelivr.net/npm/three@0.86.0/build/three.min.js",
      "https://mars3d.cn/lib/ammo/ammo.js",
      "https://mars3d.cn/lib/ammo/ex/ConvexObjectBreaker.js", //仅convexBreak使用
      "https://mars3d.cn/lib/ammo/ex/QuickHull.js", //仅convexBreak使用
      "https://mars3d.cn/lib/ammo/ex/geometries/ConvexGeometry.js", //仅convexBreak使用
      "https://mars3d.cn/lib/mars3d/thirdParty/meshVisualizer/CesiumMeshVisualizer.js"
    ],

    //////////////////////////其他地图渲染相关库////////////////////////
    echarts: [
      "https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js",
      "https://cdn.jsdelivr.net/npm/echarts-gl/dist/echarts-gl.min.js",
      "https://mars3d.cn/lib/echarts/dark.js"
    ],
    "echarts-gl": ["https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js", "https://cdn.jsdelivr.net/npm/echarts-gl/dist/echarts-gl.min.js"],
    "echarts-liquidfill": [
      "https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js",
      "https://cdn.jsdelivr.net/npm/echarts-liquidfill/dist/echarts-liquidfill.min.js"
    ],
    terraformer: [
      "https://cdn.jsdelivr.net/npm/terraformer/terraformer.js",
      "https://cdn.jsdelivr.net/npm/terraformer-wkt-parser/terraformer-wkt-parser.min.js"
    ],
    kmlGeojson: [
      //KML/KMZ解析加载GeoJson插件
      "https://mars3d.cn/lib/kml/kml-geojson.js"
    ],
    kriging: ["https://cdn.jsdelivr.net/npm/@sakitam-gis/kriging@0.1.0/dist/kriging.js"],
    three: ["https://cdn.jsdelivr.net/npm/three@0.86.0/build/three.min.js"],
    olcesium: [
      "https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.9.0/css/ol.css",
      "https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.9.0/build/ol.js",
      "https://mars3d.cn/lib/ol/ol-cesium/olcesium.js"
    ],
    hls: ["https://cdn.jsdelivr.net/npm/hls.js@latest"],
    datgui: ["https://cdn.jsdelivr.net/npm/dat.gui@0.7.7/build/dat.gui.min.js"]
  }
}