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
/******/ 	return __webpack_require__(__webpack_require__.s = 316);
/******/ })
/************************************************************************/
/******/ ({

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

    module.exports = __webpack_require__(317);


    /***/ }),
    
    /***/ 317:
    /***/ (function(module, exports) {
    
    var wrapper = hyperform(window, {
        preventImplicitSubmit: true
    });
    
    hyperform.setRenderer('attachWarning', function (warning, element) {
        element.parentNode.appendChild(warning);
        element.parentNode.className += ' error-box';
    });
    
    var phoneInput = document.getElementById('phone');
    var phoneInputMaskedValue = '555-555-5555';
    phoneInput.addEventListener('input', handlePhoneInput);
    phoneInput.addEventListener('blur', setPhoneInputValue);
    
    function handlePhoneInput(e) {
        var phoneInputInitialValue = phoneInput.value;
        var phoneInputNumbersValue = phoneInputInitialValue.replace(/\D/g, '');
        phoneInputMaskedValue = phoneInputNumbersValue.substring(0, 3) + '-' + phoneInputNumbersValue.substring(3, 6) + '-' + phoneInputNumbersValue.substring(6, 10);
    }
    
    function setPhoneInputValue() {
        phoneInput.value = phoneInputMaskedValue;
    }
    
    document.addEventListener('change', function (event) {
        var theSelect = document.getElementById('selectTypeOfQ');
        theSelect.classList.add('changed');
    });
    
    var currentURL = window.location.href.toString();
    var redirectURL = currentURL.replace('contact.html', 'contact-thankyou.html');
    document.getElementById('redirect').setAttribute('value', redirectURL);
    
    /***/ })
    
    /******/ });
    //# sourceMappingURL=contact.js.map