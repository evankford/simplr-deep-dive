(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/scripts/app"],{

/***/ "./resources/assets/scripts/app.js":
/*!*****************************************!*\
  !*** ./resources/assets/scripts/app.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lazysizes/plugins/parent-fit/ls.parent-fit */ "./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js");
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ScrollMagic */ "./node_modules/ScrollMagic/scrollmagic/uncompressed/ScrollMagic.js");
/* harmony import */ var ScrollMagic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ScrollMagic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var scrollmagic_plugin_gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! scrollmagic-plugin-gsap */ "./node_modules/scrollmagic-plugin-gsap/index.js");
/* harmony import */ var scrollmagic_plugin_gsap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(scrollmagic_plugin_gsap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ScrollMagic_scrollmagic_uncompressed_plugins_debug_addIndicators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ScrollMagic/scrollmagic/uncompressed/plugins/debug.addIndicators */ "./node_modules/ScrollMagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js");
/* harmony import */ var ScrollMagic_scrollmagic_uncompressed_plugins_debug_addIndicators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ScrollMagic_scrollmagic_uncompressed_plugins_debug_addIndicators__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_9__);


/**
 * External Dependencies
 */









Object(scrollmagic_plugin_gsap__WEBPACK_IMPORTED_MODULE_7__["ScrollMagicPluginGsap"])(ScrollMagic__WEBPACK_IMPORTED_MODULE_6__, gsap__WEBPACK_IMPORTED_MODULE_5__["TweenMax"], gsap__WEBPACK_IMPORTED_MODULE_5__["TimelineMax"]);
object_fit_images__WEBPACK_IMPORTED_MODULE_9___default()();
var plugins = [gsap__WEBPACK_IMPORTED_MODULE_5__["CSSPlugin"]]; // if (!plugins) {
//   console.log('Error loading plugins!');
// }

function initModules() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  Array.from(parent.querySelectorAll("[data-module]")).forEach(function (el) {
    var name = el.getAttribute("data-module");

    var Module = __webpack_require__("./resources/assets/scripts/modules sync recursive ^\\.\\/.*$")("./".concat(name))["default"];

    new Module(el);
  });
}

$(document).ready(function () {
  // console.log('Hello world');
  initModules();
  var Scroller = new SiteScroller();
});

var SiteScroller = /*#__PURE__*/function () {
  function SiteScroller() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SiteScroller);

    this.controller = new ScrollMagic__WEBPACK_IMPORTED_MODULE_6__["Controller"]();
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SiteScroller, [{
    key: "setupTimelines",
    value: function setupTimelines() {
      this.animTl = new gsap__WEBPACK_IMPORTED_MODULE_5__["TimelineMax"]();
      this.animTl.from();
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      $('section, footer, header').each(function (i, parent) {
        $(parent).find('[data-anim-in]').each(function (childI, el) {
          var tl = new gsap__WEBPACK_IMPORTED_MODULE_5__["TimelineMax"]();
          var delay = childI * .1400;
          tl.from(el, 0.5, {
            opacity: 0,
            y: '40px',
            ease: gsap__WEBPACK_IMPORTED_MODULE_5__["Power2"].easeInOut
          }).delay(delay);
          new ScrollMagic__WEBPACK_IMPORTED_MODULE_6__["Scene"]({
            triggerElement: el,
            triggerHook: 0.85,
            reverse: false
          }).setTween(tl).addTo(_this.controller);
        });
        $(parent).find('[data-anim-in-children]').each(function (childI, el) {
          var tl = new gsap__WEBPACK_IMPORTED_MODULE_5__["TimelineMax"]();
          var delay = childI * .1400;
          var children = $(el).children();
          tl.staggerFrom(children, 0.5, {
            opacity: 0,
            y: '40px',
            ease: gsap__WEBPACK_IMPORTED_MODULE_5__["Power2"].easeInOut
          }, 0.15).delay(delay);
          new ScrollMagic__WEBPACK_IMPORTED_MODULE_6__["Scene"]({
            triggerElement: el,
            triggerHook: 0.85,
            reverse: false
          }).setTween(tl).addTo(_this.controller);
        });
      });
    }
  }]);

  return SiteScroller;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./resources/assets/scripts/components/content-slider.js":
/*!***************************************************************!*\
  !*** ./resources/assets/scripts/components/content-slider.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contentSlider; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);





var contentSlider = /*#__PURE__*/function () {
  function contentSlider(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, contentSlider);

    this.el = el.querySelector('[data-parent-slide]');
    this.view = this.el.closest('.view');
    this.thumbEl = el.querySelector('[data-thumb-slider]');
    this.wrap = el; ////// Swiper for slideshow

    this.thumbOptions = false;
    this.perview = 1;
    this.initialSlide = 0;
    this.dataCurrent = this.wrap.querySelectorAll('[data-current]');
    this.pause = this.pauseSliders.bind(this);
    this.initSliders();
    this.setupListeners();
    this.initLinks();
    this.checkForInitial();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(contentSlider, [{
    key: "setupListeners",
    value: function setupListeners() {
      var self = this;
      this.view.addEventListener('barbaOffscreen', self.pause);
    }
  }, {
    key: "pauseSliders",
    value: function pauseSliders() {
      if (this.swiper) {
        this.swiper.autoplay.stop();
      }
    }
  }, {
    key: "checkForInitial",
    value: function checkForInitial() {
      var parsed = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.parse(window.location.search);

      if (parsed.as) {
        var as = this.wrap.querySelector('[data-post-id="' + parsed.as + '"]');
        console.log(parsed.as);

        if (as) {
          var url = as.getAttribute('data-permalink');
          window.history.replaceState(false, false, url);
          this.initialSlide = as.getAttribute('data-loop-index');
        }
      }
    }
  }, {
    key: "initSliders",
    value: function initSliders() {
      var _this = this;

      if (this.thumbEl) {
        this.thumbSwiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](this.thumbEl, {
          centeredSlides: false,
          slidesPerView: 1.35,
          loop: false,
          slidesOffsetAfter: 100,
          threshold: 10,
          initialSlide: this.initialSlide,
          spaceBetween: 15,
          speed: 800,
          effect: 'slide',
          slideToClickedSlide: true,
          navigation: false,
          breakpoints: {
            760: {
              slidesPerView: 1.9,
              spaceBetween: 20
            },
            1200: {
              slidesPerView: 2.2,
              spaceBetween: 35,
              slidesOffsetAfter: 200
            }
          }
        });
        this.thumbOptions = {
          swiper: this.thumbSwiper
        };
      }

      this.swiper = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](this.el, {
        slidesPerView: 1,
        centeredSlides: true,
        centerInsufficientSlides: true,
        effect: 'slide',
        threshold: 6,
        initialSlide: this.initialSlide,
        speed: 800,
        virtualTranslate: true,
        autoHeight: true,
        navigation: {
          nextEl: this.el.querySelector('.swiper-button-next'),
          prevEl: this.el.querySelector('.swiper-button-prev')
        },
        coverflowEffect: {
          rotate: 30,
          slideShadows: false
        },
        thumbs: this.thumbOptions,
        init: false
      });

      if (this.dataCurrent.length) {
        this.swiper.on('slideChange', function () {
          _this.dataCurrent.forEach(function (el) {
            el.innerHTML = _this.swiper.activeIndex + 1;
          });

          if (_this.thumbSwiper) {
            _this.thumbSwiper.slideTo(_this.swiper.activeIndex);
          }
        });
      }

      setTimeout(function () {
        _this.swiper.init();
      }, 200);
      window.addEventListener('load', function () {
        _this.swiper.update();
      });
      this.view.addEventListener('barbaFinish', function () {
        setTimeout(function () {
          // this.swiper.update();
          if (_this.thumbSwiper) {
            _this.thumbSwiper.update();
          }

          _this.swiper.updateAutoHeight();
        }, 100);
      });
    }
  }, {
    key: "initLinks",
    value: function initLinks() {
      var _this2 = this;

      this.parent = this.el.parentNode.parentNode;
      this.thumbs = this.wrap.querySelectorAll('[data-loop-index]');
      console.log(this.thumbs);

      if (this.thumbs) {
        this.thumbs.forEach(function (el) {
          el.setAttribute('href', '#');
          el.addEventListener('click', function (e) {
            console.log(e);
            e.preventDefault();

            _this2.parent.scrollIntoView({
              behavior: 'smooth'
            });

            setTimeout(function () {
              _this2.swiper.slideTo(el.getAttribute('data-loop-index')); // window.history.replaceState(false, false, el.getAttribute('data-permalink'))

            }, 200);
          });
        });
      }
    }
  }]);

  return contentSlider;
}();



