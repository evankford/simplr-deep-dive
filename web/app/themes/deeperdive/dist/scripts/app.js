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
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lazysizes/plugins/parent-fit/ls.parent-fit */ "./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js");
/* harmony import */ var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_gsapUtilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/gsapUtilities */ "./resources/assets/scripts/components/gsapUtilities.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _thehonestscoop_findandreplacedomtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @thehonestscoop/findandreplacedomtext */ "./node_modules/@thehonestscoop/findandreplacedomtext/src/findAndReplaceDOMText.js");
/* harmony import */ var _thehonestscoop_findandreplacedomtext__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_thehonestscoop_findandreplacedomtext__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var gsap_all__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! gsap/all */ "./node_modules/gsap/all.js");
/* harmony import */ var _components_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/DrawSVGPlugin */ "./resources/assets/scripts/components/DrawSVGPlugin.js");


/**
 * External Dependencies
 */










gsap_all__WEBPACK_IMPORTED_MODULE_9__["gsap"].registerPlugin(_components_DrawSVGPlugin__WEBPACK_IMPORTED_MODULE_10__["DrawSVGPlugin"]);
object_fit_images__WEBPACK_IMPORTED_MODULE_7___default()();
var replacers = [{
  find: '®',
  wrap: 'sup'
}];
$(document).ready(function () {
  var authWallEl = document.querySelector("[data-module=authwall]");

  var Authwall = __webpack_require__(/*! ./modules/authwall */ "./resources/assets/scripts/modules/authwall.js")["default"];

  new Authwall(authWallEl);
});

var App = /*#__PURE__*/function () {
  function App() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "init",
    value: function init() {
      this.initModules();
      this.findAndReplaceText();
      this.setupScenes();
      this.megaTL = new gsap_all__WEBPACK_IMPORTED_MODULE_9__["TimelineMax"]();
    }
  }, {
    key: "setupScenes",
    value: function setupScenes() {
      this.scenes = document.querySelectorAll('[data-scene]');
      this.scenes.forEach(function (scene) {
        console.log(scene);
        var animator = new _components_gsapUtilities__WEBPACK_IMPORTED_MODULE_6__["default"](scene);
        console.log(animator);
      });
      this.checkExpanded();
      this.checkChat();
      this.checkIntro();
    }
  }, {
    key: "checkIntro",
    value: function checkIntro() {
      var _this = this;

      this.intro = document.querySelector('[data-scene="intro"]');

      if (this.intro) {
        this.introButton = this.intro.querySelector('[data-button-scene]');

        if (this.introButton) {
          this.introButton.addEventListener('click', function () {
            _this.intro.setAttribute('data-status', 'post');

            setTimeout(function () {
              _this.chat.setAttribute('data-status', 'current');

              _this.chat.dispatchEvent(new Event('doChat'));

              _this.intro.classList.add('hidden');
            }, 1000);
          });
        }
      } else {}
    }
  }, {
    key: "checkChat",
    value: function checkChat() {
      this.chat = document.querySelector('[data-scene="chat"]');
      this.convo = document;

      if (this.chat) {
        this.chat.addEventListener("doChat", this.doChat);
      }
    }
  }, {
    key: "doChat",
    value: function doChat() {
      var chatTL = new gsap_all__WEBPACK_IMPORTED_MODULE_9__["TimelineMax"]();
      var chatOuter = this.chat.querySelector('.chat-outer');

      if (!chatOuter.classList.contains('loaded')) {
        chatOuter.classList.add('loaded');
        var chatInner = chatOuter.querySelector(".chat-inner");
        var chatHt = chatInner.getBoundingClientRect().height;
        var chatTop = chatInner.getBoundingClientRect().top;
        var chats = chatInner.children;
        var offsets = [];
        var _offsetsOuter = [];
        chats.forEach(function (el) {
          offsets.push(((1 - (el.getBoundingClientRect().top - chatTop) / chatHt + 0.02) * 100).toFixed(4) + "%");

          _offsetsOuter.push((-(1 - (el.getBoundingClientRect().top - chatTop) / chatHt) * 50).toFixed(4) + "%");
        });
      }

      console.log(offsetsOuter);
    }
  }, {
    key: "checkExpanded",
    value: function checkExpanded() {
      this.expanded = document.querySelector('[data-scene="expanded"]');
    }
  }, {
    key: "initModules",
    value: function initModules() {
      var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
      Array.from(parent.querySelectorAll("[data-module]")).forEach(function (el) {
        var name = el.getAttribute("data-module");

        var Module = __webpack_require__("./resources/assets/scripts/modules sync recursive ^\\.\\/.*$")("./".concat(name))["default"];

        new Module(el);
      });
    }
  }, {
    key: "findAndReplaceText",
    value: function findAndReplaceText() {
      replacers.forEach(function (replacer) {
        _thehonestscoop_findandreplacedomtext__WEBPACK_IMPORTED_MODULE_8___default()(document.body, replacer);
      });
    }
  }]);

  return App;
}();

var app = new App();
$(window).on("authwallCleared", function () {
  app.init();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./resources/assets/scripts/components/DrawSVGPlugin.js":
/*!**************************************************************!*\
  !*** ./resources/assets/scripts/components/DrawSVGPlugin.js ***!
  \**************************************************************/
/*! exports provided: DrawSVGPlugin, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawSVGPlugin", function() { return DrawSVGPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DrawSVGPlugin; });
/*!
 * DrawSVGPlugin 3.2.6
 * https://greensock.com
 *
 * @license Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var gsap,
    _toArray,
    _doc,
    _win,
    _isEdge,
    _coreInitted,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _getGSAP = function _getGSAP() {
  return gsap || _windowExists() && (gsap = window.gsap) && gsap.registerPlugin && gsap;
},
    _numExp = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_types = {
  rect: ["width", "height"],
  circle: ["r", "r"],
  ellipse: ["rx", "ry"],
  line: ["x2", "y2"]
},
    _round = function _round(value) {
  return Math.round(value * 10000) / 10000;
},
    _parseNum = function _parseNum(value) {
  return parseFloat(value || 0);
},
    _getAttributeAsNumber = function _getAttributeAsNumber(target, attr) {
  return _parseNum(target.getAttribute(attr));
},
    _sqrt = Math.sqrt,
    _getDistance = function _getDistance(x1, y1, x2, y2, scaleX, scaleY) {
  return _sqrt(Math.pow((_parseNum(x2) - _parseNum(x1)) * scaleX, 2) + Math.pow((_parseNum(y2) - _parseNum(y1)) * scaleY, 2));
},
    _warn = function _warn(message) {
  return console.warn(message);
},
    _hasNonScalingStroke = function _hasNonScalingStroke(target) {
  return target.getAttribute("vector-effect") === "non-scaling-stroke";
},
    _bonusValidated = 1,
    //<name>DrawSVGPlugin</name>
//accepts values like "100%" or "20% 80%" or "20 50" and parses it into an absolute start and end position on the line/stroke based on its length. Returns an an array with the start and end values, like [0, 243]
_parse = function _parse(value, length, defaultStart) {
  var i = value.indexOf(" "),
      s,
      e;

  if (i < 0) {
    s = defaultStart !== undefined ? defaultStart + "" : value;
    e = value;
  } else {
    s = value.substr(0, i);
    e = value.substr(i + 1);
  }

  s = ~s.indexOf("%") ? _parseNum(s) / 100 * length : _parseNum(s);
  e = ~e.indexOf("%") ? _parseNum(e) / 100 * length : _parseNum(e);
  return s > e ? [e, s] : [s, e];
},
    _getLength = function _getLength(target) {
  target = _toArray(target)[0];

  if (!target) {
    return 0;
  }

  var type = target.tagName.toLowerCase(),
      style = target.style,
      scaleX = 1,
      scaleY = 1,
      length,
      bbox,
      points,
      prevPoint,
      i,
      rx,
      ry;

  if (_hasNonScalingStroke(target)) {
    //non-scaling-stroke basically scales the shape and then strokes it at the screen-level (after transforms), thus we need to adjust the length accordingly.
    scaleY = target.getScreenCTM();
    scaleX = _sqrt(scaleY.a * scaleY.a + scaleY.b * scaleY.b);
    scaleY = _sqrt(scaleY.d * scaleY.d + scaleY.c * scaleY.c);
  }

  try {
    //IE bug: calling <path>.getTotalLength() locks the repaint area of the stroke to whatever its current dimensions are on that frame/tick. To work around that, we must call getBBox() to force IE to recalculate things.
    bbox = target.getBBox(); //solely for fixing bug in IE - we don't actually use the bbox.
  } catch (e) {
    //firefox has a bug that throws an error if the element isn't visible.
    _warn("Some browsers won't measure invisible elements (like display:none or masks inside defs).");
  }

  var _ref = bbox || {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
      x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      height = _ref.height;

  if ((!bbox || !width && !height) && _types[type]) {
    //if the element isn't visible, try to discern width/height using its attributes.
    width = _getAttributeAsNumber(target, _types[type][0]);
    height = _getAttributeAsNumber(target, _types[type][1]);

    if (type !== "rect" && type !== "line") {
      //double the radius for circles and ellipses
      width *= 2;
      height *= 2;
    }

    if (type === "line") {
      x = _getAttributeAsNumber(target, "x1");
      y = _getAttributeAsNumber(target, "y1");
      width = Math.abs(width - x);
      height = Math.abs(height - y);
    }
  }

  if (type === "path") {
    prevPoint = style.strokeDasharray;
    style.strokeDasharray = "none";
    length = target.getTotalLength() || 0;

    if (scaleX !== scaleY) {
      _warn("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled.");
    }

    length *= (scaleX + scaleY) / 2;
    style.strokeDasharray = prevPoint;
  } else if (type === "rect") {
    length = width * 2 * scaleX + height * 2 * scaleY;
  } else if (type === "line") {
    length = _getDistance(x, y, x + width, y + height, scaleX, scaleY);
  } else if (type === "polyline" || type === "polygon") {
    points = target.getAttribute("points").match(_numExp) || [];

    if (type === "polygon") {
      points.push(points[0], points[1]);
    }

    length = 0;

    for (i = 2; i < points.length; i += 2) {
      length += _getDistance(points[i - 2], points[i - 1], points[i], points[i + 1], scaleX, scaleY) || 0;
    }
  } else if (type === "circle" || type === "ellipse") {
    rx = width / 2 * scaleX;
    ry = height / 2 * scaleY;
    length = Math.PI * (3 * (rx + ry) - _sqrt((3 * rx + ry) * (rx + 3 * ry)));
  }

  return length || 0;
},
    _getPosition = function _getPosition(target, length) {
  target = _toArray(target)[0];

  if (!target) {
    return [0, 0];
  }

  if (!length) {
    length = _getLength(target) + 1;
  }

  var cs = _win.getComputedStyle(target),
      dash = cs.strokeDasharray || "",
      offset = _parseNum(cs.strokeDashoffset),
      i = dash.indexOf(",");

  if (i < 0) {
    i = dash.indexOf(" ");
  }

  dash = i < 0 ? length : _parseNum(dash.substr(0, i)) || 1e-5;

  if (dash > length) {
    dash = length;
  }

  return [Math.max(0, -offset), Math.max(0, dash - offset)];
},
    _initCore = function _initCore() {
  if (_windowExists()) {
    _doc = document;
    _win = window;
    _coreInitted = gsap = _getGSAP();
    _toArray = gsap.utils.toArray;
    _isEdge = ((_win.navigator || {}).userAgent || "").indexOf("Edge") !== -1; //Microsoft Edge has a bug that causes it not to redraw the path correctly if the stroke-linecap is anything other than "butt" (like "round") and it doesn't match the stroke-linejoin. A way to trigger it is to change the stroke-miterlimit, so we'll only do that if/when we have to (to maximize performance)
  }
};

var DrawSVGPlugin = {
  version: "3.2.6",
  name: "drawSVG",
  register: function register(core) {
    gsap = core;

    _initCore();
  },
  init: function init(target, value, tween, index, targets) {
    if (!target.getBBox) {
      return false;
    }

    if (!_coreInitted) {
      _initCore();
    }

    var length = _getLength(target) + 1,
        start,
        end,
        overage,
        cs;
    this._style = target.style;
    this._target = target;

    if (value + "" === "true") {
      value = "0 100%";
    } else if (!value) {
      value = "0 0";
    } else if ((value + "").indexOf(" ") === -1) {
      value = "0 " + value;
    }

    start = _getPosition(target, length);
    end = _parse(value, length, start[0]);
    this._length = _round(length + 10);

    if (start[0] === 0 && end[0] === 0) {
      overage = Math.max(0.00001, end[1] - length); //allow people to go past the end, like values of 105% because for some paths, Firefox doesn't return an accurate getTotalLength(), so it could end up coming up short.

      this._dash = _round(length + overage);
      this._offset = _round(length - start[1] + overage);
      this._offsetPT = this.add(this, "_offset", this._offset, _round(length - end[1] + overage));
    } else {
      this._dash = _round(start[1] - start[0]) || 0.000001; //some browsers render artifacts if dash is 0, so we use a very small number in that case.

      this._offset = _round(-start[0]);
      this._dashPT = this.add(this, "_dash", this._dash, _round(end[1] - end[0]) || 0.00001);
      this._offsetPT = this.add(this, "_offset", this._offset, _round(-end[0]));
    }

    if (_isEdge) {
      //to work around a bug in Microsoft Edge, animate the stroke-miterlimit by 0.0001 just to trigger the repaint (unnecessary if it's "round" and stroke-linejoin is also "round"). Imperceptible, relatively high-performance, and effective. Another option was to set the "d" <path> attribute to its current value on every tick, but that seems like it'd be much less performant.
      cs = _win.getComputedStyle(target);

      if (cs.strokeLinecap !== cs.strokeLinejoin) {
        end = _parseNum(cs.strokeMiterlimit);
        this.add(target.style, "strokeMiterlimit", end, end + 0.01);
      }
    }

    this._live = _hasNonScalingStroke(target) || ~(value + "").indexOf("live");

    this._props.push("drawSVG");

    return _bonusValidated;
  },
  render: function render(ratio, data) {
    var pt = data._pt,
        style = data._style,
        length,
        lengthRatio,
        dash,
        offset;

    if (pt) {
      //when the element has vector-effect="non-scaling-stroke" and the SVG is resized (like on a window resize), it actually changes the length of the stroke! So we must sense that and make the proper adjustments.
      if (data._live) {
        length = _getLength(data._target) + 11;

        if (length !== data._length) {
          lengthRatio = length / data._length;
          data._length = length;
          data._offsetPT.s *= lengthRatio;
          data._offsetPT.c *= lengthRatio;

          if (data._dashPT) {
            data._dashPT.s *= lengthRatio;
            data._dashPT.c *= lengthRatio;
          } else {
            data._dash *= lengthRatio;
          }
        }
      }

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      dash = data._dash;
      offset = data._offset;
      length = data._length;
      style.strokeDashoffset = data._offset;

      if (ratio === 1 || !ratio) {
        if (dash - offset < 0.001 && length - dash <= 10) {
          //works around a bug in Safari that caused strokes with rounded ends to still show initially when they shouldn't.
          style.strokeDashoffset = offset + 1;
        }

        style.strokeDasharray = offset < 0.001 && length - dash <= 10 ? "none" : offset === dash ? "0px, 999999px" : dash + "px," + length + "px";
      } else {
        style.strokeDasharray = dash + "px," + length + "px";
      }
    }
  },
  getLength: _getLength,
  getPosition: _getPosition
};
_getGSAP() && gsap.registerPlugin(DrawSVGPlugin);


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

/***/ "./resources/assets/scripts/components/gsapUtilities.js":
/*!**************************************************************!*\
  !*** ./resources/assets/scripts/components/gsapUtilities.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Animator; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");




gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["ScrollTrigger"]);
gsap__WEBPACK_IMPORTED_MODULE_2__["gsap"].core.globals("ScrollTrigger", gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["ScrollTrigger"]);

var Animator = /*#__PURE__*/function () {
  function Animator(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Animator);

    this.el = el;
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Animator, [{
    key: "start",
    value: function start() {
      // console.log('initiating')
      if (!this.started) {
        this.started = true; // this.basics();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      console.log("stopping");
    }
  }, {
    key: "reset",
    value: function reset() {
      console.log("resetting");
    }
  }, {
    key: "init",
    value: function init() {
      this.basics();
    }
  }, {
    key: "basics",
    value: function basics() {
      $(this.el).find("[data-anim-in]").each(function (childI, el) {
        var childTl = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]({
          scrollTrigger: {
            trigger: el,
            start: "top 80%"
          }
        });
        var delay = Math.min(childI * 0.2, 1);
        childTl.from(el, 0.5, {
          autoAlpha: 0,
          y: "40px",
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeInOut
        }).delay(delay);
      });
      $(this.el).find("[data-anim-in-children]").each(function (childI, el) {
        var childTl = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]({
          scrollTrigger: {
            trigger: el,
            start: "top 80%"
          }
        });
        var delay = Math.min(childI * 0.2, 1);
        var children = $(el).children();
        childTl.staggerFrom(children, 0.5, {
          autoAlpha: 0,
          y: "40px",
          ease: gsap__WEBPACK_IMPORTED_MODULE_2__["Power2"].easeInOut
        }, 0.15).delay(delay);
      });
    }
  }]);

  return Animator;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

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
	"./authwall": "./resources/assets/scripts/modules/authwall.js",
	"./authwall.js": "./resources/assets/scripts/modules/authwall.js",
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
	"./goodbyes": "./resources/assets/scripts/modules/goodbyes.js",
	"./goodbyes.js": "./resources/assets/scripts/modules/goodbyes.js",
	"./graph": "./resources/assets/scripts/modules/graph.js",
	"./graph.js": "./resources/assets/scripts/modules/graph.js",
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
	"./single-graph": "./resources/assets/scripts/modules/single-graph.js",
	"./single-graph.js": "./resources/assets/scripts/modules/single-graph.js",
	"./site-slider": "./resources/assets/scripts/modules/site-slider.js",
	"./site-slider.js": "./resources/assets/scripts/modules/site-slider.js",
	"./trio": "./resources/assets/scripts/modules/trio.js",
	"./trio.js": "./resources/assets/scripts/modules/trio.js",
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

/***/ "./resources/assets/scripts/modules/authwall.js":
/*!******************************************************!*\
  !*** ./resources/assets/scripts/modules/authwall.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthWall; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_6__);







var authEvent = new Event('authwallCleared');

var AuthWall = /*#__PURE__*/function () {
  function AuthWall(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, AuthWall);

    this.el = el;
    this.toaster = el.querySelector('.auth-toaster');
    this.site = document.getElementById('MainContent');
    this.footer = document.querySelector('.site-footer');
    this.form = el.querySelector("[data-hubspot-form]");
    this.emailInput = document.getElementById("authEmail");
    this.nameInput = document.getElementById('authName');
    this.preAuth = this.getPreAuth();
    this.hide = this.hideFunc.bind(this);
    this.handleForm = this.handleFormFunc.bind(this);
    this.open = this.openForm.bind(this);
    this.clear = this.clearFunc.bind(this);
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(AuthWall, [{
    key: "init",
    value: function init() {
      if (!this.preAuth) {
        this.hide();
      } else {
        window.addEventListener('load', this.clear);
      }
    }
  }, {
    key: "hideFunc",
    value: function hideFunc() {
      var self = this;
      self.cacheContent();
      document.body.classList.add("authwall--up");
      window.addEventListener("resize", self.authBodySize);
      self.open();
    }
  }, {
    key: "cacheContent",
    value: function cacheContent() {
      this.cache = this.site.cloneNode(true);
      this.site.remove();
    }
  }, {
    key: "clearFunc",
    value: function clearFunc() {
      window.dispatchEvent(authEvent);
      document.body.classList.add("authwall--down");
      document.body.classList.add("authwall--precleared");
      setTimeout(function () {
        document.body.classList.add("authwall--cleared");
      }, 800);
    }
  }, {
    key: "authBodySize",
    value: function authBodySize() {
      document.body.style.minHeight = window.innerHeight + 'px';
      document.body.style.overflow = 'hidden';
      this.footer.style.marginTop = window.innerHeight + "px";
    }
  }, {
    key: "getPreAuth",
    value: function getPreAuth() {
      if (window.preAuth != true) {
        var parsed = query_string__WEBPACK_IMPORTED_MODULE_6___default.a.parse(location.search);

        if (parsed.preAuth == 'true') {
          var preAuth = true;
        }
      } else {
        var preAuth = window.preAuth;
      }

      if (js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("hubspotAuthorized") == "yup") {
        return true;
      }

      return preAuth;
    }
  }, {
    key: "openForm",
    value: function openForm() {
      if (this.nameInput) {
        this.nameInput.focus();
      } else {
        this.emailInput.focus();
      }

      this.form.addEventListener("submit", this.handleForm, true);
    }
  }, {
    key: "resetForm",
    value: function resetForm() {
      var removeProcessing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.toaster.classList.remove("error");
      this.toaster.classList.remove("success");
      this.toaster.classList.remove("blocked-email");
      this.toaster.classList.remove("invalid-email");
      this.toaster.classList.remove("other-error");

      if (removeProcessing == true) {
        this.form.classList.remove("processing");
      }
    }
  }, {
    key: "prepareData",
    value: function prepareData() {
      var authData = {};
      var authConsentText = this.toaster.querySelector(".toaster-footer").innerText;
      authData.submittedAt = Date.now();
      authData.fields = [];
      authData.fields[0] = {
        name: "email",
        value: this.emailInput.value
      };

      if (this.nameInput) {
        authData.fields[1] = {
          name: "firstname",
          value: this.nameInput.value
        };
      }

      authData.legalConsentOptions = {
        legitimateInterest: {
          value: true,
          text: authConsentText,
          subscriptionTypeId: 999,
          legalBasis: "LEAD"
        }
      };
      authData.context = {};
      authData.context.pageUri = window.location.href;
      authData.context.pageName = document.title;

      if (js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("hubspotutk")) {
        authData.context.hutk = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get("hubspotutk");
      }

      return authData;
    }
  }, {
    key: "updateDriftWithName",
    value: function updateDriftWithName() {
      var driftCookie = js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('driftInfo');
      var email, name, domain;

      if (driftCookie != undefined) {
        name = driftCookie.split('||')[0];
        email = driftCookie.split('||')[1].replace('||', '');
      } else if (this.nameInput && this.emailInput) {
        name = this.nameInput.value;
        email = this.emailInput.value;
      }

      if ((typeof drift === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(drift)) == 'object' && name != '' && email != '') {
        domain = email.split('@')[1];
        drift.on('ready', function () {
          drift.api.setUserAttributes({
            email: authEmail.value,
            firstName: this.nameInput.value,
            domain: domain
          });
        });
      }
    }
  }, {
    key: "handleFormFunc",
    value: function handleFormFunc(event) {
      var _this = this; //Stop Default


      event.preventDefault(); //REset form classes

      this.resetForm(); //Start processing

      this.form.classList.add('processing'); //Get correct data

      var authData = this.prepareData(); //Update drift with the right name

      this.updateDriftWithName(); //Handling delay to let people wait

      var delay = 0;

      if (this.toaster.classList.contains('try-again')) {
        delay = 600;
      }

      var self = this;
      setTimeout(function () {
        _this.submitForm(authData).then(function (data) {
          console.log(data);
          console.log(_this.toaster);

          _this.resetForm(); //Handle Error


          if (data.status == 'error') {
            _this.toaster.classList.add('try-again');

            _this.toaster.classList.add('error');

            setTimeout(function () {
              _this.emailInput.value = '';
              _this.emailInput.placeholder = 'Try again';
            }, 300);

            if (data.errors && data.errors.length > 0) {
              //Specific error handling
              if (data.errors[0].errorType == 'BLOCKED_EMAIL') {
                _this.toaster.classList.add('blocked-email');
              } else if (data.errors[0].errorType == 'INVALID_EMAIL') {
                _this.toaster.classList.add('invalid-email');
              } else {
                _this.toaster.classList.add('other-error');
              }
            } else {
              _this.toaster.classList.add('other-error');
            }
          } //Handle success
          else if (data.status == 'success' || data.inlineMessage == "Thanks for submitting the form." || data.errors.length <= 0) {
              _this.resetForm();

              _this.toaster.classList.remove('try-again');

              _this.toaster.classList.add('success');

              _this.clearWall();
            } else {
              _this.resetForm(); //Other error we don't know


              _this.toaster.classList.add('other-error');

              _this.toaster.classList.add('error');
            }
        });
      }, delay);
    }
  }, {
    key: "submitForm",
    value: function () {
      var _submitForm = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
        var formId, formPortal, url, response, jsonData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formId = this.form.getAttribute('data-hubspot-form');
                formPortal = this.form.getAttribute('data-hubspot-portal');
                url = "https://api.hsforms.com/submissions/v3/integration/submit/".concat(formPortal, "/").concat(formId);
                _context.next = 5;
                return fetch(url, {
                  method: 'POST',
                  mode: 'cors',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
                });

              case 5:
                response = _context.sent;
                _context.next = 8;
                return response.json();

              case 8:
                jsonData = _context.sent;
                return _context.abrupt("return", jsonData);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function submitForm(_x) {
        return _submitForm.apply(this, arguments);
      }

      return submitForm;
    }()
  }, {
    key: "clearWall",
    value: function clearWall() {
      var _this2 = this;

      js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("hubspotAuthorized", "yup", {
        expires: 30,
        path: ""
      });
      var infoToSet = "this.emailInput.value";

      if (this.nameInput) {
        infoToSet = this.nameInput.value + "||" + this.emailInput.value;
      }

      js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.set("driftInfo", infoToSet, {
        expires: 30,
        path: ""
      });

      if (this.cache) {
        var page = document.getElementById("app");
        page.insertBefore(this.cache, this.el);
      }

      setTimeout(function () {
        document.body.classList.add("authwall--down");
        setTimeout(function () {
          document.body.classList.remove("authwall--up");
          document.body.classList.add("authwall--cleared");
          document.body.style.height = "auto";
          document.body.style.overflow = "auto";
          document.body.style.overflowX = "hidden";
          _this2.footer.style.marginTop = 0 + "px";
        }, 1000);
        window.dispatchEvent(authEvent);
      }, 2000);
      window.removeEventListener("resize", this.authBodySize);
    }
  }]);

  return AuthWall;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountMe; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


var CountMe = function CountMe(el) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CountMe);

  this.number = parseInt(el.innerHTML);
};



