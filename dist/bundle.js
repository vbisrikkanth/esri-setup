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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plotMap", function() { return plotMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plotExample2", function() { return plotExample2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "threeDimensionMap", function() { return threeDimensionMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_esri_loader__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_esri_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_esri_loader__);
let plotMap = (() => {
    var _ref = _asyncToGenerator(function* () {
        try {
            let [MapView, WebMap] = yield __WEBPACK_IMPORTED_MODULE_0_esri_loader__["loadModules"](['esri/views/MapView', 'esri/WebMap']);
            let webmap = new WebMap({
                portalItem: { // autocasts as new PortalItem()
                    id: 'f2e9b762544945f390ca4ac3671cfa72'
                }
            });
            // and we show that map in a container w/ id #viewDiv
            let view = new MapView({
                map: webmap,
                container: 'viewDiv'
            });
        } catch (error) {
            console.log(error);
        }
    });

    return function plotMap() {
        return _ref.apply(this, arguments);
    };
})();

let plotExample2 = (() => {
    var _ref2 = _asyncToGenerator(function* () {
        let [Map, MapView] = yield __WEBPACK_IMPORTED_MODULE_0_esri_loader__["loadModules"](["esri/Map", "esri/views/MapView"]);
        let map = new Map({
            basemap: "streets"
        });

        let view = new MapView({
            container: "viewDiv", // Reference to the scene div created in step 5
            map: map, // Reference to the map object created before the scene
            zoom: 4, // Sets zoom level based on level of detail (LOD)
            center: [15, 65] // Sets center point of view using longitude,latitude
        });
    });

    return function plotExample2() {
        return _ref2.apply(this, arguments);
    };
})();

let threeDimensionMap = (() => {
    var _ref3 = _asyncToGenerator(function* () {
        let [Map, SceneView] = yield __WEBPACK_IMPORTED_MODULE_0_esri_loader__["loadModules"](["esri/Map", "esri/views/SceneView"]);

        let map = new Map({
            basemap: "streets",
            ground: "world-elevation"
        });
        let view = new SceneView({
            container: "viewDiv", // Reference to the scene div created in step 5
            map: map, // Reference to the map object created before the scene
            scale: 50000000, // Sets the initial scale to 1:50,000,000
            center: [-101.17, 21.78] // Sets the center point of view with lon/lat
        });
    });

    return function threeDimensionMap() {
        return _ref3.apply(this, arguments);
    };
})();

//Example for mapview
//plotMap();

//Example for map
//plotExample2();

//Example for 3D map
//threeDimensionMap();


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// import the loader module




/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.esriLoader = global.esriLoader || {})));
}(this, (function (exports) { 'use strict';

/*
  Copyright 2017 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var DEFAULT_URL = 'https://js.arcgis.com/4.5/';
// get the script injected by this library
function getScript() {
    return document.querySelector('script[data-esri-loader]');
}
// TODO: at next breaking change replace the public isLoaded() API with this
function _isLoaded() {
    var globalRequire = window['require'];
    // .on() ensures that it's Dojo's AMD loader
    return globalRequire && globalRequire.on;
}
function createScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    // TODO: remove this if no longer needed
    script.dataset['esriLoader'] = 'loading';
    return script;
}
// add a one-time load handler to script
// and optionally add a one time error handler as well
function handleScriptLoad(script, callback, errback) {
    var onScriptError;
    if (errback) {
        // set up an error handler as well
        onScriptError = handleScriptError(script, errback);
    }
    var onScriptLoad = function () {
        // pass the script to the callback
        callback(script);
        // remove this event listener
        script.removeEventListener('load', onScriptLoad, false);
        if (onScriptError) {
            // remove the error listener as well
            script.removeEventListener('error', onScriptError, false);
        }
    };
    script.addEventListener('load', onScriptLoad, false);
}
// add a one-time error handler to the script
function handleScriptError(script, callback) {
    var onScriptError = function (e) {
        // reject the promise and remove this event listener
        callback(e.error || new Error("There was an error attempting to load " + script.src));
        // remove this event listener
        script.removeEventListener('error', onScriptError, false);
    };
    script.addEventListener('error', onScriptError, false);
    return onScriptError;
}
// allow consuming libraries to provide their own Promise implementations
var utils = {
    Promise: window['Promise']
};
// has ArcGIS API been loaded on the page yet?
function isLoaded() {
    // TODO: replace this implementation with that of _isLoaded() on next major release
    return typeof window['require'] !== 'undefined' && getScript();
}
// load the ArcGIS API on the page
function loadScript(options) {
    if (options === void 0) { options = {}; }
    // default options
    if (!options.url) {
        options.url = DEFAULT_URL;
    }
    return new utils.Promise(function (resolve, reject) {
        var script = getScript();
        if (script) {
            // the API is already loaded or in the process of loading...
            // NOTE: have to test against scr attribute value, not script.src
            // b/c the latter will return the full url for relative paths
            var src = script.getAttribute('src');
            if (src !== options.url) {
                // potentailly trying to load a different version of the API
                reject(new Error("The ArcGIS API for JavaScript is already loaded (" + src + ")."));
            }
            else {
                if (_isLoaded()) {
                    // the script has already successfully loaded
                    resolve(script);
                }
                else {
                    // wait for the script to load and then resolve
                    handleScriptLoad(script, resolve, reject);
                }
            }
        }
        else {
            if (_isLoaded()) {
                // the API has been loaded by some other means
                // potentailly trying to load a different version of the API
                reject(new Error("The ArcGIS API for JavaScript is already loaded."));
            }
            else {
                // this is the first time attempting to load the API
                if (options.dojoConfig) {
                    // set dojo configuration parameters before loading the script
                    window['dojoConfig'] = options.dojoConfig;
                }
                // create a script object whose source points to the API
                script = createScript(options.url);
                // once the script is loaded...
                // TODO: once we no longer need to update the dataset, replace this w/
                // handleScriptLoad(script, resolve, reject);
                handleScriptLoad(script, function () {
                    // update the status of the script
                    script.dataset['esriLoader'] = 'loaded';
                    // return the script
                    resolve(script);
                }, reject);
                // load the script
                document.body.appendChild(script);
            }
        }
    });
}
// wrap dojo's require() in a promise
function requireModules(modules) {
    return new utils.Promise(function (resolve, reject) {
        // If something goes wrong loading the esri/dojo scripts, reject with the error.
        var errorHandler = window['require'].on('error', reject);
        window['require'](modules, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // remove error handler
            errorHandler.remove();
            // Resolve with the parameters from dojo require as an array.
            resolve(args);
        });
    });
}
// returns a promise that resolves with an array of the required modules
// also will attempt to lazy load the ArcGIS API if it has not already been loaded
function loadModules(modules, loadScriptOptions) {
    if (!_isLoaded()) {
        // script is not yet loaded, attept to load it then load the modules
        return loadScript(loadScriptOptions).then(function () { return requireModules(modules); });
    }
    else {
        // script is already loaded, just load the modules
        return requireModules(modules);
    }
}
// TODO: remove this next major release
function bootstrap(callback, options) {
    if (options === void 0) { options = {}; }
    console.warn('bootstrap() has been depricated and will be removed the next major release. Use loadScript() instead.');
    // default options
    if (!options.url) {
        options.url = DEFAULT_URL;
    }
    // don't reload API if it is already loaded or in the process of loading
    if (getScript()) {
        if (callback) {
            callback(new Error('The ArcGIS API for JavaScript is already loaded.'));
        }
        return;
    }
    if (options.dojoConfig) {
        // set dojo configuration parameters before loading the script
        window['dojoConfig'] = options.dojoConfig;
    }
    // create a script object whose source points to the API
    var script = createScript(options.url);
    // once the script is loaded...
    script.onload = function () {
        // update the status of the script
        script.dataset['esriLoader'] = 'loaded';
        // we can now use Dojo's require() to load esri and dojo AMD modules
        var _dojoRequire = window['require'];
        if (callback) {
            // let the caller know that the API has been successfully loaded
            // and as a convenience, return the require function
            // in case they want to use it directly
            callback(null, _dojoRequire);
        }
    };
    if (callback) {
        // handle any script loading errors
        handleScriptError(script, callback);
    }
    // load the script
    document.body.appendChild(script);
}
// TODO: remove this next major release
function dojoRequire(modules, callback) {
    /* tslint:disable max-line-length */
    console.warn('dojoRequire() has been depricated and will be removed the next major release. Use loadModules() instead.');
    /* tslint:enable max-line-length */
    if (isLoaded()) {
        // already loaded, just call require
        window['require'](modules, callback);
    }
    else {
        // wait for script to load then call require
        var script = getScript();
        if (script) {
            // Not yet loaded but script is in the body - use callback once loaded
            handleScriptLoad(script, function () {
                window['require'](modules, callback);
            });
        }
        else {
            // Not bootstrapped
            throw new Error('The ArcGIS API for JavaScript has not been loaded. You must first call esriLoader.bootstrap()');
        }
    }
}
// export a namespace to expose all functions
var esriLoader = {
    isLoaded: isLoaded,
    loadScript: loadScript,
    loadModules: loadModules,
    utils: utils,
    // TODO: remove these the next major release
    bootstrap: bootstrap,
    dojoRequire: dojoRequire
};

exports.utils = utils;
exports.isLoaded = isLoaded;
exports.loadScript = loadScript;
exports.loadModules = loadModules;
exports.bootstrap = bootstrap;
exports.dojoRequire = dojoRequire;
exports['default'] = esriLoader;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=esri-loader.js.map


/***/ })
/******/ ]);