/***/ }),

/***/ "./resources/assets/scripts/modules sync recursive ^\\.\\/.*$":
/*!********************************************************!*\
  !*** ./resources/assets/scripts/modules sync ^\.\/.*$ ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./animate-gradient": "./resources/assets/scripts/modules/animate-gradient.js",
	"./animate-gradient.js": "./resources/assets/scripts/modules/animate-gradient.js",
	"./announcement": "./resources/assets/scripts/modules/announcement.js",
	"./announcement.js": "./resources/assets/scripts/modules/announcement.js",
	"./bit": "./resources/assets/scripts/modules/bit.js",
	"./bit.js": "./resources/assets/scripts/modules/bit.js",
	"./countdown": "./resources/assets/scripts/modules/countdown.js",
	"./countdown.js": "./resources/assets/scripts/modules/countdown.js",
	"./downloader": "./resources/assets/scripts/modules/downloader.js",
	"./downloader.js": "./resources/assets/scripts/modules/downloader.js",
	"./footer-drawer": "./resources/assets/scripts/modules/footer-drawer.js",
	"./footer-drawer.js": "./resources/assets/scripts/modules/footer-drawer.js",
	"./front-slider": "./resources/assets/scripts/modules/front-slider.js",
	"./front-slider.js": "./resources/assets/scripts/modules/front-slider.js",
	"./gallery": "./resources/assets/scripts/modules/gallery.js",
	"./gallery-timeline": "./resources/assets/scripts/modules/gallery-timeline.js",
	"./gallery-timeline.js": "./resources/assets/scripts/modules/gallery-timeline.js",
	"./gallery.js": "./resources/assets/scripts/modules/gallery.js",
	"./header": "./resources/assets/scripts/modules/header.js",
	"./header.js": "./resources/assets/scripts/modules/header.js",
	"./mailchimp": "./resources/assets/scripts/modules/mailchimp.js",
	"./mailchimp.js": "./resources/assets/scripts/modules/mailchimp.js",
	"./mobile-menu": "./resources/assets/scripts/modules/mobile-menu.js",
	"./mobile-menu.js": "./resources/assets/scripts/modules/mobile-menu.js",
	"./particle-header": "./resources/assets/scripts/modules/particle-header.js",
	"./particle-header.js": "./resources/assets/scripts/modules/particle-header.js",
	"./release-slider": "./resources/assets/scripts/modules/release-slider.js",
	"./release-slider.js": "./resources/assets/scripts/modules/release-slider.js",
	"./signup-popup": "./resources/assets/scripts/modules/signup-popup.js",
	"./signup-popup.js": "./resources/assets/scripts/modules/signup-popup.js",
	"./vidbox": "./resources/assets/scripts/modules/vidbox.js",
	"./vidbox.js": "./resources/assets/scripts/modules/vidbox.js",
	"./video-slider": "./resources/assets/scripts/modules/video-slider.js",
	"./video-slider.js": "./resources/assets/scripts/modules/video-slider.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./resources/assets/scripts/modules sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./resources/assets/scripts/modules/animate-gradient.js":
/*!**************************************************************!*\
  !*** ./resources/assets/scripts/modules/animate-gradient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnimateGradient; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");



gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap__WEBPACK_IMPORTED_MODULE_2__["CSSPlugin"]);

var AnimateGradient = /*#__PURE__*/function () {
  function AnimateGradient(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AnimateGradient);

    this.el = el;
    this.colors = {
      black: "#050505",
      yellow: "#D88F3A",
      aqua: "#A0E2C3",
      red: "#D84F42",
      green: "#406973",
      pink: "#C47CD4",
      salmon: "#DD7D7C",
      blue: "#3F69EA",
      orange: "#D88F3A"
    };
    this.colorKeys = Object.keys(this.colors);
    this.initiated = false;
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AnimateGradient, [{
    key: "init",
    value: function init() {
      this.gradient = this.gradientAnim.bind(this);
      this.getColors = this.getRandomPairing.bind(this);
      this.gradient();
    }
  }, {
    key: "gradientAnim",
    value: function gradientAnim() {
      var colorPair = this.getColors();
      console.log(colorPair);
      gsap__WEBPACK_IMPORTED_MODULE_2__["TweenMax"].to(this.el, 10, {
        backgroundImage: 'linear-gradient(to bottom, ' + colorPair.top + ', ' + colorPair.bottom + ')',
        onComplete: this.gradient
      });
    }
  }, {
    key: "getRandomPairing",
    value: function getRandomPairing() {
      return {
        top: this.colors[this.colorKeys[Math.round(Math.random() * this.colorKeys.length)]],
        bottom: this.colors[this.colorKeys[Math.round(Math.random() * this.colorKeys.length)]]
      };
    }
  }]);

  return AnimateGradient;
}();



/***/ }),

/***/ "./resources/assets/scripts/modules/announcement.js":
/*!**********************************************************!*\
  !*** ./resources/assets/scripts/modules/announcement.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Announcement; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_2__);




var Announcement = /*#__PURE__*/function () {
  function Announcement(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Announcement);

    this.el = el;
    this.slideIn = this.el.getAttribute('data-slide-in');
    this.closer = this.el.querySelector('[data-close-announcement]');
    this.active = this.checkIfActive();
    this.init();
    this.enable = this.enableBar.bind(this);
    this.disable = this.disableBar.bind(this);
    this.resize = this.resizeBar.bind(this);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Announcement, [{
    key: "checkIfActive",
    value: function checkIfActive() {
      var parsedString = query_string__WEBPACK_IMPORTED_MODULE_2___default.a.parse(window.location.search);

      if (parsedString.showAnnouncement == 'true') {
        return true;
      }

      if (sessionStorage.getItem('announcementDismissed') == true) {
        return false;
      }

      return true;
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      if (!this.active) {
        return false;
      }

      this.ht = this.el.getBoundingClientRect().height;
      document.body.style.WebkitTransition = 'margin 300ms ease';
      document.body.style.MozTransition = 'margin 300ms ease';
      document.body.style.transition = 'margin 300ms ease';
      setTimeout(function () {
        _this.enable();
      }, 500);
      window.addEventListener('resize', function () {
        _this.resize();
      });
    }
  }, {
    key: "enableBar",
    value: function enableBar() {
      this.el.classList.add('announceActive');
      this.resize();

      if (this.closer) {
        this.closer.addEventListener('click', this.disable.bind(this));
      }
    }
  }, {
    key: "disableBar",
    value: function disableBar() {
      document.body.style.marginTop = '0px';
      this.el.classList.remove('announceActive');
      sessionStorage.setItem('announcementDismissed', 'true');
    }
  }, {
    key: "resizeBar",
    value: function resizeBar() {
      this.ht = this.el.getBoundingClientRect().height;

      if (this.el.classList.contains('announceActive')) {
        this.el.style.top = -this.ht + 'px';
        document.body.style.marginTop = this.ht + 'px';
      }
    }
  }]);

  return Announcement;
}();