/***/ }),

/***/ "./resources/assets/scripts/modules/countdown.js":
/*!*******************************************************!*\
  !*** ./resources/assets/scripts/modules/countdown.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


var Slider = function Slider(el) {
  //
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Slider);
};



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
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function () {
    var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived),
        result;

    if (hasNativeReflectConstruct) {
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

/***/ "./resources/assets/scripts/modules/goodbyes.js":
/*!******************************************************!*\
  !*** ./resources/assets/scripts/modules/goodbyes.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Goodbyes; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


var Goodbyes = function Goodbyes(el) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Goodbyes); // ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);


  this.el = el; //Nothing happening here
};



/***/ }),

/***/ "./resources/assets/scripts/modules/graph.js":
/*!***************************************************!*\
  !*** ./resources/assets/scripts/modules/graph.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trio; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


 // import { DrawSVGPlugin } from "./DrawSVGPlugin";

var graph = document.querySelector('.graph-section');

if (graph) {
  ///list
  var graphList = graph.querySelector('.graph-list');
  var graphScene = new ScrollMagic.Scene({
    offset: -400,
    duration: "200%",
    triggerElement: graph,
    triggerHook: "onLeave"
  });
  graphScene.addTo(scrollController);
  var gtl = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]({
    repeat: 0
  });
  var bars = graph.querySelectorAll('.gst1');
  gtl.from('.graph-graph', 0.5, {
    opacity: 0
  }, 0);
  var barTime = 0.5;
  bars.forEach(function (el) {
    barTime += 0.07;
    var rect = el.getBoundingClientRect();
    var ht = rect.bottom - rect.top;
    var getToSmall = 0.2 / Math.sqrt(ht) * 0.5 + '%';
    gtl.from(el, 0.6, {
      scaleY: getToSmall,
      ease: Power2.easeOut,
      transformOrigin: "bottom"
    }, barTime);
  }); // gtl.staggerFrom('.gst1', 0.6, {height: "20px", ease: Power2.easeOut, transformOrigin: "bottom"}, 0.1, 0.56);

  gtl.from('.gst7', 1.9, {
    drawSVG: 0
  }, 1.2); // gtl.staggerFrom('.gst4', 0.4, {opacity: 0, ease: Power0.easeInOut}, 0.15, 0.65);

  gtl.staggerFrom('.gst5', 0.2, {
    opacity: 0,
    ease: Power0.easeInOut
  }, 0.05, 1.25);
  gtl.pause();
  graphScene.setClassToggle(graph, 'section-active');
  graphScene.on("enter", function () {
    graph.classList.add('section-loaded');
    gtl.play();
  });
}

var Trio = /*#__PURE__*/function () {
  function Trio(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Trio);

    this.el = el;
    this.timeline = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]();
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Trio, [{
    key: "init",
    value: function init() {}
  }]);

  return Trio;
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! headroom.js */ "./node_modules/headroom.js/dist/headroom.js");
/* harmony import */ var headroom_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(headroom_js__WEBPACK_IMPORTED_MODULE_3__);





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
      this.el.classList.add('js'); // this.resize();

      this.initMenu(); // window.addEventListener('resize', this.resize)
      // window.addEventListener('load', this.resize)
    }
  }, {
    key: "handleSize",
    value: function handleSize() {
      var ht = this.el.offsetHeight;
      this.root.style.setProperty("--header-height", ht + "px");
      document.body.style.paddingTop = ht + "px";
      this.main.style.marginTop = -ht + "px";

      if (this.imageHeader.length && !this.imageHeader.hasClass('js-fixed')) {
        this.imageHeader.addClass('js-fixed');
        this.imageHeader.css({
          "margin-top": -ht,
          'padding-top': ht
        });
      }

      if (this.gradientHeader.length && !this.gradientHeader.hasClass('js-fixed')) {
        this.gradientHeader.addClass('js-fixed');
        this.gradientHeader.css({
          "margin-top": -ht,
          'padding-top': ht
        });
      }
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
      this.headroom = new headroom_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.el, {
        "offset": 100,
        "tolerance": 2
      }).init();
    }
  }, {
    key: "setupMobileMenu",
    value: function setupMobileMenu() {
      this.mobileToggle = this.el.querySelector('[data-mobile-menu-toggle]');
      this.mobileMenu = document.querySelector('[data-mobile-menu]');

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

      this.scrollToSection();
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
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('.submenu-toggled').removeClass('submenu-toggled');
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
  }, {
    key: "scrollToSection",
    value: function scrollToSection() {
      this.links = this.mobileMenu.querySelectorAll('[href]');

      if (this.links) {
        this.links.forEach(function (element) {
          element.addEventListener('click', function (event) {
            var hashFinder = /\#(.*)/;
            var targEl = document.getElementById(hashFinder.exec(event.target.href)[1]);

            if (targEl) {
              event.preventDefault();
              targEl.scrollIntoView({
                behavior: "smooth"
              });
              document.body.classList.remove('mobileNavOpen');
              self.closeIcon.setAttribute("aria-hidden", true);
              self.openIcon.setAttribute("aria-hidden", false);
              menuButton.setAttribute('aria-expanded', 'false');
            }
          });
        });
      }
    }
  }]);

  return Header;
}();



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
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function () {
    var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived),
        result;

    if (hasNativeReflectConstruct) {
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

/***/ "./resources/assets/scripts/modules/single-graph.js":
/*!**********************************************************!*\
  !*** ./resources/assets/scripts/modules/single-graph.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trio; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


 // import { DrawSVGPlugin } from "./DrawSVGPlugin";

var Trio = /*#__PURE__*/function () {
  function Trio(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Trio);

    this.el = el;
    this.timeline = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]();
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Trio, [{
    key: "start",
    value: function start() {}
  }]);

  return Trio;
}();



