(self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 95107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: 'app', canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 15564)).then(m => m.TabsPageModule)
    },
    {
        path: 'security',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_security_security_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./security/security.module */ 71484)).then(m => m.SecurityPageModule)
    },
    {
        path: '',
        redirectTo: 'app/tab1',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/splash-screen */ 88592);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);




class AppComponent {
    constructor() {
        this.textDir = 'ltr';
        this.info = {
            version: "1.0.0",
            name: "App"
        };
        this.initializeApp();
    }
    initializeApp() {
        /* To make sure we provide the fastest app loading experience
           for our users, hide the splash screen automatically
           when the app is ready to be used:
    
            https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
        */
        _capacitor_splash_screen__WEBPACK_IMPORTED_MODULE_0__.SplashScreen.hide();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 28, vars: 5, consts: [[3, "dir"], ["contentId", "menu-content", "when", "false"], ["menuId", "siderbar", "contentId", "menu-content", 1, "app-sidemenu"], [1, "user-details-wrapper"], ["size", "12", 1, "item-menu"], ["height", "100px", "src", "http://www.grupobtp.com/wp-content/uploads/2018/10/logoo-300x232.png", "alt", ""], ["size", "12", 1, "user-info-wrapper", "item-menu"], [1, "user-name"], ["routerLink", "/app/tab1", 2, "cursor", "pointer"], [1, "menu-item"], ["slot", "start", 3, "name"], ["routerLink", "/app/user"], [2, "color", "rgba(0, 0, 0, 0.705)"], ["id", "menu-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-app", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-split-pane", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-list-header", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-menu-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-list-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Seguridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-menu-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Usuarios ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ion-router-outlet", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dir", ctx.textDir);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.info == null ? null : ctx.info.name, " Version: ", ctx.info == null ? null : ctx.info.version, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "business-outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", "person-circle-outline");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonApp, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonSplitPane, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonMenu, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonContent, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonListHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonMenuToggle, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.IonRouterOutlet], styles: ["[_nghost-%COMP%] {\n  --page-margin: var(--app-fair-margin);\n  --page-background: var(--app-background-alt-shade);\n  --page-headers-shadow-color: rgba(var(--ion-color-darkest-rgb), 0.4);\n}\n\n.user-name[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --padding-top: 0px;\n  --padding-bottom: 0px;\n  --background: var(--ion-color-primary);\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .item-menu[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%] {\n  --background: var(--page-background);\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-details-wrapper[_ngcontent-%COMP%] {\n  --ion-grid-column-padding: 0px;\n  color: var(--ion-color-lightest);\n  padding: var(--page-margin);\n  align-items: center;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-details-wrapper[_ngcontent-%COMP%]    + .user-details-wrapper[_ngcontent-%COMP%] {\n  padding-top: 0px;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%] {\n  padding-left: var(--page-margin);\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  margin: 0px 0px 5px;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-handle[_ngcontent-%COMP%] {\n  color: var(--ion-color-light-shade);\n  margin: 0px;\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .user-stat-value[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  font-weight: 500;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   .user-stats-wrapper[_ngcontent-%COMP%]   .user-stat-name[_ngcontent-%COMP%] {\n  color: var(--ion-color-light-shade);\n  font-size: 14px;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  --ion-text-color: var(--ion-color-light-shade);\n  --ion-text-color-rgb: var(--ion-color-primary-rgb);\n  --ion-item-background: var(--page-background);\n  --ion-item-border-color: transparent;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-list-header[_ngcontent-%COMP%] {\n  --color: rgba(var(--ion-color-primary), 0.6);\n  \n  text-transform: uppercase;\n  box-shadow: inset 0px -4px 8px -2px var(--page-headers-shadow-color);\n  -webkit-padding-start: var(--page-margin);\n          padding-inline-start: var(--page-margin);\n  font-size: 14px;\n  margin-bottom: 8px;\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --border-width: 0px !important;\n  --padding-start: var(--page-margin);\n  --background-activated: var(--ion-color-medium);\n}\n\n.app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbWVudS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUNBQUE7RUFDQSxrREFBQTtFQUVBLG9FQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0FBRkY7O0FBT0U7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0FBSko7O0FBT0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVFFO0VBQ0Usb0NBQUE7QUFOSjs7QUFTRTtFQUNFLDhCQUFBO0VBR0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBVEo7O0FBV0k7RUFDRSxnQkFBQTtBQVROOztBQWFFO0VBQ0UsZ0NBQUE7QUFYSjs7QUFhSTtFQUNFLG1CQUFBO0FBWE47O0FBY0k7RUFDRSxtQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFaTjs7QUFnQkU7RUFDRSxrQkFBQTtBQWRKOztBQWdCSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFkTjs7QUFpQkk7RUFDRSxtQ0FBQTtFQUNBLGVBQUE7QUFmTjs7QUFvQkU7RUFDRSw4Q0FBQTtFQUNBLGtEQUFBO0VBQ0EsNkNBQUE7RUFDQSxvQ0FBQTtBQWxCSjs7QUFvQkk7RUFDRSw0Q0FBQTtFQUNBLDBEQUFBO0VBRUEseUJBQUE7RUFDQSxvRUFBQTtFQUNBLHlDQUFBO1VBQUEsd0NBQUE7RUFFQSxlQUFBO0VBQ0Esa0JBQUE7QUFwQk47O0FBdUJJO0VBQ0UsOEJBQUE7RUFDQSxtQ0FBQTtFQUNBLCtDQUFBO0FBckJOOztBQXdCSTtFQUNFLCtCQUFBO0FBdEJOIiwiZmlsZSI6InNpZGUtbWVudS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW4gICAgOiB2YXIoLS1hcHAtZmFpci1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtYWx0LXNoYWRlKTtcblxuICAtLXBhZ2UtaGVhZGVycy1zaGFkb3ctY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmtlc3QtcmdiKSwgMC40KTtcbn1cblxuLnVzZXItbmFtZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4uYXBwLXNpZGVtZW51IHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIC0tcGFkZGluZy1zdGFydCA6IDBweDtcbiAgICAtLXBhZGRpbmctZW5kICAgOiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcCAgIDogMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAtLWJhY2tncm91bmQgICAgOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICAuaXRlbS1tZW51IHtcbiAgICBkaXNwbGF5ICAgICAgICA6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXMgICAgOiBjZW50ZXI7XG4gIH1cblxuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICB9XG5cbiAgLnVzZXItZGV0YWlscy13cmFwcGVyIHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwLjE1KTtcbiAgICBjb2xvciAgICAgIDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgICBwYWRkaW5nICAgIDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmKy51c2VyLWRldGFpbHMtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC51c2VyLWluZm8td3JhcHBlciB7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAudXNlci1uYW1lIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gICAgfVxuXG4gICAgLnVzZXItaGFuZGxlIHtcbiAgICAgIGNvbG9yICAgICAgOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgICAgbWFyZ2luICAgICA6IDBweDtcbiAgICAgIGZvbnQtc2l6ZSAgOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gIH1cblxuICAudXNlci1zdGF0cy13cmFwcGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAudXNlci1zdGF0LXZhbHVlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgZm9udC13ZWlnaHQgOiA1MDA7XG4gICAgfVxuXG4gICAgLnVzZXItc3RhdC1uYW1lIHtcbiAgICAgIGNvbG9yICAgIDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cblxuICAvLyBNZW51IGxpc3QgaXRlbXNcbiAgaW9uLWxpc3Qge1xuICAgIC0taW9uLXRleHQtY29sb3IgICAgICAgOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAgIC0taW9uLXRleHQtY29sb3ItcmdiICAgOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpO1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZCAgOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAgIC0taW9uLWl0ZW0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgIGlvbi1saXN0LWhlYWRlciB7XG4gICAgICAtLWNvbG9yICAgOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KSwgMC42KTtcbiAgICAgIC8qIC0tY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLXJnYiksIDAuNik7ICovXG5cbiAgICAgIHRleHQtdHJhbnNmb3JtICAgICAgOiB1cHBlcmNhc2U7XG4gICAgICBib3gtc2hhZG93ICAgICAgICAgIDogaW5zZXQgMHB4IC00cHggOHB4IC0ycHggdmFyKC0tcGFnZS1oZWFkZXJzLXNoYWRvdy1jb2xvcik7XG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuXG4gICAgICBmb250LXNpemUgICAgOiAxNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYm9yZGVyLXdpZHRoICAgICAgICA6IDBweCAhaW1wb3J0YW50O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0ICAgICAgIDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgfVxuXG4gICAgaW9uLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gIH1cbn0iXX0= */", "app-image-shell.user-avatar[_ngcontent-%COMP%] {\n  --image-shell-loading-background: rgba(var(--ion-color-light-rgb), 0.15);\n  --image-shell-border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbWVudS5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0VBQUE7RUFDQSxnQ0FBQTtBQUNGIiwiZmlsZSI6InNpZGUtbWVudS5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLnVzZXItYXZhdGFyIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMTUpO1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiJdfQ== */", "@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .app-sidemenu[_ngcontent-%COMP%]   .user-info-wrapper[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .app-sidemenu[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .interests-to-follow-slide[_ngcontent-%COMP%]   .custom-checkbox[_ngcontent-%COMP%]   .checkbox-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtbWVudS5yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsNENBQUE7QUFDQTtFQVlNO0lBQ0UsZUFBQTtFQWZOO0VBb0JJO0lBQ0UsZUFBQTtFQWxCTjtBQUNGO0FBdUJBLHFEQUFBO0FBQ0E7RUFZTTtJQUNFLGVBQUE7RUFoQ047QUFDRjtBQXFDQSxrREFBQTtBQWFBLHFDQUFBO0FBYUEsaURBQUEiLCJmaWxlIjoic2lkZS1tZW51LnJlc3BvbnNpdmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChOb3RlOiBEb24ndCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBkZXZpY2VzIGFzIGl0IG1heSBicmVhayB0aGUgY29ycmVjdCBjc3MgcHJlY2VkZW5jZSlcblxuLy8gKHNlZTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvbWVkaWEtcXVlcmllcy1mb3Itc3RhbmRhcmQtZGV2aWNlcy8jaXBob25lLXF1ZXJpZXMpXG4vLyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc3NTAyNjEvMTExNjk1OSlcblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiAyLzMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmFwcC1zaWRlbWVudSB7XG4gICAgLnVzZXItaW5mby13cmFwcGVyIHtcbiAgICAgIC51c2VyLW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWxpc3Qge1xuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA1NjhweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAgLyA3MSlcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuaW50ZXJlc3RzLXRvLWZvbGxvdy1zbGlkZSB7XG4gICAgLmN1c3RvbS1jaGVja2JveCB7XG4gICAgICAuY2hlY2tib3gtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2LCA2UywgNyBhbmQgOCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA2NjdweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcblxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA4MTJweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG5cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYrLCA3KyBhbmQgOCsgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzM2cHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokenGetter": function() { return /* binding */ tokenGetter; },
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 75835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @auth0/angular-jwt */ 6686);
/* harmony import */ var _utils_requests_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/requests/api */ 2191);
/* harmony import */ var _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/jwt.interceptor */ 53543);
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/error.interceptor */ 92379);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);















