(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_tab1_tab1_module_ts"], {
    /***/
    2168:
    /*!*************************************!*\
      !*** ./src/app/tab1/tab1.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1PageModule": function Tab1PageModule() {
          return (
            /* binding */
            _Tab1PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tab1_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab1.page */
      46923);
      /* harmony import */


      var _utils_utils_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../utils/utils.module */
      24603);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _Tab1PageModule = function _Tab1PageModule() {
        _classCallCheck(this, _Tab1PageModule);
      };

      _Tab1PageModule.ɵfac = function Tab1PageModule_Factory(t) {
        return new (t || _Tab1PageModule)();
      };

      _Tab1PageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _Tab1PageModule
      });
      _Tab1PageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _utils_utils_module__WEBPACK_IMPORTED_MODULE_1__.UtilsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
          path: '',
          component: _tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page
        }])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_Tab1PageModule, {
          declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_0__.Tab1Page],
          imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _utils_utils_module__WEBPACK_IMPORTED_MODULE_1__.UtilsModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    46923:
    /*!***********************************!*\
      !*** ./src/app/tab1/tab1.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab1Page": function Tab1Page() {
          return (
            /* binding */
            _Tab1Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _utils_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../utils/header/header.component */
      69475);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _Tab1Page = function _Tab1Page() {
        _classCallCheck(this, _Tab1Page);
      };

      _Tab1Page.ɵfac = function Tab1Page_Factory(t) {
        return new (t || _Tab1Page)();
      };

      _Tab1Page.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _Tab1Page,
        selectors: [["app-tab1"]],
        decls: 4,
        vars: 0,
        consts: [["titulo", "Dashboard"]],
        template: function Tab1Page_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Bienvenidos al Tab 1 page");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_utils_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent],
        styles: ["ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRiIsImZpbGUiOiJ0YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn1cbiJdfQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab1_tab1_module_ts-es5.js.map