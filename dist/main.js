/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./globalTable.js":
/*!************************!*\
  !*** ./globalTable.js ***!
  \************************/
/*! namespace exports */
/*! export setDataAllPeriodForGlobalTable [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setDataTodayForGlobalTable [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setDataAllPeriodForGlobalTable\": function() { return /* binding */ setDataAllPeriodForGlobalTable; },\n/* harmony export */   \"setDataTodayForGlobalTable\": function() { return /* binding */ setDataTodayForGlobalTable; }\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./main.js\");\n // const stateData = state;\n// Table Global Case\n\nvar buttonSummaryAllPeriod = document.querySelector('.button__all-period');\nvar buttonSummaryToday = document.querySelector('.button__last-day');\nvar buttonSummaryAbs = document.querySelector('.button__abs');\nvar buttonSummaryPerPopulation = document.querySelector('.button__per-population');\nvar totalConfirmed = document.querySelector('#total_confirm');\nvar totalRecover = document.querySelector('#total_recover');\nvar totalDeaths = document.querySelector('#total_deaths');\n\nvar setDataToDomElement = function setDataToDomElement(confirmed, recover, deaths) {\n  totalConfirmed.innerHTML = confirmed.toLocaleString();\n  totalRecover.innerHTML = recover.toLocaleString();\n  totalDeaths.innerHTML = deaths.toLocaleString();\n};\n\nvar setDataAllPeriodForGlobalTable = function setDataAllPeriodForGlobalTable(data) {\n  var totalConfirmedData = data.Global.TotalConfirmed;\n  var totalRecoverData = data.Global.TotalRecovered;\n  var totalDeathsData = data.Global.TotalDeaths;\n\n  if (_main__WEBPACK_IMPORTED_MODULE_0__.state.absValue === false) {\n    totalConfirmedData = Math.round(totalConfirmedData / (_main__WEBPACK_IMPORTED_MODULE_0__.state.population / 100000));\n    totalRecoverData = Math.round(totalRecoverData / (_main__WEBPACK_IMPORTED_MODULE_0__.state.population / 100000));\n    totalDeathsData = Math.round(totalDeathsData / (_main__WEBPACK_IMPORTED_MODULE_0__.state.population / 100000));\n  }\n\n  setDataToDomElement(totalConfirmedData, totalRecoverData, totalDeathsData);\n};\n\nvar setDataTodayForGlobalTable = function setDataTodayForGlobalTable(data) {\n  var todayConfirmedData = data.Global.NewConfirmed;\n  var todayRecoverData = data.Global.NewRecovered;\n  var todayDeathsData = data.Global.NewDeaths;\n\n  if (_main__WEBPACK_IMPORTED_MODULE_0__.state.absValue === false) {\n    todayConfirmedData = Math.round(todayConfirmedData / (_main__WEBPACK_IMPORTED_MODULE_0__.state.population / 100000));\n    todayRecoverData = Math.round(todayRecoverData / (_main__WEBPACK_IMPORTED_MODULE_0__.state.population / 100000));\n    todayDeathsData = Math.round(todayDeathsData / (_main__WEBPACK_IMPORTED_MODULE_0__.state.population / 100000));\n  }\n\n  setDataToDomElement(todayConfirmedData, todayRecoverData, todayDeathsData);\n}; // Listener\n\n\nvar initializationButtonListener = function initializationButtonListener() {\n  buttonSummaryAllPeriod.addEventListener('click', function () {\n    console.log('state ', _main__WEBPACK_IMPORTED_MODULE_0__.state); // console.log('stateData.allPeriod ', state.hasOwnProperty(allPeriod));\n\n    buttonSummaryAllPeriod.classList.add('select');\n    buttonSummaryToday.classList.remove('select');\n    _main__WEBPACK_IMPORTED_MODULE_0__.state.allPeriod = true;\n    console.log('stateData.allPeriod ', _main__WEBPACK_IMPORTED_MODULE_0__.state.allPeriod);\n    (0,_main__WEBPACK_IMPORTED_MODULE_0__.setDataToAllElement)();\n  });\n  buttonSummaryToday.addEventListener('click', function () {\n    console.log('state ', _main__WEBPACK_IMPORTED_MODULE_0__.state);\n    console.log('stateData.allPeriod ', _main__WEBPACK_IMPORTED_MODULE_0__.state.allPeriod);\n    buttonSummaryAllPeriod.classList.remove('select');\n    buttonSummaryToday.classList.add('select');\n    _main__WEBPACK_IMPORTED_MODULE_0__.state.allPeriod = false;\n    console.log('stateData.allPeriod ', _main__WEBPACK_IMPORTED_MODULE_0__.state.allPeriod);\n    (0,_main__WEBPACK_IMPORTED_MODULE_0__.setDataToAllElement)();\n  });\n  buttonSummaryAbs.addEventListener('click', function () {\n    buttonSummaryPerPopulation.classList.remove('select');\n    buttonSummaryAbs.classList.add('select');\n    _main__WEBPACK_IMPORTED_MODULE_0__.state.absValue = true;\n    console.log('stateData.allPeriod ', _main__WEBPACK_IMPORTED_MODULE_0__.state.allPeriod);\n    (0,_main__WEBPACK_IMPORTED_MODULE_0__.countPopulationTotal)();\n    (0,_main__WEBPACK_IMPORTED_MODULE_0__.setDataToAllElement)();\n  });\n  buttonSummaryPerPopulation.addEventListener('click', function () {\n    buttonSummaryAbs.classList.remove('select');\n    buttonSummaryPerPopulation.classList.add('select');\n    _main__WEBPACK_IMPORTED_MODULE_0__.state.absValue = false;\n    console.log('stateData.allPeriod ', _main__WEBPACK_IMPORTED_MODULE_0__.state.allPeriod);\n    (0,_main__WEBPACK_IMPORTED_MODULE_0__.countPopulationTotal)();\n    (0,_main__WEBPACK_IMPORTED_MODULE_0__.setDataToAllElement)();\n  });\n};\n\ninitializationButtonListener();\n\n\n//# sourceURL=webpack:///./globalTable.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./styles.css\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ \"./main.js\");\n/* harmony import */ var _globalTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalTable */ \"./globalTable.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map */ \"./map.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_map__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! namespace exports */
/*! export countPopulationTotal [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getSummaryGlobalData [provided] [no usage info] [missing usage info prevents renaming] */
/*! export setDataToAllElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export state [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSummaryGlobalData\": function() { return /* binding */ getSummaryGlobalData; },\n/* harmony export */   \"state\": function() { return /* binding */ state; },\n/* harmony export */   \"setDataToAllElement\": function() { return /* binding */ setDataToAllElement; },\n/* harmony export */   \"countPopulationTotal\": function() { return /* binding */ countPopulationTotal; }\n/* harmony export */ });\n/* harmony import */ var _globalTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalTable */ \"./globalTable.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n // const url\n\nvar urlSummary = 'https://api.covid19api.com/summary';\nvar state = {\n  dataCovid: null,\n  // data from API\n  dataCountryInfo: null,\n  // flag, population\n  allPeriod: true,\n  absValue: true,\n  allWorld: true,\n  countryId: null,\n  population: null // all word or select country\n\n}; // setDataToTableGlobal rename \n\nvar setDataToAllElement = function setDataToAllElement() {\n  console.log('function setDataToAllElement');\n  console.log('state ', state);\n\n  if (state.allPeriod === true) {\n    (0,_globalTable__WEBPACK_IMPORTED_MODULE_0__.setDataAllPeriodForGlobalTable)(state.dataCovid);\n  } else if (state.allPeriod === false) {\n    (0,_globalTable__WEBPACK_IMPORTED_MODULE_0__.setDataTodayForGlobalTable)(state.dataCovid);\n  }\n};\n\nvar countPopulationTotal = function countPopulationTotal() {\n  if (state.allWorld === true) {\n    var dataCountryInfo = state.dataCountryInfo;\n    var worldPopulation = dataCountryInfo.reduce(function (acc, item) {\n      return acc + Number(item.population);\n    }, 0);\n    console.log('worldPopulation ', worldPopulation);\n    state.population = worldPopulation;\n  }\n};\n\nfunction getDataByCountry() {\n  return _getDataByCountry.apply(this, arguments);\n}\n\nfunction _getDataByCountry() {\n  _getDataByCountry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var countriesDataInJSON;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log('function getDataByCountry');\n            _context.next = 3;\n            return fetch('https://restcountries.eu/rest/v2/all?fields=name;population;flag');\n\n          case 3:\n            countriesDataInJSON = _context.sent;\n            _context.next = 6;\n            return countriesDataInJSON.json();\n\n          case 6:\n            state.dataCountryInfo = _context.sent;\n            console.log('state.dataCountryInfo: ', state.dataCountryInfo);\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getDataByCountry.apply(this, arguments);\n}\n\nfunction getSummaryGlobalData() {\n  return _getSummaryGlobalData.apply(this, arguments);\n} // first page load\n\n\nfunction _getSummaryGlobalData() {\n  _getSummaryGlobalData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var url, res;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            console.log('function getSummaryGlobalData');\n            url = urlSummary;\n            _context2.next = 4;\n            return fetch(url);\n\n          case 4:\n            res = _context2.sent;\n            _context2.next = 7;\n            return res.json();\n\n          case 7:\n            state.dataCovid = _context2.sent;\n            console.log('state.dataCovid: ', state.dataCovid);\n            console.log('TotalConfirmed main: ', state.dataCovid.Global.TotalConfirmed);\n            console.log('TotalDeaths: ', state.dataCovid.Global.TotalDeaths);\n            console.log('TotalRecovered: ', state.dataCovid.Global.TotalRecovered);\n            setDataToAllElement();\n\n          case 13:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _getSummaryGlobalData.apply(this, arguments);\n}\n\nvar firstPageLoad = function firstPageLoad() {\n  getDataByCountry();\n  getSummaryGlobalData();\n};\n\nfirstPageLoad();\n\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./map.js":
/*!****************!*\
  !*** ./map.js ***!
  \****************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (function() {

eval("var mapContainer = document.querySelector('#map');\nvar mapOptions = {\n  center: [26.745610382199022, 22.148437500000004],\n  zoom: 2\n};\nvar map = new L.map('map', mapOptions); // var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');\n\nvar layer = new L.TileLayer('https://api.mapbox.com/styles/v1/spokoinaya/ckiuh90qt2vig19pf9727arzf/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic3Bva29pbmF5YSIsImEiOiJja2l1Y2l6dWkwN2p1MnJwNHlmNG1lcTlwIn0.rqGaVERCjrMCex1b5rss4w');\nmap.addLayer(layer); // mlayer.addTo(map);/\n// обработчик кликов по карте\n\nmap.on(\"click\", function (e) {\n  console.log('e ', e);\n  new L.Marker([e.latlng.lat, e.latlng.lng]).addTo(map);\n});\n\n//# sourceURL=webpack:///./map.js?");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles.css?");

/***/ }),

/***/ "../node_modules/webpack/hot sync ^\\.\\/log$":
/*!****************************************************************!*\
  !*** ../node_modules/webpack/hot/ sync nonrecursive ^\.\/log$ ***!
  \****************************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./log\": \"../node_modules/webpack/hot/log.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"../node_modules/webpack/hot sync ^\\\\.\\\\/log$\";\n\n//# sourceURL=webpack:///../node_modules/webpack/hot/_sync_nonrecursive_^\\.\\/log$?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["../node_modules/webpack-dev-server/client/index.js?http://localhost:8080/","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_webpack-dev-server_client_index-6ff859"],
/******/ 			["../node_modules/@babel/polyfill/lib/index.js","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_webpack-dev-server_client_index-6ff859"],
/******/ 			["./index.js","vendors-node_modules_babel_polyfill_lib_index_js-node_modules_webpack-dev-server_client_index-6ff859"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = function() {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = function() {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;