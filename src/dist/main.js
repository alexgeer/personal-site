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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/App */ \"./src/public/App.js\");\n/* harmony import */ var _public_App__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_App__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/App.js":
/*!***************************!*\
  !*** ./src/public/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\src\\\\public\\\\App.js: Can not use keyword 'await' outside an async function (18:17)\\n\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m  \\u001b[36mtry\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 18 | \\u001b[39m    \\u001b[36mconst\\u001b[39m data \\u001b[33m=\\u001b[39m await \\u001b[33mAPI\\u001b[39m\\u001b[33m.\\u001b[39mget(\\u001b[32m'mp'\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[32m'/ticks'\\u001b[39m)\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                 \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 19 | \\u001b[39m    console\\u001b[33m.\\u001b[39mlog(data \\u001b[33m|\\u001b[39m \\u001b[32m'no data'\\u001b[39m)\\u001b[0m\\n\\u001b[0m \\u001b[90m 20 | \\u001b[39m  } \\u001b[36mcatch\\u001b[39m (err) {\\u001b[0m\\n\\u001b[0m \\u001b[90m 21 | \\u001b[39m    console\\u001b[33m.\\u001b[39mlog(\\u001b[32m'error fetching from Lambda API'\\u001b[39m)\\u001b[0m\\n    at Object.raise (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7012:17)\\n    at Object.checkReservedWord (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10405:14)\\n    at Object.parseIdentifierName (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10367:12)\\n    at Object.parseIdentifier (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10339:23)\\n    at Object.parseExprAtom (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9514:27)\\n    at Object.parseExprAtom (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4126:20)\\n    at Object.parseExprSubscripts (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9237:23)\\n    at Object.parseMaybeUnary (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9217:21)\\n    at Object.parseExprOps (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9083:23)\\n    at Object.parseMaybeConditional (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9056:23)\\n    at Object.parseMaybeAssign (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9015:21)\\n    at Object.parseVar (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11341:26)\\n    at Object.parseVarStatement (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11160:10)\\n    at Object.parseStatementContent (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10757:21)\\n    at Object.parseStatement (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10690:17)\\n    at Object.parseBlockOrModuleBlockBody (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11266:25)\\n    at Object.parseBlockBody (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11253:10)\\n    at Object.parseBlock (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11237:10)\\n    at Object.parseTryStatement (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11125:23)\\n    at Object.parseStatementContent (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10747:21)\\n    at Object.parseStatement (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10690:17)\\n    at Object.parseBlockOrModuleBlockBody (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11266:25)\\n    at Object.parseBlockBody (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11253:10)\\n    at Object.parseBlock (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11237:10)\\n    at Object.parseFunctionBody (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10256:24)\\n    at Object.parseArrowExpression (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10197:10)\\n    at Object.parseParenAndDistinguishExpression (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9823:12)\\n    at Object.parseExprAtom (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9582:21)\\n    at Object.parseExprAtom (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4126:20)\\n    at Object.parseExprSubscripts (C:\\\\Users\\\\The Amazing Pip\\\\Desktop\\\\work\\\\site\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9237:23)\");\n\n//# sourceURL=webpack:///./src/public/App.js?");

/***/ })

/******/ });