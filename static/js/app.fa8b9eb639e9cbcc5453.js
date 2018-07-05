webpackJsonp([0],{

/***/ "/hBm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("85RD");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'logout',
  data: function data() {
    return {
      isShowMsg: false,
      buttons: [{
        type: 'primary',
        text: '跳转页面',
        link: '/login'
      }]
    };
  },

  components: {
    Msg: _index2.default
  },
  created: function created() {

    if (false == this.$store.state.isLogined) {
      this.isShowMsg = true;
      return;
    }

    this.$store.commit('mutationLogout');

    window.localStorage.clear();

    this.$router.push('/topiclist/all');
  }
};

/***/ }),

/***/ "0Kyw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Logout_vue__ = __webpack_require__("/hBm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Logout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Logout_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Logout_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Logout_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Logout_vue__ = __webpack_require__("rxRc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Logout_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Logout_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_901f6406_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_Logout_vue__ = __webpack_require__("r0jV");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Logout_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_901f6406_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_Logout_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "1DHf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vux/src/components/inline-desc/index.vue + 3 modules
var inline_desc = __webpack_require__("kbG3");

// EXTERNAL MODULE: ./node_modules/vux/src/libs/router.js
var router = __webpack_require__("0FxO");

// EXTERNAL MODULE: ./node_modules/vux/src/components/cell/props.js
var props = __webpack_require__("2IIR");

// EXTERNAL MODULE: ./node_modules/vux/src/libs/clean-style.js
var clean_style = __webpack_require__("wmxo");

// EXTERNAL MODULE: ./node_modules/vux/src/libs/get-parent-prop.js
var get_parent_prop = __webpack_require__("vLYD");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/cell/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var cell = ({
  name: 'cell',
  components: {
    InlineDesc: inline_desc["a" /* default */]
  },
  props: Object(props["a" /* default */])(),
  created() {
    /* istanbul ignore if */
    if (false) {
      console.warn('[VUX] 抱歉，当前组件[cell]要求更新依赖 vux-loader@latest');
    }
  },
  beforeMount() {
    this.hasTitleSlot = !!this.$slots.title;
    /* istanbul ignore if */
    if (this.$slots.value && "production" === 'development') {
      console.warn('[VUX] [cell] slot=value 已经废弃，请使用默认 slot 替代');
    }
  },
  computed: {
    labelStyles() {
      return Object(clean_style["a" /* default */])({
        width: Object(get_parent_prop["a" /* default */])(this, 'labelWidth'),
        textAlign: Object(get_parent_prop["a" /* default */])(this, 'labelAlign'),
        marginRight: Object(get_parent_prop["a" /* default */])(this, 'labelMarginRight')
      });
    },
    valueClass() {
      return {
        'vux-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
        'vux-cell-align-left': this.valueAlign === 'left',
        'vux-cell-arrow-transition': !!this.arrowDirection,
        'vux-cell-arrow-up': this.arrowDirection === 'up',
        'vux-cell-arrow-down': this.arrowDirection === 'down'
      };
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    },
    style() {
      if (this.alignItems) {
        return {
          alignItems: this.alignItems
        };
      }
    }
  },
  methods: {
    onClick() {
      /* istanbul ignore next */
      !this.disabled && Object(router["a" /* go */])(this.link, this.$router);
    }
  },
  data() {
    return {
      hasTitleSlot: true,
      hasMounted: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/cell/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var components_cell = ({
  name: 'cell',
  components: {
    InlineDesc: inline_desc["a" /* default */]
  },
  props: Object(props["a" /* default */])(),
  created() {
    /* istanbul ignore if */
    if (false) {
      console.warn('[VUX] 抱歉，当前组件[cell]要求更新依赖 vux-loader@latest');
    }
  },
  beforeMount() {
    this.hasTitleSlot = !!this.$slots.title;
    /* istanbul ignore if */
    if (this.$slots.value && "production" === 'development') {
      console.warn('[VUX] [cell] slot=value 已经废弃，请使用默认 slot 替代');
    }
  },
  computed: {
    labelStyles() {
      return Object(clean_style["a" /* default */])({
        width: Object(get_parent_prop["a" /* default */])(this, 'labelWidth'),
        textAlign: Object(get_parent_prop["a" /* default */])(this, 'labelAlign'),
        marginRight: Object(get_parent_prop["a" /* default */])(this, 'labelMarginRight')
      });
    },
    valueClass() {
      return {
        'vux-cell-primary': this.primary === 'content' || this.valueAlign === 'left',
        'vux-cell-align-left': this.valueAlign === 'left',
        'vux-cell-arrow-transition': !!this.arrowDirection,
        'vux-cell-arrow-up': this.arrowDirection === 'up',
        'vux-cell-arrow-down': this.arrowDirection === 'down'
      };
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    },
    style() {
      if (this.alignItems) {
        return {
          alignItems: this.alignItems
        };
      }
    }
  },
  methods: {
    onClick() {
      /* istanbul ignore next */
      !this.disabled && Object(router["a" /* go */])(this.link, this.$router);
    }
  },
  data() {
    return {
      hasTitleSlot: true,
      hasMounted: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-03542dfe","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/cell/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-cell",class:{
    'vux-tap-active': _vm.isLink || !!_vm.link,
    'weui-cell_access': _vm.isLink || !!_vm.link,
    'vux-cell-no-border-intent': !_vm.borderIntent,
    'vux-cell-disabled': _vm.disabled
  },style:(_vm.style),on:{"click":_vm.onClick}},[_c('div',{staticClass:"weui-cell__hd"},[_vm._t("icon")],2),_vm._v(" "),_c('div',{staticClass:"vux-cell-bd",class:{'vux-cell-primary': _vm.primary === 'title' && _vm.valueAlign !== 'left'}},[_c('p',[(_vm.title || _vm.hasTitleSlot)?_c('label',{staticClass:"vux-label",class:_vm.labelClass,style:(_vm.labelStyles)},[_vm._t("title",[_vm._v(_vm._s(_vm.title))])],2):_vm._e(),_vm._v(" "),_vm._t("after-title")],2),_vm._v(" "),_c('inline-desc',[_vm._t("inline-desc",[_vm._v(_vm._s(_vm.inlineDesc))])],2)],1),_vm._v(" "),_c('div',{staticClass:"weui-cell__ft",class:_vm.valueClass},[_vm._t("value"),_vm._v(" "),_vm._t("default",[_vm._v(_vm._s(_vm.value))]),_vm._v(" "),(_vm.isLoading)?_c('i',{staticClass:"weui-loading"}):_vm._e()],2),_vm._v(" "),_vm._t("child")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_cell = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/cell/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("GKv3")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_cell,
  src_components_cell,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vux_src_components_cell = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "2dJ1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/wechat-emotion/index.vue
//
//
//
//

// gif https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/5.gif
// whole https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/default218877.gif
// http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch.2x278965.png
// http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch_active.2x278965.png
const list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极'];

/* harmony default export */ var wechat_emotion = ({
  name: 'wechat-emotion',
  mounted() {
    const name = this.$el.innerHTML;
    this.index = list.indexOf(name);
    this.backgroundPositionX = -this.index * 24;
    let imgHTML = '';
    if (!this.isGif) {
      imgHTML = `<span class="vux-static-emotion" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/default218877.gif) ${this.backgroundPositionX}px 0;"></span>`;
    } else {
      imgHTML = `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${this.index}.gif">`;
    }
    this.$nextTick(() => {
      this.$el.innerHTML = imgHTML;
    });
  },
  props: {
    isGif: Boolean
  },
  data() {
    return {
      src: '',
      backgroundPositionX: 0
    };
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/wechat-emotion/index.vue
//
//
//
//

// gif https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/5.gif
// whole https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/default218877.gif
// http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch.2x278965.png
// http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/images/icon/appmsg/emotion/icon_emotion_switch_active.2x278965.png
const wechat_emotion_list = ['微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷', '冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰', '骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜', '菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫', '便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳', '发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手', '激动', '街舞', '献吻', '左太极', '右太极'];

/* harmony default export */ var components_wechat_emotion = ({
  name: 'wechat-emotion',
  mounted() {
    const name = this.$el.innerHTML;
    this.index = wechat_emotion_list.indexOf(name);
    this.backgroundPositionX = -this.index * 24;
    let imgHTML = '';
    if (!this.isGif) {
      imgHTML = `<span class="vux-static-emotion" style="background:url(https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/default218877.gif) ${this.backgroundPositionX}px 0;"></span>`;
    } else {
      imgHTML = `<img src="https://res.wx.qq.com/mpres/htmledition/images/icon/emotion/${this.index}.gif">`;
    }
    this.$nextTick(() => {
      this.$el.innerHTML = imgHTML;
    });
  },
  props: {
    isGif: Boolean
  },
  data() {
    return {
      src: '',
      backgroundPositionX: 0
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-402903c8","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/wechat-emotion/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-emotion"},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_wechat_emotion = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/wechat-emotion/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("sSCK")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_wechat_emotion,
  src_components_wechat_emotion,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vux_src_components_wechat_emotion = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "2sLL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vux/src/libs/router.js
var router = __webpack_require__("0FxO");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-button/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var x_button = ({
  name: 'x-button',
  props: {
    type: {
      default: 'default'
    },
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    text: String,
    actionType: String,
    showLoading: Boolean,
    link: [String, Object],
    gradients: {
      type: Array,
      validator: function (val) {
        return val.length === 2;
      }
    }
  },
  methods: {
    onClick() {
      !this.disabled && Object(router["a" /* go */])(this.link, this.$router);
    }
  },
  computed: {
    noBorder() {
      return Array.isArray(this.gradients);
    },
    buttonStyle() {
      if (this.gradients) {
        return {
          background: `linear-gradient(90deg, ${this.gradients[0]}, ${this.gradients[1]})`,
          color: '#FFFFFF'
        };
      }
    },
    classes() {
      return [{
        'weui-btn_disabled': !this.plain && this.disabled,
        'weui-btn_plain-disabled': this.plain && this.disabled,
        'weui-btn_mini': this.mini,
        'vux-x-button-no-border': this.noBorder
      }, !this.plain ? `weui-btn_${this.type}` : '', this.plain ? `weui-btn_plain-${this.type}` : '', this.showLoading ? `weui-btn_loading` : ''];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-button/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_x_button = ({
  name: 'x-button',
  props: {
    type: {
      default: 'default'
    },
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    text: String,
    actionType: String,
    showLoading: Boolean,
    link: [String, Object],
    gradients: {
      type: Array,
      validator: function (val) {
        return val.length === 2;
      }
    }
  },
  methods: {
    onClick() {
      !this.disabled && Object(router["a" /* go */])(this.link, this.$router);
    }
  },
  computed: {
    noBorder() {
      return Array.isArray(this.gradients);
    },
    buttonStyle() {
      if (this.gradients) {
        return {
          background: `linear-gradient(90deg, ${this.gradients[0]}, ${this.gradients[1]})`,
          color: '#FFFFFF'
        };
      }
    },
    classes() {
      return [{
        'weui-btn_disabled': !this.plain && this.disabled,
        'weui-btn_plain-disabled': this.plain && this.disabled,
        'weui-btn_mini': this.mini,
        'vux-x-button-no-border': this.noBorder
      }, !this.plain ? `weui-btn_${this.type}` : '', this.plain ? `weui-btn_plain-${this.type}` : '', this.showLoading ? `weui-btn_loading` : ''];
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4b3d2bd8","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/x-button/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"weui-btn",class:_vm.classes,style:(_vm.buttonStyle),attrs:{"disabled":_vm.disabled,"type":_vm.actionType},on:{"click":_vm.onClick}},[(_vm.showLoading)?_c('i',{staticClass:"weui-loading"}):_vm._e(),_vm._v(" "),_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_x_button = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/x-button/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("X+dp")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_x_button,
  src_components_x_button,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vux_src_components_x_button = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "32ER":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vux/src/libs/router.js
var router = __webpack_require__("0FxO");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/cell-box/index.vue
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var cell_box = ({
  name: 'cell-box',
  props: {
    isLink: Boolean,
    link: [String, Object],
    borderIntent: {
      type: Boolean,
      default: true
    },
    noFlex: Boolean,
    alignItems: String
  },
  computed: {
    style() {
      if (this.alignItems) {
        return {
          'align-items': this.alignItems
        };
      }
    },
    className() {
      return {
        'vux-tap-active': this.isLink || !!this.link,
        'weui-cell_access': this.isLink || !!this.link,
        'vux-cell-no-border-intent': !this.borderIntent
      };
    }
  },
  methods: {
    onClick() {
      this.link && Object(router["a" /* go */])(this.link, this.$router);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/cell-box/index.vue
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_cell_box = ({
  name: 'cell-box',
  props: {
    isLink: Boolean,
    link: [String, Object],
    borderIntent: {
      type: Boolean,
      default: true
    },
    noFlex: Boolean,
    alignItems: String
  },
  computed: {
    style() {
      if (this.alignItems) {
        return {
          'align-items': this.alignItems
        };
      }
    },
    className() {
      return {
        'vux-tap-active': this.isLink || !!this.link,
        'weui-cell_access': this.isLink || !!this.link,
        'vux-cell-no-border-intent': !this.borderIntent
      };
    }
  },
  methods: {
    onClick() {
      this.link && Object(router["a" /* go */])(this.link, this.$router);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-279ecb04","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/cell-box/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-cell-box weui-cell",class:_vm.className,style:(_vm.style),on:{"click":_vm.onClick}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_cell_box = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/cell-box/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("LDmP")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_cell_box,
  src_components_cell_box,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vux_src_components_cell_box = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "3Lt7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/flexbox/flexbox-item.vue
//
//
//
//
//
//

const prefixList = ['-moz-box-', '-webkit-box-', ''];

/* harmony default export */ var flexbox_item = ({
  name: 'flexbox-item',
  props: {
    span: [Number, String],
    order: [Number, String]
  },
  beforeMount() {
    this.bodyWidth = document.documentElement.offsetWidth;
  },
  methods: {
    buildWidth(width) {
      if (typeof width === 'number') {
        if (width < 1) {
          return width;
        } else {
          return width / 12;
        }
      } else if (typeof width === 'string') {
        return width.replace('px', '') / this.bodyWidth;
      }
    }
  },
  computed: {
    style() {
      let styles = {};
      let marginName = this.$parent.orient === 'horizontal' ? 'marginLeft' : 'marginTop';

      if (this.$parent.gutter * 1 !== 0) {
        styles[marginName] = `${this.$parent.gutter}px`;
      }

      if (this.span) {
        for (let i = 0; i < prefixList.length; i++) {
          styles[`${prefixList[i]}flex`] = `0 0 ${this.buildWidth(this.span) * 100}%`;
        }
      }
      if (typeof this.order !== 'undefined') {
        styles.order = this.order;
      }
      return styles;
    }
  },
  data() {
    return {
      bodyWidth: 0
    };
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/flexbox/flexbox-item.vue
//
//
//
//
//
//

const flexbox_item_prefixList = ['-moz-box-', '-webkit-box-', ''];

/* harmony default export */ var flexbox_flexbox_item = ({
  name: 'flexbox-item',
  props: {
    span: [Number, String],
    order: [Number, String]
  },
  beforeMount() {
    this.bodyWidth = document.documentElement.offsetWidth;
  },
  methods: {
    buildWidth(width) {
      if (typeof width === 'number') {
        if (width < 1) {
          return width;
        } else {
          return width / 12;
        }
      } else if (typeof width === 'string') {
        return width.replace('px', '') / this.bodyWidth;
      }
    }
  },
  computed: {
    style() {
      let styles = {};
      let marginName = this.$parent.orient === 'horizontal' ? 'marginLeft' : 'marginTop';

      if (this.$parent.gutter * 1 !== 0) {
        styles[marginName] = `${this.$parent.gutter}px`;
      }

      if (this.span) {
        for (let i = 0; i < flexbox_item_prefixList.length; i++) {
          styles[`${flexbox_item_prefixList[i]}flex`] = `0 0 ${this.buildWidth(this.span) * 100}%`;
        }
      }
      if (typeof this.order !== 'undefined') {
        styles.order = this.order;
      }
      return styles;
    }
  },
  data() {
    return {
      bodyWidth: 0
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-46ce9210","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/flexbox/flexbox-item.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-flexbox-item",style:(_vm.style)},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_flexbox_flexbox_item = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/flexbox/flexbox-item.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  flexbox_flexbox_item,
  components_flexbox_flexbox_item,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_flexbox_flexbox_item = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "4d+Q":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "5dAN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("ALGc");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("rHil");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("2sLL");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'edit',
  props: ['id'],
  data: function data() {
    return {
      topic: {
        title: '',
        content: ''
      }
    };
  },
  methods: {
    edittopic: function edittopic() {
      var app = this;
      this.$http.post('/topics/update', {

        topic_id: this.topic.id,
        title: this.topic.title,
        content: this.topic.content,
        accesstoken: this.$store.state.accesstoken,
        tab: 'dev'
      }).then(function (response) {

        app.$router.back();
      });
    }
  },
  components: {
    XTextarea: _index2.default,
    Group: _index4.default,
    XButton: _index6.default
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.$http.get('/topic/' + to.params.id).then(function (response) {
        vm.topic = response.data.data;
      });
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var app = this;
    app.$http.get('/topic/' + to.params.id).then(function (response) {
      app.topic = response.data.data;
    });
    next();
  }

};

/***/ }),

/***/ "6iZP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h5',[_vm._v("用户登录")]),_vm._v(" "),_c('group',[_c('x-input',{attrs:{"placeholder":"Access Token"},model:{value:(_vm.accesstoken),callback:function ($$v) {_vm.accesstoken=$$v},expression:"accesstoken"}})],1),_vm._v(" "),_c('div',{staticStyle:{"height":"10px"}}),_vm._v(" "),_c('x-button',{attrs:{"type":"primary"},nativeOn:{"click":function($event){return _vm.dologin($event)}}},[_vm._v("登录")]),_vm._v(" "),_c('toast',{attrs:{"type":"text"},model:{value:(_vm.isShowToast),callback:function ($$v) {_vm.isShowToast=$$v},expression:"isShowToast"}},[_vm._v(_vm._s(_vm.toastText))])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "7DYF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('x-header',{attrs:{"right-options":{ showMore:true }},on:{"on-click-more":_vm.showMoreMenus}},[_vm._v("cnode移动端社区")]),_vm._v(" "),_c('tab',{attrs:{"line-width":1}},_vm._l((_vm.topics),function(item,index){return _c('tab-item',{key:index,attrs:{"selected":_vm.$route.path == '/topiclist/' + item.name},on:{"on-item-click":_vm.routeto}},[_vm._v(_vm._s(item.desc))])})),_vm._v(" "),_c('router-view'),_vm._v(" "),_c('actionsheet',{attrs:{"menus":_vm.moreMenus},on:{"on-click-menu":_vm.handleClickMoreMenu},model:{value:(_vm.isShowMoreMenus),callback:function ($$v) {_vm.isShowMoreMenus=$$v},expression:"isShowMoreMenus"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "7I26":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "85RD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vux/src/libs/router.js
var router = __webpack_require__("0FxO");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/msg/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var msg = ({
  name: 'msg',
  props: ['icon', 'title', 'description', 'buttons'],
  methods: {
    onClick(handler, link) {
      typeof handler === 'function' && handler();
      link && Object(router["a" /* go */])(link, this.$router);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/msg/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_msg = ({
  name: 'msg',
  props: ['icon', 'title', 'description', 'buttons'],
  methods: {
    onClick(handler, link) {
      typeof handler === 'function' && handler();
      link && Object(router["a" /* go */])(link, this.$router);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-34d5d4da","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/msg/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-msg"},[_c('div',{staticClass:"weui-msg__icon-area"},[_c('i',{staticClass:"weui-icon_msg",class:("weui-icon-" + (_vm.icon || 'success'))})]),_vm._v(" "),_c('div',{staticClass:"weui-msg__text-area"},[_c('h2',{staticClass:"weui-msg__title",domProps:{"innerHTML":_vm._s(_vm.title)}}),_vm._v(" "),_c('p',{staticClass:"weui-msg__desc"},[_vm._t("description")],2),_vm._v(" "),(_vm.description)?_c('p',{staticClass:"weui-msg__desc",domProps:{"innerHTML":_vm._s(_vm.description)}}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"weui-msg__opr-area"},[_c('p',{staticClass:"weui-btn-area"},[_vm._t("buttons",_vm._l((_vm.buttons),function(button){return _c('a',{staticClass:"weui-btn",class:("weui-btn_" + (button.type)),attrs:{"href":"javascript:;"},on:{"click":function($event){_vm.onClick(button.onClick, button.link)}}},[_vm._v(_vm._s(button.text))])}))],2)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_msg = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/msg/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("FCVk")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_msg,
  src_components_msg,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vux_src_components_msg = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "89pb":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "9ADW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
     value: true
});
//
//
//
//

exports.default = {
     name: 'home'
};

/***/ }),

/***/ "9zH9":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ABCa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/object-assign/index.js
var object_assign = __webpack_require__("BEQ0");
var object_assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-header/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var x_header = ({
  name: 'x-header',
  props: {
    leftOptions: Object,
    title: String,
    transition: String,
    rightOptions: {
      type: Object,
      default() {
        return {
          showMore: false
        };
      }
    }
  },
  beforeMount() {
    if (this.$slots['overwrite-title']) {
      this.shouldOverWriteTitle = true;
    }
  },
  computed: {
    _leftOptions() {
      return object_assign_default()({
        showBack: true,
        preventGoBack: false
      }, this.leftOptions || {});
    }
  },
  methods: {
    onClickBack() {
      if (this._leftOptions.preventGoBack) {
        this.$emit('on-click-back');
      } else {
        this.$router ? this.$router.back() : window.history.back();
      }
    }
  },
  data() {
    return {
      shouldOverWriteTitle: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-header/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_x_header = ({
  name: 'x-header',
  props: {
    leftOptions: Object,
    title: String,
    transition: String,
    rightOptions: {
      type: Object,
      default() {
        return {
          showMore: false
        };
      }
    }
  },
  beforeMount() {
    if (this.$slots['overwrite-title']) {
      this.shouldOverWriteTitle = true;
    }
  },
  computed: {
    _leftOptions() {
      return object_assign_default()({
        showBack: true,
        preventGoBack: false
      }, this.leftOptions || {});
    }
  },
  methods: {
    onClickBack() {
      if (this._leftOptions.preventGoBack) {
        this.$emit('on-click-back');
      } else {
        this.$router ? this.$router.back() : window.history.back();
      }
    }
  },
  data() {
    return {
      shouldOverWriteTitle: false
    };
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-12306fcc","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/x-header/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-header"},[_c('div',{staticClass:"vux-header-left"},[_vm._t("overwrite-left",[_c('transition',{attrs:{"name":_vm.transition}},[_c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm._leftOptions.showBack),expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{"click":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"preventDefault",undefined,$event.key,undefined)){ return null; }},_vm.onClickBack]}},[_vm._v(_vm._s(typeof _vm._leftOptions.backText === 'undefined' ? '返回' : _vm._leftOptions.backText))])]),_vm._v(" "),_c('transition',{attrs:{"name":_vm.transition}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm._leftOptions.showBack),expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{"click":_vm.onClickBack}})])]),_vm._v(" "),_vm._t("left")],2),_vm._v(" "),(!_vm.shouldOverWriteTitle)?_c('h1',{staticClass:"vux-header-title",on:{"click":function($event){_vm.$emit('on-click-title')}}},[_vm._t("default",[_c('transition',{attrs:{"name":_vm.transition}},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.title),expression:"title"}]},[_vm._v(_vm._s(_vm.title))])])])],2):_vm._e(),_vm._v(" "),(_vm.shouldOverWriteTitle)?_c('div',{staticClass:"vux-header-title-area"},[_vm._t("overwrite-title")],2):_vm._e(),_vm._v(" "),_c('div',{staticClass:"vux-header-right"},[(_vm.rightOptions.showMore)?_c('a',{staticClass:"vux-header-more",on:{"click":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"preventDefault",undefined,$event.key,undefined)){ return null; }},function($event){_vm.$emit('on-click-more')}]}}):_vm._e(),_vm._v(" "),_vm._t("right")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_x_header = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/x-header/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("4d+Q")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_x_header,
  src_components_x_header,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)


/* harmony default export */ var vux_src_components_x_header = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "AHJq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__("rHil");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("32ER");

var _index4 = _interopRequireDefault(_index3);

var _flexbox = __webpack_require__("YxJB");

var _flexbox2 = _interopRequireDefault(_flexbox);

var _flexboxItem = __webpack_require__("3Lt7");

var _flexboxItem2 = _interopRequireDefault(_flexboxItem);

var _index5 = __webpack_require__("2dJ1");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__("ALGc");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__("2sLL");

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__("HD9R");

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__("63CM");

var _index14 = _interopRequireDefault(_index13);

var _vuex = __webpack_require__("NYxO");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'topic',
  props: ['id'],
  components: {
    Group: _index2.default,
    CellBox: _index4.default,
    Flexbox: _flexbox2.default,
    FlexboxItem: _flexboxItem2.default,
    WechatEmotion: _index6.default,
    XTextarea: _index8.default,
    XButton: _index10.default,
    Popup: _index12.default
  },
  directives: {
    TransferDom: _index14.default
  },
  computed: _extends({}, (0, _vuex.mapState)(['isLogined'])),
  data: function data() {
    return {
      topic: null,
      replyContent: '',
      isShowPopup: false,
      reply_id: null,
      reply_loginname: ''
    };
  },
  methods: {
    decollect: function decollect() {

      var app = this;
      this.$http.post('/topic_collect/de_collect', {
        accesstoken: this.$store.state.accesstoken,
        topic_id: this.topic.id
      }).then(function (response) {

        if (response.data && response.data.success) {

          app.topic.is_collect = false;
        }
      });
    },


    collect: function collect() {
      var app = this;
      this.$http.post('/topic_collect/collect', {

        accesstoken: this.$store.state.accesstoken,
        topic_id: this.topic.id
      }).then(function (response) {

        if (response.data && response.data.success) {

          app.topic.is_collect = true;
        }
      });
    },

    upOrDown: function upOrDown(reply_id) {

      var app = this;

      this.$http.post('/reply/' + reply_id + '/ups', {
        accesstoken: this.$store.state.accesstoken
      }).then(function (response) {

        if (response && response.data && response.data.success) {

          var type = response.data.action;

          var reply;

          for (var index = 0; index <= app.topic.replies.length; index++) {
            if (app.topic.replies[index].id == reply_id) {

              reply = app.topic.replies[index];
              break;
            }
          }
          if (type == 'up') {
            // 点赞


            reply.ups.push(app.$store.state.accesstoken);
          } else if (type == 'down') {
            // 取消点赞


            reply.ups.pop();
          }
        }
      });
    },

    hidepopoup: function hidepopoup() {
      this.reply_id = null;
      this.reply_loginname = '';
    },


    showPopup: function showPopup(reply_id, reply_loginname) {

      this.isShowPopup = true;
      this.reply_id = reply_id;
      this.reply_loginname = reply_loginname;
    },

    addreply: function addreply(replyTab) {

      var params = {
        accesstoken: this.$store.state.accesstoken,
        content: this.replyContent
      };
      if (replyTab == 2) {
        params.reply_id = this.reply_id;

        params.content = '@' + this.reply_loginname + ' ' + params.content;
      }
      var app = this;
      this.$http.post('/topic/' + this.topic.id + '/replies', params).then(function (response) {

        if (response.data && response.data.success) {

          var reply = {
            "id": response.data.reply_id,
            "author": {
              "loginname": app.$store.state.loginname,
              "avatar_url": "https://avatars0.githubusercontent.com/u/40679561?v=4&amp;s=120"
            },
            "content": params.content,
            "ups": [],
            "create_at": "2014-10-07T13:05:32.158Z",
            "reply_id": null,
            "is_uped": false
          };
          if (replyTab == 2) {
            reply.reply_id = app.reply_id;
          }
          app.topic.replies.push(reply);

          app.replyContent = '';
          app.reply_id = '';
          app.isShowPopup = false;
          app.reply_loginname = '';
        }
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {

      vm.$http.get('/topic/' + to.params.id, {
        params: {
          accesstoken: vm.$store.state.accesstoken
        }
      }).then(function (response) {

        if (response.data.success) {
          vm.topic = response.data.data;
        }
      });
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var app = this;
    this.$http.get('/topic/' + to.params.id, {
      params: {
        accesstoken: this.$store.state.accesstoken
      }
    }).then(function (response) {

      if (response.data.success) {
        app.topic = response.data.data;
      }
    });
  }
};

/***/ }),

/***/ "AJqI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Edit_vue__ = __webpack_require__("5dAN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Edit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Edit_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Edit_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Edit_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Edit_vue__ = __webpack_require__("s1cg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Edit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Edit_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27192b2a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_Edit_vue__ = __webpack_require__("TEPz");
function injectStyle (ssrContext) {
  __webpack_require__("rad8")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Edit_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_27192b2a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_Edit_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ALGc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vux/src/libs/base.js + 1 modules
var base = __webpack_require__("f6Hi");

// EXTERNAL MODULE: ./node_modules/vux/src/components/inline-desc/index.vue + 3 modules
var inline_desc = __webpack_require__("kbG3");

// EXTERNAL MODULE: ./node_modules/autosize/dist/autosize.js
var autosize = __webpack_require__("JnrT");
var autosize_default = /*#__PURE__*/__webpack_require__.n(autosize);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-textarea/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // prop.autosize

/* harmony default export */ var x_textarea = ({
  name: 'x-textarea',
  minxins: [base["a" /* default */]],
  mounted() {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
    // prop.autosize
    this.$nextTick(() => {
      if (this.autosize) {
        this.bindAutosize();
      }
    });
    // prop.autosize
  },
  components: {
    InlineDesc: inline_desc["a" /* default */]
  },
  props: {
    title: String,
    inlineDesc: String,
    showCounter: {
      type: Boolean,
      default: true
    },
    max: Number,
    value: String,
    name: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    rows: {
      type: Number,
      default: 3
    },
    cols: {
      type: Number,
      default: 30
    },
    height: Number,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    autosize: Boolean // prop.autosize
  },
  created() {
    this.currentValue = this.value;
  },
  watch: {
    // prop.autosize
    autosize(val) {
      this.unbindAutosize();
      if (val) {
        this.bindAutosize();
      }
    },
    // prop.autosize
    value(val) {
      this.currentValue = val;
    },
    currentValue(newVal) {
      if (this.max && newVal && newVal.length > this.max) {
        this.currentValue = newVal.slice(0, this.max);
      }
      this.$emit('input', this.currentValue);
      this.$emit('on-change', this.currentValue);
    }
  },
  data() {
    return {
      hasRestrictedLabel: false,
      currentValue: ''
    };
  },
  computed: {
    count() {
      let len = 0;
      if (this.currentValue) {
        len = this.currentValue.replace(/\n/g, 'aa').length;
      }
      return len > this.max ? this.max : len;
    },
    textareaStyle() {
      if (this.height) {
        return {
          height: `${this.height}px`
        };
      }
    },
    labelStyles() {
      return {
        width: this.$parent.labelWidth || this.labelWidth + 'em',
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    labelWidth() {
      return this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    updateAutosize() {
      autosize_default.a.update(this.$refs.textarea);
    },
    // prop.autosize
    bindAutosize() {
      autosize_default()(this.$refs.textarea);
    },
    unbindAutosize() {
      autosize_default.a.destroy(this.$refs.textarea);
    },
    // prop.autosize
    focus() {
      this.$refs.textarea.focus();
    }
  },
  // prop.autosize
  beforeDestroy() {
    this.unbindAutosize();
  }
  // prop.autosize
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-textarea/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



 // prop.autosize

/* harmony default export */ var components_x_textarea = ({
  name: 'x-textarea',
  minxins: [base["a" /* default */]],
  mounted() {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
    // prop.autosize
    this.$nextTick(() => {
      if (this.autosize) {
        this.bindAutosize();
      }
    });
    // prop.autosize
  },
  components: {
    InlineDesc: inline_desc["a" /* default */]
  },
  props: {
    title: String,
    inlineDesc: String,
    showCounter: {
      type: Boolean,
      default: true
    },
    max: Number,
    value: String,
    name: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    rows: {
      type: Number,
      default: 3
    },
    cols: {
      type: Number,
      default: 30
    },
    height: Number,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    autosize: Boolean // prop.autosize
  },
  created() {
    this.currentValue = this.value;
  },
  watch: {
    // prop.autosize
    autosize(val) {
      this.unbindAutosize();
      if (val) {
        this.bindAutosize();
      }
    },
    // prop.autosize
    value(val) {
      this.currentValue = val;
    },
    currentValue(newVal) {
      if (this.max && newVal && newVal.length > this.max) {
        this.currentValue = newVal.slice(0, this.max);
      }
      this.$emit('input', this.currentValue);
      this.$emit('on-change', this.currentValue);
    }
  },
  data() {
    return {
      hasRestrictedLabel: false,
      currentValue: ''
    };
  },
  computed: {
    count() {
      let len = 0;
      if (this.currentValue) {
        len = this.currentValue.replace(/\n/g, 'aa').length;
      }
      return len > this.max ? this.max : len;
    },
    textareaStyle() {
      if (this.height) {
        return {
          height: `${this.height}px`
        };
      }
    },
    labelStyles() {
      return {
        width: this.$parent.labelWidth || this.labelWidth + 'em',
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    labelWidth() {
      return this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    }
  },
  methods: {
    updateAutosize() {
      autosize_default.a.update(this.$refs.textarea);
    },
    // prop.autosize
    bindAutosize() {
      autosize_default()(this.$refs.textarea);
    },
    unbindAutosize() {
      autosize_default.a.destroy(this.$refs.textarea);
    },
    // prop.autosize
    focus() {
      this.$refs.textarea.focus();
    }
  },
  // prop.autosize
  beforeDestroy() {
    this.unbindAutosize();
  }
  // prop.autosize
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3b89a341","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/x-textarea/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-cell vux-x-textarea"},[_c('div',{staticClass:"weui-cell__hd"},[(_vm.hasRestrictedLabel)?_c('div',{style:(_vm.labelStyles)},[_vm._t("restricted-label")],2):_vm._e(),_vm._v(" "),_vm._t("label",[(_vm.title)?_c('label',{staticClass:"weui-label",class:_vm.labelClass,style:({width: _vm.$parent.labelWidth || (_vm.labelWidth + 'em'), textAlign: _vm.$parent.labelAlign, marginRight: _vm.$parent.labelMarginRight}),domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_vm._v(" "),(_vm.inlineDesc)?_c('inline-desc',[_vm._v(_vm._s(_vm.inlineDesc))]):_vm._e()])],2),_vm._v(" "),_c('div',{staticClass:"weui-cell__bd"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"textarea",staticClass:"weui-textarea",style:(_vm.textareaStyle),attrs:{"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled,"name":_vm.name,"rows":_vm.rows,"cols":_vm.cols,"maxlength":_vm.max},domProps:{"value":(_vm.currentValue)},on:{"focus":function($event){_vm.$emit('on-focus')},"blur":function($event){_vm.$emit('on-blur')},"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showCounter && _vm.max),expression:"showCounter && max"}],staticClass:"weui-textarea-counter",on:{"click":_vm.focus}},[_c('span',[_vm._v(_vm._s(_vm.count))]),_vm._v("/"+_vm._s(_vm.max)+"\n    ")])])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_x_textarea = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/x-textarea/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("CkLX")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_x_textarea,
  src_components_x_textarea,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vux_src_components_x_textarea = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "B7RC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//

exports.default = {
    name: 'center',
    computed: {
        loginname: function loginname() {
            return this.$store.state.loginname;
        }
    },
    created: function created() {
        this.$router.replace('/user/' + this.loginname);
    }
};

/***/ }),

/***/ "BCTm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("rHil");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("1DHf");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("S8Wg");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'topiclist',
  props: ['name'],
  components: {
    Group: _index2.default,
    Cell: _index4.default,
    Scroller: _index6.default
  },
  data: function data() {
    return {
      lists: [],

      page: 1,

      limit: 15,
      pullupConfig: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      }
    };
  },
  methods: {
    loadMoreData: function loadMoreData() {
      var app = this;
      this.page = this.page + 1;

      this.$http.get('/topics', {
        params: {

          tab: this.name,
          page: this.page,
          limit: this.limit
        }
      }).then(function (response) {
        if (response.data.success) {

          for (var i = 0; i < response.data.data.length; i++) {
            app.lists.push(response.data.data[i]);
          }

          app.$refs.pullup.donePullup();
        }
      });
    }
  },

  beforeRouteEnter: function beforeRouteEnter(to, from, next) {

    next(function (vm) {

      vm.$http.get('/topics', {
        params: {
          tab: to.params.name,
          page: vm.page,
          limit: vm.limit
        }
      }).then(function (response) {

        if (response.data.success) {
          vm.lists = response.data.data;
        }
      });
    });
  },

  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {

    var app = this;

    this.$http.get('/topics', {
      params: {

        tab: to.params.name,
        page: this.page,
        limit: this.limit
      }
    }).then(function (response) {
      if (response.data.success) {

        app.lists = response.data.data;
      }
    });

    next();
  }
};

/***/ }),

/***/ "BRUU":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "Bk9r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue__ = __webpack_require__("vNYA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue__ = __webpack_require__("hCh/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1683f123_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_Create_vue__ = __webpack_require__("nIIj");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Create_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1683f123_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_Create_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "CeTb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("dQSc");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("rHil");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("1DHf");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'user',
  props: ['loginname'],
  components: {
    Card: _index2.default,
    Group: _index4.default,
    Cell: _index6.default
  },
  data: function data() {
    return {
      userinfo: null,
      collect_topics: []
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    // 导航守卫
    next(function (vm) {
      vm.$http.get('/user/' + to.params.loginname).then(function (response) {
        // 发送ajax请求  捕获信息

        vm.userinfo = response.data.data;
      });

      vm.$http.get('/topic_collect/' + to.params.loginname).then(function (response) {
        vm.collect_topics = response.data.data;
      });
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var app = this;
    this.$http.get('/user/' + to.params.loginname).then(function (response) {
      // 路由发生切换时发送ajax数据

      app.userinfo = response.data.data;
    });

    app.$http.get('/topic_collect/' + to.params.loginname).then(function (response) {
      app.collect_topics = response.data.data;
    });
  }
};

/***/ }),

/***/ "CkLX":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "EZPN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "FCVk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "G1QF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("home component")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "GKv3":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "HD9R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vux/src/components/popup/popup.js
var popup = __webpack_require__("+v63");

// EXTERNAL MODULE: ./node_modules/vux/src/libs/dom.js
var dom = __webpack_require__("te2A");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/popup/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var components_popup = ({
  name: 'popup',
  props: {
    value: Boolean,
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: 'auto'
    },
    showMask: {
      type: Boolean,
      default: true
    },
    isTransparent: Boolean,
    hideOnBlur: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'bottom'
    },
    maxHeight: String,
    popupStyle: Object,
    hideOnDeactivated: {
      type: Boolean,
      default: true
    },
    shouldRerenderOnShow: {
      type: Boolean,
      default: false
    },
    shouldScrollTopOnShow: {
      type: Boolean,
      default: false
    }
  },
  created() {
    // get global layout config
    if (this.$vux && this.$vux.config && this.$vux.config.$layout === 'VIEW_BOX') {
      this.layout = 'VIEW_BOX';
    }
  },
  mounted() {
    this.$overflowScrollingList = document.querySelectorAll('.vux-fix-safari-overflow-scrolling');
    this.$nextTick(() => {
      const _this = this;
      this.popup = new popup["a" /* default */]({
        showMask: _this.showMask,
        container: _this.$el,
        hideOnBlur: _this.hideOnBlur,
        onOpen() {
          _this.fixSafariOverflowScrolling('auto');
          _this.show = true;
        },
        onClose() {
          _this.show = false;
          if (window.__$vuxPopups && Object.keys(window.__$vuxPopups).length > 1) return;
          if (document.querySelector('.vux-popup-dialog.vux-popup-mask-disabled')) return;
          setTimeout(() => {
            _this.fixSafariOverflowScrolling('touch');
          }, 300);
        }
      });
      if (this.value) {
        this.popup.show();
      }
      this.initialShow = false;
    });
  },
  deactivated() {
    if (this.hideOnDeactivated) {
      this.show = false;
    }
    this.removeModalClassName();
  },
  methods: {
    /**
    * https://github.com/airyland/vux/issues/311
    * https://benfrain.com/z-index-stacking-contexts-experimental-css-and-ios-safari/
    */
    fixSafariOverflowScrolling(type) {
      if (!this.$overflowScrollingList.length) return;
      // if (!/iphone/i.test(navigator.userAgent)) return
      for (let i = 0; i < this.$overflowScrollingList.length; i++) {
        this.$overflowScrollingList[i].style.webkitOverflowScrolling = type;
      }
    },
    removeModalClassName() {
      this.layout === 'VIEW_BOX' && dom["a" /* default */].removeClass(document.body, 'vux-modal-open');
    },
    doShow() {
      this.popup && this.popup.show();
      this.$emit('on-show');
      this.fixSafariOverflowScrolling('auto');
      this.layout === 'VIEW_BOX' && dom["a" /* default */].addClass(document.body, 'vux-modal-open');
      if (!this.hasFirstShow) {
        this.$emit('on-first-show');
        this.hasFirstShow = true;
      }
    },
    scrollTop() {
      this.$nextTick(() => {
        this.$el.scrollTop = 0;
        const box = this.$el.querySelectorAll('.vux-scrollable');
        if (box.length) {
          for (let i = 0; i < box.length; i++) {
            box[i].scrollTop = 0;
          }
        }
      });
    }
  },
  data() {
    return {
      layout: '',
      initialShow: true,
      hasFirstShow: false,
      shouldRenderBody: true,
      show: this.value
    };
  },
  computed: {
    styles() {
      const styles = {};
      if (!this.position || this.position === 'bottom' || this.position === 'top') {
        styles.height = this.height;
      } else {
        styles.width = this.width;
      }

      if (this.maxHeight) {
        styles['max-height'] = this.maxHeight;
      }

      this.isTransparent && (styles['background'] = 'transparent');
      if (this.popupStyle) {
        for (let i in this.popupStyle) {
          styles[i] = this.popupStyle[i];
        }
      }
      return styles;
    }
  },
  watch: {
    value(val) {
      this.show = val;
    },
    show(val) {
      this.$emit('input', val);
      if (val) {
        // rerender body
        if (this.shouldRerenderOnShow) {
          this.shouldRenderBody = false;
          this.$nextTick(() => {
            this.scrollTop();
            this.shouldRenderBody = true;
            this.doShow();
          });
        } else {
          if (this.shouldScrollTopOnShow) {
            this.scrollTop();
          }
          this.doShow();
        }
      } else {
        this.$emit('on-hide');
        this.show = false;
        this.popup.hide(false);
        setTimeout(() => {
          if (!document.querySelector('.vux-popup-dialog.vux-popup-show')) {
            this.fixSafariOverflowScrolling('touch');
          }
          this.removeModalClassName();
        }, 200);
      }
    }
  },
  beforeDestroy() {
    this.popup && this.popup.destroy();
    this.fixSafariOverflowScrolling('touch');
    this.removeModalClassName();
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/popup/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var src_components_popup = ({
  name: 'popup',
  props: {
    value: Boolean,
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: 'auto'
    },
    showMask: {
      type: Boolean,
      default: true
    },
    isTransparent: Boolean,
    hideOnBlur: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'bottom'
    },
    maxHeight: String,
    popupStyle: Object,
    hideOnDeactivated: {
      type: Boolean,
      default: true
    },
    shouldRerenderOnShow: {
      type: Boolean,
      default: false
    },
    shouldScrollTopOnShow: {
      type: Boolean,
      default: false
    }
  },
  created() {
    // get global layout config
    if (this.$vux && this.$vux.config && this.$vux.config.$layout === 'VIEW_BOX') {
      this.layout = 'VIEW_BOX';
    }
  },
  mounted() {
    this.$overflowScrollingList = document.querySelectorAll('.vux-fix-safari-overflow-scrolling');
    this.$nextTick(() => {
      const _this = this;
      this.popup = new popup["a" /* default */]({
        showMask: _this.showMask,
        container: _this.$el,
        hideOnBlur: _this.hideOnBlur,
        onOpen() {
          _this.fixSafariOverflowScrolling('auto');
          _this.show = true;
        },
        onClose() {
          _this.show = false;
          if (window.__$vuxPopups && Object.keys(window.__$vuxPopups).length > 1) return;
          if (document.querySelector('.vux-popup-dialog.vux-popup-mask-disabled')) return;
          setTimeout(() => {
            _this.fixSafariOverflowScrolling('touch');
          }, 300);
        }
      });
      if (this.value) {
        this.popup.show();
      }
      this.initialShow = false;
    });
  },
  deactivated() {
    if (this.hideOnDeactivated) {
      this.show = false;
    }
    this.removeModalClassName();
  },
  methods: {
    /**
    * https://github.com/airyland/vux/issues/311
    * https://benfrain.com/z-index-stacking-contexts-experimental-css-and-ios-safari/
    */
    fixSafariOverflowScrolling(type) {
      if (!this.$overflowScrollingList.length) return;
      // if (!/iphone/i.test(navigator.userAgent)) return
      for (let i = 0; i < this.$overflowScrollingList.length; i++) {
        this.$overflowScrollingList[i].style.webkitOverflowScrolling = type;
      }
    },
    removeModalClassName() {
      this.layout === 'VIEW_BOX' && dom["a" /* default */].removeClass(document.body, 'vux-modal-open');
    },
    doShow() {
      this.popup && this.popup.show();
      this.$emit('on-show');
      this.fixSafariOverflowScrolling('auto');
      this.layout === 'VIEW_BOX' && dom["a" /* default */].addClass(document.body, 'vux-modal-open');
      if (!this.hasFirstShow) {
        this.$emit('on-first-show');
        this.hasFirstShow = true;
      }
    },
    scrollTop() {
      this.$nextTick(() => {
        this.$el.scrollTop = 0;
        const box = this.$el.querySelectorAll('.vux-scrollable');
        if (box.length) {
          for (let i = 0; i < box.length; i++) {
            box[i].scrollTop = 0;
          }
        }
      });
    }
  },
  data() {
    return {
      layout: '',
      initialShow: true,
      hasFirstShow: false,
      shouldRenderBody: true,
      show: this.value
    };
  },
  computed: {
    styles() {
      const styles = {};
      if (!this.position || this.position === 'bottom' || this.position === 'top') {
        styles.height = this.height;
      } else {
        styles.width = this.width;
      }

      if (this.maxHeight) {
        styles['max-height'] = this.maxHeight;
      }

      this.isTransparent && (styles['background'] = 'transparent');
      if (this.popupStyle) {
        for (let i in this.popupStyle) {
          styles[i] = this.popupStyle[i];
        }
      }
      return styles;
    }
  },
  watch: {
    value(val) {
      this.show = val;
    },
    show(val) {
      this.$emit('input', val);
      if (val) {
        // rerender body
        if (this.shouldRerenderOnShow) {
          this.shouldRenderBody = false;
          this.$nextTick(() => {
            this.scrollTop();
            this.shouldRenderBody = true;
            this.doShow();
          });
        } else {
          if (this.shouldScrollTopOnShow) {
            this.scrollTop();
          }
          this.doShow();
        }
      } else {
        this.$emit('on-hide');
        this.show = false;
        this.popup.hide(false);
        setTimeout(() => {
          if (!document.querySelector('.vux-popup-dialog.vux-popup-show')) {
            this.fixSafariOverflowScrolling('touch');
          }
          this.removeModalClassName();
        }, 200);
      }
    }
  },
  beforeDestroy() {
    this.popup && this.popup.destroy();
    this.fixSafariOverflowScrolling('touch');
    this.removeModalClassName();
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-aaf175b0","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/popup/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":("vux-popup-animate-" + _vm.position)}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show && !_vm.initialShow),expression:"show && !initialShow"}],staticClass:"vux-popup-dialog",class:[("vux-popup-" + _vm.position), _vm.show ? 'vux-popup-show' : ''],style:(_vm.styles)},[(_vm.shouldRenderBody)?_vm._t("default"):_vm._e()],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var vux_src_components_popup = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/popup/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("rpJ5")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  src_components_popup,
  vux_src_components_popup,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var node_modules_vux_src_components_popup = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "HvCd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("dQSc");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("rHil");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("1DHf");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'user',
  props: ['loginname'],
  components: {
    Card: _index2.default,
    Group: _index4.default,
    Cell: _index6.default
  },
  data: function data() {
    return {
      userinfo: null,
      collect_topics: []
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    // 导航守卫
    next(function (vm) {
      vm.$http.get('/user/' + to.params.loginname).then(function (response) {
        // 发送ajax请求  捕获信息

        vm.userinfo = response.data.data;
      });

      vm.$http.get('/topic_collect/' + to.params.loginname).then(function (response) {
        vm.collect_topics = response.data.data;
      });
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var app = this;
    this.$http.get('/user/' + to.params.loginname).then(function (response) {
      // 路由发生切换时发送ajax数据

      app.userinfo = response.data.data;
    });

    app.$http.get('/topic_collect/' + to.params.loginname).then(function (response) {
      app.collect_topics = response.data.data;
    });
  }
};

/***/ }),

/***/ "ISHt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_HelloFromVux_vue__ = __webpack_require__("bIOV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_HelloFromVux_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_HelloFromVux_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_HelloFromVux_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_HelloFromVux_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_HelloFromVux_vue__ = __webpack_require__("ngzA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_HelloFromVux_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_HelloFromVux_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60279149_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_HelloFromVux_vue__ = __webpack_require__("oVPr");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_HelloFromVux_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_60279149_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_HelloFromVux_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "IcnI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__("NYxO");

var _vuex2 = _interopRequireDefault(_vuex);

var _mutations = __webpack_require__("ukYY");

var _mutations2 = _interopRequireDefault(_mutations);

var _actions = __webpack_require__("mUbh");

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 全局注册
// 引入vue
_vue2.default.use(_vuex2.default);
// 创建store对象
var store = new _vuex2.default.Store({
  // 状态数据
  state: {
    // 主题分类数据
    topics: [{ name: 'all', desc: '全部' }, // 默认显示selected为true的
    { name: 'good', desc: '精华' }, { name: 'share', desc: '分享' }, { name: 'ask', desc: '问答' }, { name: 'job', desc: '招聘' }, { name: 'dev', desc: '测试' }],
    // 未登录时的更多菜单
    unLoginedMoreMenus: {
      login: '登录'
    },
    // 登录时的更多菜单
    loginedMoreMenus: {
      create: '发表新话题',
      center: '个人中心',
      msg: '消息通知',
      logout: '登出'
    },
    // 登录状态
    isLogined: false,
    // 登录用户名
    loginname: '',
    // 登录用户的accesstoken
    accesstoken: '',
    //登陆用户的id
    author_id: '',
    // 是否显示更多菜单
    isShowMoreMenus: false

  },
  // 状态数据的计算属性
  getters: {
    moreMenus: function moreMenus(state) {
      if (state.isLogined) {
        // 用户处理登录状态，返回登录后的更多菜单
        return state.loginedMoreMenus;
      }
      return state.unLoginedMoreMenus;
    }
  },
  mutations: _mutations2.default,
  actions: _actions2.default

});
// 对外输出模块
exports.default = store;

/***/ }),

/***/ "JmE8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("rHil");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("1DHf");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("S8Wg");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'topiclist',
  props: ['name'],
  components: {
    Group: _index2.default,
    Cell: _index4.default,
    Scroller: _index6.default
  },
  data: function data() {
    return {
      lists: [],

      page: 1,

      limit: 15,
      pullupConfig: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      }
    };
  },
  methods: {
    loadMoreData: function loadMoreData() {
      var app = this;
      this.page = this.page + 1;

      this.$http.get('/topics', {
        params: {

          tab: this.name,
          page: this.page,
          limit: this.limit
        }
      }).then(function (response) {
        if (response.data.success) {

          for (var i = 0; i < response.data.data.length; i++) {
            app.lists.push(response.data.data[i]);
          }

          app.$refs.pullup.donePullup();
        }
      });
    }
  },

  beforeRouteEnter: function beforeRouteEnter(to, from, next) {

    next(function (vm) {

      vm.$http.get('/topics', {
        params: {
          tab: to.params.name,
          page: vm.page,
          limit: vm.limit
        }
      }).then(function (response) {

        if (response.data.success) {
          vm.lists = response.data.data;
        }
      });
    });
  },

  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {

    var app = this;

    this.$http.get('/topics', {
      params: {

        tab: to.params.name,
        page: this.page,
        limit: this.limit
      }
    }).then(function (response) {
      if (response.data.success) {

        app.lists = response.data.data;
      }
    });

    next();
  }
};

/***/ }),

/***/ "Js7q":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "LDmP":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("bwrR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xzd6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d323d2de_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("7DYF");
function injectStyle (ssrContext) {
  __webpack_require__("NDdc")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d323d2de_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "MKFD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//

exports.default = {
    name: 'mag'
};

/***/ }),

/***/ "MLYr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "MVRq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vux/src/mixins/multi-items.js
var multi_items = __webpack_require__("piuB");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/button-tab/button-tab.vue
//
//
//
//
//
//



/* harmony default export */ var button_tab = ({
  name: 'button-tab',
  mixins: [multi_items["b" /* parentMixin */]],
  props: {
    height: Number
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/button-tab/button-tab.vue
//
//
//
//
//
//



/* harmony default export */ var button_tab_button_tab = ({
  name: 'button-tab',
  mixins: [multi_items["b" /* parentMixin */]],
  props: {
    height: Number
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-63786a38","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/button-tab/button-tab.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-button-group"},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_button_tab_button_tab = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/button-tab/button-tab.vue
function injectStyle (ssrContext) {
  __webpack_require__("gYt2")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  button_tab_button_tab,
  components_button_tab_button_tab,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_button_tab_button_tab = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Msp2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/actionsheet/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var actionsheet = ({
  name: 'actionsheet',
  mounted() {
    this.hasHeaderSlot = !!this.$slots.header;
    this.$nextTick(() => {
      this.$tabbar = document.querySelector('.weui-tabbar');
      this.$refs.iOSMenu && this.$refs.iOSMenu.addEventListener('transitionend', this.onTransitionEnd);
    });
  },
  props: {
    value: Boolean,
    showCancel: Boolean,
    cancelText: String,
    theme: {
      type: String,
      default: 'ios'
    },
    menus: {
      type: [Object, Array],
      default: () => ({})
    },
    closeOnClickingMask: {
      type: Boolean,
      default: true
    },
    closeOnClickingMenu: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      hasHeaderSlot: false,
      show: false
    };
  },
  methods: {
    onTransitionEnd() {
      this.$emit(this.show ? 'on-after-show' : 'on-after-hide');
    },
    onMenuClick(text, key) {
      if (typeof text === 'string') {
        this.emitEvent('on-click-menu', key, text);
      } else {
        if (text.type !== 'disabled' && text.type !== 'info') {
          if (text.value || text.value === 0) {
            this.emitEvent('on-click-menu', text.value, text);
          } else {
            this.emitEvent('on-click-menu', '', text);
            this.show = false;
          }
        }
      }
    },
    onClickingMask() {
      this.$emit('on-click-mask');
      this.closeOnClickingMask && (this.show = false);
    },
    emitEvent(event, menu, item) {
      if (event === 'on-click-menu' && !/.noop/.test(menu)) {
        let _item = item;
        if (typeof _item === 'object') {
          _item = JSON.parse(JSON.stringify(_item));
        }
        this.$emit(event, menu, _item);
        this.$emit(`${event}-${menu}`);
        this.closeOnClickingMenu && (this.show = false);
      }
    },
    fixIos(zIndex) {
      if (this.$el.parentNode && this.$el.parentNode.className.indexOf('v-transfer-dom') !== -1) {
        return;
      }
      if (this.$tabbar && /iphone/i.test(navigator.userAgent)) {
        this.$tabbar.style.zIndex = zIndex;
      }
    }
  },
  watch: {
    show(val) {
      this.$emit('input', val);
      if (val) {
        this.fixIos(-1);
      } else {
        setTimeout(() => {
          this.fixIos(100);
        }, 200);
      }
    },
    value: {
      handler: function (val) {
        this.show = val;
      },
      immediate: true
    }
  },
  beforeDestroy() {
    this.fixIos(100);
    this.$refs.iOSMenu && this.$refs.iOSMenu.removeEventListener('transitionend', this.onTransitionEnd);
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/actionsheet/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var components_actionsheet = ({
  name: 'actionsheet',
  mounted() {
    this.hasHeaderSlot = !!this.$slots.header;
    this.$nextTick(() => {
      this.$tabbar = document.querySelector('.weui-tabbar');
      this.$refs.iOSMenu && this.$refs.iOSMenu.addEventListener('transitionend', this.onTransitionEnd);
    });
  },
  props: {
    value: Boolean,
    showCancel: Boolean,
    cancelText: String,
    theme: {
      type: String,
      default: 'ios'
    },
    menus: {
      type: [Object, Array],
      default: () => ({})
    },
    closeOnClickingMask: {
      type: Boolean,
      default: true
    },
    closeOnClickingMenu: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      hasHeaderSlot: false,
      show: false
    };
  },
  methods: {
    onTransitionEnd() {
      this.$emit(this.show ? 'on-after-show' : 'on-after-hide');
    },
    onMenuClick(text, key) {
      if (typeof text === 'string') {
        this.emitEvent('on-click-menu', key, text);
      } else {
        if (text.type !== 'disabled' && text.type !== 'info') {
          if (text.value || text.value === 0) {
            this.emitEvent('on-click-menu', text.value, text);
          } else {
            this.emitEvent('on-click-menu', '', text);
            this.show = false;
          }
        }
      }
    },
    onClickingMask() {
      this.$emit('on-click-mask');
      this.closeOnClickingMask && (this.show = false);
    },
    emitEvent(event, menu, item) {
      if (event === 'on-click-menu' && !/.noop/.test(menu)) {
        let _item = item;
        if (typeof _item === 'object') {
          _item = JSON.parse(JSON.stringify(_item));
        }
        this.$emit(event, menu, _item);
        this.$emit(`${event}-${menu}`);
        this.closeOnClickingMenu && (this.show = false);
      }
    },
    fixIos(zIndex) {
      if (this.$el.parentNode && this.$el.parentNode.className.indexOf('v-transfer-dom') !== -1) {
        return;
      }
      if (this.$tabbar && /iphone/i.test(navigator.userAgent)) {
        this.$tabbar.style.zIndex = zIndex;
      }
    }
  },
  watch: {
    show(val) {
      this.$emit('input', val);
      if (val) {
        this.fixIos(-1);
      } else {
        setTimeout(() => {
          this.fixIos(100);
        }, 200);
      }
    },
    value: {
      handler: function (val) {
        this.show = val;
      },
      immediate: true
    }
  },
  beforeDestroy() {
    this.fixIos(100);
    this.$refs.iOSMenu && this.$refs.iOSMenu.removeEventListener('transitionend', this.onTransitionEnd);
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-63c67ccf","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/actionsheet/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-actionsheet"},[_c('transition',{attrs:{"name":"vux-actionsheet-mask"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"weui-mask weui-mask_transparent",on:{"click":_vm.onClickingMask}})]),_vm._v(" "),(_vm.theme === 'android')?_c('div',{staticClass:"weui-skin_android"},[_c('transition',{attrs:{"name":"vux-android-actionsheet"},on:{"after-enter":function($event){_vm.$emit('on-after-show')},"after-leave":function($event){_vm.$emit('on-after-hide')}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"weui-actionsheet"},[_c('div',{staticClass:"weui-actionsheet__menu"},_vm._l((_vm.menus),function(text,key){return _c('div',{staticClass:"weui-actionsheet__cell",domProps:{"innerHTML":_vm._s(text.label || text)},on:{"click":function($event){_vm.onMenuClick(text, key)}}})}))])])],1):_c('div',{ref:"iOSMenu",staticClass:"weui-actionsheet",class:{'weui-actionsheet_toggle': _vm.show}},[_c('div',{staticClass:"weui-actionsheet__menu"},[(_vm.hasHeaderSlot)?_c('div',{staticClass:"weui-actionsheet__cell"},[_vm._t("header")],2):_vm._e(),_vm._v(" "),_vm._l((_vm.menus),function(text,key){return _c('div',{staticClass:"weui-actionsheet__cell",class:("vux-actionsheet-menu-" + (text.type || 'default')),domProps:{"innerHTML":_vm._s(text.label || text)},on:{"click":function($event){_vm.onMenuClick(text, key)}}})})],2),_vm._v(" "),(_vm.showCancel)?_c('div',{staticClass:"weui-actionsheet__action",on:{"click":function($event){_vm.emitEvent('on-click-menu', 'cancel')}}},[_c('div',{staticClass:"weui-actionsheet__cell"},[_vm._v(_vm._s(_vm.cancelText || '取消'))])]):_vm._e()])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_actionsheet = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/actionsheet/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("VkhI")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_actionsheet,
  src_components_actionsheet,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)


/* harmony default export */ var vux_src_components_actionsheet = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "NDdc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "NHnr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _fastclick = __webpack_require__("v5o6");

var _fastclick2 = _interopRequireDefault(_fastclick);

var _vueRouter = __webpack_require__("/ocq");

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _App = __webpack_require__("M93x");

var _App2 = _interopRequireDefault(_App);

var _HelloFromVux = __webpack_require__("ISHt");

var _HelloFromVux2 = _interopRequireDefault(_HelloFromVux);

var _router = __webpack_require__("YaEn");

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__("IcnI");

var _store2 = _interopRequireDefault(_store);

var _ajax = __webpack_require__("qmEX");

var _ajax2 = _interopRequireDefault(_ajax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 为Vue属性添加一个继承属性
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue2.default.prototype.$http = _ajax2.default;
// import router from './router/index.js'


_fastclick2.default.attach(document.body);

_vue2.default.config.productionTip = false;

/* eslint-disable no-new */
new _vue2.default({
  router: _router2.default,
  store: _store2.default,
  render: function render(h) {
    return h(_App2.default);
  }
}).$mount('#app-box');

/***/ }),

/***/ "NeJJ":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "PqI4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_TopicList_vue__ = __webpack_require__("JmE8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_TopicList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_TopicList_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_TopicList_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_TopicList_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_TopicList_vue__ = __webpack_require__("BCTm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_TopicList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_TopicList_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bb3c140_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_TopicList_vue__ = __webpack_require__("zrdn");
function injectStyle (ssrContext) {
  __webpack_require__("vWb6")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_TopicList_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7bb3c140_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_TopicList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "S8Wg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/object-assign/index.js
var object_assign = __webpack_require__("BEQ0");
var object_assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/vux-xscroll/build/cmd/xscroll.js
var xscroll = __webpack_require__("WTNC");
var xscroll_default = /*#__PURE__*/__webpack_require__.n(xscroll);

// EXTERNAL MODULE: ./node_modules/vux-xscroll/build/cmd/plugins/pulldown.js
var pulldown = __webpack_require__("ypEt");
var pulldown_default = /*#__PURE__*/__webpack_require__.n(pulldown);

// EXTERNAL MODULE: ./node_modules/vux-xscroll/build/cmd/plugins/pullup.js
var pullup = __webpack_require__("qbvd");
var pullup_default = /*#__PURE__*/__webpack_require__.n(pullup);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/scroller/index.vue
//
//
//
//
//
//
//
//
//
//






const pulldownDefaultConfig = () => ({
  content: 'Pull Down To Refresh',
  height: 60,
  autoRefresh: false,
  downContent: 'Pull Down To Refresh',
  upContent: 'Release To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pulldown-'
});

const pullupDefaultConfig = () => ({
  content: 'Pull Up To Refresh',
  pullUpHeight: 60,
  height: 40,
  autoRefresh: false,
  downContent: 'Release To Refresh',
  upContent: 'Pull Up To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pullup-'
});

/* harmony default export */ var scroller = ({
  name: 'scroller',
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          pulldownStatus: '',
          pullupStatus: ''
        };
      }
    },
    height: String,
    lockX: Boolean,
    lockY: Boolean,
    scrollbarX: Boolean,
    scrollbarY: Boolean,
    bounce: {
      type: Boolean,
      default: true
    },
    useOriginScroll: {
      type: Boolean,
      default: false
    },
    useTransition: {
      type: Boolean,
      default: true
    },
    preventDefault: {
      type: Boolean,
      default: false
    },
    stopPropagation: Boolean,
    boundryCheck: {
      type: Boolean,
      default: true
    },
    gpuAcceleration: {
      type: Boolean,
      default: true
    },
    usePulldown: {
      type: Boolean,
      default: false
    },
    usePullup: {
      type: Boolean,
      default: false
    },
    /**
    * refer to: http://xscroll.github.io/node_modules/xscroll/doc/PullDown.html
    */
    pulldownConfig: {
      type: Object,
      default() {
        return {};
      }
    },
    pullupConfig: {
      type: Object,
      default() {
        return {};
      }
    },
    enableHorizontalSwiping: {
      type: Boolean,
      default: false
    },
    scrollBottomOffset: {
      type: Number,
      default: 0
    }
  },
  methods: {
    reset(scrollPosition, duration, easing) {
      if (scrollPosition) {
        if (typeof scrollPosition.left !== 'undefined') {
          this._xscroll.scrollLeft(scrollPosition.left, duration, easing);
        }
        if (typeof scrollPosition.top !== 'undefined') {
          this._xscroll.scrollTop(scrollPosition.top, duration, easing);
        }
      }
      this._xscroll && this._xscroll.resetSize();
    },
    donePulldown() {
      this.pulldown.reset(() => {
        // repaint
        this.reset();
      });
      this.currentValue.pulldownStatus = 'default';
    },
    disablePullup() {
      // this._xscroll.unplug(this.pullup)
      this.pullup.stop();
      this.currentValue.pullupStatus = 'disabled';
    },
    enablePullup() {
      this.currentValue.pullupStatus = 'default';
      this.pullup.restart();
    },
    donePullup() {
      this.pullup.complete();
      this.reset();
      this.currentValue.pullupStatus = 'default';
    },
    getStyles() {
      let height = this.height;
      if (!this.height && this.$el && !this.$el.style.height && this.lockX) {
        height = `${document.documentElement.clientHeight}px`;
        this.reset();
      }

      if (this.height && this.height.indexOf('-') === 0) {
        height = `${document.documentElement.clientHeight + parseInt(this.height)}px`;
      }
      this.styles = {
        height: `${height}`
      };
    }
  },
  created() {
    if (!this.value) {
      this.currentValue = {
        pulldownStatus: '',
        pullupStatus: ''
      };
    } else {
      this.currentValue = this.value;
    }
    this.handleOrientationchange = () => {
      setTimeout(() => {
        this.reset();
      }, 100);
    };
  },
  data() {
    return {
      currentValue: {},
      styles: {}
    };
  },
  watch: {
    currentValue: {
      handler: function (val) {
        this.$emit('input', pure(val));
      },
      deep: true
    },
    height() {
      this.getStyles();
    },
    value: {
      handler: function (val) {
        if (val.pullupStatus === 'default' && this.currentValue.pullupStatus !== 'default') {
          this.donePullup();
        }
        if (val.pulldownStatus === 'default' && this.currentValue.pulldownStatus !== 'default') {
          this.donePulldown();
        }
        if (val.pullupStatus === 'disabled' && this.currentValue.pullupStatus !== 'disabled') {
          this.disablePullup();
        }
        if (val.pullupStatus === 'enabled' && this.currentValue.pullupStatus === 'disabled') {
          this.enablePullup();
        }
      },
      deep: true
    }
  },
  mounted() {
    this.uuid = Math.random().toString(36).substring(3, 8);
    this.$nextTick(() => {
      this.$el.setAttribute('id', `vux-scroller-${this.uuid}`);
      let content = null;
      if (this.$slots.default) {
        content = this.$slots.default[0].elm;
      }
      if (!content) {
        throw new Error('no content is found');
      }

      this._xscroll = new xscroll_default.a({
        renderTo: `#vux-scroller-${this.uuid}`,
        lockX: this.lockX,
        lockY: this.lockY,
        scrollbarX: this.scrollbarX,
        scrollbarY: this.scrollbarY,
        content: content,
        bounce: this.bounce,
        useOriginScroll: this.useOriginScroll,
        useTransition: this.useTransition,
        preventDefault: this.preventDefault,
        boundryCheck: this.boundryCheck,
        gpuAcceleration: this.gpuAcceleration,
        stopPropagation: this.stopPropagation
      });

      this._xscroll.on('scroll', () => {
        if (this._xscroll) {
          const top = this._xscroll.getScrollTop();
          this.$emit('on-scroll', {
            top: top,
            left: this._xscroll.getScrollLeft()
          });
          const containerHeight = this._xscroll.containerHeight;
          const scrollHeight = this._xscroll.height;
          if (top >= containerHeight - scrollHeight - this.scrollBottomOffset) {
            this.$emit('on-scroll-bottom');
          }
        }
      });

      if (this.usePulldown) {
        // if use slot=pulldown
        let container = this.$slots.pulldown;
        let config = object_assign_default()(pulldownDefaultConfig(), this.pulldownConfig);
        if (container) {
          config.container = container[0].elm;
        }
        this.pulldown = new pulldown_default.a(config);
        this._xscroll.plug(this.pulldown);
        this.pulldown.on('loading', e => {
          this.$emit('on-pulldown-loading', this.uuid);
        });
        this.pulldown.on('statuschange', val => {
          this.currentValue.pulldownStatus = val.newVal;
        });
      }

      if (this.usePullup) {
        // if use slot=pullup
        let container = this.$slots.pullup;
        let config = object_assign_default()(pullupDefaultConfig(), this.pullupConfig);

        if (container) {
          config.container = container[0].elm;
        }
        this.pullup = new pullup_default.a(config);
        this._xscroll.plug(this.pullup);
        this.pullup.on('loading', e => {
          this.$emit('on-pullup-loading', this.uuid);
        });
        this.pullup.on('statuschange', val => {
          this.currentValue.pullupStatus = val.newVal;
        });
      }

      if (this.enableHorizontalSwiping) {
        this._xscroll.on('panstart', e => {
          if (e.direction === 2 || e.direction === 4) {
            e.preventDefault();
            if (this.scrollbarY) {
              this._xscroll.userConfig.scrollbarY = false;
            }
            this._xscroll.userConfig.lockY = true;
          }
        });
        this._xscroll.on('panend', () => {
          if (this.scrollbarY) {
            this._xscroll.userConfig.scrollbarY = true;
          }
          this._xscroll.userConfig.lockY = false;
        });
      }

      this._xscroll.render();
      window.addEventListener('orientationchange', this.handleOrientationchange, false);
    });
    this.getStyles();
  },
  updated() {
    this.reset();
  },
  beforeDestroy() {
    if (this.pullup) {
      this._xscroll.unplug(this.pullup);
      this.pullup.pluginDestructor();
    }
    if (this.pulldown) {
      this._xscroll.unplug(this.pulldown);
      this.pulldown.pluginDestructor();
    }
    window.removeEventListener('orientationchange', this.handleOrientationchange, false);
    this._xscroll.destroy();
    this._xscroll = null;
  }
});

function pure(obj) {
  return JSON.parse(JSON.stringify(obj));
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/scroller/index.vue
//
//
//
//
//
//
//
//
//
//






const scroller_pulldownDefaultConfig = () => ({
  content: 'Pull Down To Refresh',
  height: 60,
  autoRefresh: false,
  downContent: 'Pull Down To Refresh',
  upContent: 'Release To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pulldown-'
});

const scroller_pullupDefaultConfig = () => ({
  content: 'Pull Up To Refresh',
  pullUpHeight: 60,
  height: 40,
  autoRefresh: false,
  downContent: 'Release To Refresh',
  upContent: 'Pull Up To Refresh',
  loadingContent: 'Loading...',
  clsPrefix: 'xs-plugin-pullup-'
});

/* harmony default export */ var components_scroller = ({
  name: 'scroller',
  props: {
    value: {
      type: Object,
      default: () => {
        return {
          pulldownStatus: '',
          pullupStatus: ''
        };
      }
    },
    height: String,
    lockX: Boolean,
    lockY: Boolean,
    scrollbarX: Boolean,
    scrollbarY: Boolean,
    bounce: {
      type: Boolean,
      default: true
    },
    useOriginScroll: {
      type: Boolean,
      default: false
    },
    useTransition: {
      type: Boolean,
      default: true
    },
    preventDefault: {
      type: Boolean,
      default: false
    },
    stopPropagation: Boolean,
    boundryCheck: {
      type: Boolean,
      default: true
    },
    gpuAcceleration: {
      type: Boolean,
      default: true
    },
    usePulldown: {
      type: Boolean,
      default: false
    },
    usePullup: {
      type: Boolean,
      default: false
    },
    /**
    * refer to: http://xscroll.github.io/node_modules/xscroll/doc/PullDown.html
    */
    pulldownConfig: {
      type: Object,
      default() {
        return {};
      }
    },
    pullupConfig: {
      type: Object,
      default() {
        return {};
      }
    },
    enableHorizontalSwiping: {
      type: Boolean,
      default: false
    },
    scrollBottomOffset: {
      type: Number,
      default: 0
    }
  },
  methods: {
    reset(scrollPosition, duration, easing) {
      if (scrollPosition) {
        if (typeof scrollPosition.left !== 'undefined') {
          this._xscroll.scrollLeft(scrollPosition.left, duration, easing);
        }
        if (typeof scrollPosition.top !== 'undefined') {
          this._xscroll.scrollTop(scrollPosition.top, duration, easing);
        }
      }
      this._xscroll && this._xscroll.resetSize();
    },
    donePulldown() {
      this.pulldown.reset(() => {
        // repaint
        this.reset();
      });
      this.currentValue.pulldownStatus = 'default';
    },
    disablePullup() {
      // this._xscroll.unplug(this.pullup)
      this.pullup.stop();
      this.currentValue.pullupStatus = 'disabled';
    },
    enablePullup() {
      this.currentValue.pullupStatus = 'default';
      this.pullup.restart();
    },
    donePullup() {
      this.pullup.complete();
      this.reset();
      this.currentValue.pullupStatus = 'default';
    },
    getStyles() {
      let height = this.height;
      if (!this.height && this.$el && !this.$el.style.height && this.lockX) {
        height = `${document.documentElement.clientHeight}px`;
        this.reset();
      }

      if (this.height && this.height.indexOf('-') === 0) {
        height = `${document.documentElement.clientHeight + parseInt(this.height)}px`;
      }
      this.styles = {
        height: `${height}`
      };
    }
  },
  created() {
    if (!this.value) {
      this.currentValue = {
        pulldownStatus: '',
        pullupStatus: ''
      };
    } else {
      this.currentValue = this.value;
    }
    this.handleOrientationchange = () => {
      setTimeout(() => {
        this.reset();
      }, 100);
    };
  },
  data() {
    return {
      currentValue: {},
      styles: {}
    };
  },
  watch: {
    currentValue: {
      handler: function (val) {
        this.$emit('input', scroller_pure(val));
      },
      deep: true
    },
    height() {
      this.getStyles();
    },
    value: {
      handler: function (val) {
        if (val.pullupStatus === 'default' && this.currentValue.pullupStatus !== 'default') {
          this.donePullup();
        }
        if (val.pulldownStatus === 'default' && this.currentValue.pulldownStatus !== 'default') {
          this.donePulldown();
        }
        if (val.pullupStatus === 'disabled' && this.currentValue.pullupStatus !== 'disabled') {
          this.disablePullup();
        }
        if (val.pullupStatus === 'enabled' && this.currentValue.pullupStatus === 'disabled') {
          this.enablePullup();
        }
      },
      deep: true
    }
  },
  mounted() {
    this.uuid = Math.random().toString(36).substring(3, 8);
    this.$nextTick(() => {
      this.$el.setAttribute('id', `vux-scroller-${this.uuid}`);
      let content = null;
      if (this.$slots.default) {
        content = this.$slots.default[0].elm;
      }
      if (!content) {
        throw new Error('no content is found');
      }

      this._xscroll = new xscroll_default.a({
        renderTo: `#vux-scroller-${this.uuid}`,
        lockX: this.lockX,
        lockY: this.lockY,
        scrollbarX: this.scrollbarX,
        scrollbarY: this.scrollbarY,
        content: content,
        bounce: this.bounce,
        useOriginScroll: this.useOriginScroll,
        useTransition: this.useTransition,
        preventDefault: this.preventDefault,
        boundryCheck: this.boundryCheck,
        gpuAcceleration: this.gpuAcceleration,
        stopPropagation: this.stopPropagation
      });

      this._xscroll.on('scroll', () => {
        if (this._xscroll) {
          const top = this._xscroll.getScrollTop();
          this.$emit('on-scroll', {
            top: top,
            left: this._xscroll.getScrollLeft()
          });
          const containerHeight = this._xscroll.containerHeight;
          const scrollHeight = this._xscroll.height;
          if (top >= containerHeight - scrollHeight - this.scrollBottomOffset) {
            this.$emit('on-scroll-bottom');
          }
        }
      });

      if (this.usePulldown) {
        // if use slot=pulldown
        let container = this.$slots.pulldown;
        let config = object_assign_default()(scroller_pulldownDefaultConfig(), this.pulldownConfig);
        if (container) {
          config.container = container[0].elm;
        }
        this.pulldown = new pulldown_default.a(config);
        this._xscroll.plug(this.pulldown);
        this.pulldown.on('loading', e => {
          this.$emit('on-pulldown-loading', this.uuid);
        });
        this.pulldown.on('statuschange', val => {
          this.currentValue.pulldownStatus = val.newVal;
        });
      }

      if (this.usePullup) {
        // if use slot=pullup
        let container = this.$slots.pullup;
        let config = object_assign_default()(scroller_pullupDefaultConfig(), this.pullupConfig);

        if (container) {
          config.container = container[0].elm;
        }
        this.pullup = new pullup_default.a(config);
        this._xscroll.plug(this.pullup);
        this.pullup.on('loading', e => {
          this.$emit('on-pullup-loading', this.uuid);
        });
        this.pullup.on('statuschange', val => {
          this.currentValue.pullupStatus = val.newVal;
        });
      }

      if (this.enableHorizontalSwiping) {
        this._xscroll.on('panstart', e => {
          if (e.direction === 2 || e.direction === 4) {
            e.preventDefault();
            if (this.scrollbarY) {
              this._xscroll.userConfig.scrollbarY = false;
            }
            this._xscroll.userConfig.lockY = true;
          }
        });
        this._xscroll.on('panend', () => {
          if (this.scrollbarY) {
            this._xscroll.userConfig.scrollbarY = true;
          }
          this._xscroll.userConfig.lockY = false;
        });
      }

      this._xscroll.render();
      window.addEventListener('orientationchange', this.handleOrientationchange, false);
    });
    this.getStyles();
  },
  updated() {
    this.reset();
  },
  beforeDestroy() {
    if (this.pullup) {
      this._xscroll.unplug(this.pullup);
      this.pullup.pluginDestructor();
    }
    if (this.pulldown) {
      this._xscroll.unplug(this.pulldown);
      this.pulldown.pluginDestructor();
    }
    window.removeEventListener('orientationchange', this.handleOrientationchange, false);
    this._xscroll.destroy();
    this._xscroll = null;
  }
});

function scroller_pure(obj) {
  return JSON.parse(JSON.stringify(obj));
}
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7da5f8bf","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/scroller/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{style:(_vm.styles)},[_c('div',{staticClass:"xs-container"},[_vm._t("default"),_vm._v(" "),_vm._t("pulldown"),_vm._v(" "),_vm._t("pullup")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_scroller = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/scroller/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("p8U2")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_scroller,
  src_components_scroller,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vux_src_components_scroller = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "TEPz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h5',[_vm._v("编辑话题")]),_vm._v(" "),_c('group',[_c('x-textarea',{attrs:{"placeholder":"标题","max":200,"rows":1},model:{value:(_vm.topic.title),callback:function ($$v) {_vm.$set(_vm.topic, "title", $$v)},expression:"topic.title"}}),_vm._v(" "),_c('x-textarea',{attrs:{"placeholder":"内容","max":2000,"rows":6},model:{value:(_vm.topic.content),callback:function ($$v) {_vm.$set(_vm.topic, "content", $$v)},expression:"topic.content"}})],1),_vm._v(" "),_c('x-button',{attrs:{"type":"primary"},nativeOn:{"click":function($event){return _vm.edittopic($event)}}},[_vm._v("修改新话题")])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "UViS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.userinfo)?_c('div',[_c('card',{attrs:{"header":{ title: _vm.userinfo.loginname },"footer":{ title: _vm.userinfo.create_at }}},[_c('div',{staticClass:"card_content",attrs:{"slot":"content"},slot:"content"},[_c('p',[_c('img',{attrs:{"src":_vm.userinfo.avatar_url}})]),_vm._v(" "),_c('p',[_vm._v("\n                用户积分："+_vm._s(_vm.userinfo.score)+"\n            ")]),_vm._v(" "),_c('p',[_c('a',{attrs:{"href":"/#/collect/"}},[_vm._v(_vm._s(_vm.collect_topics.length)+" 几个收藏")])]),_vm._v(" "),_c('p',[_c('a',{attrs:{"href":'http://github.com/' + _vm.userinfo.githubUsername}},[_vm._v("@"+_vm._s(_vm.userinfo.githubUsername))])])])]),_vm._v(" "),_c('card',{attrs:{"header":{title: '最近发表的话题'}}},[_c('group',{attrs:{"slot":"content"},slot:"content"},_vm._l((_vm.userinfo.recent_topics),function(item,index){return _c('cell',{key:index,attrs:{"title":item.title,"is-link":"","link":'/topic/' + item.id}})}))],1)],1):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "V0DB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vux/src/mixins/multi-items.js
var multi_items = __webpack_require__("piuB");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/button-tab/button-tab-item.vue
//
//
//
//
//
//



/* harmony default export */ var button_tab_item = ({
  name: 'button-tab-item',
  mixins: [multi_items["a" /* childMixin */]],
  computed: {
    classes() {
      return {
        'vux-button-group-current': this.currentIndex === this.$parent.currentIndex,
        'vux-button-tab-item-first': this.currentIndex === 0,
        'vux-button-tab-item-last': this.currentIndex === this.$parent.$children.length - 1,
        'vux-button-tab-item-middle': this.currentIndex > 0 && this.currentIndex !== this.$parent.$children.length - 1
      };
    },
    style() {
      if (this.$parent.height) {
        return {
          height: `${this.$parent.height}px`,
          lineHeight: `${this.$parent.height}px`
        };
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/button-tab/button-tab-item.vue
//
//
//
//
//
//



/* harmony default export */ var button_tab_button_tab_item = ({
  name: 'button-tab-item',
  mixins: [multi_items["a" /* childMixin */]],
  computed: {
    classes() {
      return {
        'vux-button-group-current': this.currentIndex === this.$parent.currentIndex,
        'vux-button-tab-item-first': this.currentIndex === 0,
        'vux-button-tab-item-last': this.currentIndex === this.$parent.$children.length - 1,
        'vux-button-tab-item-middle': this.currentIndex > 0 && this.currentIndex !== this.$parent.$children.length - 1
      };
    },
    style() {
      if (this.$parent.height) {
        return {
          height: `${this.$parent.height}px`,
          lineHeight: `${this.$parent.height}px`
        };
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7a466023","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/button-tab/button-tab-item.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"vux-button-tab-item",class:_vm.classes,style:(_vm.style),attrs:{"href":"javascript:"},on:{"click":_vm.onItemClick}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_button_tab_button_tab_item = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/button-tab/button-tab-item.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  button_tab_button_tab_item,
  components_button_tab_button_tab_item,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_button_tab_button_tab_item = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "VkhI":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "X+dp":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "XHu4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//

exports.default = {
    name: 'mag'
};

/***/ }),

/***/ "YaEn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__("/ocq");

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Home = __webpack_require__("lO7g");

var _Home2 = _interopRequireDefault(_Home);

var _TopicList = __webpack_require__("PqI4");

var _TopicList2 = _interopRequireDefault(_TopicList);

var _Topic = __webpack_require__("sVDg");

var _Topic2 = _interopRequireDefault(_Topic);

var _Login = __webpack_require__("xJsL");

var _Login2 = _interopRequireDefault(_Login);

var _Center = __webpack_require__("s8dJ");

var _Center2 = _interopRequireDefault(_Center);

var _Msg = __webpack_require__("y8p6");

var _Msg2 = _interopRequireDefault(_Msg);

var _Logout = __webpack_require__("0Kyw");

var _Logout2 = _interopRequireDefault(_Logout);

var _User = __webpack_require__("jyJz");

var _User2 = _interopRequireDefault(_User);

var _Create = __webpack_require__("Bk9r");

var _Create2 = _interopRequireDefault(_Create);

var _Edit = __webpack_require__("AJqI");

var _Edit2 = _interopRequireDefault(_Edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

//定义路由信息对象
var routes = [
//  { path:'/',name:'home', component:Home},
{ path: '/', redirect: '/topiclist/all' }, //重定向 redirect
{ path: '/topiclist/:name', name: 'topiclist', component: _TopicList2.default, props: true }, { path: '/topic/:id', name: 'topic', component: _Topic2.default, props: true },
// 登录操作
{ path: '/login', name: 'login', component: _Login2.default },
// 个人中心
{ path: '/center', name: 'center', component: _Center2.default }, { path: '/user/:loginname', name: 'user', component: _User2.default, props: true },
// 消息通知
{ path: '/msg', name: 'msg', component: _Msg2.default },
// 登出操作
{ path: '/logout', name: 'logout', component: _Logout2.default },
// 发表新话题
{ path: '/create', name: 'create', component: _Create2.default },
//编辑 :id表示动态路由    
{ path: '/topic/:id/edit', name: 'edit', component: _Edit2.default, props: true }];
//创建路由管理器
var router = new _vueRouter2.default({
        routes: routes
});
//对外导出模块
exports.default = router;

/***/ }),

/***/ "YxJB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/flexbox/flexbox.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var flexbox = ({
  name: 'flexbox',
  props: {
    gutter: {
      type: Number,
      default: 8
    },
    orient: {
      type: String,
      default: 'horizontal'
    },
    justify: String,
    align: String,
    wrap: String,
    direction: String
  },
  computed: {
    styles() {
      const styles = {
        'justify-content': this.justify,
        '-webkit-justify-content': this.justify,
        'align-items': this.align,
        '-webkit-align-items': this.align,
        'flex-wrap': this.wrap,
        '-webkit-flex-wrap': this.wrap,
        'flex-direction': this.direction,
        '-webkit-flex-direction': this.direction
      };
      return styles;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/flexbox/flexbox.vue
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var flexbox_flexbox = ({
  name: 'flexbox',
  props: {
    gutter: {
      type: Number,
      default: 8
    },
    orient: {
      type: String,
      default: 'horizontal'
    },
    justify: String,
    align: String,
    wrap: String,
    direction: String
  },
  computed: {
    styles() {
      const styles = {
        'justify-content': this.justify,
        '-webkit-justify-content': this.justify,
        'align-items': this.align,
        '-webkit-align-items': this.align,
        'flex-wrap': this.wrap,
        '-webkit-flex-wrap': this.wrap,
        'flex-direction': this.direction,
        '-webkit-flex-direction': this.direction
      };
      return styles;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-5d806436","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/flexbox/flexbox.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-flexbox",class:{
  'vux-flex-col': _vm.orient === 'vertical',
  'vux-flex-row': _vm.orient === 'horizontal'
},style:(_vm.styles)},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_flexbox_flexbox = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/flexbox/flexbox.vue
function injectStyle (ssrContext) {
  __webpack_require__("7I26")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  flexbox_flexbox,
  components_flexbox_flexbox,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_flexbox_flexbox = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Znkm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vux/src/mixins/multi-items.js
var multi_items = __webpack_require__("piuB");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/tab/tab-item.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tab_item = ({
  name: 'tab-item',
  mixins: [multi_items["a" /* childMixin */]],
  props: {
    activeClass: String,
    disabled: Boolean,
    badgeBackground: {
      type: String,
      default: '#f74c31'
    },
    badgeColor: {
      type: String,
      default: '#fff'
    },
    badgeLabel: String
  },
  computed: {
    style() {
      return {
        borderWidth: this.$parent.lineWidth + 'px',
        borderColor: this.$parent.activeColor,
        color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
        border: this.$parent.animate ? 'none' : 'auto'
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/tab/tab-item.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tab_tab_item = ({
  name: 'tab-item',
  mixins: [multi_items["a" /* childMixin */]],
  props: {
    activeClass: String,
    disabled: Boolean,
    badgeBackground: {
      type: String,
      default: '#f74c31'
    },
    badgeColor: {
      type: String,
      default: '#fff'
    },
    badgeLabel: String
  },
  computed: {
    style() {
      return {
        borderWidth: this.$parent.lineWidth + 'px',
        borderColor: this.$parent.activeColor,
        color: this.currentSelected ? this.$parent.activeColor : this.disabled ? this.$parent.disabledColor : this.$parent.defaultColor,
        border: this.$parent.animate ? 'none' : 'auto'
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-23b03591","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/tab/tab-item.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-tab-item",class:[_vm.currentSelected ? _vm.activeClass : '', {
    'vux-tab-selected': _vm.currentSelected,
    'vux-tab-disabled': _vm.disabled 
  }],style:(_vm.style),on:{"click":_vm.onItemClick}},[_vm._t("default"),_vm._v(" "),(typeof _vm.badgeLabel !== 'undefined' && _vm.badgeLabel !== '')?_c('span',{staticClass:"vux-tab-item-badge",style:({
      background: _vm.badgeBackground,
      color: _vm.badgeColor
    })},[_vm._v("\n  "+_vm._s(_vm.badgeLabel))]):_vm._e()],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_tab_tab_item = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/tab/tab-item.vue
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  tab_tab_item,
  components_tab_tab_item,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_tab_tab_item = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "bIOV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("Msp2");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Actionsheet: _index2.default
  },
  data: function data() {
    return {
      show: true, // 是否显示该组件
      menus: { // 组件的菜单项
        menu1: '分享到朋友圈',
        menu2: '分享到新浪微博'
      }
    };
  },
  methods: {
    myclick: function myclick(menukey, menuitem) {
      console.log('menukey = ' + menukey);
      console.log('menuitem = ' + menuitem);
    }
  }
};

/***/ }),

/***/ "bwrR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _tab = __webpack_require__("odqc");

var _tab2 = _interopRequireDefault(_tab);

var _tabItem = __webpack_require__("Znkm");

var _tabItem2 = _interopRequireDefault(_tabItem);

var _buttonTab = __webpack_require__("MVRq");

var _buttonTab2 = _interopRequireDefault(_buttonTab);

var _buttonTabItem = __webpack_require__("V0DB");

var _buttonTabItem2 = _interopRequireDefault(_buttonTabItem);

var _index = __webpack_require__("ABCa");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("Msp2");

var _index4 = _interopRequireDefault(_index3);

var _vuex = __webpack_require__("NYxO");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'app',

  components: {
    Tab: _tab2.default,
    TabItem: _tabItem2.default,
    ButtonTab: _buttonTab2.default,
    ButtonTabItem: _buttonTabItem2.default,
    XHeader: _index2.default,
    Actionsheet: _index4.default
  },
  computed: _extends({}, (0, _vuex.mapGetters)(['moreMenus']), (0, _vuex.mapState)(['topics', 'loginedMoreMenus', 'unLoginedMoreMenus', 'isLogined']), {

    isShowMoreMenus: {
      get: function get() {

        return this.$store.state.isShowMoreMenus;
      },
      set: function set(nval) {

        this.$store.commit('mutationIsShowMoreMenus', nval);
      }
    }
  }),

  created: function created() {

    var loginStatus = window.localStorage.getItem('loginStatus');

    if (loginStatus) {

      this.mutationLogin();
      this.mutationLoginname(window.localStorage.getItem('loginname'));
      this.mutationAccessToken(window.localStorage.getItem('accesstoken'));
      this.mutationAuthorId(window.localStorage.getItem('author_id'));
    }
  },
  data: function data() {
    return {};
  },
  methods: _extends({}, (0, _vuex.mapMutations)(['mutationLogin', 'mutationLoginname', 'mutationAccessToken', 'mutationAuthorId']), {
    routeto: function routeto(index) {

      this.$router.push('/topiclist/' + this.topics[index].name);
    },
    showMoreMenus: function showMoreMenus() {

      this.isShowMoreMenus = true;
    },
    handleClickMoreMenu: function handleClickMoreMenu(menukey, menuitem) {

      this.$router.push('/' + menukey);
    }
  })
};

/***/ }),

/***/ "dQSc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vux/src/libs/router.js
var router = __webpack_require__("0FxO");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/card/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var card = ({
  name: 'card',
  props: {
    header: Object,
    footer: Object
  },
  methods: {
    onClickFooter() {
      this.footer.link && Object(router["a" /* go */])(this.footer.link, this.$router);
      this.$emit('on-click-footer');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/card/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_card = ({
  name: 'card',
  props: {
    header: Object,
    footer: Object
  },
  methods: {
    onClickFooter() {
      this.footer.link && Object(router["a" /* go */])(this.footer.link, this.$router);
      this.$emit('on-click-footer');
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-49625698","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/card/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"weui-panel weui-panel_access"},[(_vm.header && _vm.header.title)?_c('div',{staticClass:"weui-panel__hd",domProps:{"innerHTML":_vm._s(_vm.header.title)},on:{"click":function($event){_vm.$emit('on-click-header')}}}):_vm._e(),_vm._v(" "),_vm._t("header"),_vm._v(" "),_c('div',{staticClass:"weui-panel__bd"},[_c('div',{staticClass:"vux-card-content"},[_vm._t("content")],2)]),_vm._v(" "),_c('div',{staticClass:"weui-panel__ft"},[(_vm.footer && _vm.footer.title)?_c('a',{staticClass:"weui-cell weui-cell_access weui-cell_link",attrs:{"href":"javascript:"},on:{"click":_vm.onClickFooter}},[_c('div',{staticClass:"weui-cell__bd",domProps:{"innerHTML":_vm._s(_vm.footer.title)}})]):_vm._e()]),_vm._v(" "),_vm._t("footer")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_card = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/card/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("xP3N")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_card,
  src_components_card,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vux_src_components_card = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "fVO5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "fgy6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//

exports.default = {
    name: 'center',
    computed: {
        loginname: function loginname() {
            return this.$store.state.loginname;
        }
    },
    created: function created() {
        this.$router.replace('/user/' + this.loginname);
    }
};

/***/ }),

/***/ "g51t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n    "+_vm._s(_vm.loginname)+"\n")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "gYt2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "h7+7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__("rHil");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("pDNl");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("2sLL");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__("rLAy");

var _index8 = _interopRequireDefault(_index7);

var _vuex = __webpack_require__("NYxO");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'login',
  components: {
    Group: _index2.default,
    XInput: _index4.default,
    XButton: _index6.default,
    Toast: _index8.default
  },
  data: function data() {
    return {
      accesstoken: '',
      isShowToast: false,
      toastText: ''

    };
  },
  methods: _extends({}, (0, _vuex.mapMutations)(['mutationLogin', 'mutationLoginname', 'mutationAccessToken', 'mutationAuthorId']), {

    dologin: function dologin() {
      var app = this;

      this.$http.post('/accesstoken', {
        accesstoken: this.accesstoken
      }).then(function (response) {
        //成功的请求的响应，


        if (response && response.data && response.data.success) {

          app.mutationLogin();
          app.mutationLoginname(response.data.loginname);
          app.mutationAccessToken(app.accesstoken);
          app.mutationAuthorId(response.data.id);

          window.localStorage.setItem('loginStatus', true);
          window.localStorage.setItem('loginname', response.data.loginname);
          window.localStorage.setItem('accesstoken', app.accesstoken);
          window.localStorage.setItem('author_id', response.data.id);

          app.$router.push('/user/' + response.data.loginname);
        }
      }).catch(function (error) {

        app.isShowToast = true;
        app.toastText = error.response.data.error_msg;
      });
    }
  })
};

/***/ }),

/***/ "hCh/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("ALGc");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("rHil");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("2sLL");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'create',
  data: function data() {
    return {
      title: '',
      content: ''
    };
  },

  methods: {

    addtopic: function addtopic() {

      var app = this;

      this.$http.post('/topics', {
        title: this.title,
        content: this.content,
        tab: 'dev',
        accesstoken: this.$store.state.accesstoken
      }).then(function (response) {

        if (response.data && response.data.success) {

          app.$router.replace('/topiclist/dev');
        }
      });
    }
  },
  components: {
    XTextarea: _index2.default,
    Group: _index4.default,
    XButton: _index6.default
  }
};

/***/ }),

/***/ "iz3p":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "jyJz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__ = __webpack_require__("CeTb");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__ = __webpack_require__("HvCd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66e4c28a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__ = __webpack_require__("UViS");
function injectStyle (ssrContext) {
  __webpack_require__("89pb")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_66e4c28a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "kbG3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/inline-desc/index.vue
//
//
//
//

/* harmony default export */ var inline_desc = ({
  name: 'inline-desc'
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/inline-desc/index.vue
//
//
//
//

/* harmony default export */ var components_inline_desc = ({
  name: 'inline-desc'
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-02febef1","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/inline-desc/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"vux-label-desc"},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_inline_desc = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/inline-desc/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("Js7q")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_inline_desc,
  src_components_inline_desc,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vux_src_components_inline_desc = __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "lO7g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__("9ADW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__("xpjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b593689_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__("G1QF");
function injectStyle (ssrContext) {
  __webpack_require__("BRUU")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7b593689_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "mUbh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = {};

exports.default = actions;

/***/ }),

/***/ "nIIj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h5',[_vm._v("发表新话题")]),_vm._v(" "),_c('group',[_c('x-textarea',{attrs:{"placeholder":"标题","max":200,"rows":1},model:{value:(_vm.title),callback:function ($$v) {_vm.title=$$v},expression:"title"}}),_vm._v(" "),_c('x-textarea',{attrs:{"placeholder":"内容","max":2000,"rows":6},model:{value:(_vm.content),callback:function ($$v) {_vm.content=$$v},expression:"content"}})],1),_vm._v(" "),_c('x-button',{attrs:{"type":"primary"},nativeOn:{"click":function($event){return _vm.addtopic($event)}}},[_vm._v("添加新话题")])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "ngzA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("Msp2");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    Actionsheet: _index2.default
  },
  data: function data() {
    return {
      show: true, // 是否显示该组件
      menus: { // 组件的菜单项
        menu1: '分享到朋友圈',
        menu2: '分享到新浪微博'
      }
    };
  },
  methods: {
    myclick: function myclick(menukey, menuitem) {
      console.log('menukey = ' + menukey);
      console.log('menuitem = ' + menuitem);
    }
  }
};

/***/ }),

/***/ "oVPr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h6',[_vm._v("测试actionsheet组件")]),_vm._v(" "),_c('actionsheet',{attrs:{"menus":_vm.menus,"show-cancel":"","theme":"android"},on:{"on-click-menu":_vm.myclick},model:{value:(_vm.show),callback:function ($$v) {_vm.show=$$v},expression:"show"}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "odqc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vux/src/mixins/multi-items.js
var multi_items = __webpack_require__("piuB");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/tab/tab.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tab = ({
  name: 'tab',
  mixins: [multi_items["b" /* parentMixin */]],
  mounted() {
    // stop bar anmination on first loading
    this.$nextTick(() => {
      setTimeout(() => {
        this.hasReady = true;
      }, 0);
    });
  },
  props: {
    lineWidth: {
      type: Number,
      default: 3
    },
    activeColor: String,
    barActiveColor: String,
    defaultColor: String,
    disabledColor: String,
    animate: {
      type: Boolean,
      default: true
    },
    customBarWidth: [Function, String],
    preventDefault: Boolean,
    scrollThreshold: {
      type: Number,
      default: 4
    },
    barPosition: {
      type: String,
      default: 'bottom',
      validator(val) {
        return ['bottom', 'top'].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    barLeft() {
      if (this.hasReady) {
        const count = this.scrollable ? window.innerWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width : this.number;
        return `${this.currentIndex * (100 / count)}%`;
      }
    },
    barRight() {
      if (this.hasReady) {
        const count = this.scrollable ? window.innerWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width : this.number;
        return `${(count - this.currentIndex - 1) * (100 / count)}%`;
      }
    },
    // when prop:custom-bar-width
    innerBarStyle() {
      return {
        width: typeof this.customBarWidth === 'function' ? this.customBarWidth(this.currentIndex) : this.customBarWidth,
        backgroundColor: this.barActiveColor || this.activeColor
      };
    },
    // end
    barStyle() {
      const commonStyle = {
        left: this.barLeft,
        right: this.barRight,
        display: 'block',
        height: this.lineWidth + 'px',
        transition: !this.hasReady ? 'none' : null
      };
      if (!this.customBarWidth) {
        commonStyle.backgroundColor = this.barActiveColor || this.activeColor;
      } else {
        commonStyle.backgroundColor = 'transparent'; // when=prop:custom-bar-width
      }
      return commonStyle;
    },
    barClass() {
      return {
        'vux-tab-ink-bar-transition-forward': this.direction === 'forward',
        'vux-tab-ink-bar-transition-backward': this.direction === 'backward'
      };
    },
    scrollable() {
      return this.number > this.scrollThreshold;
    }
  },
  watch: {
    currentIndex(newIndex, oldIndex) {
      this.direction = newIndex > oldIndex ? 'forward' : 'backward';
      this.$emit('on-index-change', newIndex, oldIndex);
      this.hasReady && this.scrollToActiveTab();
    }
  },
  data() {
    return {
      direction: 'forward',
      right: '100%',
      hasReady: false
    };
  },
  methods: {
    scrollToActiveTab() {
      if (!this.scrollable || !this.$children || !this.$children.length) {
        return;
      }
      const currentIndexTab = this.$children[this.currentIndex].$el;
      let count = 0;
      // scroll animation
      const step = () => {
        const scrollDuration = 15;
        const nav = this.$refs.nav;
        nav.scrollLeft += (currentIndexTab.offsetLeft - (nav.offsetWidth - currentIndexTab.offsetWidth) / 2 - nav.scrollLeft) / scrollDuration;
        if (++count < scrollDuration) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/tab/tab.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var tab_tab = ({
  name: 'tab',
  mixins: [multi_items["b" /* parentMixin */]],
  mounted() {
    // stop bar anmination on first loading
    this.$nextTick(() => {
      setTimeout(() => {
        this.hasReady = true;
      }, 0);
    });
  },
  props: {
    lineWidth: {
      type: Number,
      default: 3
    },
    activeColor: String,
    barActiveColor: String,
    defaultColor: String,
    disabledColor: String,
    animate: {
      type: Boolean,
      default: true
    },
    customBarWidth: [Function, String],
    preventDefault: Boolean,
    scrollThreshold: {
      type: Number,
      default: 4
    },
    barPosition: {
      type: String,
      default: 'bottom',
      validator(val) {
        return ['bottom', 'top'].indexOf(val) !== -1;
      }
    }
  },
  computed: {
    barLeft() {
      if (this.hasReady) {
        const count = this.scrollable ? window.innerWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width : this.number;
        return `${this.currentIndex * (100 / count)}%`;
      }
    },
    barRight() {
      if (this.hasReady) {
        const count = this.scrollable ? window.innerWidth / this.$children[this.currentIndex || 0].$el.getBoundingClientRect().width : this.number;
        return `${(count - this.currentIndex - 1) * (100 / count)}%`;
      }
    },
    // when prop:custom-bar-width
    innerBarStyle() {
      return {
        width: typeof this.customBarWidth === 'function' ? this.customBarWidth(this.currentIndex) : this.customBarWidth,
        backgroundColor: this.barActiveColor || this.activeColor
      };
    },
    // end
    barStyle() {
      const commonStyle = {
        left: this.barLeft,
        right: this.barRight,
        display: 'block',
        height: this.lineWidth + 'px',
        transition: !this.hasReady ? 'none' : null
      };
      if (!this.customBarWidth) {
        commonStyle.backgroundColor = this.barActiveColor || this.activeColor;
      } else {
        commonStyle.backgroundColor = 'transparent'; // when=prop:custom-bar-width
      }
      return commonStyle;
    },
    barClass() {
      return {
        'vux-tab-ink-bar-transition-forward': this.direction === 'forward',
        'vux-tab-ink-bar-transition-backward': this.direction === 'backward'
      };
    },
    scrollable() {
      return this.number > this.scrollThreshold;
    }
  },
  watch: {
    currentIndex(newIndex, oldIndex) {
      this.direction = newIndex > oldIndex ? 'forward' : 'backward';
      this.$emit('on-index-change', newIndex, oldIndex);
      this.hasReady && this.scrollToActiveTab();
    }
  },
  data() {
    return {
      direction: 'forward',
      right: '100%',
      hasReady: false
    };
  },
  methods: {
    scrollToActiveTab() {
      if (!this.scrollable || !this.$children || !this.$children.length) {
        return;
      }
      const currentIndexTab = this.$children[this.currentIndex].$el;
      let count = 0;
      // scroll animation
      const step = () => {
        const scrollDuration = 15;
        const nav = this.$refs.nav;
        nav.scrollLeft += (currentIndexTab.offsetLeft - (nav.offsetWidth - currentIndexTab.offsetWidth) / 2 - nav.scrollLeft) / scrollDuration;
        if (++count < scrollDuration) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-9647ef1e","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/tab/tab.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-tab-wrap",class:_vm.barPosition === 'top' ? 'vux-tab-bar-top' : ''},[_c('div',{staticClass:"vux-tab-container"},[_c('div',{ref:"nav",staticClass:"vux-tab",class:[{'vux-tab-no-animate': !_vm.animate},{ scrollable: _vm.scrollable }]},[_vm._t("default"),_vm._v(" "),(_vm.animate)?_c('div',{staticClass:"vux-tab-ink-bar",class:_vm.barClass,style:(_vm.barStyle)},[(_vm.customBarWidth)?_c('span',{staticClass:"vux-tab-bar-inner",style:(_vm.innerBarStyle)}):_vm._e()]):_vm._e()],2)])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_tab_tab = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/tab/tab.vue
function injectStyle (ssrContext) {
  __webpack_require__("MLYr")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  tab_tab,
  components_tab_tab,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_tab_tab = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "p8U2":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "pDNl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vux/src/libs/base.js + 1 modules
var base = __webpack_require__("f6Hi");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/icon/index.vue
//
//
//
//

/* harmony default export */ var icon = ({
  name: 'icon',
  props: {
    type: String,
    isMsg: Boolean
  },
  computed: {
    className() {
      // compatible with old type param
      return `weui-icon weui_icon_${this.type} weui-icon-${this.type.replace(/_/g, '-')}`;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/icon/index.vue
//
//
//
//

/* harmony default export */ var components_icon = ({
  name: 'icon',
  props: {
    type: String,
    isMsg: Boolean
  },
  computed: {
    className() {
      // compatible with old type param
      return `weui-icon weui_icon_${this.type} weui-icon-${this.type.replace(/_/g, '-')}`;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-13ee6e34","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/icon/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{class:[_vm.className, _vm.isMsg ? 'weui-icon_msg' : '']})}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_icon = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/icon/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("iz3p")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_icon,
  src_components_icon,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vux_src_components_icon = (Component.exports);

// EXTERNAL MODULE: ./node_modules/vux/src/components/toast/index.vue + 3 modules
var toast = __webpack_require__("rLAy");

// EXTERNAL MODULE: ./node_modules/vux/src/components/inline-desc/index.vue + 3 modules
var inline_desc = __webpack_require__("kbG3");

// EXTERNAL MODULE: ./node_modules/validator/lib/isEmail.js
var isEmail = __webpack_require__("2LX0");
var isEmail_default = /*#__PURE__*/__webpack_require__.n(isEmail);

// EXTERNAL MODULE: ./node_modules/validator/lib/isMobilePhone.js
var isMobilePhone = __webpack_require__("Ewe+");
var isMobilePhone_default = /*#__PURE__*/__webpack_require__.n(isMobilePhone);

// EXTERNAL MODULE: ./node_modules/vux/src/tools/debounce/index.js
var debounce = __webpack_require__("nror");

// EXTERNAL MODULE: ./node_modules/vanilla-masker/lib/vanilla-masker.js
var vanilla_masker = __webpack_require__("lFEC");
var vanilla_masker_default = /*#__PURE__*/__webpack_require__.n(vanilla_masker);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-input/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













const validators = {
  'email': {
    fn: isEmail_default.a,
    msg: '邮箱格式'
  },
  'china-mobile': {
    fn(str) {
      return isMobilePhone_default()(str, 'zh-CN');
    },
    msg: '手机号码'
  },
  'china-name': {
    fn(str) {
      return str.length >= 2 && str.length <= 6;
    },
    msg: '中文姓名'
  }
};
/* harmony default export */ var x_input = ({
  name: 'x-input',
  created() {
    this.currentValue = this.value === undefined || this.value === null ? '' : this.mask ? this.maskValue(this.value) : this.value;
    /* istanbul ignore if */
    if (false) {
      if (!this.title && !this.placeholder && !this.currentValue) {
        console.warn('no title and no placeholder?');
      }
    }

    if (this.required && (typeof this.currentValue === 'undefined' || this.currentValue === '')) {
      this.valid = false;
    }
    this.handleChangeEvent = true;
    if (this.debounce) {
      this._debounce = Object(debounce["a" /* default */])(() => {
        this.$emit('on-change', this.currentValue);
      }, this.debounce);
    }
  },
  beforeMount() {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
    if (this.$slots && this.$slots['right-full-height']) {
      this.hasRightFullHeightSlot = true;
    }
  },
  beforeDestroy() {
    if (this._debounce) {
      this._debounce.cancel();
    }
    window.removeEventListener('resize', this.scrollIntoView);
  },
  mixins: [base["a" /* default */]],
  components: {
    Icon: vux_src_components_icon,
    InlineDesc: inline_desc["a" /* default */],
    Toast: toast["default"]
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: [String, Number],
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    keyboard: String,
    inlineDesc: String,
    isType: [String, Function],
    min: Number,
    max: Number,
    showClear: {
      type: Boolean,
      default: true
    },
    equalWith: String,
    textAlign: String,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    novalidate: {
      type: Boolean,
      default: false
    },
    iconType: String,
    debounce: Number,
    placeholderAlign: String,
    labelWidth: String,
    mask: String,
    shouldToastError: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    labelStyles() {
      return {
        width: this.labelWidthComputed || this.$parent.labelWidth || this.labelWidthComputed,
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    },
    pattern() {
      if (this.keyboard === 'number' || this.isType === 'china-mobile') {
        return '[0-9]*';
      }
    },
    labelWidthComputed() {
      const width = this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
      if (width < 10) {
        return width + 'em';
      }
    },
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    },
    inputStyle() {
      if (this.textAlign) {
        return {
          textAlign: this.textAlign
        };
      }
    },
    showWarn() {
      return !this.novalidate && !this.equalWith && !this.valid && this.firstError && (this.touched || this.forceShowError);
    }
  },
  mounted() {
    window.addEventListener('resize', this.scrollIntoView);
  },
  methods: {
    scrollIntoView(time = 0) {
      // alert('scroll into view')
      if (/iphone/i.test(navigator.userAgent)) {
        // return
      }
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        // alert('will scroll')
        setTimeout(() => {
          // alert(this.$refs.input.length)
          this.$refs.input.scrollIntoViewIfNeeded(true);
        }, time);
      }
    },
    onClickErrorIcon() {
      if (this.shouldToastError && this.firstError) {
        this.showErrorToast = true;
      }
      this.$emit('on-click-error-icon', this.firstError);
    },
    maskValue(val) {
      const val1 = this.mask ? vanilla_masker_default.a.toPattern(val, this.mask) : val;
      return val1;
    },
    reset(value = '') {
      this.dirty = false;
      this.currentValue = value;
      this.firstError = '';
      this.valid = true;
    },
    clear() {
      this.currentValue = '';
      this.focus();
      this.$emit('on-click-clear-icon');
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
    focusHandler($event) {
      this.$emit('on-focus', this.currentValue, $event);
      this.isFocus = true;
      // this.scrollIntoView(500)
      // this.scrollIntoView(5000)
      setTimeout(() => {
        this.$refs.input.scrollIntoViewIfNeeded(false);
        // this.$refs.input.scrollIntoViewIfNeeded()
      }, 1000);
      // $event.target.
    },
    onBlur($event) {
      this.setTouched();
      this.validate();
      this.isFocus = false;
      this.$emit('on-blur', this.currentValue, $event);
    },
    onKeyUp(e) {
      if (e.key === 'Enter') {
        e.target.blur();
        this.$emit('on-enter', this.currentValue, e);
      }
    },
    getError() {
      let key = Object.keys(this.errors)[0];
      this.firstError = this.errors[key];
    },
    validate() {
      if (typeof this.equalWith !== 'undefined') {
        this.validateEqual();
        return;
      }
      this.errors = {};

      if (!this.currentValue && !this.required) {
        this.valid = true;
        return;
      }

      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = '必填哦';
        this.getError();
        return;
      }

      if (typeof this.isType === 'string') {
        const validator = validators[this.isType];
        if (validator) {
          let value = this.currentValue;

          if (this.isType === 'china-mobile' && this.mask === '999 9999 9999') {
            value = this.currentValue.replace(/\s+/g, '');
          }

          this.valid = validator['fn'](value);
          if (!this.valid) {
            this.forceShowError = true;
            this.errors.format = validator['msg'] + '格式不对哦~';
            this.getError();
            return;
          } else {
            delete this.errors.format;
          }
        }
      }

      if (typeof this.isType === 'function') {
        const validStatus = this.isType(this.currentValue);
        this.valid = validStatus.valid;
        if (!this.valid) {
          this.errors.format = validStatus.msg;
          this.forceShowError = true;
          this.getError();
          return;
        } else {
          delete this.errors.format;
        }
      }

      if (this.min) {
        if (this.currentValue.length < this.min) {
          this.errors.min = `最少应该输入${this.min}个字符哦`;
          this.valid = false;
          this.getError();
          return;
        } else {
          delete this.errors.min;
        }
      }

      if (this.max) {
        if (this.currentValue.length > this.max) {
          this.errors.max = `最多可以输入${this.max}个字符哦`;
          this.valid = false;
          this.forceShowError = true;
          return;
        } else {
          this.forceShowError = false;
          delete this.errors.max;
        }
      }

      this.valid = true;
    },
    validateEqual() {
      if (!this.equalWith && this.currentValue) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      }
      let willCheck = this.dirty || this.currentValue.length >= this.equalWith.length;
      // 只在长度符合时显示正确与否
      if (willCheck && this.currentValue !== this.equalWith) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      } else {
        if (!this.currentValue && this.required) {
          this.valid = false;
        } else {
          this.valid = true;
          delete this.errors.equal;
        }
      }
    },
    // #2810
    _getInputMaskSelection(selection, direction, maskVal, loop) {
      if (!this.mask || loop && direction === 0) {
        return selection;
      }
      if (direction === 0) {
        direction = this.lastDirection;
      }
      if (direction > 0) {
        const maskChar = this.mask.substr(selection - direction, 1);
        if (!maskChar.match(/[9SA]/)) {
          return this._getInputMaskSelection(selection + 1, direction, maskVal, true);
        }
      }
      return selection;
    }
  },
  data() {
    return {
      hasRightFullHeightSlot: false,
      hasRestrictedLabel: false,
      firstError: '',
      forceShowError: false,
      hasLengthEqual: false,
      valid: true,
      currentValue: '',
      showErrorToast: false,
      isFocus: false
    };
  },
  watch: {
    mask(val) {
      if (val && this.currentValue) {
        this.currentValue = this.maskValue(this.currentValue);
      }
    },
    valid() {
      this.getError();
    },
    value(val) {
      this.currentValue = val;
    },
    equalWith(newVal) {
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
    },
    currentValue(newVal, oldVal) {
      if (!this.equalWith && newVal) {
        this.validateEqual();
      }
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }

      let selection = this.$refs.input.selectionStart;
      let direction = newVal.length - oldVal.length;
      selection = this._getInputMaskSelection(selection, direction, this.maskValue(newVal));
      this.lastDirection = direction;
      this.$emit('input', this.maskValue(newVal));
      // #2810
      this.$nextTick(() => {
        if (this.$refs.input.selectionStart !== selection) {
          this.$refs.input.selectionStart = selection;
          this.$refs.input.selectionEnd = selection;
        }
        if (this.currentValue !== this.maskValue(newVal)) {
          this.currentValue = this.maskValue(newVal);
        }
      });

      if (this._debounce) {
        this._debounce();
      } else {
        this.$emit('on-change', newVal);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/x-input/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













const x_input_validators = {
  'email': {
    fn: isEmail_default.a,
    msg: '邮箱格式'
  },
  'china-mobile': {
    fn(str) {
      return isMobilePhone_default()(str, 'zh-CN');
    },
    msg: '手机号码'
  },
  'china-name': {
    fn(str) {
      return str.length >= 2 && str.length <= 6;
    },
    msg: '中文姓名'
  }
};
/* harmony default export */ var components_x_input = ({
  name: 'x-input',
  created() {
    this.currentValue = this.value === undefined || this.value === null ? '' : this.mask ? this.maskValue(this.value) : this.value;
    /* istanbul ignore if */
    if (false) {
      if (!this.title && !this.placeholder && !this.currentValue) {
        console.warn('no title and no placeholder?');
      }
    }

    if (this.required && (typeof this.currentValue === 'undefined' || this.currentValue === '')) {
      this.valid = false;
    }
    this.handleChangeEvent = true;
    if (this.debounce) {
      this._debounce = Object(debounce["a" /* default */])(() => {
        this.$emit('on-change', this.currentValue);
      }, this.debounce);
    }
  },
  beforeMount() {
    if (this.$slots && this.$slots['restricted-label']) {
      this.hasRestrictedLabel = true;
    }
    if (this.$slots && this.$slots['right-full-height']) {
      this.hasRightFullHeightSlot = true;
    }
  },
  beforeDestroy() {
    if (this._debounce) {
      this._debounce.cancel();
    }
    window.removeEventListener('resize', this.scrollIntoView);
  },
  mixins: [base["a" /* default */]],
  components: {
    Icon: vux_src_components_icon,
    InlineDesc: inline_desc["a" /* default */],
    Toast: toast["default"]
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: [String, Number],
    name: String,
    readonly: Boolean,
    disabled: Boolean,
    keyboard: String,
    inlineDesc: String,
    isType: [String, Function],
    min: Number,
    max: Number,
    showClear: {
      type: Boolean,
      default: true
    },
    equalWith: String,
    textAlign: String,
    // https://github.com/yisibl/blog/issues/3
    autocomplete: {
      type: String,
      default: 'off'
    },
    autocapitalize: {
      type: String,
      default: 'off'
    },
    autocorrect: {
      type: String,
      default: 'off'
    },
    spellcheck: {
      type: String,
      default: 'false'
    },
    novalidate: {
      type: Boolean,
      default: false
    },
    iconType: String,
    debounce: Number,
    placeholderAlign: String,
    labelWidth: String,
    mask: String,
    shouldToastError: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    labelStyles() {
      return {
        width: this.labelWidthComputed || this.$parent.labelWidth || this.labelWidthComputed,
        textAlign: this.$parent.labelAlign,
        marginRight: this.$parent.labelMarginRight
      };
    },
    labelClass() {
      return {
        'vux-cell-justify': this.$parent.labelAlign === 'justify' || this.$parent.$parent.labelAlign === 'justify'
      };
    },
    pattern() {
      if (this.keyboard === 'number' || this.isType === 'china-mobile') {
        return '[0-9]*';
      }
    },
    labelWidthComputed() {
      const width = this.title.replace(/[^x00-xff]/g, '00').length / 2 + 1;
      if (width < 10) {
        return width + 'em';
      }
    },
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    },
    inputStyle() {
      if (this.textAlign) {
        return {
          textAlign: this.textAlign
        };
      }
    },
    showWarn() {
      return !this.novalidate && !this.equalWith && !this.valid && this.firstError && (this.touched || this.forceShowError);
    }
  },
  mounted() {
    window.addEventListener('resize', this.scrollIntoView);
  },
  methods: {
    scrollIntoView(time = 0) {
      // alert('scroll into view')
      if (/iphone/i.test(navigator.userAgent)) {
        // return
      }
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') {
        // alert('will scroll')
        setTimeout(() => {
          // alert(this.$refs.input.length)
          this.$refs.input.scrollIntoViewIfNeeded(true);
        }, time);
      }
    },
    onClickErrorIcon() {
      if (this.shouldToastError && this.firstError) {
        this.showErrorToast = true;
      }
      this.$emit('on-click-error-icon', this.firstError);
    },
    maskValue(val) {
      const val1 = this.mask ? vanilla_masker_default.a.toPattern(val, this.mask) : val;
      return val1;
    },
    reset(value = '') {
      this.dirty = false;
      this.currentValue = value;
      this.firstError = '';
      this.valid = true;
    },
    clear() {
      this.currentValue = '';
      this.focus();
      this.$emit('on-click-clear-icon');
    },
    focus() {
      this.$refs.input.focus();
    },
    blur() {
      this.$refs.input.blur();
    },
    focusHandler($event) {
      this.$emit('on-focus', this.currentValue, $event);
      this.isFocus = true;
      // this.scrollIntoView(500)
      // this.scrollIntoView(5000)
      setTimeout(() => {
        this.$refs.input.scrollIntoViewIfNeeded(false);
        // this.$refs.input.scrollIntoViewIfNeeded()
      }, 1000);
      // $event.target.
    },
    onBlur($event) {
      this.setTouched();
      this.validate();
      this.isFocus = false;
      this.$emit('on-blur', this.currentValue, $event);
    },
    onKeyUp(e) {
      if (e.key === 'Enter') {
        e.target.blur();
        this.$emit('on-enter', this.currentValue, e);
      }
    },
    getError() {
      let key = Object.keys(this.errors)[0];
      this.firstError = this.errors[key];
    },
    validate() {
      if (typeof this.equalWith !== 'undefined') {
        this.validateEqual();
        return;
      }
      this.errors = {};

      if (!this.currentValue && !this.required) {
        this.valid = true;
        return;
      }

      if (!this.currentValue && this.required) {
        this.valid = false;
        this.errors.required = '必填哦';
        this.getError();
        return;
      }

      if (typeof this.isType === 'string') {
        const validator = x_input_validators[this.isType];
        if (validator) {
          let value = this.currentValue;

          if (this.isType === 'china-mobile' && this.mask === '999 9999 9999') {
            value = this.currentValue.replace(/\s+/g, '');
          }

          this.valid = validator['fn'](value);
          if (!this.valid) {
            this.forceShowError = true;
            this.errors.format = validator['msg'] + '格式不对哦~';
            this.getError();
            return;
          } else {
            delete this.errors.format;
          }
        }
      }

      if (typeof this.isType === 'function') {
        const validStatus = this.isType(this.currentValue);
        this.valid = validStatus.valid;
        if (!this.valid) {
          this.errors.format = validStatus.msg;
          this.forceShowError = true;
          this.getError();
          return;
        } else {
          delete this.errors.format;
        }
      }

      if (this.min) {
        if (this.currentValue.length < this.min) {
          this.errors.min = `最少应该输入${this.min}个字符哦`;
          this.valid = false;
          this.getError();
          return;
        } else {
          delete this.errors.min;
        }
      }

      if (this.max) {
        if (this.currentValue.length > this.max) {
          this.errors.max = `最多可以输入${this.max}个字符哦`;
          this.valid = false;
          this.forceShowError = true;
          return;
        } else {
          this.forceShowError = false;
          delete this.errors.max;
        }
      }

      this.valid = true;
    },
    validateEqual() {
      if (!this.equalWith && this.currentValue) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      }
      let willCheck = this.dirty || this.currentValue.length >= this.equalWith.length;
      // 只在长度符合时显示正确与否
      if (willCheck && this.currentValue !== this.equalWith) {
        this.valid = false;
        this.errors.equal = '输入不一致';
        return;
      } else {
        if (!this.currentValue && this.required) {
          this.valid = false;
        } else {
          this.valid = true;
          delete this.errors.equal;
        }
      }
    },
    // #2810
    _getInputMaskSelection(selection, direction, maskVal, loop) {
      if (!this.mask || loop && direction === 0) {
        return selection;
      }
      if (direction === 0) {
        direction = this.lastDirection;
      }
      if (direction > 0) {
        const maskChar = this.mask.substr(selection - direction, 1);
        if (!maskChar.match(/[9SA]/)) {
          return this._getInputMaskSelection(selection + 1, direction, maskVal, true);
        }
      }
      return selection;
    }
  },
  data() {
    return {
      hasRightFullHeightSlot: false,
      hasRestrictedLabel: false,
      firstError: '',
      forceShowError: false,
      hasLengthEqual: false,
      valid: true,
      currentValue: '',
      showErrorToast: false,
      isFocus: false
    };
  },
  watch: {
    mask(val) {
      if (val && this.currentValue) {
        this.currentValue = this.maskValue(this.currentValue);
      }
    },
    valid() {
      this.getError();
    },
    value(val) {
      this.currentValue = val;
    },
    equalWith(newVal) {
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }
    },
    currentValue(newVal, oldVal) {
      if (!this.equalWith && newVal) {
        this.validateEqual();
      }
      if (newVal && this.equalWith) {
        if (newVal.length === this.equalWith.length) {
          this.hasLengthEqual = true;
        }
        this.validateEqual();
      } else {
        this.validate();
      }

      let selection = this.$refs.input.selectionStart;
      let direction = newVal.length - oldVal.length;
      selection = this._getInputMaskSelection(selection, direction, this.maskValue(newVal));
      this.lastDirection = direction;
      this.$emit('input', this.maskValue(newVal));
      // #2810
      this.$nextTick(() => {
        if (this.$refs.input.selectionStart !== selection) {
          this.$refs.input.selectionStart = selection;
          this.$refs.input.selectionEnd = selection;
        }
        if (this.currentValue !== this.maskValue(newVal)) {
          this.currentValue = this.maskValue(newVal);
        }
      });

      if (this._debounce) {
        this._debounce();
      } else {
        this.$emit('on-change', newVal);
      }
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3d662f60","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/x-input/index.vue
var x_input_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-x-input weui-cell",class:{
			'weui-cell_warn': _vm.showWarn,
			'disabled': _vm.disabled,
			'vux-x-input-has-right-full': _vm.hasRightFullHeightSlot
		}},[_c('div',{staticClass:"weui-cell__hd"},[(_vm.hasRestrictedLabel)?_c('div',{style:(_vm.labelStyles)},[_vm._t("restricted-label")],2):_vm._e(),_vm._v(" "),_vm._t("label",[(_vm.title)?_c('label',{staticClass:"weui-label",class:_vm.labelClass,style:({width: _vm.labelWidth || _vm.$parent.labelWidth || _vm.labelWidthComputed, textAlign: _vm.$parent.labelAlign, marginRight: _vm.$parent.labelMarginRight}),attrs:{"for":("vux-x-input-" + _vm.uuid)},domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_vm._v(" "),(_vm.inlineDesc)?_c('inline-desc',[_vm._v(_vm._s(_vm.inlineDesc))]):_vm._e()])],2),_vm._v(" "),_c('div',{staticClass:"weui-cell__bd weui-cell__primary",class:_vm.placeholderAlign ? ("vux-x-input-placeholder-" + _vm.placeholderAlign) : ''},[(!_vm.type || _vm.type === 'text')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"text","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e(),_vm._v(" "),(_vm.type === 'number')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"number","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e(),_vm._v(" "),(_vm.type === 'email')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"email","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e(),_vm._v(" "),(_vm.type === 'password')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"password","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e(),_vm._v(" "),(_vm.type === 'tel')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentValue),expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:(_vm.inputStyle),attrs:{"id":("vux-x-input-" + _vm.uuid),"maxlength":_vm.max,"autocomplete":_vm.autocomplete,"autocapitalize":_vm.autocapitalize,"autocorrect":_vm.autocorrect,"spellcheck":_vm.spellcheck,"type":"tel","name":_vm.name,"pattern":_vm.pattern,"placeholder":_vm.placeholder,"readonly":_vm.readonly,"disabled":_vm.disabled},domProps:{"value":(_vm.currentValue)},on:{"focus":_vm.focusHandler,"blur":_vm.onBlur,"keyup":_vm.onKeyUp,"input":function($event){if($event.target.composing){ return; }_vm.currentValue=$event.target.value}}}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"weui-cell__ft"},[_c('icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hasRightFullHeightSlot && !_vm.equalWith && _vm.showClear && _vm.currentValue !== '' && !_vm.readonly && !_vm.disabled && _vm.isFocus),expression:"!hasRightFullHeightSlot && !equalWith && showClear && currentValue !== '' && !readonly && !disabled && isFocus"}],attrs:{"type":"clear"},nativeOn:{"click":function($event){return _vm.clear($event)}}}),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.showWarn),expression:"showWarn"}],staticClass:"vux-input-icon",attrs:{"type":"warn","title":!_vm.valid ? _vm.firstError : ''},nativeOn:{"click":function($event){return _vm.onClickErrorIcon($event)}}}),_vm._v(" "),(!_vm.novalidate && _vm.hasLengthEqual && _vm.dirty && _vm.equalWith && !_vm.valid)?_c('icon',{staticClass:"vux-input-icon",attrs:{"type":"warn"},nativeOn:{"click":function($event){return _vm.onClickErrorIcon($event)}}}):_vm._e(),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(!_vm.novalidate && _vm.equalWith && _vm.equalWith === _vm.currentValue && _vm.valid),expression:"!novalidate && equalWith && equalWith === currentValue && valid"}],attrs:{"type":"success"}}),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.novalidate && _vm.iconType === 'success'),expression:"novalidate && iconType === 'success'"}],staticClass:"vux-input-icon",attrs:{"type":"success"}}),_vm._v(" "),_c('icon',{directives:[{name:"show",rawName:"v-show",value:(_vm.novalidate && _vm.iconType === 'error'),expression:"novalidate && iconType === 'error'"}],staticClass:"vux-input-icon",attrs:{"type":"warn"}}),_vm._v(" "),_vm._t("right"),_vm._v(" "),(_vm.hasRightFullHeightSlot)?_c('div',{staticClass:"vux-x-input-right-full"},[_vm._t("right-full-height")],2):_vm._e()],2),_vm._v(" "),_c('toast',{attrs:{"type":"text","width":"auto","time":600},model:{value:(_vm.showErrorToast),callback:function ($$v) {_vm.showErrorToast=$$v},expression:"showErrorToast"}},[_vm._v(_vm._s(_vm.firstError))])],1)}
var x_input_staticRenderFns = []
var x_input_esExports = { render: x_input_render, staticRenderFns: x_input_staticRenderFns }
/* harmony default export */ var src_components_x_input = (x_input_esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/x-input/index.vue
function x_input_injectStyle (ssrContext) {
  __webpack_require__("fVO5")
}
var x_input_normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var x_input___vue_template_functional__ = false
/* styles */
var x_input___vue_styles__ = x_input_injectStyle
/* scopeId */
var x_input___vue_scopeId__ = null
/* moduleIdentifier (server only) */
var x_input___vue_module_identifier__ = null
var x_input_Component = x_input_normalizeComponent(
  components_x_input,
  src_components_x_input,
  x_input___vue_template_functional__,
  x_input___vue_styles__,
  x_input___vue_scopeId__,
  x_input___vue_module_identifier__
)

/* harmony default export */ var vux_src_components_x_input = __webpack_exports__["default"] = (x_input_Component.exports);


/***/ }),

/***/ "qmEX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__("mtWM");

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = _axios2.default.create({
    baseURL: 'https://cnodejs.org/api/v1'
});
// 对外输出模块
exports.default = request;

/***/ }),

/***/ "r0jV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.isShowMsg)?_c('msg',{attrs:{"title":"操作失败","description":"不允许访问","icon":"warn","buttons":_vm.buttons}}):_vm._e()],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "rHil":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vux/src/libs/clean-style.js
var clean_style = __webpack_require__("wmxo");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/group/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var group = ({
  name: 'group',
  methods: {
    cleanStyle: clean_style["a" /* default */]
  },
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gutter: [String, Number],
    footerTitle: String,
    footerTitleColor: String
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/group/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_group = ({
  name: 'group',
  methods: {
    cleanStyle: clean_style["a" /* default */]
  },
  props: {
    title: String,
    titleColor: String,
    labelWidth: String,
    labelAlign: String,
    labelMarginRight: String,
    gutter: [String, Number],
    footerTitle: String,
    footerTitleColor: String
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-00172c07","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/group/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.title)?_c('div',{staticClass:"weui-cells__title",style:(_vm.cleanStyle({
    color: _vm.titleColor
  })),domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_vm._v(" "),_vm._t("title"),_vm._v(" "),_c('div',{staticClass:"weui-cells",class:{
    'vux-no-group-title': !_vm.title
  },style:(_vm.cleanStyle({
    marginTop: typeof _vm.gutter === 'number' ? (_vm.gutter + 'px') : _vm.gutter
  }))},[_vm._t("after-title"),_vm._v(" "),_vm._t("default")],2),_vm._v(" "),(_vm.footerTitle)?_c('div',{staticClass:"weui-cells__title vux-group-footer-title",style:(_vm.cleanStyle({
    color: _vm.footerTitleColor
  })),domProps:{"innerHTML":_vm._s(_vm.footerTitle)}}):_vm._e()],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_group = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/group/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("9zH9")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_group,
  src_components_group,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vux_src_components_group = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "rLAy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/vux/src/mixins/safari-fix.js
var safari_fix = __webpack_require__("xNvf");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/toast/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var toast = ({
  name: 'toast',
  mixins: [safari_fix["a" /* default */]],
  props: {
    value: Boolean,
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'success'
    },
    transition: String,
    width: {
      type: String,
      default: '7.6em'
    },
    isShowMask: {
      type: Boolean,
      default: false
    },
    text: String,
    position: String
  },
  data() {
    return {
      show: false
    };
  },
  created() {
    if (this.value) {
      this.show = true;
    }
  },
  computed: {
    currentTransition() {
      if (this.transition) {
        return this.transition;
      }
      if (this.position === 'top') {
        return 'vux-slide-from-top';
      }
      if (this.position === 'bottom') {
        return 'vux-slide-from-bottom';
      }
      return 'vux-fade';
    },
    toastClass() {
      return {
        'weui-toast_forbidden': this.type === 'warn',
        'weui-toast_cancel': this.type === 'cancel',
        'weui-toast_success': this.type === 'success',
        'weui-toast_text': this.type === 'text',
        'vux-toast-top': this.position === 'top',
        'vux-toast-bottom': this.position === 'bottom',
        'vux-toast-middle': this.position === 'middle'
      };
    },
    style() {
      if (this.type === 'text' && this.width === 'auto') {
        return { padding: '10px' };
      }
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.$emit('input', true);
        this.$emit('on-show');
        this.fixSafariOverflowScrolling('auto');

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.show = false;
          this.$emit('input', false);
          this.$emit('on-hide');
          this.fixSafariOverflowScrolling('touch');
        }, this.time);
      }
    },
    value(val) {
      this.show = val;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vux-loader/src/script-loader.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./node_modules/vux/src/components/toast/index.vue
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var components_toast = ({
  name: 'toast',
  mixins: [safari_fix["a" /* default */]],
  props: {
    value: Boolean,
    time: {
      type: Number,
      default: 2000
    },
    type: {
      type: String,
      default: 'success'
    },
    transition: String,
    width: {
      type: String,
      default: '7.6em'
    },
    isShowMask: {
      type: Boolean,
      default: false
    },
    text: String,
    position: String
  },
  data() {
    return {
      show: false
    };
  },
  created() {
    if (this.value) {
      this.show = true;
    }
  },
  computed: {
    currentTransition() {
      if (this.transition) {
        return this.transition;
      }
      if (this.position === 'top') {
        return 'vux-slide-from-top';
      }
      if (this.position === 'bottom') {
        return 'vux-slide-from-bottom';
      }
      return 'vux-fade';
    },
    toastClass() {
      return {
        'weui-toast_forbidden': this.type === 'warn',
        'weui-toast_cancel': this.type === 'cancel',
        'weui-toast_success': this.type === 'success',
        'weui-toast_text': this.type === 'text',
        'vux-toast-top': this.position === 'top',
        'vux-toast-bottom': this.position === 'bottom',
        'vux-toast-middle': this.position === 'middle'
      };
    },
    style() {
      if (this.type === 'text' && this.width === 'auto') {
        return { padding: '10px' };
      }
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.$emit('input', true);
        this.$emit('on-show');
        this.fixSafariOverflowScrolling('auto');

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.show = false;
          this.$emit('input', false);
          this.$emit('on-hide');
          this.fixSafariOverflowScrolling('touch');
        }, this.time);
      }
    },
    value(val) {
      this.show = val;
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3f9fa4da","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vux-loader/src/before-template-compiler-loader.js!./node_modules/vux-loader/src/template-loader.js!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./node_modules/vux/src/components/toast/index.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vux-toast"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowMask && _vm.show),expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),_vm._v(" "),_c('transition',{attrs:{"name":_vm.currentTransition}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],staticClass:"weui-toast",class:_vm.toastClass,style:({width: _vm.width})},[_c('i',{directives:[{name:"show",rawName:"v-show",value:(_vm.type !== 'text'),expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),_vm._v(" "),(_vm.text)?_c('p',{staticClass:"weui-toast__content",style:(_vm.style),domProps:{"innerHTML":_vm._s(_vm.text)}}):_c('p',{staticClass:"weui-toast__content",style:(_vm.style)},[_vm._t("default")],2)])])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var src_components_toast = (esExports);
// CONCATENATED MODULE: ./node_modules/vux/src/components/toast/index.vue
function injectStyle (ssrContext) {
  __webpack_require__("NeJJ")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  components_toast,
  src_components_toast,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var vux_src_components_toast = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "rad8":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rpJ5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "rxRc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("85RD");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'logout',
  data: function data() {
    return {
      isShowMsg: false,
      buttons: [{
        type: 'primary',
        text: '跳转页面',
        link: '/login'
      }]
    };
  },

  components: {
    Msg: _index2.default
  },
  created: function created() {

    if (false == this.$store.state.isLogined) {
      this.isShowMsg = true;
      return;
    }

    this.$store.commit('mutationLogout');

    window.localStorage.clear();

    this.$router.push('/topiclist/all');
  }
};

/***/ }),

/***/ "s1cg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("ALGc");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("rHil");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("2sLL");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'edit',
  props: ['id'],
  data: function data() {
    return {
      topic: {
        title: '',
        content: ''
      }
    };
  },
  methods: {
    edittopic: function edittopic() {
      var app = this;
      this.$http.post('/topics/update', {

        topic_id: this.topic.id,
        title: this.topic.title,
        content: this.topic.content,
        accesstoken: this.$store.state.accesstoken,
        tab: 'dev'
      }).then(function (response) {

        app.$router.back();
      });
    }
  },
  components: {
    XTextarea: _index2.default,
    Group: _index4.default,
    XButton: _index6.default
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.$http.get('/topic/' + to.params.id).then(function (response) {
        vm.topic = response.data.data;
      });
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var app = this;
    app.$http.get('/topic/' + to.params.id).then(function (response) {
      app.topic = response.data.data;
    });
    next();
  }

};

/***/ }),

/***/ "s8dJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Center_vue__ = __webpack_require__("B7RC");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Center_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Center_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Center_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Center_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Center_vue__ = __webpack_require__("fgy6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Center_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Center_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_254e90f6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_Center_vue__ = __webpack_require__("g51t");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Center_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_254e90f6_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_Center_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "sSCK":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "sVDg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Topic_vue__ = __webpack_require__("AHJq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Topic_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Topic_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Topic_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Topic_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Topic_vue__ = __webpack_require__("sn/c");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Topic_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Topic_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_189d3b52_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_Topic_vue__ = __webpack_require__("xCMf");
function injectStyle (ssrContext) {
  __webpack_require__("EZPN")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Topic_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_189d3b52_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_Topic_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "sn/c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__("rHil");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("32ER");

var _index4 = _interopRequireDefault(_index3);

var _flexbox = __webpack_require__("YxJB");

var _flexbox2 = _interopRequireDefault(_flexbox);

var _flexboxItem = __webpack_require__("3Lt7");

var _flexboxItem2 = _interopRequireDefault(_flexboxItem);

var _index5 = __webpack_require__("2dJ1");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__("ALGc");

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__("2sLL");

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__("HD9R");

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__("63CM");

var _index14 = _interopRequireDefault(_index13);

var _vuex = __webpack_require__("NYxO");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'topic',
  props: ['id'],
  components: {
    Group: _index2.default,
    CellBox: _index4.default,
    Flexbox: _flexbox2.default,
    FlexboxItem: _flexboxItem2.default,
    WechatEmotion: _index6.default,
    XTextarea: _index8.default,
    XButton: _index10.default,
    Popup: _index12.default
  },
  directives: {
    TransferDom: _index14.default
  },
  computed: _extends({}, (0, _vuex.mapState)(['isLogined'])),
  data: function data() {
    return {
      topic: null,
      replyContent: '',
      isShowPopup: false,
      reply_id: null,
      reply_loginname: ''
    };
  },
  methods: {
    decollect: function decollect() {

      var app = this;
      this.$http.post('/topic_collect/de_collect', {
        accesstoken: this.$store.state.accesstoken,
        topic_id: this.topic.id
      }).then(function (response) {

        if (response.data && response.data.success) {

          app.topic.is_collect = false;
        }
      });
    },


    collect: function collect() {
      var app = this;
      this.$http.post('/topic_collect/collect', {

        accesstoken: this.$store.state.accesstoken,
        topic_id: this.topic.id
      }).then(function (response) {

        if (response.data && response.data.success) {

          app.topic.is_collect = true;
        }
      });
    },

    upOrDown: function upOrDown(reply_id) {

      var app = this;

      this.$http.post('/reply/' + reply_id + '/ups', {
        accesstoken: this.$store.state.accesstoken
      }).then(function (response) {

        if (response && response.data && response.data.success) {

          var type = response.data.action;

          var reply;

          for (var index = 0; index <= app.topic.replies.length; index++) {
            if (app.topic.replies[index].id == reply_id) {

              reply = app.topic.replies[index];
              break;
            }
          }
          if (type == 'up') {
            // 点赞


            reply.ups.push(app.$store.state.accesstoken);
          } else if (type == 'down') {
            // 取消点赞


            reply.ups.pop();
          }
        }
      });
    },

    hidepopoup: function hidepopoup() {
      this.reply_id = null;
      this.reply_loginname = '';
    },


    showPopup: function showPopup(reply_id, reply_loginname) {

      this.isShowPopup = true;
      this.reply_id = reply_id;
      this.reply_loginname = reply_loginname;
    },

    addreply: function addreply(replyTab) {

      var params = {
        accesstoken: this.$store.state.accesstoken,
        content: this.replyContent
      };
      if (replyTab == 2) {
        params.reply_id = this.reply_id;

        params.content = '@' + this.reply_loginname + ' ' + params.content;
      }
      var app = this;
      this.$http.post('/topic/' + this.topic.id + '/replies', params).then(function (response) {

        if (response.data && response.data.success) {

          var reply = {
            "id": response.data.reply_id,
            "author": {
              "loginname": app.$store.state.loginname,
              "avatar_url": "https://avatars0.githubusercontent.com/u/40679561?v=4&amp;s=120"
            },
            "content": params.content,
            "ups": [],
            "create_at": "2014-10-07T13:05:32.158Z",
            "reply_id": null,
            "is_uped": false
          };
          if (replyTab == 2) {
            reply.reply_id = app.reply_id;
          }
          app.topic.replies.push(reply);

          app.replyContent = '';
          app.reply_id = '';
          app.isShowPopup = false;
          app.reply_loginname = '';
        }
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {

      vm.$http.get('/topic/' + to.params.id, {
        params: {
          accesstoken: vm.$store.state.accesstoken
        }
      }).then(function (response) {

        if (response.data.success) {
          vm.topic = response.data.data;
        }
      });
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var app = this;
    this.$http.get('/topic/' + to.params.id, {
      params: {
        accesstoken: this.$store.state.accesstoken
      }
    }).then(function (response) {

      if (response.data.success) {
        app.topic = response.data.data;
      }
    });
  }
};

/***/ }),

/***/ "ukYY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var mutations = {
    mutationIsShowMoreMenus: function mutationIsShowMoreMenus(state, payload) {
        // state表示当前状态数据
        // payload表示使用方法传递的附加值
        state.isShowMoreMenus = payload;
    },
    // 实现用户登录操作
    mutationLogin: function mutationLogin(state) {
        state.isLogined = true;
    },
    // 修改loginname
    mutationLoginname: function mutationLoginname(state, payload) {
        state.loginname = payload;
    },
    mutationAccessToken: function mutationAccessToken(state, payload) {
        state.accesstoken = payload;
    },
    // 实现用户注销操作
    mutationLogout: function mutationLogout(state) {
        state.isLogined = false;
        state.loginname = '';
        state.accesstoken = '';
    },
    //修改author_id
    mutationAuthorId: function mutationAuthorId(state, payload) {
        state.author_id = payload;
    }
};

exports.default = mutations;

/***/ }),

/***/ "vNYA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__("ALGc");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("rHil");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("2sLL");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'create',
  data: function data() {
    return {
      title: '',
      content: ''
    };
  },

  methods: {

    addtopic: function addtopic() {

      var app = this;

      this.$http.post('/topics', {
        title: this.title,
        content: this.content,
        tab: 'dev',
        accesstoken: this.$store.state.accesstoken
      }).then(function (response) {

        if (response.data && response.data.success) {

          app.$router.replace('/topiclist/dev');
        }
      });
    }
  },
  components: {
    XTextarea: _index2.default,
    Group: _index4.default,
    XButton: _index6.default
  }
};

/***/ }),

/***/ "vWb6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "vZEh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._v("\n    msg page\n")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "xCMf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.topic)?_c('div',[_c('article',{staticClass:"weui-article"},[_c('h1',[_vm._v("\n            "+_vm._s(_vm.topic.title)+"\n            "),(_vm.topic.author_id == _vm.$store.state.author_id)?_c('x-button',{attrs:{"mini":true,"type":"primary","link":'/topic/' +_vm.topic.id+'/edit'}},[_vm._v("编辑")]):_vm._e(),_vm._v(" "),(_vm.topic.is_collect == false)?_c('x-button',{attrs:{"type":"primary","mini":true},nativeOn:{"click":function($event){return _vm.collect($event)}}},[_vm._v("收藏")]):_c('x-button',{attrs:{"mini":true},nativeOn:{"click":function($event){return _vm.decollect($event)}}},[_vm._v("取消收藏")])],1),_vm._v(" "),_c('section',[_c('span',[_vm._v("作者："),_c('a',{attrs:{"href":'/#/user/' + _vm.topic.author.loginname}},[_vm._v(_vm._s(_vm.topic.author.loginname))])]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.topic.visit_count)+"次浏览")]),_vm._v(" "),_c('span',[_vm._v("来自："),_c('a',{attrs:{"href":'/#/topiclist/' + _vm.topic.tab}},[_vm._v(_vm._s(_vm.topic.tab))])])]),_vm._v(" "),_c('hr'),_vm._v(" "),_c('section',{domProps:{"innerHTML":_vm._s(_vm.topic.content)}})]),_vm._v(" "),_c('group',_vm._l((_vm.topic.replies),function(item,index){return _c('cell-box',{key:index},[_c('flexbox',[_c('flexbox-item',{attrs:{"span":1/10}},[_c('img',{staticStyle:{"width":"30px","height":"30px"},attrs:{"src":item.author.avatar_url}})]),_vm._v(" "),_c('flexbox-item',[_c('section',[_c('div',[_c('a',{attrs:{"href":'/#/user/' + item.author.loginname}},[_vm._v("\n                            "+_vm._s(item.author.loginname)+"\n                            ")]),_vm._v("\n                            "+_vm._s(index+1)+"楼\n                        ")]),_vm._v(" "),_c('div',{domProps:{"innerHTML":_vm._s(item.content)}})])]),_vm._v(" "),_c('flexbox-item',{attrs:{"span":1/4}},[_c('span',{on:{"click":function($event){_vm.upOrDown(item.id)}}},[_c('wechat-emotion',[_vm._v("强")]),_vm._v("\n                        "+_vm._s(item.ups.length)+"\n                    ")],1),_vm._v(" "),(_vm.isLogined)?_c('span',{on:{"click":function($event){_vm.showPopup(item.id, item.author.loginname)}}},[_vm._v("\n                        回复\n                    ")]):_vm._e()])],1)],1)})),_vm._v(" "),_c('group',[_c('x-textarea',{attrs:{"placeholder":"评论内容"},model:{value:(_vm.replyContent),callback:function ($$v) {_vm.replyContent=$$v},expression:"replyContent"}})],1),_vm._v(" "),_c('x-button',{attrs:{"mini":true,"type":"primary"},nativeOn:{"click":function($event){_vm.addreply(1)}}},[_vm._v("回复")]),_vm._v(" "),_c('div',{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[_c('popup',{on:{"on-hide":_vm.hidepopoup},model:{value:(_vm.isShowPopup),callback:function ($$v) {_vm.isShowPopup=$$v},expression:"isShowPopup"}},[_c('group',[_c('x-textarea',{attrs:{"placeholder":"请输入评论内容"},model:{value:(_vm.replyContent),callback:function ($$v) {_vm.replyContent=$$v},expression:"replyContent"}})],1),_vm._v(" "),_c('x-button',{attrs:{"mini":true,"type":"primary"},nativeOn:{"click":function($event){_vm.addreply(2)}}},[_vm._v("回复")])],1)],1)],1):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "xJsL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__("h7+7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__ = __webpack_require__("xv3V");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_02bafc5d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__ = __webpack_require__("6iZP");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Login_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_02bafc5d_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_Login_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "xP3N":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "xpjs":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
     value: true
});
//
//
//
//

exports.default = {
     name: 'home'
};

/***/ }),

/***/ "xv3V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _index = __webpack_require__("rHil");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("pDNl");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__("2sLL");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__("rLAy");

var _index8 = _interopRequireDefault(_index7);

var _vuex = __webpack_require__("NYxO");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'login',
  components: {
    Group: _index2.default,
    XInput: _index4.default,
    XButton: _index6.default,
    Toast: _index8.default
  },
  data: function data() {
    return {
      accesstoken: '',
      isShowToast: false,
      toastText: ''

    };
  },
  methods: _extends({}, (0, _vuex.mapMutations)(['mutationLogin', 'mutationLoginname', 'mutationAccessToken', 'mutationAuthorId']), {

    dologin: function dologin() {
      var app = this;

      this.$http.post('/accesstoken', {
        accesstoken: this.accesstoken
      }).then(function (response) {
        //成功的请求的响应，


        if (response && response.data && response.data.success) {

          app.mutationLogin();
          app.mutationLoginname(response.data.loginname);
          app.mutationAccessToken(app.accesstoken);
          app.mutationAuthorId(response.data.id);

          window.localStorage.setItem('loginStatus', true);
          window.localStorage.setItem('loginname', response.data.loginname);
          window.localStorage.setItem('accesstoken', app.accesstoken);
          window.localStorage.setItem('author_id', response.data.id);

          app.$router.push('/user/' + response.data.loginname);
        }
      }).catch(function (error) {

        app.isShowToast = true;
        app.toastText = error.response.data.error_msg;
      });
    }
  })
};

/***/ }),

/***/ "xzd6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _tab = __webpack_require__("odqc");

var _tab2 = _interopRequireDefault(_tab);

var _tabItem = __webpack_require__("Znkm");

var _tabItem2 = _interopRequireDefault(_tabItem);

var _buttonTab = __webpack_require__("MVRq");

var _buttonTab2 = _interopRequireDefault(_buttonTab);

var _buttonTabItem = __webpack_require__("V0DB");

var _buttonTabItem2 = _interopRequireDefault(_buttonTabItem);

var _index = __webpack_require__("ABCa");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__("Msp2");

var _index4 = _interopRequireDefault(_index3);

var _vuex = __webpack_require__("NYxO");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'app',

  components: {
    Tab: _tab2.default,
    TabItem: _tabItem2.default,
    ButtonTab: _buttonTab2.default,
    ButtonTabItem: _buttonTabItem2.default,
    XHeader: _index2.default,
    Actionsheet: _index4.default
  },
  computed: _extends({}, (0, _vuex.mapGetters)(['moreMenus']), (0, _vuex.mapState)(['topics', 'loginedMoreMenus', 'unLoginedMoreMenus', 'isLogined']), {

    isShowMoreMenus: {
      get: function get() {

        return this.$store.state.isShowMoreMenus;
      },
      set: function set(nval) {

        this.$store.commit('mutationIsShowMoreMenus', nval);
      }
    }
  }),

  created: function created() {

    var loginStatus = window.localStorage.getItem('loginStatus');

    if (loginStatus) {

      this.mutationLogin();
      this.mutationLoginname(window.localStorage.getItem('loginname'));
      this.mutationAccessToken(window.localStorage.getItem('accesstoken'));
      this.mutationAuthorId(window.localStorage.getItem('author_id'));
    }
  },
  data: function data() {
    return {};
  },
  methods: _extends({}, (0, _vuex.mapMutations)(['mutationLogin', 'mutationLoginname', 'mutationAccessToken', 'mutationAuthorId']), {
    routeto: function routeto(index) {

      this.$router.push('/topiclist/' + this.topics[index].name);
    },
    showMoreMenus: function showMoreMenus() {

      this.isShowMoreMenus = true;
    },
    handleClickMoreMenu: function handleClickMoreMenu(menukey, menuitem) {

      this.$router.push('/' + menukey);
    }
  })
};

/***/ }),

/***/ "y8p6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Msg_vue__ = __webpack_require__("MKFD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Msg_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Msg_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Msg_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Msg_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Msg_vue__ = __webpack_require__("XHu4");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Msg_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Msg_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1c4f8418_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_Msg_vue__ = __webpack_require__("vZEh");
var normalizeComponent = __webpack_require__("VU/8")
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_1__babel_loader_node_modules_vux_loader_src_script_loader_js_node_modules_vue_loader_lib_selector_type_script_index_0_Msg_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1c4f8418_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vux_loader_src_before_template_compiler_loader_js_node_modules_vux_loader_src_template_loader_js_node_modules_vue_loader_lib_selector_type_template_index_0_Msg_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "zrdn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('scroller',{ref:"pullup",attrs:{"lock-x":"","scrollerbarY":"","use-pullup":"","pullup-config":_vm.pullupConfig,"height":"-46"},on:{"on-pullup-loading":_vm.loadMoreData}},[_c('div',[_c('group',_vm._l((_vm.lists),function(item,index){return _c('cell',{key:index,attrs:{"is-":"","link":'/topic/' + item.id}},[_c('span',{staticClass:"cell_title",attrs:{"slot":"title"},slot:"title"},[_c('span',{staticClass:"reply_count"},[_vm._v("\n                        "+_vm._s(item.reply_count)+"\n                    ")]),_vm._v("\n                    /\n                    "),_c('span',{staticClass:"visit_count"},[_vm._v("\n                        "+_vm._s(item.visit_count)+"\n                    ")]),_vm._v(" "),(item.top)?_c('span',{staticClass:"top"},[_vm._v("\n                        置顶\n                    ")]):_vm._e(),_vm._v(" "),(_vm.$route.path == '/topiclist/all')?_c('span',{staticClass:"tab"},[_vm._v("\n                        "+_vm._s(item.tab)+"\n                    ")]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"title"},[_vm._v("\n                        "+_vm._s(item.title)+"\n                    ")])]),_vm._v(" "),_c('span',{staticClass:"cell_athor_avatar",attrs:{"slot":"icon"},slot:"icon"},[_c('img',{attrs:{"src":item.author.avatar_url}})])])}))],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},["NHnr"]);
//# sourceMappingURL=app.fa8b9eb639e9cbcc5453.js.map