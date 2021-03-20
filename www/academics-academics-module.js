(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["academics-academics-module"],{

/***/ "/guH":
/*!***********************************************!*\
  !*** ./src/app/academics/academics.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2FkZW1pY3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "6D3y":
/*!*********************************************!*\
  !*** ./src/app/academics/academics.page.ts ***!
  \*********************************************/
/*! exports provided: AcademicsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicsPage", function() { return AcademicsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_academics_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./academics.page.html */ "w81y");
/* harmony import */ var _academics_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./academics.page.scss */ "/guH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AcademicsPage = class AcademicsPage {
    constructor() {
        this.segment = 'school';
    }
    ngOnInit() {
    }
};
AcademicsPage.ctorParameters = () => [];
AcademicsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-academics',
        template: _raw_loader_academics_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_academics_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AcademicsPage);



/***/ }),

/***/ "bo7L":
/*!*******************************************************!*\
  !*** ./src/app/academics/academics-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AcademicsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicsPageRoutingModule", function() { return AcademicsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _academics_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./academics.page */ "6D3y");




const routes = [
    {
        path: '',
        component: _academics_page__WEBPACK_IMPORTED_MODULE_3__["AcademicsPage"]
    }
];
let AcademicsPageRoutingModule = class AcademicsPageRoutingModule {
};
AcademicsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AcademicsPageRoutingModule);



/***/ }),

/***/ "uENf":
/*!***********************************************!*\
  !*** ./src/app/academics/academics.module.ts ***!
  \***********************************************/
/*! exports provided: AcademicsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcademicsPageModule", function() { return AcademicsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _academics_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./academics-routing.module */ "bo7L");
/* harmony import */ var _academics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./academics.page */ "6D3y");







let AcademicsPageModule = class AcademicsPageModule {
};
AcademicsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _academics_routing_module__WEBPACK_IMPORTED_MODULE_5__["AcademicsPageRoutingModule"]
        ],
        declarations: [_academics_page__WEBPACK_IMPORTED_MODULE_6__["AcademicsPage"]]
    })
], AcademicsPageModule);



/***/ }),