function tokenGetter() {
    return localStorage.getItem(_utils_requests_api__WEBPACK_IMPORTED_MODULE_2__.API.TOKEN);
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _interceptors_jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__.JwtInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS, useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__.ErrorInterceptor, multi: true }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__.JwtModule.forRoot({
                config: {
                    tokenGetter: tokenGetter,
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_12__.JwtModule] }); })();


/***/ }),

/***/ 95107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": function() { return /* binding */ AuthGuard; }
/* harmony export */ });
/* harmony import */ var _security_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../security/services/auth.service */ 92283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    /**
     * @function canActivate() retorna verdadero en caso de que exista una sesión activa,
     * en caso contrario retorna falso
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {(Observable<boolean> | Promise<boolean> | boolean)}
     * @memberof AuthGuard
     */
    canActivate(route, state) {
        const currentToken = this.authenticationService.currentToken;
        if (currentToken) {
            return true;
        }
        this.router.navigate(['/security/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_security_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92379:
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": function() { return /* binding */ ErrorInterceptor; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _security_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../security/services/auth.service */ 92283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);






class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    /**
     * @function intercept() Intercepta la petición HTTP que se esté realizando
     * y capta cualquier error que ocurra en dicha petición HTTP
     * @param {HttpRequest<any>} request
     * @param {HttpHandler} next
     * @returns {Observable<HttpEvent<any>>}
     * @memberof ErrorInterceptor
     */
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
            if (err.status === 401) {
                this.authenticationService.logout().subscribe(() => { });
                // auto logout if 401 response returned from api
                console.error('Error.Interceptor línea 16: Unauthorized');
            }
            const error = err.error.message || err.statusText;
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_security_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 53543:
/*!*************************************************!*\
  !*** ./src/app/interceptors/jwt.interceptor.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": function() { return /* binding */ JwtInterceptor; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var tdelta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tdelta */ 53600);
/* harmony import */ var _security_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../security/services/auth.service */ 92283);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _utils_requests_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/requests/api */ 2191);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);












