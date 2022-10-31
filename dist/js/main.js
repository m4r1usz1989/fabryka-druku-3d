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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/js/main.js":
/*!************************!*\
  !*** ./app/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./app/sass/style.scss\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slick-carousel */ \"./node_modules/slick-carousel/slick/slick.js\");\n/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap */ \"./node_modules/bootstrap/dist/js/bootstrap.js\");\n/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_lightgallery_dist_js_lightgallery_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/lightgallery/dist/js/lightgallery-all */ \"./node_modules/lightgallery/dist/js/lightgallery-all.js\");\n/* harmony import */ var _node_modules_lightgallery_dist_js_lightgallery_all__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_lightgallery_dist_js_lightgallery_all__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\njquery__WEBPACK_IMPORTED_MODULE_1__(function () {\n  function fixedMenu() {\n    var height = jquery__WEBPACK_IMPORTED_MODULE_1__(window).scrollTop();\n\n    if (height > 200) {\n      jquery__WEBPACK_IMPORTED_MODULE_1__('.home #header').addClass('header--black');\n    } else {\n      jquery__WEBPACK_IMPORTED_MODULE_1__('.home #header').removeClass('header--black');\n    }\n  }\n\n  jquery__WEBPACK_IMPORTED_MODULE_1__(function () {\n    var mainPage = document.getElementsByTagName('body');\n\n    if (mainPage.length > 0) {\n      fixedMenu();\n      jquery__WEBPACK_IMPORTED_MODULE_1__(window).scroll(function () {\n        fixedMenu();\n      });\n    }\n  }); // open/close sidebar\n\n  jquery__WEBPACK_IMPORTED_MODULE_1__('#openSidebar').click(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_1__('.sidebar').addClass('sidebar--open');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_1__('#closeSidebar').click(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_1__('.sidebar').removeClass('sidebar--open');\n  });\n  jquery__WEBPACK_IMPORTED_MODULE_1__('.sidebar__link').click(function () {\n    jquery__WEBPACK_IMPORTED_MODULE_1__('.sidebar').removeClass('sidebar--open');\n  }); //smoth scroll\n\n  jquery__WEBPACK_IMPORTED_MODULE_1__(\".smooth a[href^='#']\").click(function (event) {\n    event.preventDefault();\n    var location = jquery__WEBPACK_IMPORTED_MODULE_1__(this.hash);\n    var offset = 0;\n    var speed = 1200;\n    jquery__WEBPACK_IMPORTED_MODULE_1__(\"html,body\").animate({\n      scrollTop: location.offset().top - offset\n    }, speed);\n    return false;\n  });\n});\n\n//# sourceURL=webpack:///./app/js/main.js?");

/***/ }),

/***/ "./app/sass/style.scss":
/*!*****************************!*\
  !*** ./app/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../node_modules/postcss-loader/src!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./app/sass/style.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./app/sass/style.scss?");

/***/ }),

/***/ "./node_modules/babel-polyfill/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/babel-polyfill/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/mariuszdomanski/Desktop/fabryka-druku-3d/node_modules/babel-polyfill/lib/index.js'\");\n\n//# sourceURL=webpack:///./node_modules/babel-polyfill/lib/index.js?");

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/mariuszdomanski/Desktop/fabryka-druku-3d/node_modules/bootstrap/dist/js/bootstrap.js'\");\n\n//# sourceURL=webpack:///./node_modules/bootstrap/dist/js/bootstrap.js?");

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/mariuszdomanski/Desktop/fabryka-druku-3d/node_modules/jquery/dist/jquery.js'\");\n\n//# sourceURL=webpack:///./node_modules/jquery/dist/jquery.js?");

/***/ }),

/***/ "./node_modules/lightgallery/dist/js/lightgallery-all.js":
/*!***************************************************************!*\
  !*** ./node_modules/lightgallery/dist/js/lightgallery-all.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/mariuszdomanski/Desktop/fabryka-druku-3d/node_modules/lightgallery/dist/js/lightgallery-all.js'\");\n\n//# sourceURL=webpack:///./node_modules/lightgallery/dist/js/lightgallery-all.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js!./node_modules/sass-loader/dist/cjs.js!./app/sass/style.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js!./app/sass/style.scss ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\n\\n@import 'node_modules/bootstrap/scss/bootstrap';\\n^\\n      File to import not found or unreadable: node_modules/bootstrap/scss/bootstrap.\\n      in /Users/mariuszdomanski/Desktop/fabryka-druku-3d/app/sass/style.scss (line 1, column 1)\\n    at /Users/mariuszdomanski/Desktop/fabryka-druku-3d/node_modules/webpack/lib/NormalModule.js:316:20\\n    at /Users/mariuszdomanski/Desktop/fabryka-druku-3d/node_modules/loader-runner/lib/LoaderRunner.js:367:11\\n    at /Users/mariuszdomanski/Desktop/fabryka-druku-3d/node_modules/loader-runner/lib/LoaderRunner.js:233:18\\n    at context.callback (/Users/mariuszdomanski/Desktop/fabryka-druku-3d/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\\n    at Object.callback (/Users/mariuszdomanski/Desktop/fabryka-druku-3d/node_modules/sass-loader/dist/index.js:89:7)\\n    at Object.done [as callback] (/Users/mariuszdomanski/Desktop/fabryka-druku-3d/node_modules/neo-async/async.js:8069:18)\\n    at options.error (/Users/mariuszdomanski/Desktop/fabryka-druku-3d/node_modules/node-sass/lib/index.js:294:32)\");\n\n//# sourceURL=webpack:///./app/sass/style.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/postcss-loader/src!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.js":
/*!****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/mariuszdomanski/Desktop/fabryka-druku-3d/node_modules/slick-carousel/slick/slick.js'\");\n\n//# sourceURL=webpack:///./node_modules/slick-carousel/slick/slick.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/mariuszdomanski/Desktop/fabryka-druku-3d/node_modules/style-loader/lib/addStyles.js'\");\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open '/Users/mariuszdomanski/Desktop/fabryka-druku-3d/node_modules/whatwg-fetch/fetch.js'\");\n\n//# sourceURL=webpack:///./node_modules/whatwg-fetch/fetch.js?");

/***/ }),

/***/ 0:
/*!**********************************************************!*\
  !*** multi babel-polyfill whatwg-fetch ./app/js/main.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! babel-polyfill */\"./node_modules/babel-polyfill/lib/index.js\");\n__webpack_require__(/*! whatwg-fetch */\"./node_modules/whatwg-fetch/fetch.js\");\nmodule.exports = __webpack_require__(/*! ./app/js/main.js */\"./app/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_babel-polyfill_whatwg-fetch_./app/js/main.js?");

/***/ })

/******/ });