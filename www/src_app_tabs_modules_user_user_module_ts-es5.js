(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_tabs_modules_user_user_module_ts"], {
    /***/
    43187:
    /*!*****************************************!*\
      !*** ./node_modules/charenc/charenc.js ***!
      \*****************************************/

    /***/
    function _(module) {
      var charenc = {
        // UTF-8 encoding
        utf8: {
          // Convert a string to a byte array
          stringToBytes: function stringToBytes(str) {
            return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
          },
          // Convert a byte array to a string
          bytesToString: function bytesToString(bytes) {
            return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
          }
        },
        // Binary encoding
        bin: {
          // Convert a string to a byte array
          stringToBytes: function stringToBytes(str) {
            for (var bytes = [], i = 0; i < str.length; i++) {
              bytes.push(str.charCodeAt(i) & 0xFF);
            }

            return bytes;
          },
          // Convert a byte array to a string
          bytesToString: function bytesToString(bytes) {
            for (var str = [], i = 0; i < bytes.length; i++) {
              str.push(String.fromCharCode(bytes[i]));
            }

            return str.join('');
          }
        }
      };
      module.exports = charenc;
      /***/
    },

    /***/
    28278:
    /*!*************************************!*\
      !*** ./node_modules/crypt/crypt.js ***!
      \*************************************/

    /***/
    function _(module) {
      (function () {
        var base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
            crypt = {
          // Bit-wise rotation left
          rotl: function rotl(n, b) {
            return n << b | n >>> 32 - b;
          },
          // Bit-wise rotation right
          rotr: function rotr(n, b) {
            return n << 32 - b | n >>> b;
          },
          // Swap big-endian to little-endian and vice versa
          endian: function endian(n) {
            // If number given, swap endian
            if (n.constructor == Number) {
              return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
            } // Else, assume array and swap all items


            for (var i = 0; i < n.length; i++) {
              n[i] = crypt.endian(n[i]);
            }

            return n;
          },
          // Generate an array of any length of random bytes
          randomBytes: function randomBytes(n) {
            for (var bytes = []; n > 0; n--) {
              bytes.push(Math.floor(Math.random() * 256));
            }

            return bytes;
          },
          // Convert a byte array to big-endian 32-bit words
          bytesToWords: function bytesToWords(bytes) {
            for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8) {
              words[b >>> 5] |= bytes[i] << 24 - b % 32;
            }

            return words;
          },
          // Convert big-endian 32-bit words to a byte array
          wordsToBytes: function wordsToBytes(words) {
            for (var bytes = [], b = 0; b < words.length * 32; b += 8) {
              bytes.push(words[b >>> 5] >>> 24 - b % 32 & 0xFF);
            }

            return bytes;
          },
          // Convert a byte array to a hex string
          bytesToHex: function bytesToHex(bytes) {
            for (var hex = [], i = 0; i < bytes.length; i++) {
              hex.push((bytes[i] >>> 4).toString(16));
              hex.push((bytes[i] & 0xF).toString(16));
            }

            return hex.join('');
          },
          // Convert a hex string to a byte array
          hexToBytes: function hexToBytes(hex) {
            for (var bytes = [], c = 0; c < hex.length; c += 2) {
              bytes.push(parseInt(hex.substr(c, 2), 16));
            }

            return bytes;
          },
          // Convert a byte array to a base-64 string
          bytesToBase64: function bytesToBase64(bytes) {
            for (var base64 = [], i = 0; i < bytes.length; i += 3) {
              var triplet = bytes[i] << 16 | bytes[i + 1] << 8 | bytes[i + 2];

              for (var j = 0; j < 4; j++) {
                if (i * 8 + j * 6 <= bytes.length * 8) base64.push(base64map.charAt(triplet >>> 6 * (3 - j) & 0x3F));else base64.push('=');
              }
            }

            return base64.join('');
          },
          // Convert a base-64 string to a byte array
          base64ToBytes: function base64ToBytes(base64) {
            // Remove non-base-64 characters
            base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

            for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
              if (imod4 == 0) continue;
              bytes.push((base64map.indexOf(base64.charAt(i - 1)) & Math.pow(2, -2 * imod4 + 8) - 1) << imod4 * 2 | base64map.indexOf(base64.charAt(i)) >>> 6 - imod4 * 2);
            }

            return bytes;
          }
        };
        module.exports = crypt;
      })();
      /***/

    },

    /***/
    8646:
    /*!*****************************************!*\
      !*** ./node_modules/is-buffer/index.js ***!
      \*****************************************/

    /***/
    function _(module) {
      /*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */
      // The _isBuffer check is for Safari 5-7 support, because it's missing
      // Object.prototype.constructor. Remove this eventually
      module.exports = function (obj) {
        return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
      };

      function isBuffer(obj) {
        return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
      } // For Node v0.10 support. Remove this eventually.


      function isSlowBuffer(obj) {
        return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
      }
      /***/

    },

    /***/
    28559:
    /*!*********************************!*\
      !*** ./node_modules/md5/md5.js ***!
      \*********************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      (function () {
        var crypt = __webpack_require__(
        /*! crypt */
        28278),
            utf8 = __webpack_require__(
        /*! charenc */
        43187).utf8,
            isBuffer = __webpack_require__(
        /*! is-buffer */
        8646),
            bin = __webpack_require__(
        /*! charenc */
        43187).bin,
            // The core
        md5 = function md5(message, options) {
          // Convert to byte array
          if (message.constructor == String) {
            if (options && options.encoding === 'binary') message = bin.stringToBytes(message);else message = utf8.stringToBytes(message);
          } else if (isBuffer(message)) message = Array.prototype.slice.call(message, 0);else if (!Array.isArray(message) && message.constructor !== Uint8Array) message = message.toString(); // else, assume byte array already

          var m = crypt.bytesToWords(message),
              l = message.length * 8,
              a = 1732584193,
              b = -271733879,
              c = -1732584194,
              d = 271733878; // Swap endian

          for (var i = 0; i < m.length; i++) {
            m[i] = (m[i] << 8 | m[i] >>> 24) & 0x00FF00FF | (m[i] << 24 | m[i] >>> 8) & 0xFF00FF00;
          } // Padding


          m[l >>> 5] |= 0x80 << l % 32;
          m[(l + 64 >>> 9 << 4) + 14] = l; // Method shortcuts

          var FF = md5._ff,
              GG = md5._gg,
              HH = md5._hh,
              II = md5._ii;

          for (var i = 0; i < m.length; i += 16) {
            var aa = a,
                bb = b,
                cc = c,
                dd = d;
            a = FF(a, b, c, d, m[i + 0], 7, -680876936);
            d = FF(d, a, b, c, m[i + 1], 12, -389564586);
            c = FF(c, d, a, b, m[i + 2], 17, 606105819);
            b = FF(b, c, d, a, m[i + 3], 22, -1044525330);
            a = FF(a, b, c, d, m[i + 4], 7, -176418897);
            d = FF(d, a, b, c, m[i + 5], 12, 1200080426);
            c = FF(c, d, a, b, m[i + 6], 17, -1473231341);
            b = FF(b, c, d, a, m[i + 7], 22, -45705983);
            a = FF(a, b, c, d, m[i + 8], 7, 1770035416);
            d = FF(d, a, b, c, m[i + 9], 12, -1958414417);
            c = FF(c, d, a, b, m[i + 10], 17, -42063);
            b = FF(b, c, d, a, m[i + 11], 22, -1990404162);
            a = FF(a, b, c, d, m[i + 12], 7, 1804603682);
            d = FF(d, a, b, c, m[i + 13], 12, -40341101);
            c = FF(c, d, a, b, m[i + 14], 17, -1502002290);
            b = FF(b, c, d, a, m[i + 15], 22, 1236535329);
            a = GG(a, b, c, d, m[i + 1], 5, -165796510);
            d = GG(d, a, b, c, m[i + 6], 9, -1069501632);
            c = GG(c, d, a, b, m[i + 11], 14, 643717713);
            b = GG(b, c, d, a, m[i + 0], 20, -373897302);
            a = GG(a, b, c, d, m[i + 5], 5, -701558691);
            d = GG(d, a, b, c, m[i + 10], 9, 38016083);
            c = GG(c, d, a, b, m[i + 15], 14, -660478335);
            b = GG(b, c, d, a, m[i + 4], 20, -405537848);
            a = GG(a, b, c, d, m[i + 9], 5, 568446438);
            d = GG(d, a, b, c, m[i + 14], 9, -1019803690);
            c = GG(c, d, a, b, m[i + 3], 14, -187363961);
            b = GG(b, c, d, a, m[i + 8], 20, 1163531501);
            a = GG(a, b, c, d, m[i + 13], 5, -1444681467);
            d = GG(d, a, b, c, m[i + 2], 9, -51403784);
            c = GG(c, d, a, b, m[i + 7], 14, 1735328473);
            b = GG(b, c, d, a, m[i + 12], 20, -1926607734);
            a = HH(a, b, c, d, m[i + 5], 4, -378558);
            d = HH(d, a, b, c, m[i + 8], 11, -2022574463);
            c = HH(c, d, a, b, m[i + 11], 16, 1839030562);
            b = HH(b, c, d, a, m[i + 14], 23, -35309556);
            a = HH(a, b, c, d, m[i + 1], 4, -1530992060);
            d = HH(d, a, b, c, m[i + 4], 11, 1272893353);
            c = HH(c, d, a, b, m[i + 7], 16, -155497632);
            b = HH(b, c, d, a, m[i + 10], 23, -1094730640);
            a = HH(a, b, c, d, m[i + 13], 4, 681279174);
            d = HH(d, a, b, c, m[i + 0], 11, -358537222);
            c = HH(c, d, a, b, m[i + 3], 16, -722521979);
            b = HH(b, c, d, a, m[i + 6], 23, 76029189);
            a = HH(a, b, c, d, m[i + 9], 4, -640364487);
            d = HH(d, a, b, c, m[i + 12], 11, -421815835);
            c = HH(c, d, a, b, m[i + 15], 16, 530742520);
            b = HH(b, c, d, a, m[i + 2], 23, -995338651);
            a = II(a, b, c, d, m[i + 0], 6, -198630844);
            d = II(d, a, b, c, m[i + 7], 10, 1126891415);
            c = II(c, d, a, b, m[i + 14], 15, -1416354905);
            b = II(b, c, d, a, m[i + 5], 21, -57434055);
            a = II(a, b, c, d, m[i + 12], 6, 1700485571);
            d = II(d, a, b, c, m[i + 3], 10, -1894986606);
            c = II(c, d, a, b, m[i + 10], 15, -1051523);
            b = II(b, c, d, a, m[i + 1], 21, -2054922799);
            a = II(a, b, c, d, m[i + 8], 6, 1873313359);
            d = II(d, a, b, c, m[i + 15], 10, -30611744);
            c = II(c, d, a, b, m[i + 6], 15, -1560198380);
            b = II(b, c, d, a, m[i + 13], 21, 1309151649);
            a = II(a, b, c, d, m[i + 4], 6, -145523070);
            d = II(d, a, b, c, m[i + 11], 10, -1120210379);
            c = II(c, d, a, b, m[i + 2], 15, 718787259);
            b = II(b, c, d, a, m[i + 9], 21, -343485551);
            a = a + aa >>> 0;
            b = b + bb >>> 0;
            c = c + cc >>> 0;
            d = d + dd >>> 0;
          }

          return crypt.endian([a, b, c, d]);
        }; // Auxiliary functions


        md5._ff = function (a, b, c, d, x, s, t) {
          var n = a + (b & c | ~b & d) + (x >>> 0) + t;
          return (n << s | n >>> 32 - s) + b;
        };

        md5._gg = function (a, b, c, d, x, s, t) {
          var n = a + (b & d | c & ~d) + (x >>> 0) + t;
          return (n << s | n >>> 32 - s) + b;
        };

        md5._hh = function (a, b, c, d, x, s, t) {
          var n = a + (b ^ c ^ d) + (x >>> 0) + t;
          return (n << s | n >>> 32 - s) + b;
        };

        md5._ii = function (a, b, c, d, x, s, t) {
          var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
          return (n << s | n >>> 32 - s) + b;
        }; // Package private blocksize


        md5._blocksize = 16;
        md5._digestsize = 16;

        module.exports = function (message, options) {
          if (message === undefined || message === null) throw new Error('Illegal argument ' + message);
          var digestbytes = crypt.wordsToBytes(md5(message, options));
          return options && options.asBytes ? digestbytes : options && options.asString ? bin.bytesToString(digestbytes) : crypt.bytesToHex(digestbytes);
        };
      })();
      /***/

    },

    /***/
    73071:
    /*!******************************************!*\
      !*** ./src/app/services/user.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserService": function UserService() {
          return (
            /* binding */
            _UserService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _utils_requests_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utils/requests/api */
      2191);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var _UserService = /*#__PURE__*/function (_utils_requests_api__) {
        _inherits(_UserService, _utils_requests_api__);

        var _super = _createSuper(_UserService);

        function _UserService(http) {
          var _this;

          _classCallCheck(this, _UserService);

          _this = _super.call(this, http);
          _this.http = http;
          _this.URL = "".concat(_this.URL_API, "users/users/");
          return _this;
        }

        _createClass(_UserService, [{
          key: "assingPermits",
          value: function assingPermits(id, permits) {
            return this.http.post("".concat(this.URL).concat(id, "/canApproven"), permits);
          }
        }, {
          key: "getAssingPermits",
          value: function getAssingPermits(id) {
            console.log(id);
            return this.http.get("".concat(this.URL, "permits/").concat(id));
          }
        }, {
          key: "getUserByUsername",
          value: function getUserByUsername(username) {
            return this.http.get("".concat(this.URL, "match/").concat(username));
          }
        }]);

        return _UserService;
      }(_utils_requests_api__WEBPACK_IMPORTED_MODULE_0__.API);

      _UserService.??fac = function UserService_Factory(t) {
        return new (t || _UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _UserService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: _UserService,
        factory: _UserService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    83937:
    /*!********************************************************************!*\
      !*** ./src/app/tabs/modules/user/user-edit/user-edit.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserEditComponent": function UserEditComponent() {
          return (
            /* binding */
            _UserEditComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../services/user.service */
      73071);
      /* harmony import */


      var _utils_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../utils/services/toast.service */
      31481);
      /* harmony import */


      var _utils_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../utils/services/loading.service */
      53689);
      /* harmony import */


      var md5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! md5 */
      28559);
      /* harmony import */


      var md5__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../services/role.service */
      66888);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _utils_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../utils/header/header.component */
      69475);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _utils_assing_tasks_assing_tasks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../utils/assing-tasks/assing-tasks.component */
      2649);

      function UserEditComponent_ng_container_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](1, "ion-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var validation_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](validation_r8.message);
        }
      }

      function UserEditComponent_ng_container_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, UserEditComponent_ng_container_15_div_1_Template, 4, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var validation_r8 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r0.newUser.get("username").hasError(validation_r8.type) && (ctx_r0.newUser.get("username").dirty || ctx_r0.newUser.get("username").touched));
        }
      }

      function UserEditComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](1, "ion-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "Este correo ya esta en uso");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function UserEditComponent_ng_container_24_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](1, "ion-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var validation_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](validation_r11.message);
        }
      }

      function UserEditComponent_ng_container_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, UserEditComponent_ng_container_24_div_1_Template, 4, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var validation_r11 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r2.newUser.get("password").hasError(validation_r11.type) && (ctx_r2.newUser.get("password").dirty || ctx_r2.newUser.get("password").touched));
        }
      }

      function UserEditComponent_ng_container_31_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](1, "ion-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var validation_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](validation_r14.message);
        }
      }

      function UserEditComponent_ng_container_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, UserEditComponent_ng_container_31_div_1_Template, 4, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var validation_r14 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r3.newUser.get("firstName").hasError(validation_r14.type) && (ctx_r3.newUser.get("firstName").dirty || ctx_r3.newUser.get("firstName").touched));
        }
      }

      function UserEditComponent_ng_container_38_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](1, "ion-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var validation_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](validation_r17.message);
        }
      }

      function UserEditComponent_ng_container_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, UserEditComponent_ng_container_38_div_1_Template, 4, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var validation_r17 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r4.newUser.get("lastName").hasError(validation_r17.type) && (ctx_r4.newUser.get("lastName").dirty || ctx_r4.newUser.get("lastName").touched));
        }
      }

      function UserEditComponent_ion_select_option_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "ion-select-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](2, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var role_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", role_r20._id);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind1"](2, 2, role_r20.description), " ");
        }
      }

      function UserEditComponent_ng_container_48_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](1, "ion-icon", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var validation_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](validation_r21.message);
        }
      }

      function UserEditComponent_ng_container_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, UserEditComponent_ng_container_48_div_1_Template, 4, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();
        }

        if (rf & 2) {
          var validation_r21 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r6.newUser.get("role").hasError(validation_r21.type) && (ctx_r6.newUser.get("role").dirty || ctx_r6.newUser.get("role").touched));
        }
      }

      function UserEditComponent_ion_card_58_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "ion-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, " Listado de Permisos de Aprobacion por usuario");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "app-assing-tasks", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("newPermits", function UserEditComponent_ion_card_58_Template_app_assing_tasks_newPermits_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

            return ctx_r24.onSubmitPermits($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("id", ctx_r7.id)("permits", ctx_r7.permits);
        }
      }

      var _UserEditComponent = /*#__PURE__*/function () {
        function _UserEditComponent(fb, route, userService, roleService, toastService, loadingService, router) {
          _classCallCheck(this, _UserEditComponent);

          this.fb = fb;
          this.route = route;
          this.userService = userService;
          this.roleService = roleService;
          this.toastService = toastService;
          this.loadingService = loadingService;
          this.router = router;
          this.canApproved = false;
          this.roles = [];
          this.id = '';
          this.userAlreadyExist = false;
          this.permits = [];
          this.loading = false;
          this.validation_messages = {
            'username': [{
              type: 'required',
              message: 'Usuario es requerido.'
            }, {
              type: 'pattern',
              message: 'Ingresa un Email valido'
            }],
            'password': [],
            'firstName': [{
              type: 'required',
              message: 'El nombre es requerido.'
            }],
            'lastName': [{
              type: 'required',
              message: 'El apellido es requerido.'
            }],
            'role': [{
              type: 'required',
              message: 'El Roll es requerido.'
            }]
          };
        }

        _createClass(_UserEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.loading = true;
                      this.newUser = this.fb.group({
                        username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
                        password: [''],
                        firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required])],
                        lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required])],
                        role: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required])],
                        active: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required])]
                      });
                      _context.next = 4;
                      return this.loadingService.presentLoading('Por favor Espere...');

                    case 4:
                      _context.t0 = _toConsumableArray;
                      _context.next = 7;
                      return this.roleService.list().toPromise();

                    case 7:
                      _context.t1 = _context.sent;
                      this.roles = (0, _context.t0)(_context.t1);
                      this.route.params.subscribe(function (params) {
                        if ('id' in params) {
                          _this2.id = params.id;

                          _this2.userService.get(_this2.id).subscribe(function (currentUser) {
                            if (currentUser.role['canApprove']) {
                              _this2.canApproved = true;
                            }

                            _this2.newUser.controls.username.setValue(currentUser.username);

                            _this2.newUser.controls.firstName.setValue(currentUser.firstName);

                            _this2.newUser.controls.lastName.setValue(currentUser.lastName);

                            _this2.newUser.controls.role.setValue(currentUser.role['_id']);

                            _this2.newUser.controls.active.setValue(currentUser.active);

                            if (_this2.canApproved) {
                              _this2.userService.getAssingPermits(_this2.id).subscribe(function (response) {
                                console.log({
                                  response: response
                                });

                                if (response) {
                                  _this2.permits = response['permitsRole'].map(function (current) {
                                    return Object.assign(Object.assign({}, current), {
                                      role: true
                                    });
                                  });
                                  _this2.permits = [].concat(_toConsumableArray(_this2.permits), _toConsumableArray(response['permitsUser']));
                                }

                                console.log(_this2.permits);
                                _this2.loading = false;

                                _this2.loadingService.close();
                              });
                            }
                          });
                        }

                        _this2.loadingService.close();
                      });

                    case 10:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getUserByUsername",
          value: function getUserByUsername() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var user;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.newUser.value.username !== '')) {
                        _context2.next = 8;
                        break;
                      }

                      _context2.next = 3;
                      return this.loadingService.presentLoading();

                    case 3:
                      _context2.next = 5;
                      return this.userService.getUserByUsername(this.newUser.value.username).toPromise();

                    case 5:
                      user = _context2.sent;

                      if (user) {
                        this.userAlreadyExist = true;
                      } else {
                        this.userAlreadyExist = false;
                      }

                      this.loadingService.close();

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "onSubmitPermits",
          value: function onSubmitPermits(permits) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(permits.length <= 0)) {
                        _context3.next = 4;
                        break;
                      }

                      this.toastService.show('Error', 'Tiene que seleccionar al menos un permiso', 'error');
                      _context3.next = 17;
                      break;

                    case 4:
                      _context3.next = 6;
                      return this.loadingService.presentLoading('Guardando Permisos');

                    case 6:
                      _context3.prev = 6;
                      _context3.next = 9;
                      return this.userService.assingPermits(this.id, permits).toPromise();

                    case 9:
                      this.toastService.show('Guardado Correctamente', 'Se modifico correctamente', 'success');
                      this.loadingService.close();
                      _context3.next = 17;
                      break;

                    case 13:
                      _context3.prev = 13;
                      _context3.t0 = _context3["catch"](6);
                      this.toastService.show('Error', 'No se pudieron guardar los permisos', 'error');
                      this.loadingService.close();

                    case 17:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[6, 13]]);
            }));
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this3 = this;

              var userBody;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingService.presentLoading('Guardando...');

                    case 2:
                      userBody = this.newUser.value;

                      if (userBody.password) {
                        userBody.password = md5__WEBPACK_IMPORTED_MODULE_3__(userBody.password);
                      }

                      if (this.id) {
                        delete userBody.username;
                        this.userService.update(this.id, userBody).subscribe(function (response) {
                          console.log({
                            response: response
                          });

                          _this3.loadingService.close();

                          _this3.toastService.show('Guardado Correctamente', 'Se modifico correctamente', 'success');

                          _this3.router.navigateByUrl('/app/user');
                        }, function (err) {
                          console.log({
                            err: err
                          });

                          _this3.loadingService.close();

                          _this3.toastService.show('Error', err, 'error');
                        });
                      } else {
                        this.userService.add(userBody).subscribe(function (response) {
                          console.log({
                            response: response
                          });

                          _this3.loadingService.close();

                          _this3.toastService.show('Guardado Correctamente', 'Se ha guardado correctamente', 'success');

                          _this3.router.navigateByUrl('/app/user');
                        }, function (err) {
                          console.log({
                            err: err
                          });

                          _this3.loadingService.close();

                          _this3.toastService.show('Error', err, 'error');
                        });
                      }

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return _UserEditComponent;
      }();

      _UserEditComponent.??fac = function UserEditComponent_Factory(t) {
        return new (t || _UserEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_services_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_utils_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_utils_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
      };

      _UserEditComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineComponent"]({
        type: _UserEditComponent,
        selectors: [["app-user-edit"]],
        decls: 59,
        vars: 14,
        consts: [[3, "titulo", "backButton"], [1, "ion-padding"], [3, "formGroup"], ["size-xs", "12", "size-md", "6", "size-lg", "4", "size-xl", "8", "offset-xl", "2"], ["position", "floating"], ["type", "email", "required", "", "formControlName", "username", 3, "disabled", "ionBlur", "ionFocus"], [1, "error-container"], [4, "ngFor", "ngForOf"], ["class", "error-message", 4, "ngIf"], ["type", "password", "formControlName", "password"], ["required", "", "formControlName", "firstName"], ["required", "", "formControlName", "lastName"], ["formControlName", "role", "placeholder", "Seleccione un Roll"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "active", "slot", "start"], ["size", "12"], ["expand", "block", "fill", "clear", "shape", "round", 3, "disabled", "click"], [4, "ngIf"], [1, "error-message"], ["name", "information-circle-outline"], [3, "value"], [3, "id", "permits", "newPermits"]],
        template: function UserEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](0, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "ion-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "ion-card");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "ion-col", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "ion-col", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "ion-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](12, "Email:");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](13, "ion-input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("ionBlur", function UserEditComponent_Template_ion_input_ionBlur_13_listener() {
              return ctx.getUserByUsername();
            })("ionFocus", function UserEditComponent_Template_ion_input_ionFocus_13_listener() {
              return ctx.userAlreadyExist = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](15, UserEditComponent_ng_container_15_Template, 2, 1, "ng-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](17, UserEditComponent_div_17_Template, 4, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](18, "ion-col", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](19, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](20, "ion-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](21, "Contrase\xF1a:");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](22, "ion-input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](24, UserEditComponent_ng_container_24_Template, 2, 1, "ng-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](25, "ion-col", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](26, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](27, "ion-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](28, "Nombres:");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](29, "ion-input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](30, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](31, UserEditComponent_ng_container_31_Template, 2, 1, "ng-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](32, "ion-col", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](33, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](34, "ion-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](35, "Apellidos:");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](36, "ion-input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](37, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](38, UserEditComponent_ng_container_38_Template, 2, 1, "ng-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](39, "ion-col", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](40, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](41, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](42, "Roll");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](43, "ion-select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](44, "ion-select-option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](45, "Seleccione...");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](46, UserEditComponent_ion_select_option_46_Template, 3, 4, "ion-select-option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](47, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](48, UserEditComponent_ng_container_48_Template, 2, 1, "ng-container", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](49, "ion-col", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](50, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](51, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](52, "Activo");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](53, "ion-checkbox", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](54, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](55, "ion-col", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](56, "ion-button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function UserEditComponent_Template_ion_button_click_56_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](57, " Guardar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](58, UserEditComponent_ion_card_58_Template, 7, 2, "ion-card", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("titulo", ctx.id ? "Editar Usuario" : "Crear Usuario")("backButton", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formGroup", ctx.newUser);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx.id ? "Editar Usuario" : "Crear Usuario");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disabled", ctx.id !== "");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx.validation_messages.username);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.userAlreadyExist);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx.validation_messages.password);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx.validation_messages.firstName);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx.validation_messages.lastName);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx.roles);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx.validation_messages.role);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disabled", !ctx.newUser.valid || ctx.userAlreadyExist);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.id !== "" && !ctx.loading && ctx.canApproved);
          }
        },
        directives: [_utils_header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCard, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSelect, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.SelectValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonSelectOption, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonIcon, _utils_assing_tasks_assing_tasks_component__WEBPACK_IMPORTED_MODULE_6__.AssingTasksComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.TitleCasePipe],
        styles: [".error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n.error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBQU47QUFFTTtFQUNFLGlEQUFBO1VBQUEsZ0RBQUE7QUFBUiIsImZpbGUiOiJ1c2VyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItY29udGFpbmVyIHtcbiAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICBtYXJnaW4gICAgIDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gICAgICBkaXNwbGF5ICAgIDogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2xvciAgICAgIDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICBmb250LXNpemUgIDogMTRweDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICB9XG4gICAgfVxuICB9Il19 */"]
      });
      /***/
    },

    /***/
    37499:
    /*!**********************************************************!*\
      !*** ./src/app/tabs/modules/user/user-routing.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserPageRoutingModule": function UserPageRoutingModule() {
          return (
            /* binding */
            _UserPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user-edit/user-edit.component */
      83937);
      /* harmony import */


      var _user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user.page */
      23350);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _user_page__WEBPACK_IMPORTED_MODULE_1__.UserPage
        }, {
          path: 'add',
          component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_0__.UserEditComponent
        }, {
          path: ':id',
          component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_0__.UserEditComponent
        }]
      }];

      var _UserPageRoutingModule = function _UserPageRoutingModule() {
        _classCallCheck(this, _UserPageRoutingModule);
      };

      _UserPageRoutingModule.??fac = function UserPageRoutingModule_Factory(t) {
        return new (t || _UserPageRoutingModule)();
      };

      _UserPageRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: _UserPageRoutingModule
      });
      _UserPageRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](_UserPageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    81002:
    /*!**************************************************!*\
      !*** ./src/app/tabs/modules/user/user.module.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserPageModule": function UserPageModule() {
          return (
            /* binding */
            _UserPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user-routing.module */
      37499);
      /* harmony import */


      var _user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user.page */
      23350);
      /* harmony import */


      var _utils_utils_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../utils/utils.module */
      24603);
      /* harmony import */


      var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-edit/user-edit.component */
      83937);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/input */
      83166);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _UserPageModule = function _UserPageModule() {
        _classCallCheck(this, _UserPageModule);
      };

      _UserPageModule.??fac = function UserPageModule_Factory(t) {
        return new (t || _UserPageModule)();
      };

      _UserPageModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: _UserPageModule
      });
      _UserPageModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserPageRoutingModule, _utils_utils_module__WEBPACK_IMPORTED_MODULE_2__.UtilsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](_UserPageModule, {
          declarations: [_user_page__WEBPACK_IMPORTED_MODULE_1__.UserPage, _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_3__.UserEditComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserPageRoutingModule, _utils_utils_module__WEBPACK_IMPORTED_MODULE_2__.UtilsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule]
        });
      })();
      /***/

    },

    /***/
    23350:
    /*!************************************************!*\
      !*** ./src/app/tabs/modules/user/user.page.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserPage": function UserPage() {
          return (
            /* binding */
            _UserPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../services/user.service */
      73071);
      /* harmony import */


      var _utils_generic_table_generic_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../utils/generic-table/generic-table.component */
      46338);
      /* harmony import */


      var _utils_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../utils/services/alert.service */
      76449);
      /* harmony import */


      var _utils_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../utils/services/toast.service */
      31481);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _utils_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../utils/header/header.component */
      69475);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _c0 = ["tabla"];

      function UserPage_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "ion-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function UserPage_ng_template_5_Template_ion_button_click_0_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r7);

            var item_r4 = restoredCtx.item;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

            return ctx_r6.onEdit(item_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "ion-icon", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, " Editar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "ion-button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function UserPage_ng_template_5_Template_ion_button_click_3_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r7);

            var item_r4 = restoredCtx.item;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

            return ctx_r8.onDelete(item_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](4, "ion-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5, " Eliminar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }
      }

      var _c1 = function _c1(a0) {
        return {
          opciones: a0
        };
      };

      var _UserPage = /*#__PURE__*/function () {
        function _UserPage(userService, router, route, alertService, toastService) {
          _classCallCheck(this, _UserPage);

          this.userService = userService;
          this.router = router;
          this.route = route;
          this.alertService = alertService;
          this.toastService = toastService;
          this.columns = [];
        }

        _createClass(_UserPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.columns = [{
              attribute: 'firstName',
              header: 'Nombre'
            }, {
              attribute: 'lastName',
              header: 'Apellido'
            }, {
              attribute: 'username',
              header: 'Usuario'
            }, {
              attribute: 'role.description',
              header: 'Role'
            }, {
              attribute: 'active',
              header: 'Esta Activo',
              type: 'bool'
            }, {
              attribute: 'createdDate',
              header: 'Creado el',
              type: 'date'
            }, {
              attribute: 'updatedDate',
              header: 'Modificado el',
              type: 'date'
            }, {
              attribute: '_id',
              header: "Opciones",
              template: "opciones"
            }];
          }
        }, {
          key: "onAdd",
          value: function onAdd() {
            this.router.navigate(['add'], {
              relativeTo: this.route
            });
          }
        }, {
          key: "onEdit",
          value: function onEdit(current) {
            this.router.navigate([current._id], {
              relativeTo: this.route
            });
          }
        }, {
          key: "onDelete",
          value: function onDelete(current) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this4 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.alertService.show('Confirmar Eliminacion', '??Esta Seguro que desea eliminar este usuario?', 'success', function () {
                        _this4.userService.remove(current._id).subscribe(function (response) {
                          _this4.toastService.show("Eliminado Correctamente", "El usuario fue eliminado correctamente", "success");

                          _this4.tabla.refresh();
                        }, function (err) {
                          console.log({
                            err: err
                          });

                          _this4.toastService.show("Error", err, "error");
                        });
                      });

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return _UserPage;
      }();

      _UserPage.??fac = function UserPage_Factory(t) {
        return new (t || _UserPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_utils_services_alert_service__WEBPACK_IMPORTED_MODULE_2__.AlertService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_utils_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService));
      };

      _UserPage.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({
        type: _UserPage,
        selectors: [["app-user"]],
        viewQuery: function UserPage_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????viewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.tabla = _t.first);
          }
        },
        decls: 9,
        vars: 8,
        consts: [["titulo", "Usuarios", 3, "backButton"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [3, "click"], ["name", "add"], [1, "ion-padding"], ["class", "options"], ["templateOpciones", ""], [3, "service", "templates", "serviceMethod", "columns", "btnAdd"], ["tabla", ""], ["fill", "clear", "shape", "round", 3, "click"], ["name", "create-outline"], ["fill", "clear", "shape", "round", "color", "danger", 3, "click"], ["name", "trash-outline"]],
        template: function UserPage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "ion-fab", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "ion-fab-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function UserPage_Template_ion_fab_button_click_2_listener() {
              return ctx.onAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "ion-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](5, UserPage_ng_template_5_Template, 6, 0, "ng-template", 5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["????templateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](7, "app-generic-table", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("backButton", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("service", ctx.userService)("templates", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction1"](6, _c1, _r0))("serviceMethod", "list")("columns", ctx.columns)("btnAdd", true);
          }
        },
        directives: [_utils_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _utils_generic_table_generic_table_component__WEBPACK_IMPORTED_MODULE_1__.GenericTableComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton],
        styles: [".options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQ0oiLCJmaWxlIjoidXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3B0aW9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tabs_modules_user_user_module_ts-es5.js.map