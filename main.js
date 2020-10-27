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

/***/ "./src/changePages.js":
/*!****************************!*\
  !*** ./src/changePages.js ***!
  \****************************/
/*! exports provided: change, isTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"change\", function() { return change; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isTab\", function() { return isTab; });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contactUs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactUs.js */ \"./src/contactUs.js\");\n/* harmony import */ var _initialLoad_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialLoad.js */ \"./src/initialLoad.js\");\n\n\n\n\nconst change = (function() {\n\n    let currentPage = \"index\";\n\n    function page() {\n        const clickedItem = this.id || this.keyCode\n\n        const _leftArrow = document.getElementById(\"left-arrows\");\n        const _rightArrow = document.getElementById(\"right-arrows\");\n\n        /* reset stuff */\n        _leftArrow.removeEventListener(\"click\", change.page, true );\n        _rightArrow.removeEventListener(\"click\", change.page, true );\n        const content = document.getElementById(\"content\");\n        function deleteHTML() { content.innerHTML = \"\" }\n\n        /* change page */\n        switch ( clickedItem ) {\n            case \"index\": {\n                deleteHTML();\n                currentPage = \"index\";\n                _initialLoad_js__WEBPACK_IMPORTED_MODULE_2__[\"index\"].loadElements();\n                break;\n            }\n            case \"menu\": {\n                deleteHTML();\n                currentPage = \"menu\";\n                _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].loadElements();\n                break;\n            }\n            case \"contactUs\": {\n                deleteHTML();\n                currentPage = \"contactUs\";\n                _contactUs_js__WEBPACK_IMPORTED_MODULE_1__[\"contactUs\"].loadElements();\n                break;\n            }\n            case 9: {\n                this.preventDefault();\n                deleteHTML();\n                if ( currentPage == \"index\" ) {\n                    currentPage = \"menu\";\n                    _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].loadElements();\n                    break;\n                }\n                else if ( currentPage == \"menu\" ) {\n                    currentPage = \"contactUs\";\n                    _contactUs_js__WEBPACK_IMPORTED_MODULE_1__[\"contactUs\"].loadElements();\n                    break;\n                }\n                else if ( currentPage == \"contactUs\") {\n                    currentPage = \"index\";\n                    _initialLoad_js__WEBPACK_IMPORTED_MODULE_2__[\"index\"].loadElements();\n                    break;\n                }\n            }\n\n            case \"left-arrows\": {\n                deleteHTML();\n                if ( currentPage == \"index\" ) {\n                    currentPage = \"contactUs\";\n                    _contactUs_js__WEBPACK_IMPORTED_MODULE_1__[\"contactUs\"].loadElements();\n                }\n                else if ( currentPage == \"menu\" ) {\n                    currentPage = \"index\";\n                    _initialLoad_js__WEBPACK_IMPORTED_MODULE_2__[\"index\"].loadElements();\n                }\n                else if ( currentPage == \"contactUs\" ) {\n                    currentPage = \"menu\";\n                    _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].loadElements();\n                }\n                break;\n            }\n            case \"right-arrows\": {\n                deleteHTML();\n                if ( currentPage == \"index\" ) {\n                    currentPage = \"menu\";\n                    _menu_js__WEBPACK_IMPORTED_MODULE_0__[\"menu\"].loadElements();\n                }\n                else if ( currentPage == \"menu\" ) {\n                    currentPage = \"contactUs\";\n                    _contactUs_js__WEBPACK_IMPORTED_MODULE_1__[\"contactUs\"].loadElements();\n                }\n                else if ( currentPage == \"contactUs\" ) {\n                    currentPage = \"index\";\n                    _initialLoad_js__WEBPACK_IMPORTED_MODULE_2__[\"index\"].loadElements();\n                }\n                break;\n            }\n        }\n    }\n\n    return {page};\n})();\n\nconst isTab = (function() {\n    function yesOrNo(e) {\n        if (e.keyCode == 9 && e.target.id != \"textarea\" ) {\n            change.page.call(e);\n        }\n    }\n    return {yesOrNo, stop};\n})();\n\n\n\n//# sourceURL=webpack:///./src/changePages.js?");

/***/ }),

/***/ "./src/contactUs.js":
/*!**************************!*\
  !*** ./src/contactUs.js ***!
  \**************************/
