(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkphoto_gallery_ng_capacitor"] = self["webpackChunkphoto_gallery_ng_capacitor"] || []).push([["src_app_tabs_modules_role_role_module_ts"], {
    /***/
    47720:
    /*!********************************************************************!*\
      !*** ./src/app/tabs/modules/role/role-edit/role-edit.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RoleEditComponent": function RoleEditComponent() {
          return (
            /* binding */
            _RoleEditComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _services_role_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../../services/role.service */
      66888);
      /* harmony import */


      var _utils_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../utils/services/toast.service */
      31481);
      /* harmony import */


      var _utils_services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../utils/services/loading.service */
      53689);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _utils_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../utils/header/header.component */
      69475);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      98295);
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      83166);

      var _RoleEditComponent = /*#__PURE__*/function () {
        function _RoleEditComponent(fb, route, roleService, toastService, loadingService, router) {
          _classCallCheck(this, _RoleEditComponent);

          this.fb = fb;
          this.route = route;
          this.roleService = roleService;
          this.toastService = toastService;
          this.loadingService = loadingService;
          this.router = router;
          this.id = '';
        }

        _createClass(_RoleEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.newRole = this.fb.group({
              description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              canApprove: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
              active: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
            });
            this.route.params.subscribe(function (params) {
              if ('id' in params) {
                console.log(params);
                _this.id = params.id;

                _this.roleService.get(_this.id).subscribe(function (currentRole) {
                  _this.newRole.controls.description.setValue(currentRole.description);

                  _this.newRole.controls.canApprove.setValue(currentRole.canApprove);

                  _this.newRole.controls.active.setValue(currentRole.active);
                });
              }
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var roleBody;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingService.presentLoading('Guardando...');

                    case 2:
                      roleBody = this.newRole.value;

                      if (this.id) {
                        this.roleService.update(this.id, roleBody).subscribe(function (response) {
                          console.log({
                            response: response
                          });

                          _this2.loadingService.close();

                          _this2.toastService.show('Guardado Correctamente', 'Se modifico correctamente', 'success');

                          _this2.router.navigateByUrl('/app/role');
                        }, function (err) {
                          console.log({
                            err: err
                          });

                          _this2.loadingService.close();

                          _this2.toastService.show('Error', 'No se pudo guardar', 'error');
                        });
                      } else {
                        this.roleService.add(roleBody).subscribe(function (response) {
                          console.log({
                            response: response
                          });

                          _this2.loadingService.close();

                          _this2.toastService.show('Guardado Correctamente', 'Se ha guardado correctamente', 'success');

                          _this2.router.navigateByUrl('/app/role');
                        }, function (err) {
                          console.log({
                            err: err
                          });

                          _this2.loadingService.close();

                          _this2.toastService.show('Error', 'No se pudo guardar', 'error');
                        });
                      }

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return _RoleEditComponent;
      }();

      _RoleEditComponent.ɵfac = function RoleEditComponent_Factory(t) {
        return new (t || _RoleEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_role_service__WEBPACK_IMPORTED_MODULE_0__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_utils_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_utils_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
      };

      _RoleEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: _RoleEditComponent,
        selectors: [["app-role-edit"]],
        decls: 29,
        vars: 4,
        consts: [[3, "titulo", "backButton"], [1, "ion-padding"], [3, "formGroup"], ["size-xs", "12", "size-md", "6", "size-lg", "4", "size-xl", "8", "offset-xl", "2"], ["appearance", "fill", 2, "width", "100%", "background-color", "white"], ["matInput", "", "placeholder", "Administrador", "required", "", "formControlName", "description"], ["color", "danger"], ["formControlName", "canApprove", "slot", "start"], ["formControlName", "active", "slot", "start"], ["size", "12"], ["expand", "block", "fill", "clear", "shape", "round", 3, "disabled", "click"]],
        template: function RoleEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ion-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-grid");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-col", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-form-field", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Descripcion:");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "ion-col", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Aprobar");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "ion-text", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "ion-checkbox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "ion-col", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "ion-item");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "ion-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Activo");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "ion-text", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "ion-checkbox", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "ion-row");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "ion-col", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "ion-button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RoleEditComponent_Template_ion_button_click_27_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, " Guardar ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("titulo", ctx.id ? "Editar Rol" : "Crear Rol")("backButton", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.newRole);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.newRole.valid);
          }
        },
        directives: [_utils_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonGrid, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRow, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCol, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonItem, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonLabel, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonText, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonCheckbox, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.BooleanValueAccessor, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    19099:
    /*!**********************************************************!*\
      !*** ./src/app/tabs/modules/role/role-routing.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RolePageRoutingModule": function RolePageRoutingModule() {
          return (
            /* binding */
            _RolePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./role-edit/role-edit.component */
      47720);
      /* harmony import */


      var _role_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./role.page */
      43824);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _role_page__WEBPACK_IMPORTED_MODULE_1__.RolePage
        }, {
          path: 'add',
          component: _role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_0__.RoleEditComponent
        }, {
          path: ':id',
          component: _role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_0__.RoleEditComponent
        }]
      }];

      var _RolePageRoutingModule = function _RolePageRoutingModule() {
        _classCallCheck(this, _RolePageRoutingModule);
      };

      _RolePageRoutingModule.ɵfac = function RolePageRoutingModule_Factory(t) {
        return new (t || _RolePageRoutingModule)();
      };

      _RolePageRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _RolePageRoutingModule
      });
      _RolePageRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_RolePageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    44939:
    /*!**************************************************!*\
      !*** ./src/app/tabs/modules/role/role.module.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RolePageModule": function RolePageModule() {
          return (
            /* binding */
            _RolePageModule
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


      var _role_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./role-routing.module */
      19099);
      /* harmony import */


      var _role_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./role.page */
      43824);
      /* harmony import */


      var _utils_utils_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../utils/utils.module */
      24603);
      /* harmony import */


      var _role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./role-edit/role-edit.component */
      47720);
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

      var _RolePageModule = function _RolePageModule() {
        _classCallCheck(this, _RolePageModule);
      };

      _RolePageModule.ɵfac = function RolePageModule_Factory(t) {
        return new (t || _RolePageModule)();
      };

      _RolePageModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _RolePageModule
      });
      _RolePageModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _role_routing_module__WEBPACK_IMPORTED_MODULE_0__.RolePageRoutingModule, _utils_utils_module__WEBPACK_IMPORTED_MODULE_2__.UtilsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_RolePageModule, {
          declarations: [_role_page__WEBPACK_IMPORTED_MODULE_1__.RolePage, _role_edit_role_edit_component__WEBPACK_IMPORTED_MODULE_3__.RoleEditComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _role_routing_module__WEBPACK_IMPORTED_MODULE_0__.RolePageRoutingModule, _utils_utils_module__WEBPACK_IMPORTED_MODULE_2__.UtilsModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule]
        });
      })();
      /***/

    },

    /***/
    43824:
    /*!************************************************!*\
      !*** ./src/app/tabs/modules/role/role.page.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RolePage": function RolePage() {
          return (
            /* binding */
            _RolePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_services_role_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/role.service */
      66888);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _utils_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../utils/header/header.component */
      69475);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _utils_generic_table_generic_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../utils/generic-table/generic-table.component */
      46338);

      var _RolePage = /*#__PURE__*/function () {
        function _RolePage(roleService, router, route) {
          _classCallCheck(this, _RolePage);

          this.roleService = roleService;
          this.router = router;
          this.route = route;
          this.columns = [];
        }

        _createClass(_RolePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.columns = [{
              attribute: 'description',
              header: 'Descripcion',
              title: true
            }, {
              attribute: 'canApprove',
              header: 'Puede Aprobar',
              type: 'bool'
            }, {
              attribute: 'canSuper',
              header: 'Es Administrador',
              type: 'bool'
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
            }];
          }
        }, {
          key: "onAdd",
          value: function onAdd() {
            this.router.navigate(['add'], {
              relativeTo: this.route
            });
          }
        }]);

        return _RolePage;
      }();

      _RolePage.ɵfac = function RolePage_Factory(t) {
        return new (t || _RolePage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_role_service__WEBPACK_IMPORTED_MODULE_0__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute));
      };

      _RolePage.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _RolePage,
        selectors: [["app-role"]],
        decls: 6,
        vars: 5,
        consts: [["titulo", "Roles", 3, "backButton"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [3, "click"], ["name", "add"], [1, "ion-padding"], [3, "service", "serviceMethod", "columns", "btnAdd"]],
        template: function RolePage_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-fab", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-fab-button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RolePage_Template_ion_fab_button_click_2_listener() {
              return ctx.onAdd();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-content", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-generic-table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("backButton", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("service", ctx.roleService)("serviceMethod", "list")("columns", ctx.columns)("btnAdd", true);
          }
        },
        directives: [_utils_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonFab, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonFabButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonIcon, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonContent, _utils_generic_table_generic_table_component__WEBPACK_IMPORTED_MODULE_2__.GenericTableComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xlLnBhZ2Uuc2NzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tabs_modules_role_role_module_ts-es5.js.map