(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/components/vant-weapp/dist/common/component.js":
/*!************************************************************!*\
  !*** ./src/components/vant-weapp/dist/common/component.js ***!
  \************************************************************/
/*! exports provided: VantComponent */
/*! exports used: VantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VantComponent; });
/* harmony import */ var _mixins_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/basic */ "./src/components/vant-weapp/dist/mixins/basic.js");


function mapKeys(source, target, map) {
  Object.keys(map).forEach(function (key) {
    if (source[key]) {
      target[map[key]] = source[key];
    }
  });
}

function VantComponent(vantOptions) {
  var options = {};
  mapKeys(vantOptions, options, {
    data: 'data',
    props: 'properties',
    mixins: 'behaviors',
    methods: 'methods',
    beforeCreate: 'created',
    created: 'attached',
    mounted: 'ready',
    destroyed: 'detached',
    classes: 'externalClasses'
  }); // add default externalClasses

  options.externalClasses = options.externalClasses || [];
  options.externalClasses.push('custom-class'); // add default behaviors

  options.behaviors = options.behaviors || [];
  options.behaviors.push(_mixins_basic__WEBPACK_IMPORTED_MODULE_0__[/* basic */ "a"]); // add relations

  var relation = vantOptions.relation;

  if (relation) {
    options.relations = relation.relations;
    options.behaviors.push(relation.mixin);
  } // map field to form-field behavior


  if (vantOptions.field) {
    options.behaviors.push('wx://form-field');
  } // add default options


  options.options = {
    multipleSlots: true,
    addGlobalClass: true
  };
  Component(options);
}



/***/ }),

/***/ "./src/components/vant-weapp/dist/mixins/basic.js":
/*!********************************************************!*\
  !*** ./src/components/vant-weapp/dist/mixins/basic.js ***!
  \********************************************************/
/*! exports provided: basic */
/*! exports used: basic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basic; });
var basic = Behavior({
  methods: {
    $emit: function $emit(name, detail, options) {
      this.triggerEvent(name, detail, options);
    },
    set: function set(data) {
      this.setData(data);
      return new Promise(function (resolve) {
        return wx.nextTick(resolve);
      });
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=common.js.map