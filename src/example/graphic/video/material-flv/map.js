import * as mars3d from "mars3d"
import { $message } from "@mars/components/mars-ui/index"

let map // mars3d.Map三维地图对象
export let graphicLayer // 矢量图层对象
let videoElement

// 需要覆盖config.json中地图属性参数（当前示例框架中自动处理合并）
export const mapOptions = {
  scene: {
    // 此处参数会覆盖config.json中的对应配置
    center: { lat: 28.441587, lng: 119.482898, alt: 222, heading: 227, pitch: -28 }
  }
}
/**
 * 初始化地图业务，生命周期钩子函数（必须）
 * 框架在地图初始化完成后自动调用该函数
 * @param {mars3d.Map} mapInstance 地图对象
 * @returns {void} 无
 */
export function onMounted(mapInstance) {
  map = mapInstance // 记录首次创建的map

  // 添加参考三维模型
  const tiles3dLayer = new mars3d.layer.TilesetLayer({
    name: "县城社区",
    url: "//data.mars3d.cn/3dtiles/qx-shequ/tileset.json",
    position: { alt: 11.5 },
    maximumScreenSpaceError: 1,
    maximumMemoryUsage: 1024
  })
  map.addLayer(tiles3dLayer)

  // 允许编辑
  map.graphicLayer.hasEdit = true

  // 创建矢量数据图层
  graphicLayer = new mars3d.layer.GraphicLayer()
  map.addLayer(graphicLayer)

  bindLayerEvent() // 对图层绑定相关事件
  bindLayerPopup() // 在图层上绑定popup,对所有加到这个图层的矢量数据都生效
  bindLayerContextMenu() // 在图层绑定右键菜单,对所有加到这个图层的矢量数据都生效

  createVideoDom()

  // 加一些演示数据
  addDemoGraphic1()
  addDemoGraphic2()
}

/**
 * 释放当前地图业务的生命周期函数
 * @returns {void} 无
 */
export function onUnmounted() {
  map = null
}

function createVideoDom() {
  videoElement = mars3d.DomUtil.create("video", "", document.body)
  videoElement.setAttribute("muted", "muted")
  videoElement.setAttribute("autoplay", "autoplay")
  videoElement.setAttribute("loop", "loop")
  videoElement.setAttribute("crossorigin", "")
  videoElement.setAttribute("controls", "")
  videoElement.style.display = "none"

  if (window.flvjs.isSupported()) {
    const flvPlayer = window.flvjs.createPlayer({
      type: "flv",
      url: "http://img.ksbbs.com/asset/Mon_1704/15868902d399b87.flv"
    })
    flvPlayer.attachMediaElement(videoElement)
    flvPlayer.load()
    flvPlayer.play()
  } else {
    $message("不支持flv格式视频")
  }
}

// 竖立视频
function addDemoGraphic1() {
  const graphic = new mars3d.graphic.PolygonEntity({
    positions: [
      [119.481299, 28.439988, 140],
      [119.481162, 28.440102, 140],
      [119.481163, 28.440101, 130],
      [119.481296, 28.439986, 130]
    ],
    style: {
      material: videoElement,
      stRotationDegree: 0 // 视频旋转角度
    },
    attr: { remark: "示例1" }
  })
  graphicLayer.addGraphic(graphic)
}

// 地面视频
function addDemoGraphic2() {
  const graphic = new mars3d.graphic.PolygonEntity({
    positions: [
      [119.481749, 28.440171],
      [119.481385, 28.440457],
      [119.481911, 28.44094],
      [119.482254, 28.440653]
    ],
    style: {
      material: videoElement,
      stRotationDegree: 130, // 视频旋转角度
      clampToGround: true
    },
    attr: { remark: "示例2" }
  })
  graphicLayer.addGraphic(graphic)
}

let rotation = 0

function getRotationValue() {
  return rotation
}

export function drawRectangle() {
  graphicLayer.startDraw({
    type: "rectangle",
    style: {
      color: "#ffff00",
      opacity: 0.2,
      clampToGround: true
    },
    success: function (graphic) {
      graphic.entityGraphic.material = videoElement

      graphic.entityGraphic.rotation = new Cesium.CallbackProperty(getRotationValue, false)
      graphic.entityGraphic.stRotation = new Cesium.CallbackProperty(getRotationValue, false)
    }
  })
}

/**
 * 绘制这个polygon的时候，点的绘制顺序和面的角度不同，会使画面翻转
 *
 * @export
 * @param {boolean} clampToGround  是否贴地 clampToGround = true/false
 * @returns {void}
 */
export function drawPolygon(clampToGround) {
  graphicLayer.startDraw({
    type: "polygon",
    style: {
      color: "#ffff00",
      opacity: 0.2,
      clampToGround: clampToGround
    },
    success: function (graphic) {
      graphic.entityGraphic.material = videoElement
      graphic.entityGraphic.stRotation = new Cesium.CallbackProperty(getRotationValue, false)
    }
  })
}

// 播放暂停
export function videoPlay() {
  videoElement.play()
}
export function videoStop() {
  videoElement.pause()
}

export function removeAll() {
  map.graphicLayer.clear()
  graphicLayer.clear()
}

/**
 * 方向改变
 *
 * @export
 * @param {number} value  范围在0-360°
 * @returns {void}
 */
export function angleChange(value) {
  rotation = Cesium.Math.toRadians(value)
}

// 在图层级处理一些事物
function bindLayerEvent() {
  // 在layer上绑定监听事件
  graphicLayer.on(mars3d.EventType.click, function (event) {
    console.log("监听layer，单击了矢量对象", event)
  })
  /* graphicLayer.on(mars3d.EventType.mouseOver, function (event) {
    console.log("监听layer，鼠标移入了矢量对象", event)
  })
  graphicLayer.on(mars3d.EventType.mouseOut, function (event) {
    console.log("监听layer，鼠标移出了矢量对象", event)
  }) */
}

// 在图层绑定Popup弹窗
export function bindLayerPopup() {
  graphicLayer.bindPopup(function (event) {
    const attr = event.graphic.attr || {}
    attr["类型"] = event.graphic.type
    attr["来源"] = "我是layer上绑定的Popup"
    attr["备注"] = "我支持鼠标交互"

    return mars3d.Util.getTemplateHtml({ title: "矢量图层", template: "all", attr: attr })
  })
}

// 绑定右键菜单
export function bindLayerContextMenu() {
  graphicLayer.bindContextMenu([
    {
      text: "开始编辑对象",
      iconCls: "fa fa-edit",
      show: function (e) {
        const graphic = e.graphic
        if (!graphic || !graphic.startEditing) {
          return false
        }
        return !graphic.isEditing
      },
      callback: function (e) {
        const graphic = e.graphic
        if (!graphic) {
          return false
        }
        if (graphic) {
          graphicLayer.startEditing(graphic)
        }
      }
    },
    {
      text: "停止编辑对象",
      iconCls: "fa fa-edit",
      show: function (e) {
        const graphic = e.graphic
        if (!graphic) {
          return false
        }
        return graphic.isEditing
      },
      callback: function (e) {
        const graphic = e.graphic
        if (!graphic) {
          return false
        }
        if (graphic) {
          graphicLayer.stopEditing(graphic)
        }
      }
    },
    {
      text: "删除对象",
      iconCls: "fa fa-trash-o",
      show: (event) => {
        const graphic = event.graphic
        if (!graphic || graphic.isDestroy) {
          return false
        } else {
          return true
        }
      },
      callback: function (e) {
        const graphic = e.graphic
        if (!graphic) {
          return
        }
        graphicLayer.removeGraphic(graphic)
      }
    }
  ])
}