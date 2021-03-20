(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Home</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <ion-slides [options]=\"slideOpts\">\n      <ion-slide>\n        <ion-img src=\"./assets/home/1.jpg\" alt=\"banner\"></ion-img>\n      </ion-slide>\n      <ion-slide>\n        <ion-img src=\"./assets/home/2.jpg\" alt=\"banner\"></ion-img>\n      </ion-slide>\n      <ion-slide>\n        <ion-img src=\"./assets/home/3.jpg\" alt=\"banner\"></ion-img>\n      </ion-slide>\n      <ion-slide>\n        <ion-img src=\"./assets/home/4.jpg\" alt=\"banner\"></ion-img>\n      </ion-slide>\n      <ion-slide>\n        <ion-img src=\"./assets/home/5.jpg\" alt=\"banner\"></ion-img>\n      </ion-slide>\n      <ion-slide>\n        <ion-img src=\"./assets/home/6.jpg\" alt=\"banner\"></ion-img>\n      </ion-slide>\n      <ion-slide>\n        <ion-img src=\"./assets/home/7.jpg\" alt=\"banner\"></ion-img>\n      </ion-slide>\n      <ion-slide>\n        <ion-img src=\"./assets/home/8.jpg\" alt=\"banner\"></ion-img>\n      </ion-slide>\n      <ion-slide>\n        <ion-img src=\"./assets/home/9.jpg\" alt=\"banner\"></ion-img>\n      </ion-slide>\n      <ion-slide>\n        <ion-img src=\"./assets/home/10.jpg\" alt=\"banner\"></ion-img>\n      </ion-slide>\n      <ion-slide>\n        <ion-img src=\"./assets/home/11.jpg\" alt=\"banner\"></ion-img>\n      </ion-slide>\n      <ion-slide>\n        <ion-img src=\"./assets/home/12.jpg\" alt=\"banner\"></ion-img>\n      </ion-slide>\n      <ion-slide>\n        <ion-img src=\"./assets/home/13.jpg\" alt=\"banner\"></ion-img>\n      </ion-slide>\n    </ion-slides>\n    <ion-segment [(ngModel)]=\"segment\" scrollable=\"true\">\n      <ion-segment-button value=\"notification\">\n        <ion-label>Notification</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"tenders\">\n        <ion-label>Tenders &amp; e procurements</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"news\">\n        <ion-label>News &amp; Updated</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n    <div *ngIf=\"segment == 'notification'\">\n      <ion-list>\n        <ion-list-header>\n          ADCET Notifiction\n        </ion-list-header>\n        <ion-item>\n          <ion-label>\n            <h2>ADCET-2020 </h2>\n            <p class=\"ion-text-wrap\"> ADCET -2020 Admissions will be done through counseling, for further details\n              https://sche.ap.gov.in/ADCET/ADCET/ADCET_HomePage.aspx</p>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n      <ion-list>\n        <ion-list-header>\n          Under Graduate Admissions\n        </ion-list-header>\n        <ion-item>\n          <ion-label>\n            <h2>B.Arch Admissions 2020 </h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">Bachelor of Fine Arts (BFA) courses and B.Design (Interior Design Admissions\n              through ADCET 2020 </h2>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n      <ion-list>\n        <ion-list-header>\n          Spot Admissions\n        </ion-list-header>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">B.Tech (Digital Techniques in Design and Planing), B.Tech. (Facilities in Services\n              and Planning), B.Tech. (Town Planning) SPOT Admissions 2020 </h2>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n      <ion-list>\n        <ion-list-header>\n          Post Graduate Admissions\n        </ion-list-header>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">M.Arch (Arch) Admissions 2020</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">M. Arch (URP) Admissions 2020</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">MFA (Painting) Admission 2020</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">MFA (Applied Arts) Admissions 2020</h2>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div *ngIf=\"segment == 'tenders'\">\n      <ion-list>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">Supply of AIr conditioners, tabs, software's</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">Hiring of buses for University</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">e-Procurement Tender Notification - Supply and Installation of Laboratory\n              Equipments(Painting, Sculpture,Photography, Climatology, Model making), Active Led Display Panels,\n              Led/Laser Projectors, Video Conference systems, Public Address System, 3D Printers & Intercom/ EPABX</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">e-Procurement Tender Notification - Hiring Brand new (52-55) seater buses</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">e-Procurement Tender Notification - Supply and Installation of Laboratory\n              Equipments(Painting, Sculpture,Photography, Material Testing, Surveying, Climatology, Model making,\n              Workshop Departments), Computers/Peripherals, Photocopy Machines, 3D Printers & Intercom/ EPABX</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">e-Procurement Tender Notification - Supply and Installation of (Computers and\n              Peripherals,Photocopy Machine(Xerox),3D Printer, Interactive Panel,Intercom/ EPABX Systems)</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">Mess Catering Services, Supply of Library Books and Laboratory Equipments</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">Supply, Installation & Commissioning of the Desktops</h2>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div *ngIf=\"segment == 'news'\">\n      <ion-list>\n        <ion-item>\n          <ion-label>\n            <h2>ADCET-2020</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2>VC's Message about the University in AIR</h2>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n      <ion-list>\n        <ion-list-header>\n          Under Graduate Admissions\n        </ion-list-header>\n        <ion-item>\n          <ion-label>\n            <h2>B'Arch Admissions 2020</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">BFA & B. Design Admissions 2020</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">B. Tech (dtdp), B.tech (FSP) Admissions 2020</h2>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n      <ion-list>\n        <ion-list-header>\n          Post Graduate Admissions\n        </ion-list-header>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">M.Arch (Arch) Admissions 2020 </h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">M. Arch (URP) Admissions 2020 </h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">MFA (Painting) Admission 2020</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">MFA (Applied Arts) Admissions 2020 </h2>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "zpKS");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomePage = class HomePage {
    constructor() {
        this.segment = 'notification';
        this.slideOpts = {
            initialSlide: 1,
            speed: 400,
            autoplay: {
                delay: 3000,
            }
        };
    }
    ngOnInit() {
    }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map