/***/ }),

/***/ "./resources/assets/scripts/modules/bit.js":
/*!*************************************************!*\
  !*** ./resources/assets/scripts/modules/bit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Bit; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);




/* eslint-disable */
// import Swiper from 'swiper';

var monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

var Bit = /*#__PURE__*/function () {
  function Bit(el, args) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Bit);

    var defaults = {
      appId: '5234ca141a91a3721bdc34b061d329a2',
      artist: 'Keith Urban',
      limit: 8,
      showYear: false,
      dateFormat: 'long numbers',
      filterString: false,
      showLineup: false
    }; //Work trhough initial props

    this.el = el;
    this.dataProps = this.getDataProps();
    this.props = Object.assign({}, defaults, this.dataProps, args); //Get button

    this.expandButton = this.el.querySelector('[data-expand-bit]');
    this.loaded = this.addLoadedClass.bind(this);
    this.setup();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Bit, [{
    key: "setup",
    value: function setup() {
      this.initFunc = this.init.bind(this);
      window.addEventListener('load', this.initFunc);
      window.addEventListener('barbaEnter', this.initFunc);
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      this.shows = [];
      this.getShowData().then(function (response) {
        _this.shows = response;

        _this.renderAllShows();

        window.dispatchEvent(new Event("resize"));

        _this.setupExpand();
      });
    }
  }, {
    key: "getDataProps",
    value: function getDataProps() {
      var props = {};

      if (this.el.getAttribute('data-limit') != '') {
        props.limit = this.el.getAttribute('data-limit');
      }

      if (this.el.getAttribute('data-artist') != '') {
        props.artist = this.el.getAttribute('data-artist');
      }

      if (this.el.getAttribute('data-number-format') != '') {
        props.dateFormat = this.el.getAttribute('data-number-format');
      }

      if (this.el.getAttribute('data-filter-string') != '') {
        props.filterString = this.el.getAttribute('data-filter-string');
      }

      if (this.el.getAttribute('data-show-lineup') != '') {
        props.showLineup = this.el.getAttribute('data-show-lineup');
      }

      return props;
    }
  }, {
    key: "getShowData",
    value: function () {
      var _getShowData = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var cleanArtist, url, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cleanArtist = this.props.artist.replace(' ', '');
                url = 'https://rest.bandsintown.com/artists/' + cleanArtist + '/events?app_id=' + this.props.appId;
                _context.prev = 2;
                _context.next = 5;
                return fetch(url, {
                  method: 'GET'
                });

              case 5:
                response = _context.sent;

                if (response.ok) {
                  _context.next = 9;
                  break;
                }

                this.el.querySelector('.error').classList.remove('hidden');
                throw new Error('Failed to load dates. ' + response.message);

              case 9:
                return _context.abrupt("return", response.json());

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                this.showError();
                console.log('There has been a problem with your fetch operation: ', _context.t0.message);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 12]]);
      }));

      function getShowData() {
        return _getShowData.apply(this, arguments);
      }

      return getShowData;
    }()
  }, {
    key: "showError",
    value: function showError() {
      this.el.classList.add('error');
      this.el.querySelector('.error').classList.remove('hidden');
    }
  }, {
    key: "renderDate",
    value: function renderDate(show) {
      //Store data
      var showDate = new Date(show.datetime);
      var month = showDate.getMonth();
      var year = '20' + (showDate.getYear() - 100);
      var day = showDate.getDate().toString(); ///Element

      var dateEl = document.createElement('span');
      dateEl.classList.add('bit-date');
      var string = '<span class="date-inner">'; //Contitional markup

      switch (this.props.dateFormat) {
        case 'long numbers':
          month = (month + 1).toString();

          if (month.length == 1) {
            string += '0';
          }

          string += month + '.';

          if (day.length == 1) {
            string += '0';
          }

          string += day;

          if (this.props.showYear) {
            string += '.' + year;
          }

          break;

        case 'long words':
          string += monthsLong[month] + ' ' + day;

          if (this.props.showYear) {
            string += ', ' + year;
          }

          break;

        case 'short words':
          string += monthsShort[month] + ' ' + day;

          if (this.props.showYear) {
            string += ', ' + year;
          }

          break;

        default:
          month = (month + 1).toString();
          string += month + '.' + day;

          if (this.showYear) {
            string += '.' + year.substr(2, 2);
          }

      } //Load markup into element


      dateEl.innerHTML = string + '</span>';
      return dateEl;
    }
  }, {
    key: "renderInfo",
    value: function renderInfo(show) {
      //Create elements
      var infoEl = document.createElement('span');
      infoEl.classList.add('bit-info'); //Get Data

      var region = show.venue.region;

      if (show.venue.country != 'United States') {
        region = show.venue.country;
      }

      var venue = show.venue.name; //Conditional formating

      var string = "";

      if (show.venue.city) {
        string += '<h4 class="bit-city">' + show.venue.city;

        if (region) {
          string += ", " + region;
        }

        string += "</h4>";
      }

      if (venue) {
        string += '<h5 class="bit-venue">' + venue + "</h5>";
      }

      if (this.showLineup) {
        string += '<span class="bit-lineup">' + show.lineup + "</span>";
      }

      if (this.showLineup) {
        string += '<span class="bit-lineup">' + show.lineup + '</span>';
      }

      infoEl.innerHTML = string;
      return infoEl;
    }
  }, {
    key: "renderLinks",
    value: function renderLinks(show) {
      var linksEl = document.createElement('span');
      linksEl.classList.add('bit-links');
      var offers = show.offers;
      offers.forEach(function (offer) {
        var button = document.createElement('a');
        button.setAttribute('href', offer.url);
        button.setAttribute('target', '_blank');
        button.setAttribute('rel', 'nofollow');
        button.classList.add('button');
        button.classList.add('small');

        if (offer.status == 'sold out') {
          button.innerHTML = 'Sold Out';
          button.classList.add('sold-out');
        } else if (offer.status != 'available') {
          button.innerHTML = 'Info';
        } else {
          button.innerHTML = offer.type;
        }

        if (offer.type == 'VIP') {
          button.classList.add('link-vip');
        }

        linksEl.append(button);
      });

      if (offers.length == 0) {
        var infoButton = document.createElement('a');
        infoButton.setAttribute('href', show.url);
        infoButton.innerHTML = 'Info';
        infoButton.classList.add('button');
        infoButton.classList.add('arrow-after');
        infoButton.classList.add('small');
        linksEl.append(infoButton);
      }

      return linksEl;
    }
  }, {
    key: "renderShow",
    value: function renderShow(show) {
      var showEl = document.createElement('div');
      showEl.classList.add('bit-show');
      showEl.setAttribute('data-aos', 'fade-up');
      var date = this.renderDate(show);
      var info = this.renderInfo(show);
      var links = this.renderLinks(show);
      showEl.append(date, info, links);
      return showEl;
    }
  }, {
    key: "renderAllShows",
    value: function renderAllShows() {
      var _this2 = this;

      if (this.isRendered) return true; //CreateWrapper

      var wrapper = document.createElement('div');
      var extras = document.createElement('div');
      wrapper.classList.add('bit-wrapper');
      extras.classList.add('bit-wrapper');
      extras.classList.add('bit-extra'); //Loop through shows

      var counter = 0;
      this.shows.forEach(function (show) {
        var showItem = _this2.renderShow(show); //Counter


        counter++;

        if (counter <= _this2.props.limit) {
          wrapper.append(showItem);
        } else {
          extras.append(showItem);
        }
      });

      if (this.shows.length < this.props.limit) {
        this.showFallback();
      } else {
        this.expandButton.classList.remove('hidden');
      }

      this.loaded();
      this.el.prepend(wrapper, extras);
      this.el.querySelector('.loader').classList.add('hidden');
    }
  }, {
    key: "addLoadedClass",
    value: function addLoadedClass() {
      this.rendered = true;
      this.el.classList.add('shows-loaded');
    }
  }, {
    key: "setupExpand",
    value: function setupExpand() {
      var _this3 = this;

      this.extraWrapper = this.el.querySelector('.bit-extra');
      this.extraShows = this.extraWrapper.querySelectorAll('.bit-show');

      if (this.extraShows && this.extraShows.length > 0) {
        this.el.addEventListener('click', function (evt) {
          return _this3.clickListener(evt);
        });
      } else {
        this.expandButton.classList.add('hidden');
        this.el.classList.add('no-extras');
      }
    }
  }, {
    key: "toggleExpand",
    value: function toggleExpand() {
      if (this.expandButton.getAttribute('data-expand-bit') == 'expanded') {
        //collapse
        this.expandButton.innerHTML = this.expandButton.getAttribute('data-more-text');
        this.expandButton.setAttribute('data-expand-bit', '');
        this.extraWrapper.style.maxHeight = 0 + 'px';
      } else {
        this.expandButton.setAttribute('data-expand-bit', 'expanded');
        var heightTarget = this.extraShows[0].getBoundingClientRect().height * (this.extraShows.length * 1.75);
        this.extraWrapper.style.maxHeight = heightTarget + 50 + 'px';
        this.expandButton.innerHTML = this.expandButton.getAttribute('data-less-text');
      }

      window.dispatchEvent(new Event('resize'));
    }
  }, {
    key: "clickListener",
    value: function clickListener(event) {
      if (event.target == this.expandButton) {
        event.preventDefault();
        this.toggleExpand();
      }
    }
  }, {
    key: "showFallback",
    value: function showFallback() {
      this.el.classList.add('fallback-active');
      this.el.querySelector('.fallback').classList.remove('hidden');
    }
  }]);

  return Bit;
}();