class JwtInterceptor {
    constructor(injector, router) {
        this.injector = injector;
        this.router = router;
        this.currentAuthRequest = false;
    }
    intercept(request, next) {
        console.log('Hello desde el intercep');
        const authenticationService = this.injector.get(_security_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService);
        // const userService = this.injector.get(UserService);
        const token = localStorage.getItem(_utils_requests_api__WEBPACK_IMPORTED_MODULE_2__.API.TOKEN);
        const date_last_token_refresh = localStorage.getItem(_utils_requests_api__WEBPACK_IMPORTED_MODULE_2__.API.DATE_LAST_TOKEN_REFRESH);
        const dateLast = new Date(date_last_token_refresh);
        const dateNow = new Date();
        const diffDate = (tdelta__WEBPACK_IMPORTED_MODULE_0__.default.diff(dateLast, dateNow).durationInMS / 1000);
        // if (!request.headers.has('Content-Type')) {
        //     request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
        // }
        /**
         * @conditional Si el usuario es válido, verifica si hay alguna peticion de Actualizacion
         * para el AccesToken, si no hay peticion se consulta el AccesToken el cual es retornado como
         * un observable luego se realiza el proceso de clonacion de cabeceras para enviar el
         * AccesToken al servidor
         */
        console.log(diffDate, _utils_requests_api__WEBPACK_IMPORTED_MODULE_2__.API.TOKEN_DURATION);
        if (token) {
            if (diffDate >= _utils_requests_api__WEBPACK_IMPORTED_MODULE_2__.API.TOKEN_DURATION) {
                const service = authenticationService.gNewAccesToken();
                return service.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)((tokenAcces) => {
                    localStorage.setItem(_utils_requests_api__WEBPACK_IMPORTED_MODULE_2__.API.TOKEN, tokenAcces);
                    const date = moment__WEBPACK_IMPORTED_MODULE_3__(new Date()).format();
                    localStorage.setItem(_utils_requests_api__WEBPACK_IMPORTED_MODULE_2__.API.DATE_LAST_TOKEN_REFRESH, date);
                    request = request.clone({
                        headers: request.headers.set('Authorization', `Bearer ${tokenAcces}`)
                    });
                    return next.handle(request);
                }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((error) => {
                    authenticationService.logout().subscribe(data => {
                    });
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error);
                }));
            }
            request = request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) });
        }
        /**
         * @return En teoría solo debe ejecutarse una vez, la cual es al momento
         * en el que un usuario inicia sesión
        */
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((event) => {
            return event;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(error);
        }));
    }
    ngOnDestroy() {
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 92283:
/*!***************************************************!*\
  !*** ./src/app/security/services/auth.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": function() { return /* binding */ AuthService; }