/*! exports provided: contactUs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactUs\", function() { return contactUs; });\n/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialLoad */ \"./src/initialLoad.js\");\n/* harmony import */ var _changePages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changePages.js */ \"./src/changePages.js\");\n\n\n\nconst contactUs = (function() {\n    function loadElements() {\n        const content = document.getElementById(\"content\");\n            const backgroundImage = content.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"img\", \"class\", \"background-image\", \"./img/chocolate-beans.jpg\"));\n            const positionLeftArrows = content.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"div\", \"class\", \"position-left-arrows\"));\n                const leftArrows = positionLeftArrows.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"img\", \"class\", \"left-arrows\", \"./img/new-arrow.png\"));\n                leftArrows.id = \"left-arrows\";\n                leftArrows.addEventListener(\"click\", _changePages_js__WEBPACK_IMPORTED_MODULE_1__[\"change\"].page, true );\n            const wrapMenu = content.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"div\", \"class\", \"wrap-menu\", false));\n                const pageHeader = wrapMenu.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"div\", \"class\", \"page-header\", false));\n                    const pageHeaderParagraph = pageHeader.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"p\", \"\", \"\", false));\n                    pageHeaderParagraph.innerText = \"Contact Us\";\n                const contactUsWrapper = wrapMenu.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"div\", \"class\", \"contact-us-wrapper\", false));\n                    const textArea = contactUsWrapper.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"textarea\", \"\", \"\", false));\n                    textArea.id = \"textarea\";\n                        const submitButton = contactUsWrapper.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"button\", \"\", \"\", false));\n                        submitButton.innerHTML = \"Submit\";\n            const positionRightArrows = content.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"div\", \"class\", \"position-right-arrows\", false));\n                const rightArrows = positionRightArrows.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"img\", \"class\", \"right-arrows\", \"./img/new-arrow.png\"));\n                rightArrows.id = \"right-arrows\";\n                rightArrows.addEventListener(\"click\", _changePages_js__WEBPACK_IMPORTED_MODULE_1__[\"change\"].page, true );\n    }\n\n    return {loadElements};\n})();\n\n\n\n//# sourceURL=webpack:///./src/contactUs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialLoad */ \"./src/initialLoad.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"navigation\"].loadElements();\n_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"index\"].loadElements();\n\nconsole.log('hello restaurant!');\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/initialLoad.js":
/*!****************************!*\
  !*** ./src/initialLoad.js ***!
  \****************************/