/***/ }),

/***/ "./resources/assets/scripts/modules/countdown.js":
/*!*******************************************************!*\
  !*** ./resources/assets/scripts/modules/countdown.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Countdown; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var countdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! countdown */ "./node_modules/countdown/countdown.js");
/* harmony import */ var countdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(countdown__WEBPACK_IMPORTED_MODULE_2__);



var replacer = {
  and: '',
  ',': '',
  ' hours': '<span> hours</span>',
  ' hour': '<span> hour</span>',
  ' days': '<span> days</span>',
  ' day': '<span> day</span>',
  ' minutes': '<span> minutes</span>',
  ' minute': '<span> minute</span>',
  ' seconds': '<span> seconds</span>',
  ' second': '<span> second</span>',
  ' months': '<span> months</span>',
  ' month': '<span> month</span>'
};
var minimal = {
  and: '',
  ',': '',
  ' hours': '<span>:</span>',
  ' hour': '<span>:</span>',
  ' days': '<span>:</span>',
  ' day': '<span>:</span>',
  ' minutes': '<span>:</span>',
  ' minute': '<span>:</span>',
  ' seconds': '',
  ' second': '',
  ' months': '<span>:</span>',
  ' month': '<span>:</span>'
};
var nums = {
  '>0 ': '>00 ',
  '>1 ': '>01 ',
  '>2 ': '>02 ',
  '>3 ': '>03 ',
  '>4 ': '>04 ',
  '>5 ': '>05 ',
  '>6 ': '>06 ',
  '>7 ': '>07 ',
  '>8 ': '>08 ',
  '>9 ': '>09 ',
  '>0<': '>00<',
  '>1<': '>01<',
  '>2<': '>02<',
  '>3<': '>03<',
  '>4<': '>04<',
  '>5<': '>05<',
  '>6<': '>06<',
  '>7<': '>07<',
  '>8<': '>08<',
  '>9<': '>09<'
};

function replaceAll(str, mapObj) {
  var re = new RegExp(Object.keys(mapObj).join('|'), 'gi');
  return str.replace(re, function (matched) {
    return mapObj[matched.toLowerCase()];
  });
}

var Countdown = /*#__PURE__*/function () {
  function Countdown(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Countdown);

    this.interval;
    this.el = el;
    this.expire = this.el.getAttribute('data-datetime');
    this.target = this.el.querySelector('[data-countdown-target]');
    this.step = this.countdownStep.bind(this);
    this.init();
    this.style = this.el.getAttribute('data-style');
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Countdown, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.loaded();
      this.step();
      this.interval = setInterval(function () {
        _this.step();
      }, 1000);
    }
  }, {
    key: "countdownStep",
    value: function countdownStep() {
      this.countdown = countdown__WEBPACK_IMPORTED_MODULE_2___default()(new Date(), new Date(this.expire), null, 4);

      if (this.countdown.value < 0) {
        this.expired();
        return true;
      } else {
        var countdownText = this.countdown.toHTML('div').toString();
        var finalCountdown = replaceAll(countdownText, minimal);

        if (this.style == 'major') {
          finalCountdown = replaceAll(countdownText, replacer);
        }

        this.target.innerHTML = replaceAll(finalCountdown, nums);
      }
    }
  }, {
    key: "expired",
    value: function expired() {
      this.el.classList.remove('counting');
      this.el.classList.add('finished');
      this.el.querySelector('[data-finished-content]').classList.remove('hidden');
      this.el.querySelector('[data-counting-content]').classList.add('hidden');
    }
  }, {
    key: "loaded",
    value: function loaded() {
      this.el.classList.add('loaded');
      this.el.classList.add('counting');
      this.el.querySelector('[data-finished-content]').classList.add('hidden');
      this.el.querySelector('[data-counting-content]').classList.remove('hidden');
    }
  }]);

  return Countdown;
}();



/***/ }),

/***/ "./resources/assets/scripts/modules/downloader.js":
/*!********************************************************!*\
  !*** ./resources/assets/scripts/modules/downloader.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Downloader; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Downloader = /*#__PURE__*/function () {
  function Downloader(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Downloader);

    this.el = el;
    this.reset = this.resetProgress.bind(this);
    this.progress = this.addProgress.bind(this);
    this.ticker;
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Downloader, [{
    key: "init",
    value: function init() {
      var button = this.el.querySelector('[data-progress-button]');
      button.addEventListener('click', this.progress);
    }
  }, {
    key: "resetProgress",
    value: function resetProgress() {
      this.el.classList.remove('progressed');
      clearTimeout(this.ticker);
      this.el.parentNode.removeEventListener('click', this.reset);
    }
  }, {
    key: "addProgress",
    value: function addProgress() {
      var _this = this;

      this.el.classList.add('progressed');
      this.ticker = setTimeout(function () {
        _this.reset();
      }, 10000);
      setTimeout(function () {
        _this.el.parentNode.addEventListener('click', function (e) {
          if (!e.target.classList.contains('download-button')) {
            _this.reset();
          }
        });
      }, 400);
    }
  }]);

  return Downloader;
}();



/***/ }),

