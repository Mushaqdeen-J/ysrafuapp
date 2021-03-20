(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campus-campus-module"],{

/***/ "JPNN":
/*!***************************************!*\
  !*** ./src/app/campus/campus.page.ts ***!
  \***************************************/
/*! exports provided: CampusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampusPage", function() { return CampusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_campus_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./campus.page.html */ "jOZ/");
/* harmony import */ var _campus_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campus.page.scss */ "PGil");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CampusPage = class CampusPage {
    constructor() { }
    ngOnInit() {
    }
};
CampusPage.ctorParameters = () => [];
CampusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-campus',
        template: _raw_loader_campus_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_campus_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CampusPage);



/***/ }),

/***/ "PGil":
/*!*****************************************!*\
  !*** ./src/app/campus/campus.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1wdXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "T9zI":
/*!*************************************************!*\
  !*** ./src/app/campus/campus-routing.module.ts ***!
  \*************************************************/
/*! exports provided: CampusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampusPageRoutingModule", function() { return CampusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _campus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campus.page */ "JPNN");




const routes = [
    {
        path: '',
        component: _campus_page__WEBPACK_IMPORTED_MODULE_3__["CampusPage"]
    }
];
let CampusPageRoutingModule = class CampusPageRoutingModule {
};
CampusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CampusPageRoutingModule);



/***/ }),

/***/ "jOZ/":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/campus/campus.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Campus Life</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Campus Life</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    \n  </div>\n</ion-content>\n");

/***/ }),

/***/ "lzEd":
/*!*****************************************!*\
  !*** ./src/app/campus/campus.module.ts ***!
  \*****************************************/
/*! exports provided: CampusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampusPageModule", function() { return CampusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _campus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./campus-routing.module */ "T9zI");
/* harmony import */ var _campus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./campus.page */ "JPNN");







let CampusPageModule = class CampusPageModule {
};
CampusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _campus_routing_module__WEBPACK_IMPORTED_MODULE_5__["CampusPageRoutingModule"]
        ],
        declarations: [_campus_page__WEBPACK_IMPORTED_MODULE_6__["CampusPage"]]
    })
], CampusPageModule);



/***/ })

}]);
//# sourceMappingURL=campus-campus-module.js.map