/*! exports provided: index, navigation, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"index\", function() { return index; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navigation\", function() { return navigation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony import */ var _changePages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changePages.js */ \"./src/changePages.js\");\n\nconst create = (function() {\n    function element(type, idOrClass, name, href) {\n        let newElement = document.createElement(type);\n        (idOrClass == \"id\") ? newElement.id = name : newElement.className = name;\n        if ( href !== false ) {\n            if ( type == \"img\") {\n                newElement.src = href;\n            }\n            if ( type == \"a\" ) {\n                newElement.href = href;\n            }\n        }\n        return newElement\n    }\n    return {element};\n})();\n\nconst navigation = (function() {\n    function loadElements() {\n        const navigation = document.getElementById(\"navigation\");\n            const header = navigation.appendChild(create.element(\"header\", \"\", \"\", false));\n                const banner = header.appendChild(create.element(\"div\", \"class\", \"banner\", false));\n                    const logo = banner.appendChild(create.element(\"h1\", \"class\", \"logo\", false));\n                    logo.innerHTML = \"We <div class=\\\"love-chocolate\\\">Love</div> Chocolate\";\n                    const nav = banner.appendChild(create.element(\"nav\", \"\", \"\", false));\n                        const navigationLinks = nav.appendChild(create.element(\"div\", \"class\", \"navigation-links\", false));\n                            const home = navigationLinks.appendChild(create.element(\"a\", \"id\", \"index\", \"#\"));\n                            home.innerText = \"Home\";\n                            home.addEventListener(\"click\", _changePages_js__WEBPACK_IMPORTED_MODULE_0__[\"change\"].page, true );\n                            const menu = navigationLinks.appendChild(create.element(\"a\", \"id\", \"menu\", \"#\"));\n                            menu.innerText = \"Menu\";\n                            menu.addEventListener(\"click\", _changePages_js__WEBPACK_IMPORTED_MODULE_0__[\"change\"].page, true );\n                            const contactUs = navigationLinks.appendChild(create.element(\"a\", \"id\", \"contactUs\", \"#\"));\n                            contactUs.innerText = \"Contact Us\";\n                            contactUs.addEventListener(\"click\", _changePages_js__WEBPACK_IMPORTED_MODULE_0__[\"change\"].page, true );\n                        const sharedImages = nav.appendChild(create.element(\"div\", \"class\", \"shared-images\", false));\n                            const pinterest = sharedImages.appendChild(create.element(\"img\", \"\", \"\", \"./img/pinterest-logo-2.png\"));\n                            const facebook = sharedImages.appendChild(create.element(\"img\", \"\", \"\", \"./img/facebook-logo-2.png\"));\n                            const twitter = sharedImages.appendChild(create.element(\"img\", \"\", \"\", \"./img/twitter-logo-2.png\"));\n                            const instagram = sharedImages.appendChild(create.element(\"img\", \"\", \"\", \"./img/instagram-logo-2.png\"));\n                const drawLine = header.appendChild(create.element(\"div\", \"class\", \"draw-line\", false));\n\n                const body = document.querySelector(\"body\");\n                body.addEventListener(\"keydown\", _changePages_js__WEBPACK_IMPORTED_MODULE_0__[\"isTab\"].yesOrNo, true );\n    }\n\n    return {loadElements};\n})();\n\n/* this functions loads all elements on the page. The javascript is spaced to show HTML formatting */\nconst index = (function() {\n    /* content */\n    function loadElements() {\n        const content = document.getElementById(\"content\");\n            const backgroundImageWrapper = content.appendChild(create.element(\"img\", \"class\", \"background-image\", \"./img/chocolate-beans.jpg\"));\n            const centerContent = content.appendChild(create.element(\"div\", \"class\", \"center-content\", false));\n                const leftArrows = centerContent.appendChild(create.element(\"img\", \"class\", \"left-arrows\", \"./img/new-arrow.png\"));\n                leftArrows.id = \"left-arrows\";\n                leftArrows.addEventListener(\"click\", _changePages_js__WEBPACK_IMPORTED_MODULE_0__[\"change\"].page, true );\n                const insideHeader = centerContent.appendChild(create.element(\"h1\", \"class\", \"inside-header\", false));\n                insideHeader.innerText = \"Our chocolate is made from the finest cocoa beans. Delicately handled to provide you superior quality. Tasty sweet chocolate-y goodness\";\n                const rightArrows = centerContent.appendChild(create.element(\"img\", \"class\", \"right-arrows\", \"./img/new-arrow.png\"));\n                rightArrows.id = \"right-arrows\";\n                rightArrows.addEventListener(\"click\", _changePages_js__WEBPACK_IMPORTED_MODULE_0__[\"change\"].page, true );\n    }\n\n    return {loadElements};\n})();\n\n\n\n//# sourceURL=webpack:///./src/initialLoad.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"menu\", function() { return menu; });\n/* harmony import */ var _initialLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialLoad */ \"./src/initialLoad.js\");\n/* harmony import */ var _changePages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changePages.js */ \"./src/changePages.js\");\n\n\n\nconst menu = (function() {\n    function loadElements() {\n        const content = document.getElementById(\"content\");\n            const backgroundImage = content.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"img\", \"class\", \"background-image\", \"./img/chocolate-beans.jpg\"));\n            const positionLeftArrows = content.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"div\", \"class\", \"position-left-arrows\", false));\n                const leftArrows = positionLeftArrows.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"img\", \"class\", \"left-arrows\", \"./img/new-arrow.png\"));\n                leftArrows.id = \"left-arrows\";\n                leftArrows.addEventListener(\"click\", _changePages_js__WEBPACK_IMPORTED_MODULE_1__[\"change\"].page, true );\n            const wrapMenu = content.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"div\", \"class\", \"wrap-menu\", false));\n                const menuHeader = wrapMenu.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"div\", \"class\", \"menu-header\", false));\n                    const menuHeaderParagraph = menuHeader.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"p\", \"\", \"\", false));\n                    menuHeaderParagraph.innerText = \"MENU\";\n                const positionProducts = wrapMenu.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"div\", \"class\", \"position-products\", false));\n                    const productsWrapper = positionProducts.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"div\", \"class\", \"products-wrapper\", false));\n                    for ( let i = 1; i <= 8; i++ ) {\n                        let imgSrc = \"./img/chocolate-\" + i + \".jpg\";\n                        let productWrapper = productsWrapper.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"div\", \"\", \"\", false));\n                            let productImage = productWrapper.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"img\", \"\", \"\", imgSrc));\n                            let productParagraph = productWrapper.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"p\", \"\", \"\", false));\n                            productParagraph.innerText = \"Chocolate picture\";\n                    }\n            const positionRightArrows = content.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"div\", \"class\", \"position-right-arrows\", false));\n                    const rightArrows = positionRightArrows.appendChild(_initialLoad__WEBPACK_IMPORTED_MODULE_0__[\"create\"].element(\"img\", \"class\", \"right-arrows\", \"./img/new-arrow.png\"));\n                    rightArrows.id = \"right-arrows\";\n                    rightArrows.addEventListener(\"click\", _changePages_js__WEBPACK_IMPORTED_MODULE_1__[\"change\"].page, true );\n    }\n\n    return {loadElements};\n})();\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });
