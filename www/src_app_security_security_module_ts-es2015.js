(self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_security_security_module_ts"],{

/***/ 50196:
/*!**********************************!*\
  !*** ./src/app/models/models.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 59148:
/*!**********************************************!*\
  !*** ./src/app/security/login/login.page.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 92283);
/* harmony import */ var _models_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/models */ 50196);
/* harmony import */ var _utils_requests_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/requests/toast.service */ 90564);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _utils_show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/show-hide-password/show-hide-password.component */ 54190);














function LoginPage_ng_container_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](validation_r2.message);
} }
function LoginPage_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginPage_ng_container_19_div_1_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.get("email").hasError(validation_r2.type) && (ctx_r0.loginForm.get("email").dirty || ctx_r0.loginForm.get("email").touched));
} }
function LoginPage_ng_container_24_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "ion-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](validation_r5.message);
} }
function LoginPage_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginPage_ng_container_24_div_1_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.loginForm.get("password").hasError(validation_r5.type) && (ctx_r1.loginForm.get("password").dirty || ctx_r1.loginForm.get("password").touched));
} }
class LoginPage {
    constructor(authService, toastService, router) {
        this.authService = authService;
        this.toastService = toastService;
        this.router = router;
        this.cargando = false;
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email es requerido.' },
                { type: 'pattern', message: 'Ingresa un Email valido' }
            ],
            'password': [
                { type: 'required', message: 'Password es requerida.' },
                { type: 'minlength', message: 'Password debe tener minino 5 caracteres.' }
            ]
        };
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
                'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('luis.gustavo.282000@gmail.com', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])),
                'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required
                ]))
            });
        });
    }
    login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.cargando = true;
            this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe((data) => {
                console.log(data);
                this.toastService.show('Ingreso Exitoso', 'Bienvenido al sistema', 'success');
                this.cargando = false;
                this.router.navigate(['/app/tab1']);
            }, (error) => {
                console.log(error);
                this.toastService.show('Error', error, 'error');
                this.cargando = false;
            });
        });
    }
    getUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.authService.list().subscribe((data) => {
                console.log(data);
            }, (error) => {
                console.log(error);
            });
        });
    }
}
LoginPage.ɵfac = function LoginPage_Factory(t) { return new (t || LoginPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_utils_requests_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
LoginPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LoginPage, selectors: [["app-login"]], decls: 33, vars: 5, consts: [[1, "full"], [1, "form"], [3, "formGroup", "ngSubmit"], ["size", "12", 1, "logo"], ["height", "100px", "src", "http://www.grupobtp.com/wp-content/uploads/2018/10/logoo-300x232.png", "alt", ""], ["size", "12"], [1, "title"], ["size-md", "10", "offset-md", "1"], ["lines", "full", 1, "inputs-list"], [1, "input-item"], ["type", "email", "placeholder", "Email", "formControlName", "email", "clearInput", "", "autocapitalize", "off", "inputmode", "email"], [1, "error-container"], [4, "ngFor", "ngForOf"], ["type", "password", "placeholder", "Password", "formControlName", "password"], ["type", "submit", "expand", "block", 1, "login-btn", 3, "disabled"], ["size-md", "10", "offset-md", "1", 1, "other-auth-options-row"], ["fill", "clear", 1, "forgot-btn", 3, "click"], ["class", "error-message", 4, "ngIf"], [1, "error-message"], ["name", "information-circle-outline"]], template: function LoginPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginPage_Template_form_ngSubmit_3_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Bienvenidos al Sistema ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-list", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "ion-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, LoginPage_ng_container_19_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "app-show-hide-password");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "ion-input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, LoginPage_ng_container_24_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "ion-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "ion-col", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ion-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginPage_Template_ion_button_click_31_listener() { return ctx.getUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Recuperar Contrase\u00F1a? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.validation_messages.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.validation_messages.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.loginForm.valid || ctx.cargando);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.cargando ? "Verificando..." : "Ingresar", " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonList, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInput, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.TextValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _utils_show_hide_password_show_hide_password_component__WEBPACK_IMPORTED_MODULE_3__.ShowHidePasswordComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonIcon], styles: [".full[_ngcontent-%COMP%] {\n  background-color: #428cff;\n  background-image: url('font.jpg');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.full[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(66, 140, 255, 0.2);\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.form[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 500px;\n  background-color: #fff;\n  border-radius: 15px;\n  z-index: 2;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #428cff;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 0px;\n}\n\n.other-auth-options-row[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.inputs-list[_ngcontent-%COMP%] {\n  --ion-item-background: var(--page-background);\n}\n\n.inputs-list[_ngcontent-%COMP%]   .input-item[_ngcontent-%COMP%] {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.inputs-list[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.inputs-list[_ngcontent-%COMP%]   .error-container[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSx5Q0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkNBQUE7QUFDRjs7QUFDRTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUdJO0VBQ0Usd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFETjs7QUFHTTtFQUNFLGlEQUFBO1VBQUEsZ0RBQUE7QUFEUiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbCB7XG4gIGJhY2tncm91bmQtY29sb3IgICA6ICM0MjhjZmY7XG4gIGJhY2tncm91bmQtaW1hZ2UgICA6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91ZC9mb250LmpwZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdCAgOiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplICAgIDogY292ZXI7XG4gIGhlaWdodCAgICAgICAgICAgICA6IDEwMCU7XG4gIGRpc3BsYXkgICAgICAgICAgICA6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudCAgICA6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXMgICAgICAgIDogY2VudGVyO1xufVxuXG4uZnVsbDpiZWZvcmUge1xuICBjb250ZW50ICAgICAgICAgOiAnJztcbiAgcG9zaXRpb24gICAgICAgIDogYWJzb2x1dGU7XG4gIHRvcCAgICAgICAgICAgICA6IDA7XG4gIGJvdHRvbSAgICAgICAgICA6IDA7XG4gIGxlZnQgICAgICAgICAgICA6IDA7XG4gIHJpZ2h0ICAgICAgICAgICA6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjYsIDE0MCwgMjU1LCAwLjIpO1xufVxuXG4ubG9nbyB7XG4gIGRpc3BsYXkgICAgICAgIDogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb3JtIHtcbiAgd2lkdGggICAgICAgICAgIDogNDAwcHg7XG4gIGhlaWdodCAgICAgICAgICA6IDUwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzICAgOiAxNXB4O1xuICB6LWluZGV4OiAyO1xufVxuXG4udGl0bGUge1xuICBjb2xvciAgICAgICAgOiAjNDI4Y2ZmO1xuICB0ZXh0LWFsaWduICAgOiBjZW50ZXI7XG4gIG1hcmdpbi10b3AgICA6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm90aGVyLWF1dGgtb3B0aW9ucy1yb3cge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnB1dHMtbGlzdCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcblxuICAuaW5wdXQtaXRlbSB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0ICAgIDogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQgICAgICA6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIH1cblxuICAuZXJyb3ItY29udGFpbmVyIHtcbiAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICBtYXJnaW4gICAgIDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gICAgICBkaXNwbGF5ICAgIDogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBjb2xvciAgICAgIDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgICBmb250LXNpemUgIDogMTRweDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */"] });


/***/ }),

