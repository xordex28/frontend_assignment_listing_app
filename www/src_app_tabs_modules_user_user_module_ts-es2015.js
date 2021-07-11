(self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_tabs_modules_user_user_module_ts"],{

/***/ 37499:
/*!**********************************************************!*\
  !*** ./src/app/tabs/modules/user/user-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageRoutingModule": function() { return /* binding */ UserPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.page */ 23350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: '',
        component: _user_page__WEBPACK_IMPORTED_MODULE_0__.UserPage
    }
];
class UserPageRoutingModule {
}
UserPageRoutingModule.ɵfac = function UserPageRoutingModule_Factory(t) { return new (t || UserPageRoutingModule)(); };
UserPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UserPageRoutingModule });
UserPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 81002:
/*!**************************************************!*\
  !*** ./src/app/tabs/modules/user/user.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPageModule": function() { return /* binding */ UserPageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-routing.module */ 37499);
/* harmony import */ var _user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.page */ 23350);
/* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/utils.module */ 24603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);







class UserPageModule {
}
UserPageModule.ɵfac = function UserPageModule_Factory(t) { return new (t || UserPageModule)(); };
UserPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UserPageModule });
UserPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserPageRoutingModule,
            _utils_utils_module__WEBPACK_IMPORTED_MODULE_2__.UtilsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UserPageModule, { declarations: [_user_page__WEBPACK_IMPORTED_MODULE_1__.UserPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserPageRoutingModule,
        _utils_utils_module__WEBPACK_IMPORTED_MODULE_2__.UtilsModule] }); })();


/***/ }),

/***/ 23350:
/*!************************************************!*\
  !*** ./src/app/tabs/modules/user/user.page.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPage": function() { return /* binding */ UserPage; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _utils_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/header/header.component */ 69475);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);



class UserPage {
    constructor() { }
    ngOnInit() {
    }
}
UserPage.ɵfac = function UserPage_Factory(t) { return new (t || UserPage)(); };
UserPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserPage, selectors: [["app-user"]], decls: 3, vars: 0, consts: [["titulo", "Usuarios"]], template: function UserPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\nHello from User\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_utils_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLnBhZ2Uuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_tabs_modules_user_user_module_ts-es2015.js.map