/***/ "./resources/assets/scripts/modules/footer-drawer.js":
/*!***********************************************************!*\
  !*** ./resources/assets/scripts/modules/footer-drawer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterDrawer; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");




var FooterDrawer = /*#__PURE__*/function () {
  function FooterDrawer(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FooterDrawer);

    this.el = el;
    this.button = document.querySelector("[data-open-footer-drawer]");
    this.closers = document.querySelectorAll('[data-close-footer-drawer]');
    this.open = this.openDrawer.bind(this);
    this.close = this.closeDrawer.bind(this);
    this.off = this.clickOff.bind(this);
    this.setupListeners();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FooterDrawer, [{
    key: "setupListeners",
    value: function setupListeners() {
      var _this = this;

      this.button.addEventListener('click', this.open);
      this.closers.forEach(function (closer) {
        closer.addEventListener('click', _this.close);
      });
    }
  }, {
    key: "clickOff",
    value: function clickOff(event) {
      console.log(event.target.closest('.footer-drawer'));

      if (event.target.closest('.footer-drawer') == null) {
        this.close();
      }
    }
  }, {
    key: "openDrawer",
    value: function openDrawer() {
      var _this2 = this;

      this.el.classList.add('open');
      console.log('opening Drawer');
      gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to('.footer-drawer', {
        y: '-100%',
        duration: 0.8,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeInOut
      });
      setTimeout(function () {
        window.addEventListener('click', _this2.off);
      }, 300);
    }
  }, {
    key: "closeDrawer",
    value: function closeDrawer() {
      this.el.classList.add('open');
      gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].to('.footer-drawer', {
        y: '1%',
        duration: 0.8,
        ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeInOut
      });
      window.removeEventListener('click', this.off);
    }
  }]);

  return FooterDrawer;
}();



/***/ }),

/***/ "./resources/assets/scripts/modules/front-slider.js":
/*!**********************************************************!*\
  !*** ./resources/assets/scripts/modules/front-slider.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_content_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/content-slider */ "./resources/assets/scripts/components/content-slider.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");







function _createSuper(Derived) {
  return function () {
    var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}



var plugins = [gsap__WEBPACK_IMPORTED_MODULE_7__["CSSPlugin"]];

if (!plugins) {
  console.log('Error loading plugins!');
}

var vidOnscreen = new Event('onscreen', {
  bubbles: true,
  cancelable: false
});
var vidOffscreen = new Event('offscreen', {
  bubbles: true,
  cancelable: false
});
var colorAccent = '#a61d2a';
var colorBodyText = '#0a0a0a';
var colorBody = '#f2efef';

var FrontSlider = /*#__PURE__*/function (_contentSlider) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(FrontSlider, _contentSlider);

  var _super = _createSuper(FrontSlider);

  function FrontSlider(el) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, FrontSlider);

    _this = _super.call(this, el, el);
    _this.change = _this.handleChange.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));

    _this.swiper.on('slideChange', _this.change);

    _this.swiper.on('init', _this.change);

    _this.swiper.params.autoplay = {
      delay: 14000
    };

    _this.swiper.autoplay.start();

    window.addEventListener('barbaFinish', _this.change);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(FrontSlider, [{
    key: "handleChange",
    value: function handleChange() {
      var activeSlide = this.swiper.slides[this.swiper.activeIndex];

      if (activeSlide) {
        var activeIsVideo = activeSlide.classList.contains('type--video');
      }

      if (activeSlide && activeIsVideo) {
        gsap__WEBPACK_IMPORTED_MODULE_7__["gsap"].to('body', 1, {
          '--color-text': colorBody,
          '--color-accent': colorAccent,
          '--color-background': colorBodyText
        });
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_7__["gsap"].to('body', 1, {
          '--color-text': colorBodyText,
          '--color-accent': colorAccent,
          '--color-background': colorBody
        });
      }

      if (activeSlide && activeSlide.querySelector('[data-module="vidbox"]')) {
        setTimeout(function () {
          activeSlide.querySelector('[data-module="vidbox"]').dispatchEvent(vidOnscreen);
        }, 100);
      }

      if (this.swiper.slides[this.swiper.previousIndex] && this.swiper.slides[this.swiper.previousIndex].querySelector('[data-module="vidbox"]')) {
        this.swiper.slides[this.swiper.previousIndex].querySelector('[data-module="vidbox"]').dispatchEvent(vidOffscreen);
      }
    }
  }]);

  return FrontSlider;
}(_components_content_slider__WEBPACK_IMPORTED_MODULE_6__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (FrontSlider);

/***/ }),

/***/ "./resources/assets/scripts/modules/gallery-timeline.js":
/*!**************************************************************!*\
  !*** ./resources/assets/scripts/modules/gallery-timeline.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GalleryTimeline; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");



gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap__WEBPACK_IMPORTED_MODULE_2__["CSSPlugin"]);

var GalleryTimeline = /*#__PURE__*/function () {
  function GalleryTimeline(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, GalleryTimeline);

    this.el = el;
    this.initiated = false;
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(GalleryTimeline, [{
    key: "init",
    value: function init() {
      $('.gallery-image').each(function (i, child) {
        var tl = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]({
          repeat: -1,
          yoyo: true
        });
        var dur = Math.random() * 100 + 50;
        var direction = '50%';

        if (i % 2 > 0) {
          direction = '-50%';
        }

        tl.to(child, dur, {
          x: direction,
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power0"].easeInOut
        });
      });
    }
  }]);

  return GalleryTimeline;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./resources/assets/scripts/modules/gallery.js":
/*!*****************************************************!*\
  !*** ./resources/assets/scripts/modules/gallery.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gallery; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var Gallery = /*#__PURE__*/function () {
  function Gallery(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Gallery);

    this.el = el;
    this.ticker;
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Gallery, [{
    key: "init",
    value: function init() {}
  }]);

  return Gallery;
}();



/***/ }),

/***/ "./resources/assets/scripts/modules/header.js":
/*!****************************************************!*\
  !*** ./resources/assets/scripts/modules/header.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! headroom.js */ "./node_modules/headroom.js/dist/headroom.js");
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_2__);




var Header = /*#__PURE__*/function () {
  function Header(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Header);

    this.el = el;
    this.main = document.getElementById('MainContent');
    this.resize = this.handleSize.bind(this);
    this.showMenuBg = this.showBg.bind(this);
    this.hideMenuBg = this.hideBg.bind(this);
    this.root = document.documentElement;
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Header, [{
    key: "init",
    value: function init() {
      this.el.classList.add('js');
      this.resize();
      this.initMenu();
      window.addEventListener('resize', this.resize);
      window.addEventListener('load', this.resize);
    }
  }, {
    key: "handleSize",
    value: function handleSize() {
      var ht = this.el.offsetHeight;
      this.root.style.setProperty("--header-height", ht + "px");
      document.body.style.paddingTop = ht + "px";
      this.main.style.marginTop = -ht + 'px';
    }
  }, {
    key: "initMenu",
    value: function initMenu() {
      this.setupMenuListeners();
      this.setupMobileMenu();
      this.setupHeadroom();
    }
  }, {
    key: "setupHeadroom",
    value: function setupHeadroom() {
      this.headroom = new headroom_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.el, {
        "offset": 205,
        "tolerance": 5
      }).init();
    }
  }, {
    key: "setupMobileMenu",
    value: function setupMobileMenu() {
      this.mobileToggle = this.el.querySelector('[data-mobile-menu-toggle]');
      this.mobileMenu = this.el.querySelector('[data-mobile-menu]');

      if (this.mobileToggle && this.mobileMenu) {
        this.openIcon = this.el.querySelector('[data-open]');
        this.closeIcon = this.el.querySelector('[data-close]');
        var self = this;
        this.mobileToggle.addEventListener('click', function () {
          document.body.classList.toggle('mobileNavOpen');

          if (document.body.classList.contains('mobileNavOpen')) {
            self.closeIcon.setAttribute('aria-hidden', false);
            self.openIcon.setAttribute('aria-hidden', true);
          } else {
            self.closeIcon.setAttribute("aria-hidden", true);
            self.openIcon.setAttribute("aria-hidden", false);
          }
        });
      }
    }
  }, {
    key: "showBg",
    value: function showBg() {
      this.menubg.classList.add('bgVisible');
      this.menubg.classList.remove('bgHidden');
    }
  }, {
    key: "hideBg",
    value: function hideBg() {
      this.menubg.classList.add('bgHidden');
      this.menubg.classList.remove('bgVisible');
    }
  }, {
    key: "setupMenuListeners",
    value: function setupMenuListeners() {
      var self = this;
      self.menubg = document.querySelector('.header-bg');
      this.submenus = this.el.querySelectorAll('.menu-item-has-children');
      this.submenus.forEach(function (submenu) {
        submenu.addEventListener('mouseenter', self.showMenuBg);
        submenu.addEventListener('mouseleave', self.hideMenuBg);
        var submenuLink = submenu.firstElementChild;
        submenuLink.addEventListener('click', function (e) {
          console.log(e.target.closest('.submenu-toggled'));

          if (!e.target.closest('.submenu-toggled')) {
            e.preventDefault();
            self.openSubMenu(submenu);
            self.showBg();
          }
        });
        submenuLink.addEventListener('focus', function () {
          self.openSubMenu(submenu);
        });
        window.addEventListener('scroll', self.closeSubMenus);
      });
    }
  }, {
    key: "openSubMenu",
    value: function openSubMenu(el) {
      var self = this;
      setTimeout(function () {
        el.classList.add('submenu-toggled');
        window.addEventListener('click', self.closeSubMenus);
      }, 200);
    }
  }, {
    key: "closeSubMenus",
    value: function closeSubMenus() {
      //Lazy jquery
      $('.submenu-toggled').removeClass('submenu-toggled');
    }
  }, {
    key: "clickOff",
    value: function clickOff(el) {
      window.addEventListener('click', function (e) {
        if (!el.contains(e.target) && el == e.target) {
          return closeSubMenus(el);
        }
      });
    }
  }]);

  return Header;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./resources/assets/scripts/modules/mailchimp.js":
