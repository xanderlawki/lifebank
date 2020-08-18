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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/homepage.js":
/*!************************!*\
  !*** ./js/homepage.js ***!
  \************************/
/*! exports provided: renderHomepage, default, renderResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderHomepage\", function() { return renderHomepage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderResult\", function() { return renderResult; });\n\r\n////making the api calls /////\r\n\r\n\r\n\r\n/////rendering the homepage ///\r\n//\r\n\r\n///looping the data///\r\n\r\n////\r\nconst renderHomepage = (result)=> {\r\n  const markup = `\r\n            <div class=\"staff__card\">\r\n            <div class=\"staff__image\">\r\n              <a href=\"profile.html\"><img src=\"./images/avatar_image.webp\" class=\"image\"></a> \r\n            </div>\r\n            <div class=\"staff__name\">\r\n                <h3>${result.first_name} ${result.last_name}</h3>\r\n            </div>\r\n            <div class=\"staff__position\">\r\n                <h3>${result.role}</h3>\r\n            </div>\r\n            <div class=\"staff__profile\">\r\n            <img src=\"https://cdn2.iconfinder.com/data/icons/ios-7-tab-bar-icons/500/eye-512.png\" class=\"icon-image\">\r\n            </div>\r\n            </div>\r\n  `\r\n\r\n  document.querySelector('.staff__container').insertAdjacentHTML('beforeend', markup);\r\n}\r\n\r\n\r\n\r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (boy = 19);\r\n\r\nconst renderResult = (result)=> {\r\n  result.forEach(renderHomepage);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n///function calls\r\n\n\n//# sourceURL=webpack:///./js/homepage.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./js/homepage.js\");\n\r\n\r\nasync function getStaff () {\r\n  const res =  await fetch('https://lifebank-staff-portal.herokuapp.com/admin/pages/read_all_staff.php')\r\n   .then(res => res.json())\r\n   console.log(res);\r\n \r\n   const result = res;\r\n  \r\n   \r\n   console.log(result);\r\n  \r\n   \r\n  renderResult(result);\r\n  \r\n }\r\n \r\n \r\n getStaff();\r\n \r\n \r\n\r\n console.log(_homepage__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });