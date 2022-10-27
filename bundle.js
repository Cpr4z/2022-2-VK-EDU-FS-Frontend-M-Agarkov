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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar messages = document.querySelector('.messages');\nvar form = document.querySelector('.form');\nvar back = document.querySelector('.back-button');\nform.addEventListener('submit', handleSubmit.bind(undefined));\nform.addEventListener('keypress', handleKeyPress.bind(undefined));\nwindow.addEventListener('DOMContentLoaded', getMessagesFromLocalStorage.bind(undefined));\nback - button.addEventListener('click', mainPage.bind(undefined));\nfunction handleKeyPress(event) {\n  if (event.keyCode === 13) {\n    form.dispatchEvent(new Event('submit'));\n  }\n}\nfunction handleSubmit(event) {\n  event.preventDefault();\n  var input = event.target.querySelector('.form-input');\n  var time = new Date();\n  var message = {\n    'text': input.value,\n    'date': \"\".concat(time.getHours(), \":\").concat(time.getMinutes()),\n    'sender_name': 'Agarkov Matvey'\n  };\n  if (input.value) {\n    createMessageBlock(message);\n    input.value = '';\n  }\n}\nfunction getMessagesFromLocalStorage() {\n  if (!checkLocalStorage) {\n    return;\n  }\n  var messages = localStorage.getItem('messages');\n  if (!messages) {\n    return;\n  }\n  messages = JSON.parse(messages);\n  var _iterator = _createForOfIteratorHelper(messages.all),\n    _step;\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var message = _step.value;\n      createMessageBlock(message, save = false);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\nfunction checkLocalStorage() {\n  try {\n    localStorage.setItem('Matvey', 'Agarkov');\n    localStorage.getItem('Matvey');\n  } catch (err) {\n    return false;\n  }\n  return true;\n}\nfunction saveMessageToLocalStorage(message) {\n  if (!checkLocalStorage) {\n    return;\n  }\n  var messages = localStorage.getItem('messages');\n  if (messages == '' || messages == null) {\n    localStorage.setItem('messages', JSON.stringify({\n      'all': []\n    }));\n  }\n  messages = localStorage.getItem('messages');\n  messages = JSON.parse(messages);\n  if (messages == undefined) {\n    return;\n  }\n  messages.all.push(message);\n  localStorage.setItem('messages', JSON.stringify(messages));\n}\nfunction createMessageBlock(message) {\n  var save = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  var message_block = document.createElement('div');\n  message_block.className = 'message right';\n  var message_text = document.createElement('div');\n  message_text.className = 'message-text';\n  message_text.innerHTML = message.text;\n  message_block.append(message_text);\n  var message_meta = document.createElement('div');\n  var message_date = document.createElement('div');\n  var message_state = document.createElement('div');\n  message_meta.className = 'message-meta';\n  message_date.classname = 'message-date';\n  message_date.innerHTML = message.date;\n  message_state.className = 'message-state';\n  message_state.innerHTML = \"<span class='material-icons'>done_all</span>\";\n  message_meta.append(message_date);\n  message_meta.append(message_state);\n  message_block.append(message_meta);\n  messages.append(message_block);\n  if (save) {\n    saveMessageToLocalStorage(message);\n  }\n}\nfunction mainPage(event) {\n  window.location.href = '';\n}\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });