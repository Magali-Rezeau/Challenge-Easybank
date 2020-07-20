/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./../assets/images/bg-intro-desktop.svg */ "./src/assets/images/bg-intro-desktop.svg");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./../assets/images/bg-intro-mobile.svg */ "./src/assets/images/bg-intro-mobile.svg");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, ":root {\n  --font-body: 'Public Sans', sans-serif;\n  --dark-blue: hsl(233, 26%, 24%);\n  --lime-green: rgb(49, 211, 92);\n  --bright-cyan: rgb(43, 183, 218);\n  --grayish-blue: hsl(233, 8%, 62%);\n  --light-grayish-blue: hsl(220, 16%, 96%);\n  --very-light-gray: hsl(0, 0%, 98%);\n  --white: hsl(0, 0%, 100%); }\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n/* Landscape phones and down */\n/* Landscape phone to portrait tablet */\n/* Portrait tablet to landscape and desktop */\n/* Large desktop */\nhtml {\n  font-size: 62.5%; }\n\nbody {\n  font-size: 1.6rem;\n  color: var(--grayish-blue);\n  font-family: var(--font-body);\n  font-weight: 300; }\n  @media (max-width: 1150px) {\n    body {\n      font-size: 1.4rem; } }\n\na {\n  text-decoration: none;\n  color: var(--grayish-blue);\n  font-weight: 300;\n  font-size: 1.4rem;\n  cursor: pointer; }\n\np {\n  line-height: 2.5rem;\n  font-size: 1.9rem; }\n  @media (max-width: 1150px) {\n    p {\n      font-size: 1.7rem; } }\n\nul li {\n  list-style-type: none; }\n\nh1,\nh2,\nh3 {\n  color: var(--dark-blue);\n  font-weight: 300; }\n\n.btn {\n  background: linear-gradient(to right, #31d35c, #2bb7da);\n  color: var(--white);\n  padding: 1.4rem 3.6rem;\n  border-radius: 20px;\n  border: none;\n  cursor: pointer;\n  transition: all .5s;\n  font-size: 1.4rem;\n  color: var(--white); }\n  .btn:hover {\n    background: linear-gradient(to left, #31d35c, #2bb7da);\n    color: var(--white); }\n\n.header {\n  background-color: var(--white);\n  z-index: 999;\n  height: 8rem;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center; }\n  @media (max-width: 900px) {\n    .header {\n      justify-content: space-between;\n      padding: 0 5rem;\n      flex-wrap: wrap; } }\n  @media (max-width: 650px) {\n    .header {\n      padding: 0 2rem; } }\n  .header-nav {\n    width: 30rem;\n    height: 8rem; }\n    @media (max-width: 900px) {\n      .header-nav {\n        display: none; } }\n    .header-nav-list {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      height: 8rem; }\n      .header-nav-list li a:hover {\n        border-bottom: 2px solid var(--lime-green);\n        padding-bottom: 0.5rem; }\n    .header-nav-mobile {\n      display: none; }\n    .header-nav-mobile.open {\n      display: block;\n      width: 100%;\n      height: 20rem;\n      background-color: var(--white);\n      margin: 2rem;\n      z-index: 999; }\n      .header-nav-mobile.open .header-nav-list {\n        height: 100%;\n        width: 100%;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-evenly; }\n        .header-nav-mobile.open .header-nav-list li {\n          color: blue; }\n  @media (max-width: 900px) {\n    .header .btn {\n      display: none; } }\n  .header-nav-icon, .header-nav-icon-close {\n    cursor: pointer;\n    display: none;\n    height: 8rem; }\n    .header-nav-icon img, .header-nav-icon-close img {\n      margin: 3.2rem 0; }\n  .header-nav-icon {\n    display: none; }\n    @media (max-width: 900px) {\n      .header-nav-icon {\n        display: block; } }\n  .header-nav-icon-close {\n    display: none; }\n\n.hero {\n  background-color: var(--very-light-gray);\n  height: 70rem;\n  width: 100%;\n  display: flex;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: 55rem -30rem;\n  background-repeat: no-repeat; }\n  @media (max-width: 1150px) {\n    .hero {\n      height: 50rem; } }\n  @media (max-width: 900px) {\n    .hero {\n      height: 40rem; } }\n  @media (max-width: 650px) {\n    .hero {\n      background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n      background-repeat: no-repeat;\n      flex-wrap: wrap-reverse;\n      background-size: contain;\n      height: 80rem; } }\n  .hero-text {\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    margin: auto 0;\n    padding: 0 16rem; }\n    @media (max-width: 1150px) {\n      .hero-text {\n        padding: 0 5rem; } }\n    @media (max-width: 650px) {\n      .hero-text {\n        width: 100%;\n        align-items: center;\n        text-align: center;\n        padding: 0 2rem; } }\n    .hero-text h1 {\n      font-size: 4.8rem;\n      font-weight: 300;\n      margin-bottom: 3rem; }\n      @media (max-width: 900px) {\n        .hero-text h1 {\n          font-size: 3rem; } }\n      @media (max-width: 650px) {\n        .hero-text h1 {\n          font-size: 4rem; } }\n    .hero-text p {\n      margin-bottom: 3rem; }\n      @media (max-width: 900px) {\n        .hero-text p {\n          font-size: 1.5rem; } }\n  .hero-img {\n    width: 50%;\n    position: relative; }\n    @media (max-width: 650px) {\n      .hero-img {\n        width: 100%; } }\n    .hero-img-desktop {\n      display: block;\n      position: absolute;\n      top: 0;\n      right: 0;\n      width: 95%; }\n      @media (max-width: 650px) {\n        .hero-img-desktop {\n          display: none; } }\n    .hero-img-mobile {\n      display: none; }\n      @media (max-width: 650px) {\n        .hero-img-mobile {\n          display: block;\n          width: 100%; } }\n\n.why {\n  background-color: var(--light-grayish-blue);\n  height: 80rem;\n  padding: 0 16rem; }\n  @media (max-width: 1150px) {\n    .why {\n      padding: 0 5rem;\n      height: 70rem; } }\n  @media (max-width: 900px) {\n    .why {\n      height: 80rem; } }\n  @media (max-width: 650px) {\n    .why {\n      text-align: center;\n      padding: 0 2rem;\n      height: auto; } }\n  .why-title {\n    height: 30rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center; }\n    @media (max-width: 900px) {\n      .why-title {\n        height: 25rem; } }\n    @media (max-width: 650px) {\n      .why-title {\n        align-items: center;\n        text-align: center;\n        height: 35%; } }\n    .why-title h2 {\n      font-size: 4rem;\n      font-weight: 300;\n      margin-bottom: 3rem; }\n      @media (max-width: 650px) {\n        .why-title h2 {\n          padding: 4rem 0; } }\n    .why-title p {\n      padding-right: 45rem; }\n      @media (max-width: 900px) {\n        .why-title p {\n          padding-right: 30rem; } }\n      @media (max-width: 650px) {\n        .why-title p {\n          padding-bottom: 2rem;\n          padding-right: 0; } }\n  .why-card {\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n    @media (max-width: 900px) {\n      .why-card {\n        flex-wrap: wrap;\n        height: 60%;\n        align-content: space-evenly; } }\n    @media (max-width: 650px) {\n      .why-card {\n        height: 100rem; } }\n    @media (max-width: 650px) {\n      .why-card:last-child {\n        padding-bottom: 5rem; } }\n    .why-card-1, .why-card-2, .why-card-3, .why-card-4 {\n      width: 23%;\n      height: 28rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between; }\n      @media (max-width: 900px) {\n        .why-card-1, .why-card-2, .why-card-3, .why-card-4 {\n          width: 40%;\n          height: 20rem; } }\n      @media (max-width: 650px) {\n        .why-card-1, .why-card-2, .why-card-3, .why-card-4 {\n          width: 100%;\n          align-items: center; } }\n      .why-card-1 img, .why-card-2 img, .why-card-3 img, .why-card-4 img {\n        width: 8rem; }\n      .why-card-1 p, .why-card-2 p, .why-card-3 p, .why-card-4 p {\n        font-size: 1.6rem; }\n        @media (max-width: 1150px) {\n          .why-card-1 p, .why-card-2 p, .why-card-3 p, .why-card-4 p {\n            font-size: 1.2rem; } }\n\n.latest-articles {\n  background-color: var(--very-light-gray);\n  height: 85rem;\n  padding: 0 16rem; }\n  @media (max-width: 1150px) {\n    .latest-articles {\n      padding: 0 5rem;\n      height: 80rem; } }\n  @media (max-width: 900px) {\n    .latest-articles {\n      height: 120rem; } }\n  @media (max-width: 650px) {\n    .latest-articles {\n      padding: 0 2rem;\n      height: auto; } }\n  .latest-articles h2 {\n    font-size: 4rem;\n    padding: 10rem 0 5rem 0; }\n  .latest-articles-card {\n    display: flex;\n    justify-content: space-between;\n    align-items: center; }\n    @media (max-width: 900px) {\n      .latest-articles-card {\n        flex-wrap: wrap; } }\n    .latest-articles-card-1, .latest-articles-card-2, .latest-articles-card-3, .latest-articles-card-4 {\n      width: 23%;\n      height: 50rem; }\n      @media (max-width: 900px) {\n        .latest-articles-card-1, .latest-articles-card-2, .latest-articles-card-3, .latest-articles-card-4 {\n          width: 45%; } }\n      @media (max-width: 650px) {\n        .latest-articles-card-1, .latest-articles-card-2, .latest-articles-card-3, .latest-articles-card-4 {\n          width: 100%; } }\n      .latest-articles-card-1-img img, .latest-articles-card-2-img img, .latest-articles-card-3-img img, .latest-articles-card-4-img img {\n        width: 100%;\n        height: 20rem; }\n      .latest-articles-card-1-text, .latest-articles-card-2-text, .latest-articles-card-3-text, .latest-articles-card-4-text {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        padding: 2.5rem;\n        height: 30rem;\n        background-color: var(--white); }\n        @media (max-width: 900px) {\n          .latest-articles-card-1-text, .latest-articles-card-2-text, .latest-articles-card-3-text, .latest-articles-card-4-text {\n            height: 25rem; } }\n        @media (max-width: 650px) {\n          .latest-articles-card-1-text, .latest-articles-card-2-text, .latest-articles-card-3-text, .latest-articles-card-4-text {\n            width: 100%; } }\n        .latest-articles-card-1-text h4, .latest-articles-card-2-text h4, .latest-articles-card-3-text h4, .latest-articles-card-4-text h4 {\n          font-size: 1rem;\n          color: var(--grayish-blue); }\n        .latest-articles-card-1-text h3, .latest-articles-card-2-text h3, .latest-articles-card-3-text h3, .latest-articles-card-4-text h3 {\n          font-size: 1.6rem;\n          cursor: pointer; }\n          .latest-articles-card-1-text h3:hover, .latest-articles-card-2-text h3:hover, .latest-articles-card-3-text h3:hover, .latest-articles-card-4-text h3:hover {\n            color: var(--lime-green); }\n        .latest-articles-card-1-text p, .latest-articles-card-2-text p, .latest-articles-card-3-text p, .latest-articles-card-4-text p {\n          font-size: 1.4rem;\n          line-height: 2rem; }\n\n.footer {\n  background-color: var(--dark-blue);\n  height: 20rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 16rem; }\n  @media (max-width: 1150px) {\n    .footer {\n      padding: 0 5rem; } }\n  @media (max-width: 650px) {\n    .footer {\n      padding: 0 2rem;\n      flex-direction: column;\n      justify-content: space-evenly;\n      height: 65rem; } }\n  .footer-block-left {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    height: 100%; }\n    @media (max-width: 650px) {\n      .footer-block-left {\n        height: 10rem; } }\n    .footer-block-left .footer-social-links ul {\n      display: flex;\n      justify-content: space-between; }\n      .footer-block-left .footer-social-links ul li a svg:hover path {\n        fill: var(--lime-green); }\n  .footer nav {\n    display: flex;\n    justify-content: space-between;\n    width: 29rem;\n    height: 50%;\n    color: var(--white); }\n    @media (max-width: 900px) {\n      .footer nav {\n        width: 20rem; } }\n    @media (max-width: 650px) {\n      .footer nav {\n        flex-direction: column;\n        width: 100%;\n        justify-content: space-between;\n        align-items: center;\n        height: 20rem; } }\n    .footer nav ul {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between; }\n      @media (max-width: 650px) {\n        .footer nav ul {\n          height: 8rem;\n          align-items: center; } }\n      .footer nav ul li a:hover {\n        color: var(--lime-green); }\n  .footer-attribution {\n    width: 100%;\n    height: 4rem;\n    text-align: center;\n    padding-top: 1rem; }\n  .footer-block-right {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: flex-end;\n    height: 100%; }\n    @media (max-width: 650px) {\n      .footer-block-right {\n        height: 10rem;\n        align-items: center; } }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/images/bg-intro-desktop.svg":
/*!************************************************!*\
  !*** ./src/assets/images/bg-intro-desktop.svg ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8be308fd4ce79bd32a09ec5437774701.svg");

/***/ }),

