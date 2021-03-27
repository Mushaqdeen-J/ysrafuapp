(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admissions-admissions-module"],{

/***/ "/U3Q":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admissions/admissions.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Admissions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Admissions</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <ion-segment [(ngModel)]=\"segment\" scrollable=\"true\">\n      <ion-segment-button value=\"admissions\">\n        <ion-label>Admissions 2020</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"apply\">\n        <ion-label>How to Apply</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"eligibility\">\n        <ion-label>Eligibility & Course Details</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"faculty\">\n        <ion-label>Admission Process</ion-label>\n      </ion-segment-button>\n      <!--<ion-segment-button value=\"supporting\">\n        <ion-label>Self-Supporting Students</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"enterance\">\n        <ion-label>Art &amp; Design Common Entrance Test (ADCET-2020)</ion-label>\n      </ion-segment-button>-->\n    </ion-segment>\n    <div *ngIf=\"segment == 'admissions'\">\n      <ion-list>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">ADCET-2020</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">Bachelor of Technology</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">Bachelor of Architecture</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h2 class=\"ion-text-wrap\">Bachelor of Design</h2>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngIf=\"segment == 'apply'\">\n      <p class=\"ion-padding\">The admission procedure will be through the following written examinations for the\n        following courses.</p>\n      <ion-list>\n        <ion-item>\n          <ion-icon name=\"radio-button-on\"></ion-icon>\n          <ion-label>\n            <h3 class=\"ion-text-wrap\">Bachelor of Architecture - National Aptitude Test in Architecture (NATA) conducted\n              by Council of Architecture COA), and as per score in JEE-(mains) Paper-II.</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"radio-button-on\"></ion-icon>\n          <ion-label>\n            <h3 class=\"ion-text-wrap\">Bachelor of Technology in Digital Techniques in Design and Planning (DTDP),\n              Facilities and Services Planning (FSP) and Planning - AP-EAMCET conducted by Government of Andhra Pradesh.\n            </h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon name=\"radio-button-on\"></ion-icon>\n          <ion-label>\n            <h3 class=\"ion-text-wrap\">Bachelor of Fine Arts and Bachelor of Design - Art and Design Common Entrance Test\n              (AD- CET) conducted by Dr. YSR Architecture and Fine Arts University, Kadapa.</h3>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n      <p class=\"ion-padding\">Seats will be allotted as per the merit list in the qualifying examination and as per the\n        government norms for reservation candidates.</p>\n    </div>\n    <div *ngIf=\"segment == 'eligibility'\">\n      <ion-card>\n        <ion-card-content>\n          <table class=\"table\">\n            <tr>\n              <th colspan=\"6\" class=\"ion-text-center\">School of Planning and Architecture</th>\n            </tr>\n            <tr>\n              <th>S.No</th>\n              <th>Department</th>\n              <th>Entrance Exam</th>\n              <th>Intake</th>\n              <th>Course Duration</th>\n              <th>Eligibility</th>\n            </tr>\n            <tr>\n              <td>1</td>\n              <td>Bachelor of Architecture (B.Arch)</td>\n              <td>NATA / JEE</td>\n              <td>80</td>\n              <td>5</td>\n              <td>10+2 MPC or 10+3 Diploma</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>Bachelor of Design (B.Des.)</td>\n              <td>ADCET</td>\n              <td>60</td>\n              <td>4</td>\n              <td>10+2 any or 10+3 Diploma</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>Digital Techniques in Design and Planning (DTDP)</td>\n              <td>EAMCET</td>\n              <td>60</td>\n              <td>4</td>\n              <td>10+2 MPC or 10+3 Diploma</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>Facilities and Services Planning (FSP)</td>\n              <td>EAMCET</td>\n              <td>60</td>\n              <td>4</td>\n              <td>10+2 MPC or 10+3 Diploma</td>\n            </tr>\n            <tr>\n              <td>5</td>\n              <td>Bachelor of Planning (B.Plan.)</td>\n              <td>EAMCET</td>\n              <td>40</td>\n              <td>4</td>\n              <td>10+2 MPC or 10+3 Diploma</td>\n            </tr>\n          </table>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <ion-card-content>\n          <table class=\"table\">\n            <tr>\n              <th colspan=\"6\" class=\"ion-text-center\">College of Fine Arts (Bachelor of Fine Arts)</th>\n            </tr>\n            <tr>\n              <th>S.No</th>\n              <th>Department</th>\n              <th>Entrance Exam</th>\n              <th>Intake</th>\n              <th>Course Duration</th>\n              <th>Eligibility</th>\n            </tr>\n            <tr>\n              <td>1</td>\n              <td>Painting</td>\n              <td>ADCET</td>\n              <td>40</td>\n              <td>4</td>\n              <td>10+2 any</td>\n            </tr>\n            <tr>\n              <td>2</td>\n              <td>Animation</td>\n              <td>ADCET</td>\n              <td>60</td>\n              <td>4</td>\n              <td>10+2 any</td>\n            </tr>\n            <tr>\n              <td>3</td>\n              <td>Applied Art</td>\n              <td>ADCET</td>\n              <td>40</td>\n              <td>4</td>\n              <td>10+2 any</td>\n            </tr>\n            <tr>\n              <td>4</td>\n              <td>Photography</td>\n              <td>ADCET</td>\n              <td>40</td>\n              <td>4</td>\n              <td>10+2 any</td>\n            </tr>\n            <tr>\n              <td>5</td>\n              <td>Sculpture</td>\n              <td>ADCET</td>\n              <td>40</td>\n              <td>4</td>\n              <td>10+2 any</td>\n            </tr>\n          </table>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngIf=\"segment == 'faculty'\">\n      <ion-card>\n        <ion-card-content>\n          <p>Admissions will be based on the score obtained in the written Entrance Examination followed by verification\n            of qualifying certificates. The final merit list will be prepared on the basis of the final Score/Written\n            Test marks (as applicable).</p>\n          <br />\n          <p>For Fine Arts and Interior Design course, AD-CET results will be declared on APSCHE website after which\n            students can apply for online admission's counselling. Short listed candidates will be sent Admit card and\n            they will need to get Certificates verified and pay the stipulated fee to confirm the admission in the\n            University. Depending on vacancy a second merit list will be prepared and remaining seats will be filled\n            accordingly.</p>\n          <br />\n          <p>For B-Tech courses, AP-EAMCET results will be declared on the State Council of Higher Education website.\n            The students have to attend for online admission conducted by convener AP-EAMCET and select the preferred\n            course. Short listed candidates will be sent Admit card and they will need to get Certificates verified and\n            pay the stipulated fee to confirm the admission in the University. Depending on vacancy a second merit list\n            will be prepared and remaining seats will be filled accordingly.</p>\n          <br />\n          <p>For B.Arch. courses, NATA results will be declared on Council of Architecture's website. The students have\n            to attend for online admission by Convener APSCHE and select the preferred course. (Students who wrote as\n            per score in JEE(main) paper-II.) Short listed candidates will be sent Admit card and they will need to get\n            Certificates verified and pay the stipulated fee to confirm the admission in the University. Depending on\n            vacancy a second merit list will be prepared and remaining seats will be filled accordingly.</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngIf=\"segment == 'supporting'\">\n      \n    </div>\n    <div *ngIf=\"segment == 'enterance'\">\n      \n    </div>\n  </div>\n</ion-content>");

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
    constructor() {
        this.segment = 'admissions';
    }
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