/*!*******************************************************!*\
  !*** ./resources/assets/scripts/modules/mailchimp.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mailchimp; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var basiclightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! basiclightbox */ "./node_modules/basiclightbox/dist/basicLightbox.min.js");
/* harmony import */ var basiclightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(basiclightbox__WEBPACK_IMPORTED_MODULE_2__);




var Mailchimp = /*#__PURE__*/function () {
  function Mailchimp(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Mailchimp);

    this.el = el;
    this.content = this.el.querySelector('[data-signup-form]');
    this.close = this.closePopup.bind(this);
    this.open = this.openPopup.bind(this);
    this.resize = this.checkSize.bind(this);
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Mailchimp, [{
    key: "init",
    value: function init() {
      this.findButtons();
      this.addListeners();
    }
  }, {
    key: "createPopup",
    value: function createPopup() {
      if (!this.popup) {
        this.popup = basiclightbox__WEBPACK_IMPORTED_MODULE_2__["create"](this.content);
      }
    }
  }, {
    key: "checkSize",
    value: function checkSize() {
      if (window.width >= 820) {
        this.close();
      }
    }
  }, {
    key: "findButtons",
    value: function findButtons() {
      this.openers = this.el.querySelectorAll('[data-open]');
      this.closers = this.el.querySelectorAll('[data-close]');
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this = this;

      this.openers.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();

          _this.open();
        });
      });
      this.closers.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();

          _this.close();
        });
      });
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      this.popup.close();
    }
  }, {
    key: "openPopup",
    value: function openPopup() {
      if (!this.popup) {
        this.createPopup();
      }

      this.popup.show();
    }
  }]);

  return Mailchimp;
}();



/***/ }),

/***/ "./resources/assets/scripts/modules/mobile-menu.js":
/*!*********************************************************!*\
  !*** ./resources/assets/scripts/modules/mobile-menu.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MobileMenu; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);



var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, MobileMenu);

    this.el = el;
    this.close = this.closeMenu.bind(this);
    this.open = this.openMenu.bind(this);
    this.resize = this.checkSize.bind(this);
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(MobileMenu, [{
    key: "init",
    value: function init() {
      this.findButtons();
      this.addListeners();
    }
  }, {
    key: "checkSize",
    value: function checkSize() {
      if (window.width >= 820) {
        this.close();
      }
    }
  }, {
    key: "findButtons",
    value: function findButtons() {
      this.openers = this.el.querySelectorAll('[data-open="mobile-menu"]');
      this.closers = this.el.querySelectorAll('[data-close="mobile-menu"]');
      this.menuButtons = this.el.querySelectorAll('.menu-item a');
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this = this;

      this.openers.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();

          _this.open();
        });
      });
      this.closers.forEach(function (el) {
        el.addEventListener('click', function (e) {
          e.preventDefault();

          _this.close();
        });
      });
      this.menuButtons.forEach(function (el) {
        el.addEventListener('click', function () {
          _this.close();
        });
      });
      window.addEventListener('resize', this.resize);
    }
  }, {
    key: "closeMenu",
    value: function closeMenu() {
      this.el.classList.remove('open');
    }
  }, {
    key: "openMenu",
    value: function openMenu() {
      this.el.classList.add('open');
    }
  }]);

  return MobileMenu;
}();



/***/ }),

/***/ "./resources/assets/scripts/modules/particle-header.js":
/*!*************************************************************!*\
  !*** ./resources/assets/scripts/modules/particle-header.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParticleHeader; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);


var canvas = document.getElementById("scene"),
    ctx = canvas.getContext("2d"),
    particles = [],
    amount = 0,
    mouse = {
  x: 0,
  y: 0
},
    radius = 1;
var colors = ["#ffffff", "#ffffff", "#eafaff", "#fffaea", "#ffebfa"];
var copy = document.getElementById("copy");
var ww = canvas.width = window.innerWidth;
var wh = canvas.height = window.innerHeight;

if (ww < 800) {
  radius = 0.7;
}

var radiusModifier = Math.min(1.6, Math.max(1 / 650 * ww, 0.95));
var radiusMin = Math.min(1.6, Math.max(1 / 650 * ww, 0.95));

function Particle(x, y) {
  this.dest = {
    x: x,
    y: y
  };
  this.x = Math.random() * ww;
  this.y = Math.random() * wh;
  this.r = Math.random() * radiusModifier + radiusMin;
  this.vx = (Math.random() - 0.5) * 10;
  this.vy = (Math.random() - 0.5) * 10;
  this.accX = 0;
  this.accY = 0;
  this.friction = Math.random() * 0.05 + 0.94;
  this.color = colors[Math.floor(Math.random() * 6)];
}

Particle.prototype.render = function () {
  this.distX = this.dest.x - this.x;
  this.distY = this.dest.y - this.y;
  this.accX = this.distX / 600;
  this.accY = this.distY / 600;
  this.vx += this.accX;
  this.vy += this.accY;
  this.vx *= this.friction;
  this.vy *= this.friction;
  this.modX = Math.min(Math.max(Math.pow(Math.abs(this.distX) / 0.65 * ww / 100000, 0.05) * 0.9, 0.95), 1.25);
  this.modY = Math.min(Math.max(Math.pow(Math.abs(this.distY) / 0.65 * ww / 100000, 0.05) * 0.9, 0.95), 1.25);
  this.vx *= this.modX;
  this.vy *= this.modY;
  this.x += this.vx;
  this.y += this.vy;
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
  ctx.fill();
  var a = this.x - mouse.x;
  var b = this.y - mouse.y;
  var distance = Math.sqrt(a * a + b * b);

  if (distance < radius * 70) {
    this.accX = (this.x - mouse.x) / 100;
    this.accY = (this.y - mouse.y) / 100;
    this.vx += this.accX;
    this.vy += this.accY;
  }
};

function onMouseMove(e) {
  mouse.x = e.clientX - canvas.getBoundingClientRect().left;
  mouse.y = e.clientY - canvas.getBoundingClientRect().top;
}

function onTouchMove(e) {
  if (e.touches.length > 0) {
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
  }
}

function onTouchEnd(e) {
  mouse.x = -9999;
  mouse.y = -9999;
}

function initScene() {
  ww = canvas.width = window.innerWidth;
  wh = canvas.height = window.innerHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "bold " + ww / 8 + "px rubik";

  if (ww < 800) {
    ctx.font = "bold " + ww / 4.9 + "px rubik";
  }

  ctx.textAlign = "center";
  ctx.fillText(copy.textContent.toUpperCase(), ww / 2, wh / 2);
  var data = ctx.getImageData(0, 0, ww, wh).data;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalCompositeOperation = "screen";
  particles = [];

  for (var i = 0; i < ww; i += Math.round(ww / 180)) {
    for (var j = 0; j < wh; j += Math.round(ww / 180)) {
      if (data[(i + j * ww) * 4 + 3] > 180) {
        particles.push(new Particle(i, j));
      }
    }
  }

  amount = particles.length;
}

function render(a) {
  requestAnimationFrame(render);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (var i = 0; i < amount; i++) {
    particles[i].render();
  }
}

var ParticleHeader = /*#__PURE__*/function () {
  function ParticleHeader(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ParticleHeader);

    this.el = el;
    this.run = this.runScene.bind(this);
    this.initiated = false;
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(ParticleHeader, [{
    key: "runScene",
    value: function runScene(observed) {
      if (observed[0].isIntersecting == true) {
        if (!this.initiated) {
          initScene();
          this.initiated = true;
          requestAnimationFrame(render);
        }

        window.addEventListener("resize", initScene);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("touchmove", onTouchMove);
      } else {
        window.removeEventListener("resize", initScene);
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("touchmove", onTouchMove);
      }
    }
  }, {
    key: "init",
    value: function init() {
      this.observer = new IntersectionObserver(this.run, {
        threshold: 0.6
      });
      this.observer.observe(this.el);
    }
  }]);

  return ParticleHeader;
}();