/***/ "./src/assets/images/bg-intro-mobile.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/bg-intro-mobile.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c2ed38d05001e62c1c09a9cbc976c741.svg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__);

var iconMenu = document.querySelector('.header-nav-icon');
var iconMenuClose = document.querySelector('.header-nav-icon-close');
var header = document.querySelector('.header');
var nav = document.querySelector('.header-nav');
var mobileMenuDom;
var isMenuOpen = false;

var createMenu = function createMenu() {
  mobileMenuDom = document.createElement('nav');
  mobileMenuDom.classList.add('header-nav-mobile');
  mobileMenuDom.addEventListener("click", function (event) {
    event.stopPropagation();
  });
  mobileMenuDom.append(nav.querySelector('ul').cloneNode(true));
  header.append(mobileMenuDom);
};

var openMenu = function openMenu() {
  iconMenu.style.display = "none";
  iconMenuClose.style.display = "block";

  if (!mobileMenuDom) {
    createMenu();
  }

  mobileMenuDom.classList.add('open');
};

var closeMenu = function closeMenu() {
  iconMenu.style.display = "block";
  iconMenuClose.style.display = "none";
  mobileMenuDom.classList.remove('open');
};

var toogleMobileMenu = function toogleMobileMenu() {
  if (isMenuOpen) {
    closeMenu();
  } else {
    openMenu();
  }

  isMenuOpen = !isMenuOpen;
};

iconMenu.addEventListener("click", function (event) {
  event.stopPropagation();
  toogleMobileMenu();
});
window.addEventListener('click', function () {
  if (isMenuOpen) {
    toogleMobileMenu();
  }
});

/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map