/***/ }),

/***/ "./resources/assets/scripts/modules/site-slider.js":
/*!*********************************************************!*\
  !*** ./resources/assets/scripts/modules/site-slider.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);


var Slider = function Slider(el) {
  //
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Slider);
};



/***/ }),

/***/ "./resources/assets/scripts/modules/trio.js":
/*!**************************************************!*\
  !*** ./resources/assets/scripts/modules/trio.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trio; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


 // import { DrawSVGPlugin } from "./DrawSVGPlugin";

var Trio = /*#__PURE__*/function () {
  function Trio(el) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Trio);

    this.el = el;
    this.timeline = new gsap__WEBPACK_IMPORTED_MODULE_2__["TimelineMax"]();
    this.init();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Trio, [{
    key: "init",
    value: function init() {}
  }]);

  return Trio;
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
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function () {
    var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived),
        result;

    if (hasNativeReflectConstruct) {
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

__webpack_require__(/*! /Users/evan/Local Sites/simplr-deep-dive/app/bedrock/web/app/themes/deeperdive/resources/assets/scripts/app.js */"./resources/assets/scripts/app.js");
__webpack_require__(/*! /Users/evan/Local Sites/simplr-deep-dive/app/bedrock/web/app/themes/deeperdive/resources/assets/styles/app.scss */"./resources/assets/styles/app.scss");
module.exports = __webpack_require__(/*! /Users/evan/Local Sites/simplr-deep-dive/app/bedrock/web/app/themes/deeperdive/resources/assets/styles/editor.scss */"./resources/assets/styles/editor.scss");


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