/***/ }),

/***/ "./resources/assets/scripts/modules/release-slider.js":
/*!************************************************************!*\
  !*** ./resources/assets/scripts/modules/release-slider.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_content_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/content-slider */ "./resources/assets/scripts/components/content-slider.js");





function _createSuper(Derived) {
  return function () {
    var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}



var releaseSlider = /*#__PURE__*/function (_contentSlider) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(releaseSlider, _contentSlider);

  var _super = _createSuper(releaseSlider);

  function releaseSlider(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, releaseSlider);

    return _super.call(this, el, el);
  }

  return releaseSlider;
}(_components_content_slider__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (releaseSlider);

/***/ }),

/***/ "./resources/assets/scripts/modules/signup-popup.js":
/*!**********************************************************!*\
  !*** ./resources/assets/scripts/modules/signup-popup.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignupPopup; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var basiclightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! basiclightbox */ "./node_modules/basiclightbox/dist/basicLightbox.min.js");
/* harmony import */ var basiclightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(basiclightbox__WEBPACK_IMPORTED_MODULE_2__);




var SignupPopup = /*#__PURE__*/function () {
  function SignupPopup(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SignupPopup);

    this.el = el;
    this.content = this.el.querySelector("[data-signup-form]");
    this.close = this.closePopup.bind(this);
    this.open = this.openPopup.bind(this);
    this.resize = this.checkSize.bind(this);
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SignupPopup, [{
    key: "init",
    value: function init() {
      this.findButtons();
      this.addListeners();
    }
  }, {
    key: "createPopup",
    value: function createPopup() {
      if (!this.popup) {
        this.popup = basiclightbox__WEBPACK_IMPORTED_MODULE_2__["create"](this.content);
      }
    }
  }, {
    key: "checkSize",
    value: function checkSize() {
      if (window.width >= 820) {
        this.close();
      }
    }
  }, {
    key: "findButtons",
    value: function findButtons() {
      this.openers = document.querySelectorAll('[data-signup-popup-open]');
      this.closers = this.el.querySelectorAll("[data-close]");
    }
  }, {
    key: "addListeners",
    value: function addListeners() {
      var _this = this;

      this.openers.forEach(function (el) {
        el.addEventListener("click", function (e) {
          e.preventDefault();

          _this.open();
        });
      });
      this.closers.forEach(function (el) {
        el.addEventListener("click", function (e) {
          e.preventDefault();

          _this.close();
        });
      });
      window.addEventListener("resize", this.resize);
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      this.popup.close();
    }
  }, {
    key: "openPopup",
    value: function openPopup() {
      if (!this.popup) {
        this.createPopup();
      }

      this.popup.show();
    }
  }]);

  return SignupPopup;
}();



/***/ }),

/***/ "./resources/assets/scripts/modules/vidbox.js":
/*!****************************************************!*\
  !*** ./resources/assets/scripts/modules/vidbox.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VidBox; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var basiclightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! basiclightbox */ "./node_modules/basiclightbox/dist/basicLightbox.min.js");
/* harmony import */ var basiclightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(basiclightbox__WEBPACK_IMPORTED_MODULE_2__);




function YouTubeGetID(url) {
  var ID = '';
  url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);

  if (url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  } else {
    ID = url;
  }

  return ID;
}

function vimeoGetID() {}

