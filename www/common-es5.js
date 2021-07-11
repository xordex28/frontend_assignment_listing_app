(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["common"], {
    /***/
    6633:
    /*!*********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createButtonActiveGesture
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-7a8b7a1c.js */
      23150);
      /* harmony import */


      var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./haptic-27b3f981.js */
      52954);
      /* harmony import */


      var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./index-f49d994d.js */
      97279);

      var createButtonActiveGesture = function createButtonActiveGesture(el, isButton) {
        var currentTouchedButton;
        var initialTouchedButton;

        var activateButtonAtPoint = function activateButtonAtPoint(x, y, hapticFeedbackFn) {
          if (typeof document === 'undefined') {
            return;
          }

          var target = document.elementFromPoint(x, y);

          if (!target || !isButton(target)) {
            clearActiveButton();
            return;
          }

          if (target !== currentTouchedButton) {
            clearActiveButton();
            setActiveButton(target, hapticFeedbackFn);
          }
        };

        var setActiveButton = function setActiveButton(button, hapticFeedbackFn) {
          currentTouchedButton = button;

          if (!initialTouchedButton) {
            initialTouchedButton = currentTouchedButton;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.add('ion-activated');
          });
          hapticFeedbackFn();
        };

        var clearActiveButton = function clearActiveButton() {
          var dispatchClick = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!currentTouchedButton) {
            return;
          }

          var buttonToModify = currentTouchedButton;
          (0, _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(function () {
            return buttonToModify.classList.remove('ion-activated');
          });
          /**
           * Clicking on one button, but releasing on another button
           * does not dispatch a click event in browsers, so we
           * need to do it manually here. Some browsers will
           * dispatch a click if clicking on one button, dragging over
           * another button, and releasing on the original button. In that
           * case, we need to make sure we do not cause a double click there.
           */

          if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
            currentTouchedButton.click();
          }

          currentTouchedButton = undefined;
        };

        return (0, _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
          el: el,
          gestureName: 'buttonActiveDrag',
          threshold: 0,
          onStart: function onStart(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a);
          },
          onMove: function onMove(ev) {
            return activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b);
          },
          onEnd: function onEnd() {
            clearActiveButton(true);
            (0, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
            initialTouchedButton = undefined;
          }
        });
      };
      /***/

    },

    /***/
    77330:
    /*!**************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            attachComponent
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            detachComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-dd7e4b7b.js */
      52377);

      var attachComponent = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
          var el;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!delegate) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

                case 2:
                  if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                    _context.next = 4;
                    break;
                  }

                  throw new Error('framework delegate is missing');

                case 4:
                  el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

                  if (cssClasses) {
                    cssClasses.forEach(function (c) {
                      return el.classList.add(c);
                    });
                  }

                  if (componentProps) {
                    Object.assign(el, componentProps);
                  }

                  container.appendChild(el);
                  _context.next = 10;
                  return new Promise(function (resolve) {
                    return (0, _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve);
                  });

                case 10:
                  return _context.abrupt("return", el);

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function attachComponent(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var detachComponent = function detachComponent(delegate, element) {
        if (element) {
          if (delegate) {
            var container = element.parentElement;
            return delegate.removeViewFromDom(container, element);
          }

          element.remove();
        }

        return Promise.resolve();
      };
      /***/

    },

    /***/
    52954:
    /*!**************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "a": function a() {
          return (
            /* binding */
            hapticSelectionStart
          );
        },

        /* harmony export */
        "b": function b() {
          return (
            /* binding */
            hapticSelectionChanged
          );
        },

        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            hapticSelection
          );
        },

        /* harmony export */
        "d": function d() {
          return (
            /* binding */
            hapticImpact
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hapticSelectionEnd
          );
        }
        /* harmony export */

      });

      var HapticEngine = {
        getEngine: function getEngine() {
          var win = window;
          return win.TapticEngine || win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics;
        },
        available: function available() {
          return !!this.getEngine();
        },
        isCordova: function isCordova() {
          return !!window.TapticEngine;
        },
        isCapacitor: function isCapacitor() {
          var win = window;
          return !!win.Capacitor;
        },
        impact: function impact(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.impact({
            style: style
          });
        },
        notification: function notification(options) {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          var style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
          engine.notification({
            style: style
          });
        },
        selection: function selection() {
          this.impact({
            style: 'light'
          });
        },
        selectionStart: function selectionStart() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionStart();
          } else {
            engine.gestureSelectionStart();
          }
        },
        selectionChanged: function selectionChanged() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionChanged();
          } else {
            engine.gestureSelectionChanged();
          }
        },
        selectionEnd: function selectionEnd() {
          var engine = this.getEngine();

          if (!engine) {
            return;
          }

          if (this.isCapacitor()) {
            engine.selectionEnd();
          } else {
            engine.gestureSelectionEnd();
          }
        }
      };
      /**
       * Trigger a selection changed haptic event. Good for one-time events
       * (not for gestures)
       */

      var hapticSelection = function hapticSelection() {
        HapticEngine.selection();
      };
      /**
       * Tell the haptic engine that a gesture for a selection change is starting.
       */


      var hapticSelectionStart = function hapticSelectionStart() {
        HapticEngine.selectionStart();
      };
      /**
       * Tell the haptic engine that a selection changed during a gesture.
       */


      var hapticSelectionChanged = function hapticSelectionChanged() {
        HapticEngine.selectionChanged();
      };
      /**
       * Tell the haptic engine we are done with a gesture. This needs to be
       * called lest resources are not properly recycled.
       */


      var hapticSelectionEnd = function hapticSelectionEnd() {
        HapticEngine.selectionEnd();
      };
      /**
       * Use this to indicate success/failure/warning to the user.
       * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
       */


      var hapticImpact = function hapticImpact(options) {
        HapticEngine.impact(options);
      };
      /***/

    },

    /***/
    60408:
    /*!***********************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "S": function S() {
          return (
            /* binding */
            SPINNERS
          );
        }
        /* harmony export */

      });

      var spinners = {
        'bubbles': {
          dur: 1000,
          circles: 9,
          fn: function fn(dur, index, total) {
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            var angle = 2 * Math.PI * index / total;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circles': {
          dur: 1000,
          circles: 8,
          fn: function fn(dur, index, total) {
            var step = index / total;
            var animationDelay = "".concat(dur * step - dur, "ms");
            var angle = 2 * Math.PI * step;
            return {
              r: 5,
              style: {
                'top': "".concat(9 * Math.sin(angle), "px"),
                'left': "".concat(9 * Math.cos(angle), "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'circular': {
          dur: 1400,
          elmDuration: true,
          circles: 1,
          fn: function fn() {
            return {
              r: 20,
              cx: 48,
              cy: 48,
              fill: 'none',
              viewBox: '24 24 48 48',
              transform: 'translate(0,0)',
              style: {}
            };
          }
        },
        'crescent': {
          dur: 750,
          circles: 1,
          fn: function fn() {
            return {
              r: 26,
              style: {}
            };
          }
        },
        'dots': {
          dur: 750,
          circles: 3,
          fn: function fn(_, index) {
            var animationDelay = -(110 * index) + 'ms';
            return {
              r: 6,
              style: {
                'left': "".concat(9 - 9 * index, "px"),
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 17,
              y2: 29,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        },
        'lines-small': {
          dur: 1000,
          lines: 12,
          fn: function fn(dur, index, total) {
            var transform = "rotate(".concat(30 * index + (index < 6 ? 180 : -180), "deg)");
            var animationDelay = "".concat(dur * index / total - dur, "ms");
            return {
              y1: 12,
              y2: 20,
              style: {
                'transform': transform,
                'animation-delay': animationDelay
              }
            };
          }
        }
      };
      var SPINNERS = spinners;
      /***/
    },

    /***/
    61269:
    /*!*************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "c": function c() {
          return (
            /* binding */
            createColorClasses
          );
        },

        /* harmony export */
        "g": function g() {
          return (
            /* binding */
            getClassMap
          );
        },

        /* harmony export */
        "h": function h() {
          return (
            /* binding */
            hostContext
          );
        },

        /* harmony export */
        "o": function o() {
          return (
            /* binding */
            openURL
          );
        }
        /* harmony export */

      });

      var hostContext = function hostContext(selector, el) {
        return el.closest(selector) !== null;
      };
      /**
       * Create the mode and color classes for the component based on the classes passed in
       */


      var createColorClasses = function createColorClasses(color, cssClassMap) {
        return typeof color === 'string' && color.length > 0 ? Object.assign(_defineProperty({
          'ion-color': true
        }, "ion-color-".concat(color), true), cssClassMap) : cssClassMap;
      };

      var getClassList = function getClassList(classes) {
        if (classes !== undefined) {
          var array = Array.isArray(classes) ? classes : classes.split(' ');
          return array.filter(function (c) {
            return c != null;
          }).map(function (c) {
            return c.trim();
          }).filter(function (c) {
            return c !== '';
          });
        }

        return [];
      };

      var getClassMap = function getClassMap(classes) {
        var map = {};
        getClassList(classes).forEach(function (c) {
          return map[c] = true;
        });
        return map;
      };

      var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

      var openURL = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, ev, direction, animation) {
          var router;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                    _context2.next = 5;
                    break;
                  }

                  router = document.querySelector('ion-router');

                  if (!router) {
                    _context2.next = 5;
                    break;
                  }

                  if (ev != null) {
                    ev.preventDefault();
                  }

                  return _context2.abrupt("return", router.push(url, direction, animation));

                case 5:
                  return _context2.abrupt("return", false);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function openURL(_x6, _x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    69475:
    /*!**************************************************!*\
      !*** ./src/app/utils/header/header.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HeaderComponent": function HeaderComponent() {
          return (
            /* binding */
            _HeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function HeaderComponent_ion_buttons_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-buttons", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-menu-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_ion_buttons_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-buttons", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ion-back-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _HeaderComponent = /*#__PURE__*/function () {
        function _HeaderComponent() {
          _classCallCheck(this, _HeaderComponent);

          this.backButton = false;
          this.modal = false;
          this.modalClose = true;
        }

        _createClass(_HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HeaderComponent;
      }();

      _HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || _HeaderComponent)();
      };

      _HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _HeaderComponent,
        selectors: [["app-header"]],
        inputs: {
          titulo: "titulo",
          backButton: "backButton",
          modal: "modal",
          modalClose: "modalClose"
        },
        decls: 7,
        vars: 3,
        consts: [[1, "app-header-height", "mat-elevation-z3"], ["color", "primary"], ["slot", "start", 4, "ngIf"], [1, "center"], [1, "title"], ["slot", "start"], ["menu", "siderbar"], ["defaultHref", "app/categories", 1, "ion-float-left"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-toolbar", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_ion_buttons_2_Template, 2, 0, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_ion_buttons_3_Template, 2, 0, "ion-buttons", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-title", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.modal === false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.backButton === true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.titulo, " ");
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonMenuButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonBackButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonBackButtonDelegate],
        styles: ["ion-badge[_ngcontent-%COMP%] {\n  --padding-top: 0px;\n}\n\nion-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.title[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFkZ2Uge1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAgIGRpc3BsYXkgICAgOiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jZW50ZXIge1xuICAgIGRpc3BsYXkgICAgOiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50aXRsZXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG59Il19 */"]
      });
      /***/
    },

    /***/
    54190:
    /*!**************************************************************************!*\
      !*** ./src/app/utils/show-hide-password/show-hide-password.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ShowHidePasswordComponent": function ShowHidePasswordComponent() {
          return (
            /* binding */
            _ShowHidePasswordComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _c0 = ["*"];

      var _ShowHidePasswordComponent = /*#__PURE__*/function () {
        function _ShowHidePasswordComponent() {
          _classCallCheck(this, _ShowHidePasswordComponent);

          this.show = false;
        }

        _createClass(_ShowHidePasswordComponent, [{
          key: "toggleShow",
          value: function toggleShow() {
            this.show = !this.show;

            if (this.show) {
              this.input.type = 'text';
            } else {
              this.input.type = 'password';
            }
          }
        }]);

        return _ShowHidePasswordComponent;
      }();

      _ShowHidePasswordComponent.ɵfac = function ShowHidePasswordComponent_Factory(t) {
        return new (t || _ShowHidePasswordComponent)();
      };

      _ShowHidePasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ShowHidePasswordComponent,
        selectors: [["app-show-hide-password"]],
        contentQueries: function ShowHidePasswordComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonInput, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
          }
        },
        ngContentSelectors: _c0,
        decls: 4,
        vars: 2,
        consts: [[1, "type-toggle", 3, "click"], ["name", "eye-off-outline", 1, "show-option", 3, "hidden"], ["name", "eye-outline", 1, "hide-option", 3, "hidden"]],
        template: function ShowHidePasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowHidePasswordComponent_Template_a_click_1_listener() {
              return ctx.toggleShow();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ion-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "ion-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.show);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.show);
          }
        },
        directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonIcon],
        styles: ["[_nghost-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%] {\n  -webkit-padding-start: 0.5rem;\n          padding-inline-start: 0.5rem;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%], [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  display: block;\n}\n[_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .show-option[_ngcontent-%COMP%]:not(ion-icon), [_nghost-%COMP%]   .type-toggle[_ngcontent-%COMP%]   .hide-option[_ngcontent-%COMP%]:not(ion-icon) {\n  text-transform: uppercase;\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctaGlkZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsNkJBQUE7VUFBQSw0QkFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJOztFQUVFLGlCQUFBO0VBQ0EsY0FBQTtBQUVOO0FBQ007O0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBRVIiLCJmaWxlIjoic2hvdy1oaWRlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAudHlwZS10b2dnbGUge1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC5zaG93LW9wdGlvbixcbiAgICAuaGlkZS1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgLy8gSW4gY2FzZSB5b3Ugd2FudCB0byB1c2UgdGV4dCBpbnN0ZWFkIG9mIGljb25zXG4gICAgICAmOm5vdChpb24taWNvbikge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"]
      });
      /***/
    },

    /***/
    24603:
    /*!***************************************!*\
      !*** ./src/app/utils/utils.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UtilsModule": function UtilsModule() {
          return (
            /* binding */
            _UtilsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./header/header.component */
      69475);
      /* harmony import */


      var _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./show-hide-password/show-hide-password.component */
      54190);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _UtilsModule = function _UtilsModule() {
        _classCallCheck(this, _UtilsModule);
      };

      _UtilsModule.ɵfac = function UtilsModule_Factory(t) {
        return new (t || _UtilsModule)();
      };

      _UtilsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _UtilsModule
      });
      _UtilsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_UtilsModule, {
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_1__.ShowHidePasswordComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule],
          exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_1__.ShowHidePasswordComponent]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map