/***/ 64329:
/*!*****************************************************!*\
  !*** ./src/app/security/security-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityPageRoutingModule": function() { return /* binding */ SecurityPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.page */ 59148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);




const routes = [
    {
        path: 'login',
        component: _login_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
class SecurityPageRoutingModule {
}
SecurityPageRoutingModule.ɵfac = function SecurityPageRoutingModule_Factory(t) { return new (t || SecurityPageRoutingModule)(); };
SecurityPageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SecurityPageRoutingModule });
SecurityPageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SecurityPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 71484:
/*!*********************************************!*\
  !*** ./src/app/security/security.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityPageModule": function() { return /* binding */ SecurityPageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _security_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security-routing.module */ 64329);
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.page */ 59148);
/* harmony import */ var _utils_utils_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/utils.module */ 24603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);







class SecurityPageModule {
}
SecurityPageModule.ɵfac = function SecurityPageModule_Factory(t) { return new (t || SecurityPageModule)(); };
SecurityPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SecurityPageModule });
SecurityPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _security_routing_module__WEBPACK_IMPORTED_MODULE_0__.SecurityPageRoutingModule,
            _utils_utils_module__WEBPACK_IMPORTED_MODULE_2__.UtilsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SecurityPageModule, { declarations: [_login_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
        _security_routing_module__WEBPACK_IMPORTED_MODULE_0__.SecurityPageRoutingModule,
        _utils_utils_module__WEBPACK_IMPORTED_MODULE_2__.UtilsModule] }); })();


/***/ }),

/***/ 90564:
/*!*************************************************!*\
  !*** ./src/app/utils/requests/toast.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": function() { return /* binding */ ToastService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);




class ToastService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    show(title, message, type) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            if (type === 'success') {
                const toast = yield this.toastController.create({
                    header: `${title}`,
                    message: `${message}`,
                    position: 'top',
                    duration: 5000,
                    color: "success"
                    /*       buttons: [
                            {
                              side: 'start',
                              icon: 'star',
                              text: 'Favorite',
                              handler: () => {
                                console.log('Favorite clicked');
                              }
                            }, {
                              text: 'Done',
                              role: 'cancel',
                              handler: () => {
                                console.log('Cancel clicked');
                              }
                            }
                          ] */
                });
                toast.present();
            }
            if (type === 'error') {
                const toast = yield this.toastController.create({
                    header: `${title}`,
                    message: `${message}`,
                    position: 'top',
                    duration: 3500,
                    color: "danger"
                    /*       buttons: [
                            {
                              side: 'start',
                              icon: 'star',
                              text: 'Favorite',
                              handler: () => {
                                console.log('Favorite clicked');
                              }
                            }, {
                              text: 'Done',
                              role: 'cancel',
                              handler: () => {
                                console.log('Cancel clicked');
                              }
                            }
                          ] */
                });
                toast.present();
            }
        });
    }
    showNotification(dataNotification) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: `${dataNotification.notification.title}`,
                message: `${dataNotification.notification.body}`,
                duration: 3000,
                cssClass: 'toast-custom-class',
            });
            toast.present();
        });
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ToastController)); };
ToastService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 64762:
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__spreadArray": function() { return /* binding */ __spreadArray; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ })

}]);
//# sourceMappingURL=src_app_security_security_module_ts-es2015.js.map