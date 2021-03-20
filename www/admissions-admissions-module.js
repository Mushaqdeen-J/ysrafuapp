(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admissions-admissions-module"],{

/***/ "/U3Q":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admissions/admissions.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Admissions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Admissions</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    \n  </div>\n</ion-content>\n");

/***/ }),

/***/ "2lkl":
/*!*************************************************!*\
  !*** ./src/app/admissions/admissions.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pc3Npb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "ORku":
/*!***********************************************!*\
  !*** ./src/app/admissions/admissions.page.ts ***!
  \***********************************************/
/*! exports provided: AdmissionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionsPage", function() { return AdmissionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_admissions_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./admissions.page.html */ "/U3Q");
/* harmony import */ var _admissions_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admissions.page.scss */ "2lkl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AdmissionsPage = class AdmissionsPage {
    constructor() { }
    ngOnInit() {
    }
};
AdmissionsPage.ctorParameters = () => [];
AdmissionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admissions',
        template: _raw_loader_admissions_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_admissions_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdmissionsPage);



/***/ }),

/***/ "dRFU":
/*!*********************************************************!*\
  !*** ./src/app/admissions/admissions-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AdmissionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionsPageRoutingModule", function() { return AdmissionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admissions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admissions.page */ "ORku");




const routes = [
    {
        path: '',
        component: _admissions_page__WEBPACK_IMPORTED_MODULE_3__["AdmissionsPage"]
    }
];
let AdmissionsPageRoutingModule = class AdmissionsPageRoutingModule {
};
AdmissionsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdmissionsPageRoutingModule);



/***/ }),

/***/ "zr54":
/*!*************************************************!*\
  !*** ./src/app/admissions/admissions.module.ts ***!
  \*************************************************/
/*! exports provided: AdmissionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmissionsPageModule", function() { return AdmissionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _admissions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admissions-routing.module */ "dRFU");
/* harmony import */ var _admissions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admissions.page */ "ORku");







let AdmissionsPageModule = class AdmissionsPageModule {
};
AdmissionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _admissions_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdmissionsPageRoutingModule"]
        ],
        declarations: [_admissions_page__WEBPACK_IMPORTED_MODULE_6__["AdmissionsPage"]]
    })
], AdmissionsPageModule);



/***/ })

}]);
//# sourceMappingURL=admissions-admissions-module.js.map