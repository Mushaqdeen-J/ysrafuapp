(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administration-administration-module"],{

/***/ "01bH":
/*!*******************************************************!*\
  !*** ./src/app/administration/administration.page.ts ***!
  \*******************************************************/
/*! exports provided: AdministrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationPage", function() { return AdministrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_administration_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./administration.page.html */ "0dqb");
/* harmony import */ var _administration_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./administration.page.scss */ "aLMY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AdministrationPage = class AdministrationPage {
    constructor() { }
    ngOnInit() {
    }
};
AdministrationPage.ctorParameters = () => [];
AdministrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-administration',
        template: _raw_loader_administration_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_administration_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdministrationPage);



/***/ }),

/***/ "0JFd":
/*!*********************************************************!*\
  !*** ./src/app/administration/administration.module.ts ***!
  \*********************************************************/
/*! exports provided: AdministrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationPageModule", function() { return AdministrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _administration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./administration-routing.module */ "Puka");
/* harmony import */ var _administration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./administration.page */ "01bH");







let AdministrationPageModule = class AdministrationPageModule {
};
AdministrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _administration_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdministrationPageRoutingModule"]
        ],
        declarations: [_administration_page__WEBPACK_IMPORTED_MODULE_6__["AdministrationPage"]]
    })
], AdministrationPageModule);



/***/ }),

/***/ "0dqb":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/administration/administration.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Administration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Administration</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    \n  </div>\n</ion-content>\n");

/***/ }),

/***/ "Puka":
/*!*****************************************************************!*\
  !*** ./src/app/administration/administration-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AdministrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationPageRoutingModule", function() { return AdministrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _administration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./administration.page */ "01bH");




const routes = [
    {
        path: '',
        component: _administration_page__WEBPACK_IMPORTED_MODULE_3__["AdministrationPage"]
    }
];
let AdministrationPageRoutingModule = class AdministrationPageRoutingModule {
};
AdministrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdministrationPageRoutingModule);



/***/ }),

/***/ "aLMY":
/*!*********************************************************!*\
  !*** ./src/app/administration/administration.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbmlzdHJhdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=administration-administration-module.js.map