var VidBox = /*#__PURE__*/function () {
  function VidBox(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, VidBox);

    console.log("Creating a vidbox");
    this.el = el;
    this.target = this.el.querySelector('[data-vidbox-video]');
    this.type = this.checkForType();
    this.play = this.el.getAttribute('data-play');
    this.player = {};
    this.persist = 0;
    this.checkTimer = 0; //Check if lightbox is appropriate here

    this.playMyVideo = this.startVideo.bind(this);
    this.pauseMyVideo = this.stopVidbox.bind(this);
    this.initLightbox();
    this.createVideo();
    this.addStartListener();
    this.addDestroyListener();

    if (this.play > 0) {
      this.playMyVideo();
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(VidBox, [{
    key: "addStartListener",
    value: function addStartListener() {
      var self = this;
      this.el.addEventListener('onscreen', self.playMyVideo);
    }
  }, {
    key: "addDestroyListener",
    value: function addDestroyListener() {
      var self = this;
      this.el.addEventListener('offscreen', self.pauseMyVideo);
    }
  }, {
    key: "initFunction",
    value: function initFunction() {
      this.startVideo();
    }
  }, {
    key: "destroyFunction",
    value: function destroyFunction() {
      this.destroyVideo();
    }
  }, {
    key: "createVideo",
    value: function createVideo() {
      if (this.type == 'youtube') {
        this.createYoutube();
      } else if (this.type == 'vimeo') {
        this.createVimeo();
      }
    }
  }, {
    key: "startVideo",
    value: function startVideo() {
      var _this = this;

      if (this.player && typeof this.player.playVideo == 'function') {
        clearTimeout(this.persist);
        this.play = true;
        this.YTReady();
      } else {
        this.persist = setTimeout(function () {
          _this.playMyVideo();
        }, 200);
      }
    }
  }, {
    key: "stopVidbox",
    value: function stopVidbox() {
      clearTimeout(this.persist);

      if (this.player && typeof this.player.stopVideo == 'function') {
        if (this.player.getPlayerState == 1) {
          this.player.stopVideo();
        } // this.player.destroy();


        clearInterval(this.checkTimer);
        clearInterval(this.persist);
      }
    }
  }, {
    key: "createVimeo",
    value: function createVimeo() {//Anything
    }
  }, {
    key: "checkForType",
    value: function checkForType() {
      var rawType = this.el.getAttribute('data-vidbox-type');
      console.log(rawType);

      if (rawType == 'URL') {
        var vidId = this.target.getAttribute('data-vidbox-video');
        var realId = '';

        if (vidId.indexOf('//yout') > 0 || vidId.indexOf('.yout') > 0) {
          realId = YouTubeGetID(vidId);
          rawType = 'youtube';
        } else if (vidId.indexOf('//vim') > 0 || vidId.indexOf('.vim') > 0) {
          realId = vimeoGetID(vidId);
          rawType = 'vimeo';
        }
      }

      if (realId) {
        this.vidId = realId;
        return rawType;
      } else {
        return false;
      }
    }
  }, {
    key: "initLightbox",
    value: function initLightbox() {
      if (!this.lightbox) {
        if (this.type == 'youtube') {
          this.lightbox = basiclightbox__WEBPACK_IMPORTED_MODULE_2__["create"]('<div class="iframe-wrap"><iframe src="https://www.youtube.com/embed/' + this.vidId + '?autoplay=1&rel=0" allowfullscreen  playsinline muted frameborder="0" frameborder="0" ></iframe></div>');
          this.lightboxWatchers();
        } else if (this.type == 'vimeo') {
          this.lightbox = basiclightbox__WEBPACK_IMPORTED_MODULE_2__["create"]('<div class="iframe-wrap"><iframe src="https://www.youtube.com/embed/' + this.vidId + '?autoplay=1&rel=0" allowfullscreen playsinline muted  frameborder="0" frameborder="0" ></iframe></div>');
          this.lightboxWatchers();
        } else {
          this.lightbox = false;
        }
      }
    }
  }, {
    key: "lightboxWatchers",
    value: function lightboxWatchers() {
      var self = this;
      var buttons = self.el.parentNode.parentNode.querySelectorAll('[data-lightbox-button]');
      buttons.forEach(function (button) {
        button.addEventListener('click', function (e) {
          e.preventDefault();
          self.lightbox.show();
        });
      });
    }
  }, {
    key: "createYoutubePlayer",
    value: function createYoutubePlayer() {
      this.player = new window.YT.Player(this.target, {
        height: '600',
        width: '1200',
        videoId: this.vidId,
        playerVars: {
          rel: 0,
          showinfo: 0,
          modestBranding: 1,
          loop: 1,
          playsinline: 1,
          enablejsapi: 1,
          muted: 1,
          // disablekb: 1,
          controls: 0
        },
        events: {
          onReady: this.YTReady,
          onStateChange: this.YTChange
        }
      });
    }
  }, {
    key: "createYoutube",
    value: function createYoutube() {
      this.YTCreate = this.createYoutubePlayer.bind(this);
      this.YTReady = this.onPlayerReady.bind(this);
      this.YTChange = this.onPlayerStateChange.bind(this);
      this.player = false;
      var self = this;

      if (!document.getElementById('youtubeIframeApi')) {
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        tag.id = 'youtubeIframeApi';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        window.onYoutubeIframeAPIReady = {};
      }

      self.playerWrap = this.el;
      self.start = 0;

      if (self.el.getAttribute('data-start-time') > 0) {
        self.start = Math.max(0, self.el.getAttribute('data-start-time'));
      }

      this.youtubeLoop(this.YTCreate);
    }
  }, {
    key: "youtubeLoop",
    value: function youtubeLoop(func) {
      var _this2 = this;

      if (window.YT && window.YT.loaded == 1) {
        return func();
      } else {
        setTimeout(function () {
          _this2.youtubeLoop(func);
        }, 200);
      }
    }
  }, {
    key: "playCheck",
    value: function playCheck() {
      if (!this.player) return false;
      this.state = this.player.getPlayerState();

      if (this.checkCount > 100 && this.state != 1) {
        this.playerWrap.classList.add('use-gif');

        if (window.innerWidth <= 800) {
          this.playerWrap.classList.add('use-gif');
          this.playerWrap.classList.add('small');
        }

        clearInterval(this.checkTimer);
        this.checkTimer = 0;
        this.checking = false;
        return false;
      }

      if (this.state == 5 || this.state == 3 || this.state == -1) {
        this.checkCount++;

        if (this.start > 0) {
          this.player.seekTo(this.start);
        }

        this.player.playVideo();
      }

      if (this.state == 1) {
        this.playerWrap.classList.add('use-vid');
        this.playerWrap.classList.remove('use-gif');
        clearInterval(this.checkTimer);
        this.checkTimer = 0;
        this.checking = false;
        return true;
      }
    }
  }, {
    key: "checkIfPlaying",
    value: function checkIfPlaying() {
      var _this3 = this;

      if (this.checking != true) {
        this.checking = true;
        this.checkCount = 0;

        if (this.state == 1) {
          clearInterval(this.checkTimer);
        } else {
          this.checkTimer = setInterval(function () {
            _this3.playCheck();
          }, 200);
        }
      } else {
        return false;
      }
    }
  }, {
    key: "onPlayerReady",
    value: function onPlayerReady() {
      if (this.play == true) {
        this.player.playVideo();
        this.player.mute();
        this.checkIfPlaying();
      }
    }
  }, {
    key: "onPlayerStateChange",
    value: function onPlayerStateChange(event) {
      if (event.data == window.YT.PlayerState.ENDED) {
        this.player.playVideo();
      }
    }
  }]);

  return VidBox;
}();



/***/ }),

/***/ "./resources/assets/scripts/modules/video-slider.js":
/*!**********************************************************!*\
  !*** ./resources/assets/scripts/modules/video-slider.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_content_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/content-slider */ "./resources/assets/scripts/components/content-slider.js");





function _createSuper(Derived) {
  return function () {
    var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}


var vidOnscreen = new Event('onscreen', {
  'bubbles': true,
  'cancelable': false
});
var vidOffscreen = new Event('offscreen', {
  'bubbles': true,
  'cancelable': false
});

var videoSwiper = /*#__PURE__*/function (_contentSlider) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_1___default()(videoSwiper, _contentSlider);

  var _super = _createSuper(videoSwiper);

  function videoSwiper(el) {
    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, videoSwiper);

    _this = _super.call(this, el, el);

    _this.swiper.on('slideChange', function () {
      //This is now the swiper instance
      _this.swiper.slides[_this.swiper.previousIndex].querySelector('[data-module="vidbox"]').dispatchEvent(vidOffscreen);

      setTimeout(function () {
        _this.swiper.slides[_this.swiper.activeIndex].querySelector('[data-module="vidbox"]').dispatchEvent(vidOnscreen);
      }, 100);
    });

    _this.swiper.on('init', function () {
      //This is now the swiper instance
      if (_this.swiper.slides[_this.swiper.activeIndex]) {
        _this.swiper.slides[_this.swiper.activeIndex].querySelector('[data-module="vidbox"]').dispatchEvent(vidOnscreen);
      }
    });

    window.addEventListener('barbaFinish', function () {
      _this.swiper.slides[_this.swiper.activeIndex].querySelector('[data-module="vidbox"]').dispatchEvent(vidOnscreen);
    });
    return _this;
  }

  return videoSwiper;
}(_components_content_slider__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (videoSwiper);

/***/ }),

/***/ "./resources/assets/styles/app.scss":
/*!******************************************!*\
  !*** ./resources/assets/styles/app.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/assets/styles/editor.scss":
/*!*********************************************!*\
  !*** ./resources/assets/styles/editor.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!************************************************************************************************************************!*\
  !*** multi ./resources/assets/scripts/app.js ./resources/assets/styles/app.scss ./resources/assets/styles/editor.scss ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/assets/scripts/app.js */"./resources/assets/scripts/app.js");
__webpack_require__(/*! /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/assets/styles/app.scss */"./resources/assets/styles/app.scss");
module.exports = __webpack_require__(/*! /Users/evan/Local Sites/fygfoundation/app/bedrock/web/app/themes/fygfoundation/resources/assets/styles/editor.scss */"./resources/assets/styles/editor.scss");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!**********************************************!*\
  !*** external {"this":"regeneratorRuntime"} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["regeneratorRuntime"]; }());

/***/ }),

/***/ "jquery":
/*!**********************************!*\
  !*** external {"this":"jQuery"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["jQuery"]; }());

/***/ })

},[[0,"/scripts/manifest","/scripts/vendor"]]]);
//# sourceMappingURL=app.js.map