/* harmony export */ });
/* harmony import */ var _utils_requests_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/requests/api */ 2191);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 78345);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 35226);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 51307);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);









class AuthService extends _utils_requests_api__WEBPACK_IMPORTED_MODULE_0__.API {
    constructor(http, router) {
        super(http);
        this.http = http;
        this.router = router;
        this.URL = `${this.URL_API}users/users/`;
        this.URL_AUTH = `${this.URL_API}users/`;
        this.user_actual = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
    }
    get getUser() {
        return this.user_actual;
    }
    login(email, password) {
        return this.http
            .post(`${this.URL_AUTH}authenticate/`, {
            username: email,
            password
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            localStorage.setItem(_utils_requests_api__WEBPACK_IMPORTED_MODULE_0__.API.NAME, (response.firstName + ' ' + response.lastName));
            localStorage.setItem(_utils_requests_api__WEBPACK_IMPORTED_MODULE_0__.API.EMAIL, email);
            localStorage.setItem(_utils_requests_api__WEBPACK_IMPORTED_MODULE_0__.API.TOKEN, response.accesToken);
            let date = moment__WEBPACK_IMPORTED_MODULE_1__(new Date()).format();
            localStorage.setItem(_utils_requests_api__WEBPACK_IMPORTED_MODULE_0__.API.DATE_LAST_TOKEN_REFRESH, date);
            console.log(_utils_requests_api__WEBPACK_IMPORTED_MODULE_0__.API.DATE_LAST_TOKEN_REFRESH, date);
            this.user_actual.next(response);
            //this.actual().subscribe();
            return response;
        }));
    }
    gNewAccesToken() {
        const token = localStorage.getItem(_utils_requests_api__WEBPACK_IMPORTED_MODULE_0__.API.TOKEN);
        const username = localStorage.getItem(_utils_requests_api__WEBPACK_IMPORTED_MODULE_0__.API.EMAIL);
        console.log('hola 2');
        return this.http.post(`${this.URL_AUTH}/token`, {
            username,
            tokenRefresh: token
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(error => this.handleError(error)));
    }
    logout() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable((observe) => {
            localStorage.removeItem(_utils_requests_api__WEBPACK_IMPORTED_MODULE_0__.API.TOKEN);
            localStorage.removeItem(_utils_requests_api__WEBPACK_IMPORTED_MODULE_0__.API.DATE_LAST_TOKEN_REFRESH);
            localStorage.removeItem(_utils_requests_api__WEBPACK_IMPORTED_MODULE_0__.API.EMAIL);
            localStorage.removeItem(_utils_requests_api__WEBPACK_IMPORTED_MODULE_0__.API.NAME);
            localStorage.clear();
            this.$actual = null;
            this.user_actual.next(null);
            this.user_actual.subscribe();
            observe.next();
            observe.complete();
            this.router.navigate(['/security/login']);
        });
    }
    actual() {
        if (this.user_actual.value && localStorage.getItem(_utils_requests_api__WEBPACK_IMPORTED_MODULE_0__.API.TOKEN)) {
            return this.user_actual;
        }
        this.http.get(`${this.URL}current/`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.publishReplay)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.refCount)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            this.user_actual.next(response);
            console.log(response);
            //console.log('entro')
            return response;
        }));
        return this.user_actual;
    }
    get currentToken() {
        const token = localStorage.getItem(_utils_requests_api__WEBPACK_IMPORTED_MODULE_0__.API.TOKEN);
        return token;
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.error('Ha ocurrido un Error: ', error.message);
        }
        else {
            console.error(`Backend retornó el siguiente codigo: ${error.status}, ` +
                `El body fue: ${error.error}`);
        }
        return ((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)('Ha ocurrido un error; por favor intente mas tarde.'));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2191:
