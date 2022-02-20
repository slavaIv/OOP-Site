/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/sliders/slider-main.js":
/*!***********************************************!*\
  !*** ./src/js/modules/sliders/slider-main.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MainSlider; }
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/sliders/slider.js");

class MainSlider extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(page, btns) {
    super(page, btns);
    this.hanson = document.querySelector('.hanson');
  }

  showSlides(number) {
    if (number > this.slides.length) {
      this.slideIndex = 1;
    }

    if (number < 1) {
      this.slideIndex = this.slides.length;
    }

    [...this.slides].forEach(slide => {
      slide.style.display = 'none'; // slide.style.opacity = '0';
    });

    if (this.slideIndex === 3) {
      this.hanson.style.opacity = '0';
      this.hanson.classList.add('animated');
      setTimeout(() => {
        this.hanson.style.opacity = '1';
        this.hanson.classList.add('slideInUp');
      }, 3000);
    }

    this.slides[this.slideIndex - 1].style.display = 'block'; // this.slides[this.slideIndex - 1].classList.add('animated');
    // this.slides[this.slideIndex - 1].classList.add('slideInUp');
  }

  nextSlide(number) {
    this.showSlides(this.slideIndex += number);
  }

  render() {
    this.btns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.nextSlide(1);
      });
      btn.parentNode.previousElementSibling.addEventListener('click', e => {
        e.preventDefault();
        this.slideIndex = 1;
        this.showSlides(this.slideIndex);
      });
    });
  }

}

/***/ }),

/***/ "./src/js/modules/sliders/slider-main2.js":
/*!************************************************!*\
  !*** ./src/js/modules/sliders/slider-main2.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MainSlider2; }
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ "./src/js/modules/sliders/slider.js");

class MainSlider2 extends _slider__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(page, next, prev) {
    super(page, next, prev);
  }

  showSlides(number) {
    if (number > this.slides.length) {
      this.slideIndex = 1;
    }

    if (number < 1) {
      this.slideIndex = this.slides.length;
    }

    [...this.slides].forEach(slide => {
      slide.style.display = 'none';
      slide.classList.remove('card-active'); // slide.style.opacity = '0';
    });
    this.slides[this.slideIndex - 1].style.display = 'block';
    this.slides[this.slideIndex - 1].classList.add('card-active'); // // this.slides[this.slideIndex - 1].classList.add('animated');
    // // this.slides[this.slideIndex - 1].classList.add('slideInUp');
  }

  nextSlide(number) {
    this.showSlides(this.slideIndex += number);
  }

  render() {
    this.next.addEventListener('click', () => {
      this.nextSlide(1);
    });
    this.prev.addEventListener('click', () => {
      this.nextSlide(-1);
    });
    this.showSlides(1);
  }

}

/***/ }),

/***/ "./src/js/modules/sliders/slider.js":
/*!******************************************!*\
  !*** ./src/js/modules/sliders/slider.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Slider; }
/* harmony export */ });
class Slider {
  constructor() {
    let {
      page = null,
      btns = null,
      next = null,
      prev = null
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.page = document.querySelector(page);
    this.slides = this.page.children;
    this.btns = document.querySelectorAll(btns);
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slideIndex = 1;
  }

}

/***/ }),

/***/ "./src/js/modules/video.js":
/*!*********************************!*\
  !*** ./src/js/modules/video.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Video; }
/* harmony export */ });
class Video {
  constructor(triggers, overlay) {
    this.btns = document.querySelectorAll(triggers);
    this.overlay = document.querySelector(overlay);
    this.close = this.overlay.querySelector('.close');
  }

  createPlayer(url) {
    this.player = new YT.Player('frame', {
      height: '100%',
      width: '100%',
      videoId: `${url}`
    });
    this.overlay.style.display = 'flex';
  }

  closePlayer() {
    this.close.addEventListener('click', () => {
      this.overlay.style.display = 'none';
      this.player.stopVideo();
    });
  }

  init() {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    this.btns.forEach(btn => btn.addEventListener('click', () => {
      if (document.querySelector('iframe#frame')) {
        this.overlay.style.display = 'flex';
      } else {
        this.createPlayer(btn.getAttribute('data-url'));
      }
    }));
    this.closePlayer();
  }

}

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_sliders_slider_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/sliders/slider-main */ "./src/js/modules/sliders/slider-main.js");
/* harmony import */ var _modules_sliders_slider_main2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders/slider-main2 */ "./src/js/modules/sliders/slider-main2.js");
/* harmony import */ var _modules_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/video */ "./src/js/modules/video.js");



window.addEventListener('DOMContentLoaded', () => {
  const slider = new _modules_sliders_slider_main__WEBPACK_IMPORTED_MODULE_0__["default"]({
    page: '.page',
    btns: '.next'
  });
  slider.render();
  const slider2 = new _modules_sliders_slider_main2__WEBPACK_IMPORTED_MODULE_1__["default"]({
    page: '.showup__content-slider',
    next: '.showup__next',
    prev: '.showup__prev'
  });
  slider2.render();
  const video = new _modules_video__WEBPACK_IMPORTED_MODULE_2__["default"](".showup .play", '.overlay');
  video.init();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map