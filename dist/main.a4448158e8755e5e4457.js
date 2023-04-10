/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    background-color: rgba(63, 181, 96, 0.241);\r\n}\r\n\r\ntd {\r\n    width: 100px;\r\n    height: 100px;\r\n    border: 1px solid black;\r\n    text-align: center;\r\n    font-size: 70px;\r\n    font-weight: bold;\r\n    background-color: white;\r\n}\r\n\r\n\r\n#countdown {\r\n    font-size: 24px;\r\n    margin: 20px;\r\n}\r\n\r\n#score {\r\n    font-size: 24px;\r\n    margin: 20px;\r\n}\r\n\r\n#foundwords {\r\n\r\n    padding: 10px;\r\n    border: 1px solid black;\r\n    height: 500px;\r\n    width: 400px;\r\n    overflow-y: auto;\r\n    background-color: rgba(0, 0, 0, 0.173);\r\n    margin-right: auto;\r\n}\r\n#scoreboard {\r\n\r\n    background-color: rgba(0, 0, 0, 0.214);\r\n    padding: 10px;\r\n    border: 1px solid black;\r\n    height: 500px;\r\n    width: 200px;\r\n    overflow-y: auto;\r\n    margin-right: auto;\r\n\r\n}\r\n\r\n\r\n#title {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    font-size: 70px;\r\n}\r\n\r\n#submit-btn {\r\n    margin-top: 550px;\r\n    font-size: 50px;\r\n    margin-left: 100px; \r\n}\r\n\r\n#boggle-board {\r\n    margin-top: 100px;  \r\n    margin-left: 100px;  \r\n    text-align: center;\r\n    position:absolute;\r\n    display: inline-block;\r\n}\r\n\r\n.clicked {\r\n    background-color: rgba(41, 79, 183, 0.655);\r\n  }", "",{"version":3,"sources":["webpack://./src/main.css"],"names":[],"mappings":"AAAA;IACI,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,uBAAuB;AAC3B;;;AAGA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,sCAAsC;IACtC,kBAAkB;AACtB;AACA;;IAEI,sCAAsC;IACtC,aAAa;IACb,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;;AAEtB;;;AAGA;IACI,cAAc;IACd,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,qBAAqB;AACzB;;AAEA;IACI,0CAA0C;EAC5C","sourcesContent":["body {\r\n    background-color: rgba(63, 181, 96, 0.241);\r\n}\r\n\r\ntd {\r\n    width: 100px;\r\n    height: 100px;\r\n    border: 1px solid black;\r\n    text-align: center;\r\n    font-size: 70px;\r\n    font-weight: bold;\r\n    background-color: white;\r\n}\r\n\r\n\r\n#countdown {\r\n    font-size: 24px;\r\n    margin: 20px;\r\n}\r\n\r\n#score {\r\n    font-size: 24px;\r\n    margin: 20px;\r\n}\r\n\r\n#foundwords {\r\n\r\n    padding: 10px;\r\n    border: 1px solid black;\r\n    height: 500px;\r\n    width: 400px;\r\n    overflow-y: auto;\r\n    background-color: rgba(0, 0, 0, 0.173);\r\n    margin-right: auto;\r\n}\r\n#scoreboard {\r\n\r\n    background-color: rgba(0, 0, 0, 0.214);\r\n    padding: 10px;\r\n    border: 1px solid black;\r\n    height: 500px;\r\n    width: 200px;\r\n    overflow-y: auto;\r\n    margin-right: auto;\r\n\r\n}\r\n\r\n\r\n#title {\r\n    margin: 0 auto;\r\n    text-align: center;\r\n    font-size: 70px;\r\n}\r\n\r\n#submit-btn {\r\n    margin-top: 550px;\r\n    font-size: 50px;\r\n    margin-left: 100px; \r\n}\r\n\r\n#boggle-board {\r\n    margin-top: 100px;  \r\n    margin-left: 100px;  \r\n    text-align: center;\r\n    position:absolute;\r\n    display: inline-block;\r\n}\r\n\r\n.clicked {\r\n    background-color: rgba(41, 79, 183, 0.655);\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./src/main.css");

// import { generateBoard, word } from './boggleboard.js'

//variables
var word = "";
var timerOn = false;
var lastClickedCell;
var currentCell;
var totalScore = 0;
var currentScore = 0;
var gameTime = 5;
var playerName = "unkown";
var date = new Date();
var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

//jQuery
$(document).ready(function () {
  generateBoard();

  //get html elements using jquery
  var submitButton = $("#submit-btn");
  var resetButton = $("#reset-btn");
  var btn = $(".btn");
  var foundwords = $("#foundwords");
  var score = $("#score");
  var scoreboard = $("#scoreboard");
  var countdown = $("#countdown");
  var boggleboard = $("#boggle-board");
  var cells = $("td");
  var title = $("#title");

  //css styles using jquery
  $("#score,#countdown,#submit-btn,#foundwords,#scoreboard").css({
    "display": "inline-block",
    "position": "relative"
  });
  $("#foundwords,#scoreboard").css({
    "float": "right",
    "margin-top": "100px"
  });

  //click handlers for the buttons
  //submit button
  submitButton.click(function () {
    if (word.length >= 3) {
      submitWord();
      reset();
    } else {
      alert('The minimum word lenght is 3 letters!');
    }
  });
  //reset button
  resetButton.click(function () {
    reset();
  });

  //adds latest word to submitted words overview
  function submitWord() {
    calculateScore();
    foundwords.append("<br>", word);
    word = "";
  }
  //remove player input from board
  function reset() {
    cells.removeClass("clicked");
    word = "";
    lastClickedCell = undefined;
    currentCell = undefined;
  }

  //generates boggle board
  function generateBoard() {
    //update the board
    boggleboard = $("#boggle-board");
    // Define the letters for the Boggle board
    var letters = ["A", "A", "E", "E", "G", "N", "N", "R", "S", "W", "D", "K", "O", "T", "U", "L", "G", "Y", "B", "J", "X", "Q", "Z", "M", "C", "P", "F", "H", "V", "I"];

    // Define the function to shuffle the letters
    function shuffle(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var _ref = [array[j], array[i]];
        array[i] = _ref[0];
        array[j] = _ref[1];
      }
      return array;
    }

    // Shuffle the letters
    shuffle(letters);

    //build the board 
    for (var i = 0; i < 4; i++) {
      var row = $("<tr>");
      for (var j = 0; j < 4; j++) {
        var cell = $("<td>");
        cell.text(letters[i * 4 + j]);
        row.append(cell);
      }
      boggleboard.append(row);
    }
    //add click events to each cell
    addClickEvents();
  }
  function addClickEvents() {
    // Attach click event listener to cells
    $('td').click(function () {
      // Get row and column index of clicked cell
      var rowIndex = $(this).parent().index();
      var colIndex = $(this).index();
      //get clicked cell
      currentCell = $(this);
      // Check if clicked cell is adjacent to last clicked cell
      if (lastClickedCell === undefined || Math.abs(rowIndex - lastClickedCell.rowIndex) <= 1 && Math.abs(colIndex - lastClickedCell.colIndex) <= 1) {
        // Allow click
        lastClickedCell = {
          rowIndex: rowIndex,
          colIndex: colIndex
        };
        //check if user is not clicking on previous cell
        if (!currentCell.hasClass("clicked")) {
          word += currentCell.text(); // append the clicked letter to the word
          currentCell.addClass("clicked"); // add the "clicked" class to the cell
          console.log(word); // log the updated word to the console
          if (!timerOn) {
            timerOn = true;
            startTimer(gameTime, countdown); //start timer when clicking the first cell
          }
        } else {
          alert("You can't click same letter twice!");
        }
      } else {
        // Do not allow click
        alert('You can only click letters adjacent to the last clicked letter!');
      }
    });
  }

  //starts the countdown timer
  function startTimer(duration, display) {
    var timer = duration,
      minutes,
      seconds;
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.text("Time: " + minutes + ":" + seconds);
      //timer has finished
      if (timerOn) {
        if (--timer < 0) {
          timerOn = false;
          finishGame();
          timer = gameTime;
        }
      }
    }, 1000);
  }

  //deletes old board, generates new one, ask player to enter name for scoreboard
  function finishGame() {
    alert('time is up!');
    reset();
    $("#boggle-board tr").remove();
    generateBoard();
    boggleboard = $("boggle-board");
    cells = $("td");
    playerName = prompt("Please enter your name");
    scoreboard.append("<br>", playerName + " scored " + totalScore + " points on " + "".concat(day, "-").concat(month, "-").concat(year));
    totalScore = 0;
    score.text(totalScore.toString());
    foundwords.html("");
  }
  //calculate score of last entered word based on official boggle rules
  function calculateScore() {
    var wordLength = word.length;
    currentScore = 0;
    if (wordLength == 3 || wordLength == 4) {
      currentScore = 1;
    } else if (wordLength == 5) {
      currentScore = 2;
    } else if (wordLength == 6) {
      currentScore = 3;
    } else if (wordLength == 7) {
      currentScore = 5;
    } else if (wordLength == 8 || wordLength > 8) {
      currentScore = 11;
    }
    totalScore += currentScore;
    score.text(totalScore.toString());
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7TUFBRXZFLFlBQVksR0FBRyxDQUFDO0lBQUMsQ0FBQyxNQUN2RCxJQUFJdUUsVUFBVSxJQUFJLENBQUMsRUFBRTtNQUFFdkUsWUFBWSxHQUFHLENBQUM7SUFBQyxDQUFDLE1BQ3pDLElBQUl1RSxVQUFVLElBQUksQ0FBQyxFQUFFO01BQUV2RSxZQUFZLEdBQUcsQ0FBQztJQUFDLENBQUMsTUFDekMsSUFBSXVFLFVBQVUsSUFBSSxDQUFDLEVBQUU7TUFBRXZFLFlBQVksR0FBRyxDQUFDO0lBQUMsQ0FBQyxNQUN6QyxJQUFJdUUsVUFBVSxJQUFJLENBQUMsSUFBSUEsVUFBVSxHQUFHLENBQUMsRUFBRTtNQUFFdkUsWUFBWSxHQUFHLEVBQUU7SUFBQztJQUVoRUQsVUFBVSxJQUFJQyxZQUFZO0lBQzFCbUIsS0FBSyxDQUFDMkIsSUFBSSxDQUFDL0MsVUFBVSxDQUFDc0UsUUFBUSxFQUFFLENBQUM7RUFDckM7QUFrQkosQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2dnbGUvLi9zcmMvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vYm9nZ2xlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ib2dnbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ib2dnbGUvLi9zcmMvbWFpbi5jc3M/ZGRkMyIsIndlYnBhY2s6Ly9ib2dnbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYm9nZ2xlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ib2dnbGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYm9nZ2xlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JvZ2dsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JvZ2dsZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JvZ2dsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ib2dnbGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYm9nZ2xlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ib2dnbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ib2dnbGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ib2dnbGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JvZ2dsZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2MywgMTgxLCA5NiwgMC4yNDEpO1xcclxcbn1cXHJcXG5cXHJcXG50ZCB7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb3VudGRvd24ge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3Njb3JlIHtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNmb3VuZHdvcmRzIHtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE3Myk7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG59XFxyXFxuI3Njb3JlYm9hcmQge1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjE0KTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIGhlaWdodDogNTAwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jdGl0bGUge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDcwcHg7XFxyXFxufVxcclxcblxcclxcbiNzdWJtaXQtYnRuIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTUwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4OyBcXHJcXG59XFxyXFxuXFxyXFxuI2JvZ2dsZS1ib2FyZCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4OyAgXFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDsgIFxcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5jbGlja2VkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MSwgNzksIDE4MywgMC42NTUpO1xcclxcbiAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0NBQXNDO0lBQ3RDLGtCQUFrQjtBQUN0QjtBQUNBOztJQUVJLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7QUFFdEI7OztBQUdBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMENBQTBDO0VBQzVDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCAxODEsIDk2LCAwLjI0MSk7XFxyXFxufVxcclxcblxcclxcbnRkIHtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDcwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2NvdW50ZG93biB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc2NvcmUge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIG1hcmdpbjogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2ZvdW5kd29yZHMge1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTczKTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG4jc2NvcmVib2FyZCB7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yMTQpO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbiN0aXRsZSB7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI3N1Ym1pdC1idG4ge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1NTBweDtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7IFxcclxcbn1cXHJcXG5cXHJcXG4jYm9nZ2xlLWJvYXJkIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7ICBcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4OyAgXFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmNsaWNrZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQxLCA3OSwgMTgzLCAwLjY1NSk7XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc3R5bGUgZnJvbSAnLi9tYWluLmNzcydcclxuLy8gaW1wb3J0IHsgZ2VuZXJhdGVCb2FyZCwgd29yZCB9IGZyb20gJy4vYm9nZ2xlYm9hcmQuanMnXHJcblxyXG5cclxuLy92YXJpYWJsZXNcclxubGV0IHdvcmQgPSBcIlwiO1xyXG5sZXQgdGltZXJPbiA9IGZhbHNlO1xyXG5sZXQgbGFzdENsaWNrZWRDZWxsO1xyXG5sZXQgY3VycmVudENlbGw7XHJcbmxldCB0b3RhbFNjb3JlID0gMDtcclxubGV0IGN1cnJlbnRTY29yZSA9IDA7XHJcbmxldCBnYW1lVGltZSA9IDU7XHJcbmxldCBwbGF5ZXJOYW1lID0gXCJ1bmtvd25cIjtcclxuY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbmxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxubGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxubGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG4vL2pRdWVyeVxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgZ2VuZXJhdGVCb2FyZCgpO1xyXG5cclxuICAgIC8vZ2V0IGh0bWwgZWxlbWVudHMgdXNpbmcganF1ZXJ5XHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSAkKFwiI3N1Ym1pdC1idG5cIik7XHJcbiAgICBjb25zdCByZXNldEJ1dHRvbiA9ICQoXCIjcmVzZXQtYnRuXCIpO1xyXG4gICAgY29uc3QgYnRuID0gJChcIi5idG5cIik7XHJcbiAgICBjb25zdCBmb3VuZHdvcmRzID0gJChcIiNmb3VuZHdvcmRzXCIpO1xyXG4gICAgbGV0IHNjb3JlID0gJChcIiNzY29yZVwiKTtcclxuICAgIGxldCBzY29yZWJvYXJkID0gJChcIiNzY29yZWJvYXJkXCIpO1xyXG4gICAgbGV0IGNvdW50ZG93biA9ICQoXCIjY291bnRkb3duXCIpO1xyXG4gICAgbGV0IGJvZ2dsZWJvYXJkID0gJChcIiNib2dnbGUtYm9hcmRcIik7XHJcbiAgICBsZXQgY2VsbHMgPSAkKFwidGRcIik7XHJcbiAgICBsZXQgdGl0bGUgPSAkKFwiI3RpdGxlXCIpO1xyXG5cclxuICAgIC8vY3NzIHN0eWxlcyB1c2luZyBqcXVlcnlcclxuICAgICQoXCIjc2NvcmUsI2NvdW50ZG93biwjc3VibWl0LWJ0biwjZm91bmR3b3Jkcywjc2NvcmVib2FyZFwiKS5jc3Moe1xyXG4gICAgICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLCBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxyXG4gICAgfSk7XHJcbiAgICAkKFwiI2ZvdW5kd29yZHMsI3Njb3JlYm9hcmRcIikuY3NzKHsgXCJmbG9hdFwiOiBcInJpZ2h0XCIsIFwibWFyZ2luLXRvcFwiOiBcIjEwMHB4XCIgfSk7XHJcblxyXG4gICAgLy9jbGljayBoYW5kbGVycyBmb3IgdGhlIGJ1dHRvbnNcclxuICAgIC8vc3VibWl0IGJ1dHRvblxyXG4gICAgc3VibWl0QnV0dG9uLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAod29yZC5sZW5ndGggPj0gMykge1xyXG4gICAgICAgICAgICBzdWJtaXRXb3JkKCk7XHJcbiAgICAgICAgICAgIHJlc2V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnVGhlIG1pbmltdW0gd29yZCBsZW5naHQgaXMgMyBsZXR0ZXJzIScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgLy9yZXNldCBidXR0b25cclxuICAgIHJlc2V0QnV0dG9uLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXNldCgpO1xyXG4gICAgfSlcclxuXHJcbiAgICAvL2FkZHMgbGF0ZXN0IHdvcmQgdG8gc3VibWl0dGVkIHdvcmRzIG92ZXJ2aWV3XHJcbiAgICBmdW5jdGlvbiBzdWJtaXRXb3JkKCkge1xyXG4gICAgICAgIGNhbGN1bGF0ZVNjb3JlKCk7XHJcbiAgICAgICAgZm91bmR3b3Jkcy5hcHBlbmQoXCI8YnI+XCIsIHdvcmQpO1xyXG4gICAgICAgIHdvcmQgPSBcIlwiO1xyXG4gICAgfVxyXG4gICAgLy9yZW1vdmUgcGxheWVyIGlucHV0IGZyb20gYm9hcmRcclxuICAgIGZ1bmN0aW9uIHJlc2V0KCkge1xyXG4gICAgICAgIGNlbGxzLnJlbW92ZUNsYXNzKFwiY2xpY2tlZFwiKTtcclxuICAgICAgICB3b3JkID0gXCJcIjtcclxuICAgICAgICBsYXN0Q2xpY2tlZENlbGwgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgY3VycmVudENlbGwgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZW5lcmF0ZXMgYm9nZ2xlIGJvYXJkXHJcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUJvYXJkKCkge1xyXG4gICAgICAgIC8vdXBkYXRlIHRoZSBib2FyZFxyXG4gICAgICAgIGJvZ2dsZWJvYXJkID0gJChcIiNib2dnbGUtYm9hcmRcIik7XHJcbiAgICAgICAgLy8gRGVmaW5lIHRoZSBsZXR0ZXJzIGZvciB0aGUgQm9nZ2xlIGJvYXJkXHJcbiAgICAgICAgY29uc3QgbGV0dGVycyA9IFtcclxuICAgICAgICAgICAgXCJBXCIsIFwiQVwiLCBcIkVcIiwgXCJFXCIsIFwiR1wiLCBcIk5cIiwgXCJOXCIsIFwiUlwiLCBcIlNcIiwgXCJXXCIsIFwiRFwiLCBcIktcIixcclxuICAgICAgICAgICAgXCJPXCIsIFwiVFwiLCBcIlVcIiwgXCJMXCIsIFwiR1wiLCBcIllcIiwgXCJCXCIsIFwiSlwiLCBcIlhcIiwgXCJRXCIsIFwiWlwiLCBcIk1cIixcclxuICAgICAgICAgICAgXCJDXCIsIFwiUFwiLCBcIkZcIiwgXCJIXCIsIFwiVlwiLCBcIklcIlxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIC8vIERlZmluZSB0aGUgZnVuY3Rpb24gdG8gc2h1ZmZsZSB0aGUgbGV0dGVyc1xyXG4gICAgICAgIGZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgICAgICAgICAgICAgIFthcnJheVtpXSwgYXJyYXlbal1dID0gW2FycmF5W2pdLCBhcnJheVtpXV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU2h1ZmZsZSB0aGUgbGV0dGVyc1xyXG4gICAgICAgIHNodWZmbGUobGV0dGVycyk7XHJcblxyXG4gICAgICAgIC8vYnVpbGQgdGhlIGJvYXJkIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9ICQoXCI8dHI+XCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9ICQoXCI8dGQ+XCIpO1xyXG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0KGxldHRlcnNbaSAqIDQgKyBqXSk7XHJcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kKGNlbGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJvZ2dsZWJvYXJkLmFwcGVuZChyb3cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2FkZCBjbGljayBldmVudHMgdG8gZWFjaCBjZWxsXHJcbiAgICAgICAgYWRkQ2xpY2tFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRDbGlja0V2ZW50cygpIHtcclxuICAgICAgICAvLyBBdHRhY2ggY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gY2VsbHNcclxuICAgICAgICAkKCd0ZCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gR2V0IHJvdyBhbmQgY29sdW1uIGluZGV4IG9mIGNsaWNrZWQgY2VsbFxyXG4gICAgICAgICAgICB2YXIgcm93SW5kZXggPSAkKHRoaXMpLnBhcmVudCgpLmluZGV4KCk7XHJcbiAgICAgICAgICAgIHZhciBjb2xJbmRleCA9ICQodGhpcykuaW5kZXgoKTtcclxuICAgICAgICAgICAgLy9nZXQgY2xpY2tlZCBjZWxsXHJcbiAgICAgICAgICAgIGN1cnJlbnRDZWxsID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgY2xpY2tlZCBjZWxsIGlzIGFkamFjZW50IHRvIGxhc3QgY2xpY2tlZCBjZWxsXHJcbiAgICAgICAgICAgIGlmIChsYXN0Q2xpY2tlZENlbGwgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICAgICAgTWF0aC5hYnMocm93SW5kZXggLSBsYXN0Q2xpY2tlZENlbGwucm93SW5kZXgpIDw9IDEgJiZcclxuICAgICAgICAgICAgICAgIE1hdGguYWJzKGNvbEluZGV4IC0gbGFzdENsaWNrZWRDZWxsLmNvbEluZGV4KSA8PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBBbGxvdyBjbGlja1xyXG4gICAgICAgICAgICAgICAgbGFzdENsaWNrZWRDZWxsID0geyByb3dJbmRleDogcm93SW5kZXgsIGNvbEluZGV4OiBjb2xJbmRleCB9O1xyXG4gICAgICAgICAgICAgICAgLy9jaGVjayBpZiB1c2VyIGlzIG5vdCBjbGlja2luZyBvbiBwcmV2aW91cyBjZWxsXHJcbiAgICAgICAgICAgICAgICBpZiAoIShjdXJyZW50Q2VsbC5oYXNDbGFzcyhcImNsaWNrZWRcIikpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd29yZCArPSBjdXJyZW50Q2VsbC50ZXh0KCk7IC8vIGFwcGVuZCB0aGUgY2xpY2tlZCBsZXR0ZXIgdG8gdGhlIHdvcmRcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50Q2VsbC5hZGRDbGFzcyhcImNsaWNrZWRcIik7IC8vIGFkZCB0aGUgXCJjbGlja2VkXCIgY2xhc3MgdG8gdGhlIGNlbGxcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3b3JkKTsgLy8gbG9nIHRoZSB1cGRhdGVkIHdvcmQgdG8gdGhlIGNvbnNvbGVcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRpbWVyT24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXJPbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0VGltZXIoZ2FtZVRpbWUsIGNvdW50ZG93bik7IC8vc3RhcnQgdGltZXIgd2hlbiBjbGlja2luZyB0aGUgZmlyc3QgY2VsbFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91IGNhbid0IGNsaWNrIHNhbWUgbGV0dGVyIHR3aWNlIVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIERvIG5vdCBhbGxvdyBjbGlja1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoJ1lvdSBjYW4gb25seSBjbGljayBsZXR0ZXJzIGFkamFjZW50IHRvIHRoZSBsYXN0IGNsaWNrZWQgbGV0dGVyIScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zdGFydHMgdGhlIGNvdW50ZG93biB0aW1lclxyXG4gICAgZnVuY3Rpb24gc3RhcnRUaW1lcihkdXJhdGlvbiwgZGlzcGxheSkge1xyXG4gICAgICAgIGxldCB0aW1lciA9IGR1cmF0aW9uLCBtaW51dGVzLCBzZWNvbmRzO1xyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbWludXRlcyA9IHBhcnNlSW50KHRpbWVyIC8gNjAsIDEwKTtcclxuICAgICAgICAgICAgc2Vjb25kcyA9IHBhcnNlSW50KHRpbWVyICUgNjAsIDEwKTtcclxuXHJcbiAgICAgICAgICAgIG1pbnV0ZXMgPSBtaW51dGVzIDwgMTAgPyBcIjBcIiArIG1pbnV0ZXMgOiBtaW51dGVzO1xyXG4gICAgICAgICAgICBzZWNvbmRzID0gc2Vjb25kcyA8IDEwID8gXCIwXCIgKyBzZWNvbmRzIDogc2Vjb25kcztcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXkudGV4dChcIlRpbWU6IFwiICsgbWludXRlcyArIFwiOlwiICsgc2Vjb25kcyk7XHJcbiAgICAgICAgICAgIC8vdGltZXIgaGFzIGZpbmlzaGVkXHJcbiAgICAgICAgICAgIGlmICh0aW1lck9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoLS10aW1lciA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aW1lck9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZmluaXNoR2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVyID0gZ2FtZVRpbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2RlbGV0ZXMgb2xkIGJvYXJkLCBnZW5lcmF0ZXMgbmV3IG9uZSwgYXNrIHBsYXllciB0byBlbnRlciBuYW1lIGZvciBzY29yZWJvYXJkXHJcbiAgICBmdW5jdGlvbiBmaW5pc2hHYW1lKCkge1xyXG4gICAgICAgIGFsZXJ0KCd0aW1lIGlzIHVwIScpO1xyXG4gICAgICAgIHJlc2V0KCk7XHJcbiAgICAgICAgJChcIiNib2dnbGUtYm9hcmQgdHJcIikucmVtb3ZlKCk7XHJcbiAgICAgICAgZ2VuZXJhdGVCb2FyZCgpO1xyXG4gICAgICAgIGJvZ2dsZWJvYXJkID0gJChcImJvZ2dsZS1ib2FyZFwiKVxyXG4gICAgICAgIGNlbGxzID0gJChcInRkXCIpO1xyXG4gICAgICAgIHBsYXllck5hbWUgPSBwcm9tcHQoXCJQbGVhc2UgZW50ZXIgeW91ciBuYW1lXCIpXHJcbiAgICAgICAgc2NvcmVib2FyZC5hcHBlbmQoXCI8YnI+XCIsIHBsYXllck5hbWUgKyBcIiBzY29yZWQgXCIgKyB0b3RhbFNjb3JlICsgXCIgcG9pbnRzIG9uIFwiICsgYCR7ZGF5fS0ke21vbnRofS0ke3llYXJ9YCk7XHJcbiAgICAgICAgdG90YWxTY29yZSA9IDA7XHJcbiAgICAgICAgc2NvcmUudGV4dCh0b3RhbFNjb3JlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGZvdW5kd29yZHMuaHRtbChcIlwiKTtcclxuICAgIH1cclxuICAgIC8vY2FsY3VsYXRlIHNjb3JlIG9mIGxhc3QgZW50ZXJlZCB3b3JkIGJhc2VkIG9uIG9mZmljaWFsIGJvZ2dsZSBydWxlc1xyXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlU2NvcmUoKSB7XHJcblxyXG4gICAgICAgIGxldCB3b3JkTGVuZ3RoID0gd29yZC5sZW5ndGg7XHJcbiAgICAgICAgY3VycmVudFNjb3JlID0gMDtcclxuICAgICAgICBpZiAod29yZExlbmd0aCA9PSAzIHx8IHdvcmRMZW5ndGggPT0gNCkgeyBjdXJyZW50U2NvcmUgPSAxIH1cclxuICAgICAgICBlbHNlIGlmICh3b3JkTGVuZ3RoID09IDUpIHsgY3VycmVudFNjb3JlID0gMiB9XHJcbiAgICAgICAgZWxzZSBpZiAod29yZExlbmd0aCA9PSA2KSB7IGN1cnJlbnRTY29yZSA9IDMgfVxyXG4gICAgICAgIGVsc2UgaWYgKHdvcmRMZW5ndGggPT0gNykgeyBjdXJyZW50U2NvcmUgPSA1IH1cclxuICAgICAgICBlbHNlIGlmICh3b3JkTGVuZ3RoID09IDggfHwgd29yZExlbmd0aCA+IDgpIHsgY3VycmVudFNjb3JlID0gMTEgfVxyXG5cclxuICAgICAgICB0b3RhbFNjb3JlICs9IGN1cnJlbnRTY29yZTtcclxuICAgICAgICBzY29yZS50ZXh0KHRvdGFsU2NvcmUudG9TdHJpbmcoKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSlcclxuIl0sIm5hbWVzIjpbInN0eWxlIiwid29yZCIsInRpbWVyT24iLCJsYXN0Q2xpY2tlZENlbGwiLCJjdXJyZW50Q2VsbCIsInRvdGFsU2NvcmUiLCJjdXJyZW50U2NvcmUiLCJnYW1lVGltZSIsInBsYXllck5hbWUiLCJkYXRlIiwiRGF0ZSIsImRheSIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJnZW5lcmF0ZUJvYXJkIiwic3VibWl0QnV0dG9uIiwicmVzZXRCdXR0b24iLCJidG4iLCJmb3VuZHdvcmRzIiwic2NvcmUiLCJzY29yZWJvYXJkIiwiY291bnRkb3duIiwiYm9nZ2xlYm9hcmQiLCJjZWxscyIsInRpdGxlIiwiY3NzIiwiY2xpY2siLCJsZW5ndGgiLCJzdWJtaXRXb3JkIiwicmVzZXQiLCJhbGVydCIsImNhbGN1bGF0ZVNjb3JlIiwiYXBwZW5kIiwicmVtb3ZlQ2xhc3MiLCJ1bmRlZmluZWQiLCJsZXR0ZXJzIiwic2h1ZmZsZSIsImFycmF5IiwiaSIsImoiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJfcmVmIiwicm93IiwiY2VsbCIsInRleHQiLCJhZGRDbGlja0V2ZW50cyIsInJvd0luZGV4IiwicGFyZW50IiwiaW5kZXgiLCJjb2xJbmRleCIsImFicyIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJjb25zb2xlIiwibG9nIiwic3RhcnRUaW1lciIsImR1cmF0aW9uIiwiZGlzcGxheSIsInRpbWVyIiwibWludXRlcyIsInNlY29uZHMiLCJzZXRJbnRlcnZhbCIsInBhcnNlSW50IiwiZmluaXNoR2FtZSIsInJlbW92ZSIsInByb21wdCIsImNvbmNhdCIsInRvU3RyaW5nIiwiaHRtbCIsIndvcmRMZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9