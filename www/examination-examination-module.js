(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["examination-examination-module"],{

/***/ "012g":
/*!*************************************************!*\
  !*** ./src/app/examination/examination.page.ts ***!
  \*************************************************/
/*! exports provided: ExaminationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationPage", function() { return ExaminationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_examination_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./examination.page.html */ "QFpH");
/* harmony import */ var _examination_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examination.page.scss */ "NoSJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ExaminationPage = class ExaminationPage {
    constructor() { }
    ngOnInit() {
    }
};
ExaminationPage.ctorParameters = () => [];
ExaminationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-examination',
        template: _raw_loader_examination_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_examination_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExaminationPage);



/***/ }),

/***/ "NoSJ":
/*!***************************************************!*\
  !*** ./src/app/examination/examination.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGFtaW5hdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "QBcV":
/*!***************************************************!*\
  !*** ./src/app/examination/examination.module.ts ***!
  \***************************************************/
/*! exports provided: ExaminationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationPageModule", function() { return ExaminationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _examination_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examination-routing.module */ "e5I0");
/* harmony import */ var _examination_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examination.page */ "012g");







let ExaminationPageModule = class ExaminationPageModule {
};
ExaminationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _examination_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExaminationPageRoutingModule"]
        ],
        declarations: [_examination_page__WEBPACK_IMPORTED_MODULE_6__["ExaminationPage"]]
    })
], ExaminationPageModule);



/***/ }),

/***/ "QFpH":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examination/examination.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Examination</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Examination</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    \n  </div>\n</ion-content>\n");

/***/ }),

/***/ "e5I0":
/*!***********************************************************!*\
  !*** ./src/app/examination/examination-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ExaminationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExaminationPageRoutingModule", function() { return ExaminationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _examination_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examination.page */ "012g");




const routes = [
    {
        path: '',
        component: _examination_page__WEBPACK_IMPORTED_MODULE_3__["ExaminationPage"]
    }
];
let ExaminationPageRoutingModule = class ExaminationPageRoutingModule {
};
ExaminationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExaminationPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=examination-examination-module.js.map