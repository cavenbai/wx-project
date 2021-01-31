(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/vant-weapp/dist/button/index"],{

/***/ "./src/components/vant-weapp/dist/button/index.js":
/*!********************************************************!*\
  !*** ./src/components/vant-weapp/dist/button/index.js ***!
  \********************************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _common_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/component */ "./src/components/vant-weapp/dist/common/component.js");
/* harmony import */ var _mixins_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/button */ "./src/components/vant-weapp/dist/mixins/button.js");
/* harmony import */ var _mixins_open_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/open-type */ "./src/components/vant-weapp/dist/mixins/open-type.js");
/* harmony import */ var _common_version__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/version */ "./src/components/vant-weapp/dist/common/version.js");




var mixins = [_mixins_button__WEBPACK_IMPORTED_MODULE_1__[/* button */ "a"], _mixins_open_type__WEBPACK_IMPORTED_MODULE_2__[/* openType */ "a"]];

if (Object(_common_version__WEBPACK_IMPORTED_MODULE_3__[/* canIUseFormFieldButton */ "a"])()) {
  mixins.push('wx://form-field-button');
}

Object(_common_component__WEBPACK_IMPORTED_MODULE_0__[/* VantComponent */ "a"])({
  mixins: mixins,
  classes: ['hover-class', 'loading-class'],
  data: {
    baseStyle: ''
  },
  props: {
    formType: String,
    icon: String,
    classPrefix: {
      type: String,
      value: 'van-icon'
    },
    plain: Boolean,
    block: Boolean,
    round: Boolean,
    square: Boolean,
    loading: Boolean,
    hairline: Boolean,
    disabled: Boolean,
    loadingText: String,
    customStyle: String,
    loadingType: {
      type: String,
      value: 'circular'
    },
    type: {
      type: String,
      value: 'default'
    },
    dataset: null,
    size: {
      type: String,
      value: 'normal'
    },
    loadingSize: {
      type: String,
      value: '20px'
    },
    color: String
  },
  methods: {
    onClick: function onClick() {
      if (!this.data.loading) {
        this.$emit('click');
      }
    },
    noop: function noop() {}
  }
});

/***/ }),

/***/ "./src/components/vant-weapp/dist/common/utils.js":
/*!********************************************************!*\
  !*** ./src/components/vant-weapp/dist/common/utils.js ***!
  \********************************************************/
/*! exports provided: range, nextTick, getSystemInfoSync, addUnit, requestAnimationFrame, pickExclude, getRect, getAllRect, groupSetData, toPromise, getCurrentPage */
/*! exports used: getSystemInfoSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export range */
/* unused harmony export nextTick */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSystemInfoSync; });
/* unused harmony export addUnit */
/* unused harmony export requestAnimationFrame */
/* unused harmony export pickExclude */
/* unused harmony export getRect */
/* unused harmony export getAllRect */
/* unused harmony export groupSetData */
/* unused harmony export toPromise */
/* unused harmony export getCurrentPage */
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validator */ "./src/components/vant-weapp/dist/common/validator.js");
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version */ "./src/components/vant-weapp/dist/common/version.js");


function range(num, min, max) {
  return Math.min(Math.max(num, min), max);
}
function nextTick(cb) {
  if (Object(_version__WEBPACK_IMPORTED_MODULE_1__[/* canIUseNextTick */ "c"])()) {
    wx.nextTick(cb);
  } else {
    setTimeout(function () {
      cb();
    }, 1000 / 30);
  }
}
var systemInfo;
function getSystemInfoSync() {
  if (systemInfo == null) {
    systemInfo = wx.getSystemInfoSync();
  }

  return systemInfo;
}
function addUnit(value) {
  if (!Object(_validator__WEBPACK_IMPORTED_MODULE_0__[/* isDef */ "a"])(value)) {
    return undefined;
  }

  value = String(value);
  return Object(_validator__WEBPACK_IMPORTED_MODULE_0__[/* isNumber */ "b"])(value) ? "".concat(value, "px") : value;
}
function requestAnimationFrame(cb) {
  var systemInfo = getSystemInfoSync();

  if (systemInfo.platform === 'devtools') {
    return setTimeout(function () {
      cb();
    }, 1000 / 30);
  }

  return wx.createSelectorQuery().selectViewport().boundingClientRect().exec(function () {
    cb();
  });
}
function pickExclude(obj, keys) {
  if (!Object(_validator__WEBPACK_IMPORTED_MODULE_0__[/* isPlainObject */ "c"])(obj)) {
    return {};
  }

  return Object.keys(obj).reduce(function (prev, key) {
    if (!keys.includes(key)) {
      prev[key] = obj[key];
    }

    return prev;
  }, {});
}
function getRect(context, selector) {
  return new Promise(function (resolve) {
    wx.createSelectorQuery().in(context).select(selector).boundingClientRect().exec(function () {
      var rect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return resolve(rect[0]);
    });
  });
}
function getAllRect(context, selector) {
  return new Promise(function (resolve) {
    wx.createSelectorQuery().in(context).selectAll(selector).boundingClientRect().exec(function () {
      var rect = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return resolve(rect[0]);
    });
  });
}
function groupSetData(context, cb) {
  if (Object(_version__WEBPACK_IMPORTED_MODULE_1__[/* canIUseGroupSetData */ "b"])()) {
    context.groupSetData(cb);
  } else {
    cb();
  }
}
function toPromise(promiseLike) {
  if (Object(_validator__WEBPACK_IMPORTED_MODULE_0__[/* isPromise */ "d"])(promiseLike)) {
    return promiseLike;
  }

  return Promise.resolve(promiseLike);
}
function getCurrentPage() {
  var pages = getCurrentPages();
  return pages[pages.length - 1];
}