/***/ "w81y":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/academics/academics.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Academics</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Academics</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <ion-segment [(ngModel)]=\"segment\" scrollable=\"true\">\n      <ion-segment-button value=\"school\">\n        <ion-label>School of Planning and architecture</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"college\">\n        <ion-label>College of Fine Arts (CFA)</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"calendar\">\n        <ion-label>Academic Calendar</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"faculty\">\n        <ion-label>Faculty</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"library\">\n        <ion-label>Library</ion-label>\n      </ion-segment-button>\n      <!--<ion-segment-button value=\"research\">\n        <ion-label>Research</ion-label>\n      </ion-segment-button>-->\n    </ion-segment>\n    <div *ngIf=\"segment == 'school'\">\n      <ion-title>Under Graduate</ion-title>\n      <ion-card button>\n        <img src=\"../assets/academic/Architecture.jpg\" alt=\"ysrafu\" />\n      </ion-card>\n      <ion-card button>\n        <img src=\"../assets/academic/interior-design.jpg\" alt=\"ysrafu\" />\n      </ion-card>\n      <ion-card button>\n        <img src=\"../assets/academic/DTDP.jpg\" alt=\"ysrafu\" />\n      </ion-card>\n      <ion-card button>\n        <img src=\"../assets/academic/FSP.jpg\" alt=\"ysrafu\" />\n      </ion-card>\n      <ion-card button>\n        <img src=\"../assets/academic/Planning.jpg\" alt=\"ysrafu\" />\n      </ion-card>\n      <ion-title>Post Graduate</ion-title>\n      <ion-card button>\n        <img src=\"../assets/academic/march-1.png\" alt=\"ysrafu\" />\n      </ion-card>\n      <ion-card button>\n        <img src=\"../assets/academic/Mplan.png\" alt=\"ysrafu\" />\n      </ion-card>\n    </div>\n    <div *ngIf=\"segment == 'college'\">\n      <ion-title>Under Graduate</ion-title>\n      <ion-card button>\n        <img src=\"../assets/academic/Painting.jpg\" alt=\"ysrafu\" />\n      </ion-card>\n      <ion-card button>\n        <img src=\"../assets/academic/Sculpture.jpg\" alt=\"ysrafu\" />\n      </ion-card>\n      <ion-card button>\n        <img src=\"../assets/academic/AppliedArt.jpg\" alt=\"ysrafu\" />\n      </ion-card>\n      <ion-card button>\n        <img src=\"../assets/academic/Photography.jpg\" alt=\"ysrafu\" />\n      </ion-card>\n      <ion-card button>\n        <img src=\"../assets/academic/Animation.jpg\" alt=\"ysrafu\" />\n      </ion-card>\n      <ion-title>Post Graduate</ion-title>\n      <ion-card button>\n        <img src=\"../assets/academic/MFAAplliedArt.jpg\" alt=\"ysrafu\" />\n      </ion-card>\n      <ion-card button>\n        <img src=\"../assets/academic/MFAPainting.jpg\" alt=\"ysrafu\" />\n      </ion-card>\n    </div>\n    <div *ngIf=\"segment == 'calendar'\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>As per University Grants Commission (UGC), The academic calendar for the first year\n            students commence from 01.11.2020 for first year students. Accordingly, the following</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <p>Calendar is suggested for the academic session 2020-2021</p>\n          <table class=\"table\">\n            <tr>\n              <th>Admission Process(To be completed)</th>\n              <td>31.10.2020</td>\n            </tr>\n            <tr>\n              <th>Commencement of Classes of above students Fresh batch (First Semester / Year)</th>\n              <td>01.11.2020<sup>*</sup></td>\n            </tr>\n            <tr>\n              <th>Preoaratorv Break</th>\n              <td>01.03.2021 to 07.03.2021</td>\n            </tr>\n            <tr>\n              <th>Conduct of Examinations</th>\n              <td>08.03.2021 to 26.03.2021</td>\n            </tr>\n            <tr>\n              <th>Semester Break</th>\n              <td>27.03.2021 to 04.04.2021</td>\n            </tr>\n            <tr>\n              <th>Commencement of Classes for Even Semester</th>\n              <td>5.04.2021</td>\n            </tr>\n            <tr>\n              <th>Preparatory Break</th>\n              <td>01.08.2021 to 08.08.2021</td>\n            </tr>\n            <tr>\n              <th>Conduct of Examinations</th>\n              <td>09.08.2021 to 21.08.2021</td>\n            </tr>\n            <tr>\n              <th>Semester Break</th>\n              <td>22.08.2021 to 29.08.2021</td>\n            </tr>\n            <tr>\n              <th>Commencement of Next Academic Session for this batch</th>\n              <td>30.08.2021</td>\n            </tr>\n          </table>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngIf=\"segment == 'faculty'\">\n      <ion-title>College of Fine Arts (CFA)</ion-title>\n      <ion-card>\n        <img src=\"./assets/facult/mrutyunjaya.png\" alt=\"\" />\n        <ion-card-header>\n          <ion-card-subtitle>Assistant Professor in Painting</ion-card-subtitle>\n          <ion-card-title>Dr. Kota Mrutyunjaya Rao MFA., Ph.D</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n    </div>\n    <div *ngIf=\"segment == 'library'\">\n      <ion-card>\n        <ion-card-content>\n          <p>The aim of the library is to provide the right environment and appropriate facilities and services to\n            support high quality learning.</p>\n          <br />\n          <p>Dr. YSR Architecture and Fine Arts University's Library is the soul of the University. It is designed to\n            acquire, preserves and disseminate information to the user community with the motto of empowering knowledge.\n            It has an extensive collection of books, reference materials for satisfying the academic and research needs\n            of the students and faculty. The Library consists of a Reference Section, Circulation Section, and\n            Periodical Section with fully automated library activities to provide effective and wide range of academic\n            resources such as books, journals and online databases. The University always encourages students and\n            faculty to recommend new books in order to strengthen their collection.</p>\n          <br />\n          <p>The library provides a useful collection of learning materials, access to computerized information sources\n            and audio/visual learning facilities.</p>\n          <ion-list>\n            <ion-item>\n              <ion-label>i) Reference Service & Assistance</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>ii) Photocopy Services</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>iii) Multimedia Resources</ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>iv) On-line Databases</ion-label>\n            </ion-item>\n          </ion-list>\n          <p>The Library will be fully automated and students can search the books online with the preferences of\n            Authors and book titles. They can Log in to the Library web page with the Students unique ID and mark the\n            required book for a period of not more than 7 days. After marking the book for the required dates, the\n            students should be present physically and lease out the book with their Identity.</p>\n          <br />\n          <ion-title class=\"ion-no-padding\">Working Hours</ion-title>\n          <p>Students can access the Library from 9 am to 5 pm in weekdays. The Library will remain closed on Sundays\n            and holidays.</p>\n          <ion-title class=\"ion-no-padding\">SPA Library</ion-title>\n          <p>The School of Planning and Architecture library is a place where versatile collection of Architectural,\n            Planning, designing and other sources of Technological information are stored. They make it easier for\n            students and staff members to get access to them for attaining knowledge with different sources of\n            materials. These include books, magazines, newspapers, DVDs, manuscripts and more.</p>\n          <br />\n          <p>Our holdings specialize in modern and contemporary architecture and design, the history and theory of\n            architecture, urban studies, landscape architecture, preservation, and city planning. The collection\n            constitutes approximately 10,000 volumes. The library is designed to subscribe to more than 1000 domestic\n            and foreign periodicals, publications and has a growing collection of rare materials as well as a video\n            collection. The video collection focuses broadly on Architectural Designs, Techniques, Planning and\n            Implementation</p>\n          <ion-title class=\"ion-no-padding\">CFA Library</ion-title>\n          <p>The Fine Arts Library is a key resource that provides facilities for individual study, research and a\n            collection of materials. The library's collection comprises approximately 10000 literacy including books,\n            journals, exhibition catalogues and visual media. Our collection includes history of the arts with a\n            particular focus on modern and contemporary artists and movements. The collection includes books, magazines,\n            newspapers, DVDs, Journals, etc.</p>\n          <br />\n          <p>Our Collection of books mainly consists of works on Applied Art, Sculpture's, Painting, Animation and\n            Photography. There is lot of research materials available in both print and Audio-Visual form. The students\n            will have access to a variety of collections from the History to the latest technology used in the field of\n            art.</p>\n          <ion-title class=\"ion-no-padding\">Internet Facility</ion-title>\n          <p>Students can also use computer systems with Internet facility to study online and can mail the material to\n            their respective email id's. All types of external storage devices need to be strictly avoided in the\n            Library premises and if found will be seized by the Library administration.</p>\n          <ion-title class=\"ion-no-padding\">Membership fee</ion-title>\n          <p>The following persons belonging to the University are eligible for lending the books. The mandatory deposit\n            amount, issue of books limit and duration of the lease will be as follows:</p>\n          <br />\n          <table class=\"table\">\n            <tr>\n              <th>Description</th>\n              <th>Deposit PA</th>\n              <th>No. of books that can be borrowed</th>\n              <th>No. of days that can be borrowed</th>\n            </tr>\n            <tr>\n              <td class=\"ion-text-center\">Professors</td>\n              <td class=\"ion-text-center\">-</td>\n              <td class=\"ion-text-center\">2</td>\n              <td class=\"ion-text-center\">20</td>\n            </tr>\n            <tr>\n              <td class=\"ion-text-center\">Associate Professors</td>\n              <td class=\"ion-text-center\">-</td>\n              <td class=\"ion-text-center\">1</td>\n              <td class=\"ion-text-center\">15</td>\n            </tr>\n            <tr>\n              <td class=\"ion-text-center\">Assistant Professors</td>\n              <td class=\"ion-text-center\">-</td>\n              <td class=\"ion-text-center\">1</td>\n              <td class=\"ion-text-center\">10</td>\n            </tr>\n            <tr>\n              <td class=\"ion-text-center\">Academic Assistants</td>\n              <td class=\"ion-text-center\">2000</td>\n              <td class=\"ion-text-center\">1</td>\n              <td class=\"ion-text-center\">7</td>\n            </tr>\n            <tr>\n              <td class=\"ion-text-center\">Students of all courses</td>\n              <td class=\"ion-text-center\">1500</td>\n              <td class=\"ion-text-center\">1</td>\n              <td class=\"ion-text-center\">7</td>\n            </tr>\n            <tr>\n              <td class=\"ion-text-center\">Ph.D. Research Scholars (Full-Time)</td>\n              <td class=\"ion-text-center\">1500</td>\n              <td class=\"ion-text-center\">1</td>\n              <td class=\"ion-text-center\">7</td>\n            </tr>\n            <tr>\n              <td class=\"ion-text-center\">Ph.D. Research Scholars (Part-Time)</td>\n              <td class=\"ion-text-center\">5000</td>\n              <td class=\"ion-text-center\">1</td>\n              <td class=\"ion-text-center\">7</td>\n            </tr>\n            <tr>\n              <td class=\"ion-text-center\">Other Staff</td>\n              <td class=\"ion-text-center\">5000</td>\n              <td class=\"ion-text-center\">1</td>\n              <td class=\"ion-text-center\">7</td>\n            </tr>\n          </table>\n          <p>Note: users must register online by submitting Library Membership Application Form.</p>\n          <br />\n          <p>The University Library & Information center offers membership to the students, Researchers, Academicians,\n            Practicing Architects, Business Industry, Entrepreneurs, Government & Corporate Organizations etc. on\n            payment of nominal service charges as given below:</p>\n          <br />\n          <table class=\"table\">\n            <tr>\n              <th>Category of Membership</th>\n              <th colspan=\"7\">Service Charges for</th>\n            </tr>\n            <tr>\n              <th>One Day Rs.</th>\n              <th>One Week Rs.</th>\n              <th>One Month Rs.</th>\n              <th>Three Months Rs.</th>\n              <th>Six Months Rs.</th>\n              <th>One Year Rs.</th>\n              <th colspan=\"2\">Three Years Rs.</th>\n            </tr>\n            <tr>\n              <td colspan=\"8\">Individual Membership</td>\n            </tr>\n            <tr>\n              <td>Students</td>\n              <td>50</td>\n              <td>200</td>\n              <td>500</td>\n              <td>1,200</td>\n              <td>2,000</td>\n              <td>3,000</td>\n              <td>8,000</td>\n            </tr>\n            <tr>\n              <td>Architects/Faculty</td>\n              <td>100</td>\n              <td>400</td>\n              <td>1.000</td>\n              <td>2,000</td>\n              <td>3,500</td>\n              <td>5,000</td>\n              <td>12,000</td>\n            </tr>\n            <tr>\n              <td colspan=\"8\">Individual Membership(For a Maximum of 5 Members only)</td>\n            </tr>\n            <tr>\n              <td>Govt. Institutions</td>\n              <td colspan=\"4\">10,000</td>\n              <td colspan=\"3\">25,000</td>\n            </tr>\n          </table>\n          <ion-title class=\"ion-no-padding\">Online Registrations</ion-title>\n          <ion-list>\n            <ion-item>\n              <ion-icon name=\"radio-button-on\"></ion-icon>\n              <ion-label>\n                <h3>Membership Form</h3>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-icon name=\"radio-button-on\"></ion-icon>\n              <ion-label>\n                <h3>Book Issue Form</h3>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-icon name=\"radio-button-on\"></ion-icon>\n              <ion-label>\n                <h3>Book Recommendation Form</h3>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n          <ion-title class=\"ion-no-padding\">Rules and regulations</ion-title>\n          <ion-list>\n            <ion-item>\n              <ion-label>\n                <h3 class=\"ion-text-wrap\">1. Always carry your Identity card to access the Library and its resources.</h3>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>\n                <h3 class=\"ion-text-wrap\">2. Choose the appropriate zone for your studies. You will be asked to move or leave if your behaviour disturbs others.</h3>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>\n                <h3 class=\"ion-text-wrap\">3. Only take resources out of the Library that you have borrowed. Remember to return them on time to avoid late fees.</h3>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>\n                <h3 class=\"ion-text-wrap\">4. Usage of computer systems are for academic use only and must not be used for any commercial purpose.</h3>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>\n                <h3 class=\"ion-text-wrap\">5. The Library is not responsible for personal items that are lost, stolen, or damaged on Library premises.</h3>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>\n                <h3 class=\"ion-text-wrap\">6. Photography and recording are not allowed on Library premises without prior permission.</h3>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>\n                <h3 class=\"ion-text-wrap\">7. Late fee per book will be charged @ Rs. 50 per day.</h3>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>\n                <h3 class=\"ion-text-wrap\">8. If the book is lost, then it has to be replaced by the same book or double thebook amount will be charged to the borrower.</h3>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label>\n                <h3 class=\"ion-text-wrap\">9. No dues certificate from the librarian is mandatory while leaving the University.</h3>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngIf=\"segment == 'research'\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>COLLEGE OF FINE ARTS</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p>College of Fine arts offers Bachelor of Fine Arts (BFA) degree through five departments namely Painting,\n            Animation, Applied Art, Photography and Sculpture to develop the artistic sense of human to communicate and\n            leave footprints of this generation for the ages to come.</p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <img src=\"./assets/about/cfa-abt-1.png\" alt=\"\" />\n        <ion-card-content>\n          <p>The Course of Painting is designed for students to understand the creative use of drawing, oil colour,\n            water colour, ternpera and other media of painting along with figurative and non-figurative compositions.\n            They develop competence in landscape painting, life study, portraiture and mural design in different media.\n          </p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <img src=\"./assets/about/cfa-abt-2.png\" alt=\"\" />\n        <ion-card-content>\n          <p>The Animation program enables students to develop core domain areas for animation design and soft skills to\n            experiment with various mediums such as 2D, 3D, VFX, film making, Stop motion animation, etc,. They are\n            introduced to basic drawing and design skills required.</p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <img src=\"./assets/about/cfa-abt-3.png\" alt=\"\" />\n        <ion-card-content>\n          <p>The Course structure Applied Art prepares students in creative useof different media for painting and\n            compositional skills with various technical processes of print making such as etching, lithography, wood\n            cutting etc,. to apply their skills in art and craft.</p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <img src=\"./assets/about/cfa-abt-4.png\" alt=\"\" />\n        <ion-card-content>\n          <p>The academic programme of Photography and Visual Communications equips students with necessary skills to\n            learn Photography as Fine Art, Photo Journalism, Digital Photography, Audio-Visual Communication, Computer\n            Graphics & Multimedia with videography.</p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <img src=\"./assets/about/cfa-abt-5.png\" alt=\"\" />\n        <ion-card-content>\n          <p>The Course Sculpture equips students to understand moulding and casting with various mediums like Clay,\n            Cement, Plaster, Fiber, Bronze, Ceramics, Metal and Wood. They are aquainted to printmaking and painting.\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=academics-academics-module.js.map