/*!***************************************!*\
  !*** ./src/app/utils/requests/api.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API": function() { return /* binding */ API; }
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);




class API {
    constructor(http) {
        this.http = http;
        this.URL_API = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API;
    }
    /**
  * Funcion que ejecuta una solicitud post para
  * Guardar el objeto
  * @param value objeto a guardar
  */
    add(value) {
        return this.http.post(this.URL, value);
    }
    /**
       * Funcion que ejecuta un solicitud get y retorna un lista
       * de objeto
       * @param params parametros para el query params
       */
    list(params) {
        return this.http.get(this.URL, { params });
    }
    /**
   * Funcion que ejecuta una solicitud get para retornar
   * un solo object
   * @param id del objeto a retornar
   * @param params query params que se pasan con la consulta get
   */
    get(id, params) {
        return this.http.get(this.URL + id + '', { params });
    }
    /**
   * Funcion que ejecuta una solicitud put para actualizar
   * un objeto
   *
   * @param id del objeto
   * @param value objeto con las modificaciones
   */
    update(id, value) {
        return this.http
            .put(this.URL + id + '/', value);
    }
    /**
 * Funcion que ejecuta una solicitud delete para eliminar un
 * objeto
 * @param id del objeto
 */
    remove(id) {
        return this.http
            .delete(this.URL + id + '/');
    }
    /**
     * Funcion para procesar una url diferente del
     * objeto
     */
    execute(url) {
        return this.http.get(url);
    }
}
API.NAME = 'name';
API.EMAIL = 'email';
API.TOKEN = 'access_token';
API.DATE_LAST_TOKEN_REFRESH = 'date_last_token_refresh';
API.TOKEN_DURATION = 55;
API.ɵfac = function API_Factory(t) { return new (t || API)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
API.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: API, factory: API.ɵfac });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API: "http://127.0.0.1:4000/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 32404);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));
// Call the element loader after the platform has been bootstrapped
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__.defineCustomElements)(window);


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		86030,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 55899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./pwa-action-sheet.entry.js": [
		79437,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		18025,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		64262,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		58206,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		24297,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 55899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": 26431,
	"./af.js": 26431,
	"./ar": 81286,
	"./ar-dz": 1616,
	"./ar-dz.js": 1616,
	"./ar-kw": 9759,
	"./ar-kw.js": 9759,
	"./ar-ly": 43160,
	"./ar-ly.js": 43160,
	"./ar-ma": 62551,
	"./ar-ma.js": 62551,
	"./ar-sa": 79989,
	"./ar-sa.js": 79989,
	"./ar-tn": 6962,
	"./ar-tn.js": 6962,
	"./ar.js": 81286,
	"./az": 15887,
	"./az.js": 15887,
	"./be": 14572,
	"./be.js": 14572,
	"./bg": 3276,
	"./bg.js": 3276,
	"./bm": 93344,
	"./bm.js": 93344,
	"./bn": 58985,
	"./bn-bd": 83990,
	"./bn-bd.js": 83990,
	"./bn.js": 58985,
	"./bo": 94391,
	"./bo.js": 94391,
	"./br": 46728,
	"./br.js": 46728,
	"./bs": 5536,
	"./bs.js": 5536,
	"./ca": 41043,
	"./ca.js": 41043,
	"./cs": 70420,
	"./cs.js": 70420,
	"./cv": 33513,
	"./cv.js": 33513,
	"./cy": 6771,
	"./cy.js": 6771,
	"./da": 47978,
	"./da.js": 47978,
	"./de": 46061,
	"./de-at": 25204,
	"./de-at.js": 25204,
	"./de-ch": 2653,
	"./de-ch.js": 2653,
	"./de.js": 46061,
	"./dv": 85,
	"./dv.js": 85,
	"./el": 8579,
	"./el.js": 8579,
	"./en-au": 25724,
	"./en-au.js": 25724,
	"./en-ca": 10525,
	"./en-ca.js": 10525,
	"./en-gb": 52847,
	"./en-gb.js": 52847,
	"./en-ie": 67216,
	"./en-ie.js": 67216,
	"./en-il": 39305,
	"./en-il.js": 39305,
	"./en-in": 73364,
	"./en-in.js": 73364,
	"./en-nz": 79130,
	"./en-nz.js": 79130,
	"./en-sg": 11161,
	"./en-sg.js": 11161,
	"./eo": 50802,
	"./eo.js": 50802,
	"./es": 40328,
	"./es-do": 45551,
	"./es-do.js": 45551,
	"./es-mx": 75615,
	"./es-mx.js": 75615,
	"./es-us": 64790,
	"./es-us.js": 64790,
	"./es.js": 40328,
	"./et": 96389,
	"./et.js": 96389,
	"./eu": 52961,
	"./eu.js": 52961,
	"./fa": 26151,
	"./fa.js": 26151,
	"./fi": 7997,
	"./fi.js": 7997,
	"./fil": 58898,
	"./fil.js": 58898,
	"./fo": 37779,
	"./fo.js": 37779,
	"./fr": 28174,
	"./fr-ca": 3287,
	"./fr-ca.js": 3287,
	"./fr-ch": 38867,
	"./fr-ch.js": 38867,
	"./fr.js": 28174,
	"./fy": 50452,
	"./fy.js": 50452,
	"./ga": 45014,
	"./ga.js": 45014,
	"./gd": 74127,
	"./gd.js": 74127,
	"./gl": 72124,
	"./gl.js": 72124,
	"./gom-deva": 6444,
	"./gom-deva.js": 6444,
	"./gom-latn": 37953,
	"./gom-latn.js": 37953,
	"./gu": 76604,
	"./gu.js": 76604,
	"./he": 1222,
	"./he.js": 1222,
	"./hi": 74235,
	"./hi.js": 74235,
	"./hr": 622,
	"./hr.js": 622,
	"./hu": 37735,
	"./hu.js": 37735,
	"./hy-am": 90402,
	"./hy-am.js": 90402,
	"./id": 59187,
	"./id.js": 59187,
	"./is": 30536,
	"./is.js": 30536,
	"./it": 35007,
	"./it-ch": 94667,
	"./it-ch.js": 94667,
	"./it.js": 35007,
	"./ja": 62093,
	"./ja.js": 62093,
	"./jv": 80059,
	"./jv.js": 80059,
	"./ka": 66870,
	"./ka.js": 66870,
	"./kk": 80880,
	"./kk.js": 80880,
	"./km": 1083,
	"./km.js": 1083,
	"./kn": 68785,
	"./kn.js": 68785,
	"./ko": 21721,
	"./ko.js": 21721,
	"./ku": 37851,
	"./ku.js": 37851,
	"./ky": 1727,
	"./ky.js": 1727,
	"./lb": 40346,
	"./lb.js": 40346,
	"./lo": 93002,
	"./lo.js": 93002,
	"./lt": 64035,
	"./lt.js": 64035,
	"./lv": 56927,
	"./lv.js": 56927,
	"./me": 5634,
	"./me.js": 5634,
	"./mi": 94173,
	"./mi.js": 94173,
	"./mk": 86320,
	"./mk.js": 86320,
	"./ml": 11705,
	"./ml.js": 11705,
	"./mn": 31062,
	"./mn.js": 31062,
	"./mr": 92805,
	"./mr.js": 92805,
	"./ms": 11341,
	"./ms-my": 59900,
	"./ms-my.js": 59900,
	"./ms.js": 11341,
	"./mt": 37734,
	"./mt.js": 37734,
	"./my": 19034,
	"./my.js": 19034,
	"./nb": 9324,
	"./nb.js": 9324,
	"./ne": 46495,
	"./ne.js": 46495,
	"./nl": 70673,
	"./nl-be": 76272,
	"./nl-be.js": 76272,
	"./nl.js": 70673,
	"./nn": 72486,
	"./nn.js": 72486,
	"./oc-lnc": 46219,
	"./oc-lnc.js": 46219,
	"./pa-in": 2829,
	"./pa-in.js": 2829,
	"./pl": 78444,
	"./pl.js": 78444,
	"./pt": 53170,
	"./pt-br": 66117,
	"./pt-br.js": 66117,
	"./pt.js": 53170,
	"./ro": 96587,
	"./ro.js": 96587,
	"./ru": 39264,
	"./ru.js": 39264,
	"./sd": 42135,
	"./sd.js": 42135,
	"./se": 95366,
	"./se.js": 95366,
	"./si": 93379,
	"./si.js": 93379,
	"./sk": 46143,
	"./sk.js": 46143,
	"./sl": 196,
	"./sl.js": 196,
	"./sq": 21082,
	"./sq.js": 21082,
	"./sr": 91621,
	"./sr-cyrl": 98963,
	"./sr-cyrl.js": 98963,
	"./sr.js": 91621,
	"./ss": 41404,
	"./ss.js": 41404,
	"./sv": 55685,
	"./sv.js": 55685,
	"./sw": 3872,
	"./sw.js": 3872,
	"./ta": 54106,
	"./ta.js": 54106,
	"./te": 39204,
	"./te.js": 39204,
	"./tet": 83692,
	"./tet.js": 83692,
	"./tg": 86361,
	"./tg.js": 86361,
	"./th": 31735,
	"./th.js": 31735,
	"./tk": 1568,
	"./tk.js": 1568,
	"./tl-ph": 96129,
	"./tl-ph.js": 96129,
	"./tlh": 13759,
	"./tlh.js": 13759,
	"./tr": 81644,
	"./tr.js": 81644,
	"./tzl": 90875,
	"./tzl.js": 90875,
	"./tzm": 16878,
	"./tzm-latn": 11041,
	"./tzm-latn.js": 11041,
	"./tzm.js": 16878,
	"./ug-cn": 74357,
	"./ug-cn.js": 74357,
	"./uk": 74810,
	"./uk.js": 74810,
	"./ur": 86794,
	"./ur.js": 86794,
	"./uz": 28966,
	"./uz-latn": 77959,
	"./uz-latn.js": 77959,
	"./uz.js": 28966,
	"./vi": 35386,
	"./vi.js": 35386,
	"./x-pseudo": 23156,
	"./x-pseudo.js": 23156,
	"./yo": 68028,
	"./yo.js": 68028,
	"./zh-cn": 9330,
	"./zh-cn.js": 9330,
	"./zh-hk": 89380,
	"./zh-hk.js": 89380,
	"./zh-mo": 60874,
	"./zh-mo.js": 60874,
	"./zh-tw": 96508,
	"./zh-tw.js": 96508
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
webpackContext.id = 46700;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map