/**
 * Mars3D平台插件,结合heatmap可视化功能插件  mars3d-heatmap
 *
 * 版本信息：v3.4.4
 * 编译日期：2022-08-15 14:54:28
 * 版权所有：Copyright by 火星科技  http://mars3d.cn
 * 使用单位：免费公开版 ，2022-06-01
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, (window.mars3d || require('mars3d')), (window.h337 || require('@mars3d/heatmap.js'))) :
  typeof define === 'function' && define.amd ? define(['exports', 'mars3d', '@mars3d/heatmap.js'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["mars3d-heatmap"] = {}, global.mars3d, global.h337));
})(this, (function (exports, mars3d, h337) { 
'use strict';var _0x54b500=_0x4d2b;(function(_0x34f82,_0x5b4825){var _0x54aa4d=_0x4d2b,_0x47486=_0x34f82();while(!![]){try{var _0x534a38=parseInt(_0x54aa4d(0x14c))/0x1*(parseInt(_0x54aa4d(0x1a4))/0x2)+parseInt(_0x54aa4d(0x15a))/0x3*(-parseInt(_0x54aa4d(0x182))/0x4)+-parseInt(_0x54aa4d(0x1c9))/0x5+-parseInt(_0x54aa4d(0x164))/0x6+-parseInt(_0x54aa4d(0x17f))/0x7*(parseInt(_0x54aa4d(0x1a2))/0x8)+-parseInt(_0x54aa4d(0x166))/0x9+parseInt(_0x54aa4d(0x14e))/0xa*(parseInt(_0x54aa4d(0x185))/0xb);if(_0x534a38===_0x5b4825)break;else _0x47486['push'](_0x47486['shift']());}catch(_0x3c0774){_0x47486['push'](_0x47486['shift']());}}}(_0x49c5,0xb7e68));function _interopNamespace(_0x465c8e){var _0x5b99c0=_0x4d2b;if(_0x465c8e&&_0x465c8e[_0x5b99c0(0x154)])return _0x465c8e;var _0x14d1bf=Object['create'](null);return _0x465c8e&&Object['keys'](_0x465c8e)[_0x5b99c0(0x17c)](function(_0x1989fc){var _0x138ec4=_0x5b99c0;if(_0x1989fc!==_0x138ec4(0x16c)){var _0x317fac=Object[_0x138ec4(0x14a)](_0x465c8e,_0x1989fc);Object[_0x138ec4(0x181)](_0x14d1bf,_0x1989fc,_0x317fac[_0x138ec4(0x184)]?_0x317fac:{'enumerable':!![],'get':function(){return _0x465c8e[_0x1989fc];}});}}),_0x14d1bf['default']=_0x465c8e,_0x14d1bf;}var mars3d__namespace=_interopNamespace(mars3d),h337__namespace=_interopNamespace(h337);function _0x4d2b(_0xee74f5,_0x599780){var _0x49c502=_0x49c5();return _0x4d2b=function(_0x4d2b1a,_0x1a227c){_0x4d2b1a=_0x4d2b1a-0x12f;var _0x111e5e=_0x49c502[_0x4d2b1a];if(_0x4d2b['JLJrEF']===undefined){var _0x1e2388=function(_0x465c8e){var _0x14d1bf='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x1989fc='',_0x317fac='';for(var _0x52968c=0x0,_0x84f33d,_0x2c3026,_0x1d1aad=0x0;_0x2c3026=_0x465c8e['charAt'](_0x1d1aad++);~_0x2c3026&&(_0x84f33d=_0x52968c%0x4?_0x84f33d*0x40+_0x2c3026:_0x2c3026,_0x52968c++%0x4)?_0x1989fc+=String['fromCharCode'](0xff&_0x84f33d>>(-0x2*_0x52968c&0x6)):0x0){_0x2c3026=_0x14d1bf['indexOf'](_0x2c3026);}for(var _0x5abc54=0x0,_0x13d3b0=_0x1989fc['length'];_0x5abc54<_0x13d3b0;_0x5abc54++){_0x317fac+='%'+('00'+_0x1989fc['charCodeAt'](_0x5abc54)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x317fac);};_0x4d2b['DWvjlH']=_0x1e2388,_0xee74f5=arguments,_0x4d2b['JLJrEF']=!![];}var _0x3d99c3=_0x49c502[0x0],_0x1620ee=_0x4d2b1a+_0x3d99c3,_0x2b5dbf=_0xee74f5[_0x1620ee];return!_0x2b5dbf?(_0x111e5e=_0x4d2b['DWvjlH'](_0x111e5e),_0xee74f5[_0x1620ee]=_0x111e5e):_0x111e5e=_0x2b5dbf,_0x111e5e;},_0x4d2b(_0xee74f5,_0x599780);}function ownKeys(_0x52968c,_0x84f33d){var _0x200ee0=_0x4d2b,_0x2c3026=Object[_0x200ee0(0x172)](_0x52968c);if(Object[_0x200ee0(0x188)]){var _0x1d1aad=Object[_0x200ee0(0x188)](_0x52968c);_0x84f33d&&(_0x1d1aad=_0x1d1aad[_0x200ee0(0x195)](function(_0x5abc54){var _0x44feb7=_0x200ee0;return Object['getOwnPropertyDescriptor'](_0x52968c,_0x5abc54)[_0x44feb7(0x17e)];})),_0x2c3026['push'][_0x200ee0(0x1ac)](_0x2c3026,_0x1d1aad);}return _0x2c3026;}function _objectSpread2(_0x13d3b0){var _0x4cd92b=_0x4d2b;for(var _0x5055d2=0x1;_0x5055d2<arguments['length'];_0x5055d2++){var _0x55221b=null!=arguments[_0x5055d2]?arguments[_0x5055d2]:{};_0x5055d2%0x2?ownKeys(Object(_0x55221b),!0x0)[_0x4cd92b(0x17c)](function(_0x46d02a){_defineProperty(_0x13d3b0,_0x46d02a,_0x55221b[_0x46d02a]);}):Object['getOwnPropertyDescriptors']?Object[_0x4cd92b(0x155)](_0x13d3b0,Object[_0x4cd92b(0x145)](_0x55221b)):ownKeys(Object(_0x55221b))[_0x4cd92b(0x17c)](function(_0x3f8be7){var _0x244337=_0x4cd92b;Object[_0x244337(0x181)](_0x13d3b0,_0x3f8be7,Object[_0x244337(0x14a)](_0x55221b,_0x3f8be7));});}return _0x13d3b0;}function _classCallCheck(_0x1d5be3,_0x1f59bd){var _0x5eb43c=_0x4d2b;if(!(_0x1d5be3 instanceof _0x1f59bd))throw new TypeError(_0x5eb43c(0x16f));}function _defineProperties(_0x336614,_0x4f0322){var _0x401451=_0x4d2b;for(var _0x49c9b0=0x0;_0x49c9b0<_0x4f0322['length'];_0x49c9b0++){var _0x244931=_0x4f0322[_0x49c9b0];_0x244931[_0x401451(0x17e)]=_0x244931[_0x401451(0x17e)]||![],_0x244931[_0x401451(0x196)]=!![];if('value'in _0x244931)_0x244931[_0x401451(0x1aa)]=!![];Object[_0x401451(0x181)](_0x336614,_0x244931['key'],_0x244931);}}function _createClass(_0x24c98f,_0x3decff,_0x2b79e0){var _0x38ef1f=_0x4d2b;if(_0x3decff)_defineProperties(_0x24c98f[_0x38ef1f(0x199)],_0x3decff);if(_0x2b79e0)_defineProperties(_0x24c98f,_0x2b79e0);return Object[_0x38ef1f(0x181)](_0x24c98f,'prototype',{'writable':![]}),_0x24c98f;}function _defineProperty(_0x146da3,_0x55c5e1,_0x5c4f46){var _0x5f5690=_0x4d2b;return _0x55c5e1 in _0x146da3?Object[_0x5f5690(0x181)](_0x146da3,_0x55c5e1,{'value':_0x5c4f46,'enumerable':!![],'configurable':!![],'writable':!![]}):_0x146da3[_0x55c5e1]=_0x5c4f46,_0x146da3;}function _inherits(_0x46f71e,_0x3b3b65){var _0x293eda=_0x4d2b;if(typeof _0x3b3b65!==_0x293eda(0x17d)&&_0x3b3b65!==null)throw new TypeError(_0x293eda(0x1cd));_0x46f71e[_0x293eda(0x199)]=Object['create'](_0x3b3b65&&_0x3b3b65[_0x293eda(0x199)],{'constructor':{'value':_0x46f71e,'writable':!![],'configurable':!![]}}),Object[_0x293eda(0x181)](_0x46f71e,_0x293eda(0x199),{'writable':![]});if(_0x3b3b65)_setPrototypeOf(_0x46f71e,_0x3b3b65);}function _getPrototypeOf(_0x3c1882){var _0x55d9b7=_0x4d2b;return _getPrototypeOf=Object[_0x55d9b7(0x1a1)]?Object[_0x55d9b7(0x1a5)]:function _0x190f91(_0x26504f){var _0x2b84ab=_0x55d9b7;return _0x26504f[_0x2b84ab(0x19c)]||Object[_0x2b84ab(0x1a5)](_0x26504f);},_getPrototypeOf(_0x3c1882);}function _setPrototypeOf(_0x202d85,_0x40da28){var _0x594b7c=_0x4d2b;return _setPrototypeOf=Object[_0x594b7c(0x1a1)]||function _0x2306e6(_0x3600c9,_0x5f273c){var _0x20f457=_0x594b7c;return _0x3600c9[_0x20f457(0x19c)]=_0x5f273c,_0x3600c9;},_setPrototypeOf(_0x202d85,_0x40da28);}function _isNativeReflectConstruct(){var _0x205fe1=_0x4d2b;if(typeof Reflect===_0x205fe1(0x1a3)||!Reflect['construct'])return![];if(Reflect[_0x205fe1(0x15f)][_0x205fe1(0x1c3)])return![];if(typeof Proxy===_0x205fe1(0x17d))return!![];try{return Boolean['prototype']['valueOf'][_0x205fe1(0x198)](Reflect[_0x205fe1(0x15f)](Boolean,[],function(){})),!![];}catch(_0x9c3be6){return![];}}function _assertThisInitialized(_0x581cbb){var _0x59fc4d=_0x4d2b;if(_0x581cbb===void 0x0)throw new ReferenceError(_0x59fc4d(0x146));return _0x581cbb;}function _possibleConstructorReturn(_0x43c71b,_0x14a802){var _0x551312=_0x4d2b;if(_0x14a802&&(typeof _0x14a802===_0x551312(0x1ad)||typeof _0x14a802===_0x551312(0x17d)))return _0x14a802;else{if(_0x14a802!==void 0x0)throw new TypeError(_0x551312(0x1b8));}return _assertThisInitialized(_0x43c71b);}function _createSuper(_0x26062a){var _0x328bd4=_isNativeReflectConstruct();return function _0x4fbb37(){var _0x57c8e0=_0x4d2b,_0x23a997=_getPrototypeOf(_0x26062a),_0x1a40b9;if(_0x328bd4){var _0x310898=_getPrototypeOf(this)[_0x57c8e0(0x131)];_0x1a40b9=Reflect[_0x57c8e0(0x15f)](_0x23a997,arguments,_0x310898);}else _0x1a40b9=_0x23a997[_0x57c8e0(0x1ac)](this,arguments);return _possibleConstructorReturn(this,_0x1a40b9);};}var HeatMaterial=_0x54b500(0x162);if(!h337__namespace[_0x54b500(0x15c)])throw new Error(_0x54b500(0x1a8));var Cesium=mars3d__namespace['Cesium'],BaseLayer=mars3d__namespace['layer'][_0x54b500(0x14d)],DEF_HEATSTYLE={'maxOpacity':0.8,'minOpacity':0.1,'blur':0.85,'radius':0x19,'gradient':{0.4:_0x54b500(0x1b7),0.6:_0x54b500(0x169),0.8:'yellow',0.9:_0x54b500(0x190)}},DEF_STYLE={'arcRadiusScale':1.5,'arcBlurScale':1.5,'vertexFormat':Cesium[_0x54b500(0x1c4)]['VERTEX_FORMAT']},HeatLayer=function(_0xb35d72){var _0x4f871c=_0x54b500;_inherits(_0xab7a22,_0xb35d72);var _0x40e1d0=_createSuper(_0xab7a22);function _0xab7a22(){var _0x2fa520=_0x4d2b,_0x260d6d,_0x3b499b,_0x1ded6e,_0x529de5=arguments[_0x2fa520(0x153)]>0x0&&arguments[0x0]!==undefined?arguments[0x0]:{};return _classCallCheck(this,_0xab7a22),_0x1ded6e=_0x40e1d0['call'](this,_0x529de5),_0x1ded6e[_0x2fa520(0x16e)][_0x2fa520(0x18c)]=(_0x260d6d=_0x1ded6e['options'][_0x2fa520(0x18c)])!==null&&_0x260d6d!==void 0x0?_0x260d6d:document[_0x2fa520(0x134)][_0x2fa520(0x147)],_0x1ded6e[_0x2fa520(0x16e)][_0x2fa520(0x18c)]=Math['min'](_0x1ded6e[_0x2fa520(0x16e)][_0x2fa520(0x18c)],0x1388),_0x1ded6e[_0x2fa520(0x16e)]['minCanvasSize']=(_0x3b499b=_0x1ded6e['options'][_0x2fa520(0x1ce)])!==null&&_0x3b499b!==void 0x0?_0x3b499b:document[_0x2fa520(0x134)][_0x2fa520(0x174)],_0x1ded6e[_0x2fa520(0x16e)][_0x2fa520(0x1ce)]=Math[_0x2fa520(0x1ca)](_0x1ded6e['options']['minCanvasSize'],0x2bc),_0x1ded6e[_0x2fa520(0x16e)]['heatStyle']=_objectSpread2(_objectSpread2({},DEF_HEATSTYLE),_0x1ded6e['options']['heatStyle']||{}),_0x1ded6e[_0x2fa520(0x16e)][_0x2fa520(0x1bc)]=_objectSpread2(_objectSpread2({},DEF_STYLE),_0x1ded6e[_0x2fa520(0x16e)]['style']||{}),_0x1ded6e;}return _createClass(_0xab7a22,[{'key':_0x4f871c(0x161),'get':function _0x2a5cdd(){return this['_layer'];}},{'key':_0x4f871c(0x15d),'get':function _0x541285(){var _0x14ce60=_0x4f871c;return this[_0x14ce60(0x16e)][_0x14ce60(0x15d)];},'set':function _0x293c38(_0x19cf8b){var _0x351286=_0x4f871c;this[_0x351286(0x16e)][_0x351286(0x15d)]=mars3d__namespace[_0x351286(0x143)][_0x351286(0x16b)](this['options'][_0x351286(0x15d)],_0x19cf8b),this[_0x351286(0x163)]&&(this[_0x351286(0x163)][_0x351286(0x1b4)](this['options']['heatStyle']),this['_updatePositionsHook'](!![]));}},{'key':_0x4f871c(0x1bc),'get':function _0x1d74ac(){var _0x5ee19e=_0x4f871c;return this['options'][_0x5ee19e(0x1bc)];},'set':function _0x2a195b(_0x44359b){var _0x4d2c7a=_0x4f871c;this[_0x4d2c7a(0x16e)][_0x4d2c7a(0x1bc)]=mars3d__namespace[_0x4d2c7a(0x143)][_0x4d2c7a(0x16b)](this[_0x4d2c7a(0x16e)][_0x4d2c7a(0x1bc)],_0x44359b);}},{'key':_0x4f871c(0x144),'get':function _0x4b7564(){var _0x54227d=_0x4f871c;return this[_0x54227d(0x1b0)];},'set':function _0xb56687(_0x485353){var _0x23b3e8=_0x4f871c;this[_0x23b3e8(0x152)](_0x485353);}},{'key':'coordinates','get':function _0x2b5e2c(){var _0x1a20b8=_0x4f871c,_0x39ee43=[];return this[_0x1a20b8(0x1cc)][_0x1a20b8(0x17c)](function(_0x364306){var _0x518d9f=_0x1a20b8;_0x39ee43['push'](_0x364306[_0x518d9f(0x1af)]());}),_0x39ee43;}},{'key':_0x4f871c(0x187),'get':function _0x3e8ee0(){var _0x56ccd3=_0x4f871c;return this[_0x56ccd3(0x18f)];}},{'key':_0x4f871c(0x14b),'value':function _0x3f878d(_0x2e8bf2){var _0x5100d1=_0x4f871c;_0x2e8bf2[_0x5100d1(0x144)]&&(this['positions']=_0x2e8bf2[_0x5100d1(0x144)]);}},{'key':'_mountedHook','value':function _0x1ec6b3(){var _0x5c4ebe=_0x4f871c;this[_0x5c4ebe(0x1bf)]=new mars3d__namespace[(_0x5c4ebe(0x161))][(_0x5c4ebe(0x17a))]({'private':!![]});}},{'key':_0x4f871c(0x151),'value':function _0x520e93(){var _0x149ba2=_0x4f871c;this[_0x149ba2(0x189)][_0x149ba2(0x178)](this['_layer']),this[_0x149ba2(0x16e)]['positions']&&(this[_0x149ba2(0x144)]=this[_0x149ba2(0x16e)][_0x149ba2(0x144)]),this['options'][_0x149ba2(0x1b5)]&&this['flyToByAnimationEnd']();}},{'key':_0x4f871c(0x197),'value':function _0x547242(){var _0x5befd5=_0x4f871c;this[_0x5befd5(0x15d)][_0x5befd5(0x191)]&&(mars3d__namespace[_0x5befd5(0x18b)]['remove'](this['heatStyle'][_0x5befd5(0x191)]),delete this['heatStyle'][_0x5befd5(0x191)]),this['clear'](),this['_map'][_0x5befd5(0x16d)](this[_0x5befd5(0x1bf)]);}},{'key':'addPosition','value':function _0x381986(_0x39a2e9,_0x453082){var _0x407bad=_0x4f871c;this[_0x407bad(0x1b0)]=this['_positions']||[],this['_positions']['push'](_0x39a2e9),this[_0x407bad(0x19f)](_0x453082);}},{'key':'setPositions','value':function _0x4313ce(_0x337ed,_0x35310c){var _0xc2e544=_0x4f871c;this['_positions']=_0x337ed,this[_0xc2e544(0x19f)](_0x35310c);}},{'key':'clear','value':function _0x323e08(){var _0x59bafa=_0x4f871c;this[_0x59bafa(0x148)]&&(this['_layer'][_0x59bafa(0x149)](this[_0x59bafa(0x148)],!![]),delete this[_0x59bafa(0x148)]);}},{'key':_0x4f871c(0x19f),'value':function _0xafaaa1(_0x413b55){var _0x2184ee=_0x4f871c;if(!this['show']||!this[_0x2184ee(0x189)]||!this['positions']||this['positions'][_0x2184ee(0x153)]===0x0)return this;var _0x443dde=this[_0x2184ee(0x167)]();return this[_0x2184ee(0x1bc)][_0x2184ee(0x156)]?this[_0x2184ee(0x148)]&&_0x413b55?(this[_0x2184ee(0x148)]['uniforms']['image']=_0x443dde,this[_0x2184ee(0x148)][_0x2184ee(0x193)][_0x2184ee(0x173)]=this[_0x2184ee(0x1ba)]()):this[_0x2184ee(0x1c5)](_0x443dde):this['_graphic']&&_0x413b55?this[_0x2184ee(0x148)][_0x2184ee(0x193)][_0x2184ee(0x1ae)]=_0x443dde:this[_0x2184ee(0x165)](_0x443dde),this;}},{'key':_0x4f871c(0x165),'value':function _0x2b7af3(_0x5bbc1e){var _0xc3f9e0=_0x4f871c;this['clear'](),this[_0xc3f9e0(0x148)]=new mars3d__namespace['graphic']['RectanglePrimitive'](_objectSpread2(_objectSpread2({},this['options']),{},{'rectangle':this[_0xc3f9e0(0x18f)],'appearance':new Cesium['EllipsoidSurfaceAppearance']({'material':new Cesium[(_0xc3f9e0(0x13f))]({'fabric':{'uniforms':{'image':_0x5bbc1e},'source':HeatMaterial},'translucent':!![]}),'flat':!![]})})),this['_layer'][_0xc3f9e0(0x132)](this[_0xc3f9e0(0x148)]);}},{'key':_0x4f871c(0x1c5),'value':function _0x314096(_0x417510){var _0x55628d=_0x4f871c,_0x1f2a74;this[_0x55628d(0x19d)]();var _0x2cdf05=Cesium[_0x55628d(0x192)]['fromCache']({'cull':{'enabled':!![]},'depthTest':{'enabled':!![]},'stencilTest':{'enabled':!![],'frontFunction':Cesium[_0x55628d(0x1a6)][_0x55628d(0x138)],'frontOperation':{'fail':Cesium[_0x55628d(0x135)]['KEEP'],'zFail':Cesium[_0x55628d(0x135)]['KEEP'],'zPass':Cesium[_0x55628d(0x135)][_0x55628d(0x1c0)]},'backFunction':Cesium[_0x55628d(0x1a6)][_0x55628d(0x138)],'backOperation':{'fail':Cesium['StencilOperation'][_0x55628d(0x18a)],'zFail':Cesium[_0x55628d(0x135)]['KEEP'],'zPass':Cesium[_0x55628d(0x135)][_0x55628d(0x1c0)]},'reference':0x2,'mask':0x2},'blending':Cesium[_0x55628d(0x170)]['ALPHA_BLEND']}),_0x5e4582=Math[_0x55628d(0x1b2)]((_0x1f2a74=this[_0x55628d(0x1bc)]['diffHeight'])!==null&&_0x1f2a74!==void 0x0?_0x1f2a74:this['_mBoundsMax']*0.02)+0.1;this[_0x55628d(0x1bc)][_0x55628d(0x19e)]&&delete this[_0x55628d(0x1bc)][_0x55628d(0x19e)];var _0x42d0ea=(this[_0x55628d(0x1bc)][_0x55628d(0x1a7)],0x64),_0x507153=Math[_0x55628d(0x1ca)](this[_0x55628d(0x18f)][_0x55628d(0x142)],this[_0x55628d(0x18f)]['width']);this['style'][_0x55628d(0x12f)]=_0x507153/=_0x42d0ea,this[_0x55628d(0x148)]=new mars3d__namespace[(_0x55628d(0x1bd))]['RectanglePrimitive'](_objectSpread2(_objectSpread2({},this[_0x55628d(0x16e)]),{},{'rectangle':this[_0x55628d(0x18f)],'appearance':new Cesium[(_0x55628d(0x1c4))]({'aboveGround':!![],'renderState':_0x2cdf05,'material':new Cesium[(_0x55628d(0x13f))]({'fabric':{'uniforms':{'image':_0x417510,'repeat':new Cesium['Cartesian2'](0x1,0x1),'color':new Cesium['Color'](0x1,0x1,0x1,0.01),'bumpMap':this[_0x55628d(0x1ba)]()},'source':HeatMaterial},'translucent':!![]}),'vertexShaderSource':_0x55628d(0x179)[_0x55628d(0x194)](_0x5e4582,_0x55628d(0x141)),'flat':!![]})})),this['_layer'][_0x55628d(0x132)](this['_graphic']);}},{'key':_0x4f871c(0x19b),'value':function _0x62b597(_0x42b248){var _0x480576=_0x4f871c;return _0x42b248!==null&&_0x42b248!==void 0x0&&_0x42b248[_0x480576(0x186)]&&this[_0x480576(0x18f)]?mars3d__namespace['PolyUtil']['formatRectangle'](this['_rectangle']):this['_rectangle'];}},{'key':_0x4f871c(0x167),'value':function _0x57a6d2(){var _0x3d6dd3=_0x4f871c,_0x175007=this,_0xf1dec4,_0x2729db,_0x5b63fc,_0x105731,_0x231775=this[_0x3d6dd3(0x1b0)],_0x214d38=[],_0x184601,_0x2b30a9,_0x323fd9,_0x2f66ee;_0x231775['forEach'](function(_0x1a9176){var _0x2c0d9e=_0x3d6dd3,_0xe42ce3=mars3d__namespace[_0x2c0d9e(0x13c)][_0x2c0d9e(0x13e)](_0x1a9176);if(!_0xe42ce3)return;_0xe42ce3[_0x2c0d9e(0x1ab)]=_0x1a9176[_0x2c0d9e(0x1ab)]||0x1,!_0x175007['options'][_0x2c0d9e(0x187)]&&(_0x184601===undefined?(_0x184601=_0xe42ce3[_0x2c0d9e(0x136)],_0x2b30a9=_0xe42ce3[_0x2c0d9e(0x136)],_0x323fd9=_0xe42ce3[_0x2c0d9e(0x133)],_0x2f66ee=_0xe42ce3[_0x2c0d9e(0x133)]):(_0x184601=Math['min'](_0x184601,_0xe42ce3[_0x2c0d9e(0x136)]),_0x2b30a9=Math[_0x2c0d9e(0x1ca)](_0x2b30a9,_0xe42ce3[_0x2c0d9e(0x136)]),_0x323fd9=Math['min'](_0x323fd9,_0xe42ce3[_0x2c0d9e(0x133)]),_0x2f66ee=Math['max'](_0x2f66ee,_0xe42ce3[_0x2c0d9e(0x133)]))),_0x214d38[_0x2c0d9e(0x180)](_0xe42ce3);});var _0x6a20ac=this[_0x3d6dd3(0x16e)][_0x3d6dd3(0x187)]||{'xmin':_0x184601,'xmax':_0x2b30a9,'ymin':_0x323fd9,'ymax':_0x2f66ee},_0x10c164=getMercatorBounds(_0x6a20ac),_0x24b148=Math[_0x3d6dd3(0x16a)](_0x10c164[_0x3d6dd3(0x15b)]-_0x10c164['xmin']),_0x5f1dfa=Math[_0x3d6dd3(0x16a)](_0x10c164['ymax']-_0x10c164[_0x3d6dd3(0x157)]),_0x4c5e0d=Math[_0x3d6dd3(0x1ca)](_0x24b148,_0x5f1dfa),_0x5eb741=Math[_0x3d6dd3(0x1b9)](_0x24b148,_0x5f1dfa);this[_0x3d6dd3(0x158)]=_0x4c5e0d;var _0x3d2845=0x1;if(_0x4c5e0d>this[_0x3d6dd3(0x16e)]['maxCanvasSize'])_0x3d2845=_0x4c5e0d/this['options']['maxCanvasSize'],_0x5eb741/_0x3d2845<this[_0x3d6dd3(0x16e)][_0x3d6dd3(0x1ce)]&&(_0x3d2845=_0x5eb741/this['options'][_0x3d6dd3(0x1ce)]);else _0x5eb741<this[_0x3d6dd3(0x16e)][_0x3d6dd3(0x1ce)]&&(_0x3d2845=_0x5eb741/this[_0x3d6dd3(0x16e)][_0x3d6dd3(0x1ce)],_0x4c5e0d/_0x3d2845>this[_0x3d6dd3(0x16e)][_0x3d6dd3(0x18c)]&&(_0x3d2845=_0x4c5e0d/this['options'][_0x3d6dd3(0x18c)]));var _0x3fa2a3=this[_0x3d6dd3(0x15d)][_0x3d6dd3(0x14f)]*1.5,_0x109a09=_0x24b148/_0x3d2845+_0x3fa2a3*0x2,_0x4e453b=_0x5f1dfa/_0x3d2845+_0x3fa2a3*0x2,_0x429583=_0x3fa2a3*_0x3d2845;_0x10c164[_0x3d6dd3(0x168)]-=_0x429583,_0x10c164['ymin']-=_0x429583,_0x10c164['xmax']+=_0x429583,_0x10c164[_0x3d6dd3(0x130)]+=_0x429583,this[_0x3d6dd3(0x150)]=_0x3d2845,_0x6a20ac=geLatLngBounds(_0x10c164),this[_0x3d6dd3(0x18f)]=Cesium[_0x3d6dd3(0x1a9)][_0x3d6dd3(0x13b)](_0x6a20ac[_0x3d6dd3(0x168)],_0x6a20ac['ymin'],_0x6a20ac[_0x3d6dd3(0x15b)],_0x6a20ac[_0x3d6dd3(0x130)]);var _0x42ba91=(_0xf1dec4=_0x214d38[0x0][_0x3d6dd3(0x1ab)])!==null&&_0xf1dec4!==void 0x0?_0xf1dec4:0x1,_0x595ed4=(_0x2729db=_0x214d38[0x0][_0x3d6dd3(0x1ab)])!==null&&_0x2729db!==void 0x0?_0x2729db:0x0,_0x4405f6=[];_0x214d38[_0x3d6dd3(0x17c)](function(_0x2c0773){var _0x4866fa=_0x3d6dd3,_0x26b838=mars3d__namespace[_0x4866fa(0x1a0)][_0x4866fa(0x175)]([_0x2c0773['lng'],_0x2c0773[_0x4866fa(0x133)]]),_0x42dafe=_0x2c0773[_0x4866fa(0x1ab)]||0x1,_0x5edf22=Math[_0x4866fa(0x1cb)]((_0x26b838[0x0]-_0x10c164[_0x4866fa(0x168)])/_0x3d2845),_0x2ffb4b=Math['round']((_0x10c164[_0x4866fa(0x130)]-_0x26b838[0x1])/_0x3d2845);_0x42ba91=Math[_0x4866fa(0x1ca)](_0x42ba91,_0x42dafe),_0x595ed4=Math['min'](_0x595ed4,_0x42dafe),_0x4405f6[_0x4866fa(0x180)]({'x':_0x5edf22,'y':_0x2ffb4b,'value':_0x42dafe});});var _0x46c782={'min':(_0x5b63fc=this['options'][_0x3d6dd3(0x1b9)])!==null&&_0x5b63fc!==void 0x0?_0x5b63fc:_0x595ed4,'max':(_0x105731=this[_0x3d6dd3(0x16e)][_0x3d6dd3(0x1ca)])!==null&&_0x105731!==void 0x0?_0x105731:_0x42ba91,'data':_0x4405f6};this[_0x3d6dd3(0x139)]=_0x46c782;(!this[_0x3d6dd3(0x1b6)]||_0x10c164[_0x3d6dd3(0x168)]!==this[_0x3d6dd3(0x1b6)][_0x3d6dd3(0x168)]||_0x10c164[_0x3d6dd3(0x157)]!==this['_last_mBounds'][_0x3d6dd3(0x157)]||_0x10c164['xmax']!==this[_0x3d6dd3(0x1b6)][_0x3d6dd3(0x15b)]||_0x10c164[_0x3d6dd3(0x130)]!==this['_last_mBounds'][_0x3d6dd3(0x130)])&&(this[_0x3d6dd3(0x1b6)]=_0x10c164,!this[_0x3d6dd3(0x15d)][_0x3d6dd3(0x191)]&&(this[_0x3d6dd3(0x15d)][_0x3d6dd3(0x191)]=mars3d__namespace[_0x3d6dd3(0x18b)][_0x3d6dd3(0x15c)](_0x3d6dd3(0x183),'mars3d-heatmap\x20mars3d-hideDiv',this['_map'][_0x3d6dd3(0x191)])),this['heatStyle']['container'][_0x3d6dd3(0x1bc)][_0x3d6dd3(0x1c6)]=_0x3d6dd3(0x1c1)['concat'](_0x109a09,_0x3d6dd3(0x15e))['concat'](_0x4e453b,_0x3d6dd3(0x1b1)),!this[_0x3d6dd3(0x163)]?this['_heat']=h337__namespace[_0x3d6dd3(0x15c)](this[_0x3d6dd3(0x15d)]):this[_0x3d6dd3(0x163)]['configure'](this[_0x3d6dd3(0x15d)]));this[_0x3d6dd3(0x163)][_0x3d6dd3(0x19a)](_0x46c782);var _0x191f85=mars3d__namespace[_0x3d6dd3(0x18b)][_0x3d6dd3(0x18d)](this[_0x3d6dd3(0x163)][_0x3d6dd3(0x1b3)][_0x3d6dd3(0x13d)]);return _0x191f85;}},{'key':_0x4f871c(0x1ba),'value':function _0x3c4fa4(){var _0x463a51=_0x4f871c;this[_0x463a51(0x163)][_0x463a51(0x1b4)]({'radius':this[_0x463a51(0x15d)]['radius']*this['style'][_0x463a51(0x159)],'blur':this[_0x463a51(0x15d)][_0x463a51(0x137)]*this['style'][_0x463a51(0x176)],'gradient':this['heatStyle']['gradientArc']||{0.25:_0x463a51(0x17b),0.55:_0x463a51(0x177),0.85:_0x463a51(0x1c7),0x1:_0x463a51(0x171)}});var _0x1c42ef=mars3d__namespace[_0x463a51(0x18b)]['copyCanvas'](this[_0x463a51(0x163)][_0x463a51(0x1b3)][_0x463a51(0x13d)]);return this[_0x463a51(0x163)]['configure'](this[_0x463a51(0x16e)][_0x463a51(0x15d)]),_0x1c42ef;}},{'key':_0x4f871c(0x160),'value':function _0x3ba1f0(_0x16a2e5){var _0x206709=_0x4f871c,_0x3ab806=mars3d__namespace['LngLatPoint']['parse'](_0x16a2e5);if(!_0x3ab806)return{};var _0x29de56=mars3d__namespace['PointTrans'][_0x206709(0x175)]([_0x3ab806['lng'],_0x3ab806[_0x206709(0x133)]]),_0x4ad6bc=this[_0x206709(0x1b6)],_0xa71e3a=Math[_0x206709(0x1cb)]((_0x29de56[0x0]-_0x4ad6bc[_0x206709(0x168)])/this[_0x206709(0x150)]),_0x3eb12c=Math[_0x206709(0x1cb)]((_0x4ad6bc[_0x206709(0x130)]-_0x29de56[0x1])/this[_0x206709(0x150)]),_0x2cdfe2=this[_0x206709(0x163)][_0x206709(0x140)]({'x':_0xa71e3a,'y':_0x3eb12c}),_0x259660=this[_0x206709(0x163)][_0x206709(0x1b3)][_0x206709(0x1bb)]['getImageData'](_0xa71e3a-0x1,_0x3eb12c-0x1,0x1,0x1)[_0x206709(0x1c2)];return{'x':_0xa71e3a,'y':_0x3eb12c,'value':_0x2cdfe2,'color':_0x206709(0x1c8)+_0x259660[0x0]+','+_0x259660[0x1]+','+_0x259660[0x2]+','+_0x259660[0x3]+')'};}}]),_0xab7a22;}(BaseLayer);mars3d__namespace['layer'][_0x54b500(0x13a)]=HeatLayer,mars3d__namespace[_0x54b500(0x1be)]['register']('heat',HeatLayer);function getMercatorBounds(_0x500ac6){var _0x44abdc=_0x54b500,_0xa51c6=mars3d__namespace[_0x44abdc(0x1a0)]['lonlat2mercator']([_0x500ac6[_0x44abdc(0x168)],_0x500ac6[_0x44abdc(0x157)]]),_0x40237d=mars3d__namespace[_0x44abdc(0x1a0)][_0x44abdc(0x175)]([_0x500ac6[_0x44abdc(0x15b)],_0x500ac6[_0x44abdc(0x130)]]);return{'xmin':_0xa51c6[0x0],'ymin':_0xa51c6[0x1],'xmax':_0x40237d[0x0],'ymax':_0x40237d[0x1]};}function geLatLngBounds(_0x517fb2){var _0x1500d2=_0x54b500,_0x55462c=mars3d__namespace[_0x1500d2(0x1a0)][_0x1500d2(0x18e)]([_0x517fb2[_0x1500d2(0x168)],_0x517fb2['ymin']]),_0x52b42b=mars3d__namespace[_0x1500d2(0x1a0)]['mercator2lonlat']([_0x517fb2[_0x1500d2(0x15b)],_0x517fb2[_0x1500d2(0x130)]]);return{'xmin':_0x55462c[0x0],'ymin':_0x55462c[0x1],'xmax':_0x52b42b[0x0],'ymax':_0x52b42b[0x1]};}exports['HeatLayer']=HeatLayer,Object[_0x54b500(0x181)](exports,_0x54b500(0x154),{'value':!![]});function _0x49c5(){var _0x2f77eb=['CMvJDgfUz2XL','z2v0t3DUuhjVCgvYDhLtEw1IB2XZ','x21HCa','s0vfua','rg9TvxrPBa','Bwf4q2fUDMfZu2L6zq','y29WEunHBNzHCW','BwvYy2f0B3iYBg9UBgf0','x3jLy3rHBMDSzq','CMvK','y29UDgfPBMvY','uMvUzgvYu3rHDgu','Dw5PzM9YBxm','y29Uy2f0','zMLSDgvY','y29UzMLNDxjHyMXL','x3jLBw92zwriB29R','y2fSBa','ChjVDg90ExbL','C2v0rgf0yq','z2v0uMvJDgfUz2XL','x19WCM90B19F','y2XLyxi','zgLMzKHLAwDODa','x3vWzgf0zvbVC2L0Aw9UC0HVB2S','ug9PBNruCMfUCW','C2v0uhjVDg90ExbLt2y','mJGXotjUrxfmyMq','Dw5KzwzPBMvK','mKj1r3vQAW','z2v0uhjVDg90ExbLt2y','u3rLBMnPBez1BMn0Aw9U','C3bSAxroDw0','6k+35BYv5ywLigHLyxrTyxaUANmG5BQtia','uMvJDgfUz2XL','D3jPDgfIBgu','DMfSDwu','yxbWBhK','B2jQzwn0','Aw1Hz2u','Dg9bCNjHEq','x3bVC2L0Aw9UCW','ChG7','zMXVB3i','x3jLBMrLCMvY','y29UzMLNDxjL','zMX5vg8','x2XHC3rFBujVDw5KCW','yMX1zq','rgvYAxzLzcbJB25ZDhj1y3rVCNmGBwf5ig9UBhKGCMv0DxjUig9IAMvJDcbVCIb1BMrLzMLUzwq','BwLU','x2DLDefYy0HLyxrdyw52yxm','y3r4','C3r5Bgu','z3jHCgHPyW','tgf5zxjvDgLS','x2XHEwvY','uKvqtefdrq','D2LKDgG6','zgf0yq','C2HHBq','rwXSAxbZB2LKu3vYzMfJzufWCgvHCMfUy2u','x2nYzwf0zufYy0DYyxbOAwm','y3nZvgv4Da','CMDIkdiXnIWYmtySmJe2kq','CMDIysG','mtKZmJaXnvzxrMDQqW','Bwf4','CM91BMq','Cg9PBNrZ','u3vWzxiGzxHWCMvZC2LVBIbTDxn0igvPDgHLCIbIzsbUDwXSig9YigeGzNvUy3rPB24','BwLUq2fUDMfZu2L6zq','z3jHBNvSyxjPDhK','Ew1HEa','y29UC3rYDwn0B3i','ywrKr3jHCgHPyW','Bgf0','yM9KEq','u3rLBMnPBe9WzxjHDgLVBG','Bg5N','yMX1CG','quXxqvLt','x2XHC3rFAgvHDerHDge','sgvHDeXHEwvY','zNjVBurLz3jLzxm','tg5Ntgf0ug9PBNq','y2fUDMfZ','CgfYC2u','twf0zxjPywW','z2v0vMfSDwvbDa','oWOGicaGicaGicaGicbWicS9DMvJncHKAxnqB3mSmc4WktSkicaGicaGicaGicaGz2XFug9ZAxrPB24GpsbJEM1FBw9KzwXwAwv3uhjVAMvJDgLVBLjLBgf0AxzLvg9fEwuGkIbWoWOGicaGicaGicaGFqOGicaGicaGia','AgvPz2H0','vxrPBa','Cg9ZAxrPB25Z','z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9YCW','DgHPCYbOyxnUj3qGyMvLBIbPBML0AwfSAxnLzcaTihn1CgvYkcKGAgfZBID0igjLzw4Gy2fSBgvK','y2XPzw50v2LKDgG','x2DYyxbOAwm','CMvTB3zLr3jHCgHPyW','z2v0t3DUuhjVCgvYDhLezxnJCMLWDg9Y','x3nLDe9WDgLVBNniB29R','nJiXotKYzKrHEunT','qMfZzuXHEwvY','mtu0mejUzwTfCq','CMfKAxvZ','x3nJywXL','x2fKzgvKsg9VAW','C2v0ug9ZAxrPB25Z','BgvUz3rO','x19LC01VzhvSzq','zgvMAw5LuhjVCgvYDgLLCW','yxjJ','Ew1PBG','x21cB3vUzhnnyxG','yxjJuMfKAxvZu2nHBgu','ndK4nMjgENrNAa','Eg1HEa','y3jLyxrL','AgvHDfn0EwXL','ChG7AgvPz2H0oG','y29UC3rYDwn0','z2v0ug9PBNreyxrH','Bgf5zxi','Dw5PzM9YBsbZyw1WBgvYmKqGAw1Hz2u7cGPJEM1FBwf0zxjPywWGy3PTx2DLDe1HDgvYAwfSkgn6Bv9TyxrLCMLHBeLUChv0ig1HDgvYAwfSsw5WDxqPihSkicbJEM1FBwf0zxjPywWGBwf0zxjPywWGpsbJEM1Fz2v0rgvMyxvSDe1HDgvYAwfSkg1HDgvYAwfSsw5WDxqPoWOGihzLyZiGC3qGpsbTyxrLCMLHBeLUChv0lNn0oWOGihzLyZqGy29SB3jjBwfNzsa9ihrLEhr1CMuYrcHPBwfNzsWGC3qPoWOGigLMkgnVBg9Ysw1Hz2uUCMDIid09ihzLyZmOms4Wksb8FcbJB2XVCKLTywDLlNjNyIa9psb2zwmZkdaUmcKPihSkicaGigrPC2nHCMq7cIaGFqOGig1HDgvYAwfSlMrPzMz1C2uGpsbJB2XVCKLTywDLlNjNyJSkicbTyxrLCMLHBc5HBhbOysa9ignVBg9Ysw1Hz2uUytSkicbYzxr1CM4GBwf0zxjPywW7cN0k','x2HLyxq','mZmYmZe5mgHPBMzACq','x2nYzwf0zuDYyxbOAwm','mtG0mdyYnNn0s0zWBG','x2DLDeHLyxrdyw52yxm','Eg1PBG','z3jLzw4','ywjZ','BwvYz2u','zgvMyxvSDa','CMvTB3zLtgf5zxi','B3b0Aw9UCW','q2fUBM90ignHBgWGysbJBgfZCYbHCYbHigz1BMn0Aw9U','qMXLBMrPBMDtDgf0zq','CMDIkdi1nsWYntuSmJu1kq','A2v5CW','yNvTCe1HCa','y2XPzw50sgvPz2H0','Bg9UBgf0mM1LCMnHDg9Y','yxjJqMX1CLnJywXL','CMDIkde0mcWXndaSmtqWkq','ywrKtgf5zxi','yxr0CMLIDxrLihzLyZmGCg9ZAxrPB24ZreHPz2G7cIaGicaGicaGicbHDhrYAwj1DguGDMvJmYbWB3nPDgLVBJnetg93oWOGicaGicaGicaGyxr0CMLIDxrLihzLyZiGC3q7cIaGicaGicaGicbHDhrYAwj1DguGzMXVyxqGyMf0y2HjzdSkicaGicaGicaGihvUAwzVCM0GC2fTCgXLCJjeigj1BxbnyxbFmZSkicaGicaGicaGihzHCNLPBMCGDMvJmYb2x3bVC2L0Aw9Utum7cIaGicaGicaGicb2yxj5Aw5NihzLyZmGDL9WB3nPDgLVBKvdoWOGicaGicaGicaGDMfYEwLUzYb2zwmYihzFC3q7cGOGicaGicaGicaGDM9PzcbTywLUkcKkicaGicaGicaGihSkicaGicaGicaGicaGDMvJncbWid0Gy3PTx2nVBxb1DgvqB3nPDgLVBIGPoWOGicaGicaGicaGicb2x3bVC2L0Aw9UtumGpsbWB3nPDgLVBJnesgLNAcaRihbVC2L0Aw9Um0rmB3C7cIaGicaGicaGicaGihzFCg9ZAxrPB25fqYa9icHJEM1FBw9KzwXwAwv3uMvSyxrPDMvuB0v5zsaQihaPlNH5EJSkicaGicaGicaGicaGDL9ZDca9ihn0oWOGicaGicaGicaGicb2zwm0ignVBg9Yid0GDgv4DhvYztjekgj1BxbnyxbFmYWGDL9ZDcK7cIaGicaGicaGicaGigzSB2f0ignLBNrLCKj1BxaGpsbKAxn0yw5JzsH2zwmZkdaUmcKSy29SB3iUCMDIktSkicaGicaGicaGicaGDMvJmYb1CerPCIa9ig5VCM1HBgL6zsH2x3bVC2L0Aw9UtumUEhL6ktSkicaGicaGicaGicaGDMvJmYbKAxnqB3mGpsb1CerPCIaQignLBNrLCKj1BxaGkIa','r3jHCgHPy0XHEwvY','CMDIkdaSmcWWkq','zM9YrwfJAa','zNvUy3rPB24','zw51BwvYywjSzq','oty2vfDbzxzK','ChvZAa','zgvMAw5LuhjVCgvYDhK','ody0B0HWsNzp','zgL2','z2v0','mtuXnti1zw9qCgPx','AxngB3jTyxq'];_0x49c5=function(){return _0x2f77eb;};return _0x49c5();}
}));
