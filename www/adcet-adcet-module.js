(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adcet-adcet-module"],{

/***/ "8uIg":
/*!***************************************!*\
  !*** ./src/app/adcet/adcet.module.ts ***!
  \***************************************/
/*! exports provided: AdcetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdcetPageModule", function() { return AdcetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _adcet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adcet-routing.module */ "xYdl");
/* harmony import */ var _adcet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adcet.page */ "MuYG");







let AdcetPageModule = class AdcetPageModule {
};
AdcetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _adcet_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdcetPageRoutingModule"]
        ],
        declarations: [_adcet_page__WEBPACK_IMPORTED_MODULE_6__["AdcetPage"]]
    })
], AdcetPageModule);



/***/ }),

/***/ "MuYG":
/*!*************************************!*\
  !*** ./src/app/adcet/adcet.page.ts ***!
  \*************************************/
/*! exports provided: AdcetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdcetPage", function() { return AdcetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_adcet_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./adcet.page.html */ "u2Kb");
/* harmony import */ var _adcet_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adcet.page.scss */ "RbOW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AdcetPage = class AdcetPage {
    constructor() { }
    ngOnInit() {
    }
};
AdcetPage.ctorParameters = () => [];
AdcetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-adcet',
        template: _raw_loader_adcet_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_adcet_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AdcetPage);



/***/ }),

/***/ "RbOW":
/*!***************************************!*\
  !*** ./src/app/adcet/adcet.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGNldC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "u2Kb":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adcet/adcet.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>ADCET</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">ADCET</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    \n  </div>\n</ion-content>\n");

/***/ }),

/***/ "xYdl":
/*!***********************************************!*\
  !*** ./src/app/adcet/adcet-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdcetPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdcetPageRoutingModule", function() { return AdcetPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _adcet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adcet.page */ "MuYG");




const routes = [
    {
        path: '',
        component: _adcet_page__WEBPACK_IMPORTED_MODULE_3__["AdcetPage"]
    }
];
let AdcetPageRoutingModule = class AdcetPageRoutingModule {
};
AdcetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdcetPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=adcet-adcet-module.js.map