/***/ }),

/***/ "./src/components/vant-weapp/dist/common/validator.js":
/*!************************************************************!*\
  !*** ./src/components/vant-weapp/dist/common/validator.js ***!
  \************************************************************/
/*! exports provided: isFunction, isPlainObject, isPromise, isDef, isObj, isNumber, isBoolean, isImageUrl, isVideoUrl */
/*! exports used: isDef, isNumber, isPlainObject, isPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isFunction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isPlainObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isDef; });
/* unused harmony export isObj */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isNumber; });
/* unused harmony export isBoolean */
/* unused harmony export isImageUrl */
/* unused harmony export isVideoUrl */
/* harmony import */ var _Users_baipengfei_Documents_my_wx_project_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function isFunction(val) {
  return typeof val === 'function';
}
function isPlainObject(val) {
  return val !== null && Object(_Users_baipengfei_Documents_my_wx_project_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(val) === 'object' && !Array.isArray(val);
}
function isPromise(val) {
  return isPlainObject(val) && isFunction(val.then) && isFunction(val.catch);
}
function isDef(value) {
  return value !== undefined && value !== null;
}
function isObj(x) {
  var type = Object(_Users_baipengfei_Documents_my_wx_project_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(x);

  return x !== null && (type === 'object' || type === 'function');
}
function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}
function isBoolean(value) {
  return typeof value === 'boolean';
}
var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
var VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv)/i;
function isImageUrl(url) {
  return IMAGE_REGEXP.test(url);
}
function isVideoUrl(url) {
  return VIDEO_REGEXP.test(url);
}

/***/ }),

/***/ "./src/components/vant-weapp/dist/common/version.js":
/*!**********************************************************!*\
  !*** ./src/components/vant-weapp/dist/common/version.js ***!
  \**********************************************************/
/*! exports provided: canIUseModel, canIUseFormFieldButton, canIUseAnimate, canIUseGroupSetData, canIUseNextTick */
/*! exports used: canIUseFormFieldButton, canIUseGroupSetData, canIUseNextTick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export canIUseModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canIUseFormFieldButton; });
/* unused harmony export canIUseAnimate */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return canIUseGroupSetData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return canIUseNextTick; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/components/vant-weapp/dist/common/utils.js");


function compareVersion(v1, v2) {
  v1 = v1.split('.');
  v2 = v2.split('.');
  var len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }

  while (v2.length < len) {
    v2.push('0');
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i], 10);
    var num2 = parseInt(v2[i], 10);

    if (num1 > num2) {
      return 1;
    }

    if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}

function canIUseModel() {
  var system = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getSystemInfoSync */ "a"])();
  return compareVersion(system.SDKVersion, '2.9.3') >= 0;
}
function canIUseFormFieldButton() {
  var system = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getSystemInfoSync */ "a"])();
  return compareVersion(system.SDKVersion, '2.10.3') >= 0;
}
function canIUseAnimate() {
  var system = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getSystemInfoSync */ "a"])();
  return compareVersion(system.SDKVersion, '2.9.0') >= 0;
}
function canIUseGroupSetData() {
  var system = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* getSystemInfoSync */ "a"])();
  return compareVersion(system.SDKVersion, '2.4.0') >= 0;
}
function canIUseNextTick() {
  return wx.canIUse('nextTick');
}

/***/ }),

/***/ "./src/components/vant-weapp/dist/mixins/button.js":
/*!*********************************************************!*\
  !*** ./src/components/vant-weapp/dist/mixins/button.js ***!
  \*********************************************************/
/*! exports provided: button */
/*! exports used: button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return button; });
var button = Behavior({
  externalClasses: ['hover-class'],
  properties: {
    id: String,
    lang: String,
    businessId: Number,
    sessionFrom: String,
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
    appParameter: String,
    ariaLabel: String
  }
});

/***/ }),

/***/ "./src/components/vant-weapp/dist/mixins/open-type.js":
/*!************************************************************!*\
  !*** ./src/components/vant-weapp/dist/mixins/open-type.js ***!
  \************************************************************/
/*! exports provided: openType */
/*! exports used: openType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return openType; });
// @ts-nocheck
var openType = Behavior({
  properties: {
    openType: String
  },
  methods: {
    bindGetUserInfo: function bindGetUserInfo(event) {
      this.$emit('getuserinfo', event.detail);
    },
    bindContact: function bindContact(event) {
      this.$emit('contact', event.detail);
    },
    bindGetPhoneNumber: function bindGetPhoneNumber(event) {
      this.$emit('getphonenumber', event.detail);
    },
    bindError: function bindError(event) {
      this.$emit('error', event.detail);
    },
    bindLaunchApp: function bindLaunchApp(event) {
      this.$emit('launchapp', event.detail);
    },
    bindOpenSetting: function bindOpenSetting(event) {
      this.$emit('opensetting', event.detail);
    }
  }
});

/***/ })

},[["./src/components/vant-weapp/dist/button/index.js","runtime","vendors","common"]]]);
//# sourceMappingURL=index.js.map