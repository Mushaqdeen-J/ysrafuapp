(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "+wPt":
/*!***********************************************!*\
  !*** ./src/app/about/about-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AboutPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function() { return AboutPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.page */ "kL6T");




const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }
];
let AboutPageRoutingModule = class AboutPageRoutingModule {
};
AboutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutPageRoutingModule);



/***/ }),

/***/ "FQ1g":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-routing.module */ "+wPt");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "kL6T");







let AboutPageModule = class AboutPageModule {
};
AboutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })
], AboutPageModule);



/***/ }),

/***/ "kL6T":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./about.page.html */ "mhsJ");
/* harmony import */ var _about_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.page.scss */ "vbXv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AboutPage = class AboutPage {
    constructor() {
        this.segment = 'cm';
    }
    ngOnInit() {
    }
};
AboutPage.ctorParameters = () => [];
AboutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about',
        template: _raw_loader_about_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_about_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AboutPage);



/***/ }),

/***/ "mhsJ":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>About</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">About</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <ion-segment [(ngModel)]=\"segment\" scrollable=\"true\">\n      <ion-segment-button value=\"cm\">\n        <ion-label>CM's Message</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"university\">\n        <ion-label>University</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"vision\">\n        <ion-label>Vision &amp; Mission</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"chancellor\">\n        <ion-label>Vice-Chancellor's Message</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"school\">\n        <ion-label>School of Planning &amp; Architecture</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"college\">\n        <ion-label>College of Fine Arts</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"location\">\n        <ion-label>Our Location</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n    <div *ngIf=\"segment == 'cm'\">\n      <ion-card>\n        <img src=\"../assets/about/CM-Message.jpg\" alt=\"cm\" />\n      </ion-card>\n    </div>\n    <div *ngIf=\"segment == 'university'\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>UNIVERSITY</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p>Andhra Pradesh is a fast-growing State in all aspects and is acquiring importance both at National and\n            International level. The fields of Architecture, Engineering, Fine Arts, Management and Pharmacy have become\n            essential for the growth of our country. To meet the need of experienced professionals with practical,\n            creative and real life problem solving skills in art, design and architecture, Dr. YSR Architecture and Fine\n            Arts University is established to offer quality and state-of-the art education.</p>\n          <br />\n          <p>Earlier,Under the special policy of providing a systematic education in Art and Architecture to the present\n            needs of design industry, Jawaharlal Nehru Architecture and Fine Arts University was established under the\n            Act of Andhra Pradesh State Legislature No.31 of 2008 by Late Dr. YS. Rajasekhara Reddy garu Former Chief\n            Minister of Andhra Pradesh. After the separation of Telugu state into two namely Telangana and Andhra\n            Pradesh Prof. D. Vijay Kishore (OSD, Vice-Chancellor I/c), made the proposal of a separate Architecture and\n            Fine Arts University in the state of Andhra Pradesh to the honourable Chief Minister Sri. Y.S. Jagan Mohan\n            Reddy Garu and the State Government. Under the</p>\n          <br />\n          <p>Dynamic leadership of the Chief Minister a new University is established under Sub Section (2) of the\n            Section (1) of the Jawaharlal Nehru Architecture and Fine Arts University (Amendment) Act, 2019 of A.P\n            Legislature Act No.15 of 2020 paving way for Dr. YSR Architecture and Fine Arts University , Kadapa.</p>\n          <br />\n          <p>The University comprises of Ten versatile departments offering Under graduate, Post graduate and research\n            programs in two specialised constituent bodies namely School of Planning and Architecture (SPA) and College\n            of Fine Arts (CFA). Its teaching programs aim to build thoughtful professionals and its research programs\n            deepen the understanding of human settlements.</p>\n          <br />\n          <p>Human habitat and environment being the basic concern of the University, the spectrum of academic\n            programmes is being continuously extended by providing programmes in new fields and emerging areas. The\n            University also undertakes advisory projects to further the goal of making built environment more functional\n            and sustainable. Through its education, research and advisory activities, and improve the impact of habitat\n            professions in enriching the lives of people in A.P's Villages, Towns and Cities.</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngIf=\"segment == 'vision'\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>VISION</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list>\n            <ion-item>\n              <ion-avatar slot=\"start\">\n                <ion-icon name=\"radio-button-on-outline\"></ion-icon>\n              </ion-avatar>\n              <ion-label>\n                <h3 class=\"ion-text-wrap\">Imparting Professional Education in the field of Art, Design and Architecture\n                  with best teaching practices and hands on experience with state-of-the art laboratories and facilities\n                  to achieve highest global educational standards.</h3>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-avatar slot=\"start\">\n                <ion-icon name=\"radio-button-on-outline\"></ion-icon>\n              </ion-avatar>\n              <ion-label>\n                <h3 class=\"ion-text-wrap\">Creating a transformative educational experience for students focused on deep\n                  core subject knowledge and problem solving skills while developing strong personality development in\n                  leadership, communication, and interpersonal skills.</h3>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-avatar slot=\"start\">\n                <ion-icon name=\"radio-button-on-outline\"></ion-icon>\n              </ion-avatar>\n              <ion-label>\n                <h3 class=\"ion-text-wrap\">Bring global exposure to students and scholars by associating with partners\n                  internationally to develop maturity, empathy and integrity to address the problems of this ever\n                  changing world.</h3>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>MISSION</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list>\n            <ion-item>\n              <ion-avatar slot=\"start\">\n                <ion-icon name=\"radio-button-on-outline\"></ion-icon>\n              </ion-avatar>\n              <ion-label>\n                <h3 class=\"ion-text-wrap\">Leadership in research and development to develop advanced building\n                  technology, design and exploring new possibilities in fine arts through appropriate utilization and\n                  conservation of natural resources for sustainable development.</h3>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-avatar slot=\"start\">\n                <ion-icon name=\"radio-button-on-outline\"></ion-icon>\n              </ion-avatar>\n              <ion-label>\n                <h3 class=\"ion-text-wrap\">To become a landmark in higher education and research University for Art,\n                  Design and Architecture in Andhra Pradesh attaining National and International standards.</h3>\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-avatar slot=\"start\">\n                <ion-icon name=\"radio-button-on-outline\"></ion-icon>\n              </ion-avatar>\n              <ion-label>\n                <h3 class=\"ion-text-wrap\">Bestowing graduates with quality education conscious of current environmental\n                  crisis and developing personal development skills to be ready for the market with self-confidence,\n                  adaptability, interpersonal skills and work ethic.</h3>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngIf=\"segment == 'chancellor'\">\n      <ion-card>\n        <img src=\"./assets/about/vchanclar.png\" alt=\"\" />\n        <ion-card-header>\n          <ion-card-title>VICE-CHANCELLOR'S MESSAGE</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p>Dr. YSR Architecture and Fine Arts University was founded in January 2020, its academic structure and the\n            laboratories shall be designed to ascertain that it will be acclaimed for its outstanding contribution\n            towards teaching, research and service in shaping this Nation. The University will stand to meet the\n            enormous expectations of the parents towards their wards by nurturing professionals and scholars of high\n            calibre, who can offer solutions to a broad range of issues. This requires excellence in teaching and\n            research on par with the best in the world.</p>\n          <br />\n          <p>We, at the Dr. YSR Architecture and Fine Arts University, continuously aspire to be a breeding ground for\n            positive ideas and emerge as a symbol of openness of thoughts, cultural pluralism and celebrating the unity\n            in the diversity of India. We endeavour to touch the lives of every student by inculcating prudence,\n            efficiency, creativity and compassion to work for the betterment of the marginalized sections of society. We\n            attempt to kindle their sense of - responsibility, honesty, conscience, justice - and above all commitment\n            to human values.</p>\n          <br />\n          <p>Our students will always be the core of our existence as an institution, and we want to give wings to their\n            dreams. We expect them to be passionate about their dreams and make their family and society proud of their\n            achievements. It is crucial for the parents to keep reminding their wards to remain focused on their\n            education and to instil in them a sense of responsibility and care towards the concerns of fellow beings. It\n            will give them strength and motivation to work hard for a greater cause in life.</p>\n          <br />\n          <p><b>Best wishes</b></p>\n          <p><b>Prof. D. Vijay Kishore</b></p>\n          <p><b>OSD and Vice-Chancellor (I/c)</b></p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngIf=\"segment == 'school'\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>SCHOOL OF PLANNING AND ARCHITECTURE</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p>School of Planning and Architecture encompasses five departments Architecture, Interior design, Digital\n            techniques in design and planning, facilities and services planning and town planning with superior grade of\n            understanding and methodical approach to solve the problems of this generation.</p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <img src=\"./assets/about/spa-abt-1.png\" alt=\"\" />\n        <ion-card-content>\n          <p>Students of Architecture are taught to address the complex problems of designing - to house human activity,\n            issues of climate change, energy conservation, technology, structure and combining the needs of internal and\n            external environment with a methodological training in analysis, understanding and problem solving. The\n            course broadens the intellectual and social lives of students beyond the boundaries of architecture and\n            built environment.</p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <img src=\"./assets/about/spa-abt-2.png\" alt=\"\" />\n        <ion-card-content>\n          <p>Interior Design Course is designed to develop artistic bent of mind and good imagination for space\n            planning, construction management and effective use of available materials and products. They are taught to\n            create plush, functional and adaptable spaces in various building typologies in an ever evolving and\n            changing world. They are instilled with creativity and problem solving ability while teaching latest\n            material availability, construction techniques and patterns with variety of design workshops such as\n            furniture manufacturing, metal works and lifestyle Accessory Design.</p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <img src=\"./assets/about/spa-abt-3.png\" alt=\"\" />\n        <ion-card-content>\n          <p>Digital Techniques in Design and Planning(DTDP) is a multi-disciplinary course, which relates to Design,\n            Multimedia, GIS and IT. The Course structure deals with design and development of the space and built form\n            environment. A strong foundation is imparted into students related to space, design, construction,\n            environment, multimedia, geographical information systems and information technology.</p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <img src=\"./assets/about/spa-abt-4.png\" alt=\"\" />\n        <ion-card-content>\n          <p>Students of Facilities and Services Planning(FSP) are taught engineering design, construction procedures,\n            operation, renovation and maintenance of buildings as well as the impact of them on surrounding environment.\n            The course instills knowledge in designing layouts for building services, building commissioning for\n            operation and maintenance, HVAC, Electrical technology, Automation, sustainable energy utility for both\n            residential and commercial buildings.</p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <img src=\"./assets/about/spa-abt-5.png\" alt=\"\" />\n        <ion-card-content>\n          <p>The department of Town Planning Students are taught to be both people-oriented and future-oriented\n            combining design, analytical and communication skills. They are nurtured to care about the future and\n            contribute planning solutions to communities with social, economic and environmental problems. The aim is\n            for the student to pursue career in urban and regional planning with knowledge including Sociology,\n            Legislation, Development Theories, Politics, Housing, Transportation, Urban Economics and Landscape.</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngIf=\"segment == 'college'\">\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>COLLEGE OF FINE ARTS</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p>College of Fine arts offers Bachelor of Fine Arts (BFA) degree through five departments namely Painting,\n            Animation, Applied Art, Photography and Sculpture to develop the artistic sense of human to communicate and\n            leave footprints of this generation for the ages to come.</p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <img src=\"./assets/about/cfa-abt-1.png\" alt=\"\" />\n        <ion-card-content>\n          <p>The Course of Painting is designed for students to understand the creative use of drawing, oil colour,\n            water colour, ternpera and other media of painting along with figurative and non-figurative compositions.\n            They develop competence in landscape painting, life study, portraiture and mural design in different media.\n          </p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <img src=\"./assets/about/cfa-abt-2.png\" alt=\"\" />\n        <ion-card-content>\n          <p>The Animation program enables students to develop core domain areas for animation design and soft skills to\n            experiment with various mediums such as 2D, 3D, VFX, film making, Stop motion animation, etc,. They are\n            introduced to basic drawing and design skills required.</p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <img src=\"./assets/about/cfa-abt-3.png\" alt=\"\" />\n        <ion-card-content>\n          <p>The Course structure Applied Art prepares students in creative useof different media for painting and\n            compositional skills with various technical processes of print making such as etching, lithography, wood\n            cutting etc,. to apply their skills in art and craft.</p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <img src=\"./assets/about/cfa-abt-4.png\" alt=\"\" />\n        <ion-card-content>\n          <p>The academic programme of Photography and Visual Communications equips students with necessary skills to\n            learn Photography as Fine Art, Photo Journalism, Digital Photography, Audio-Visual Communication, Computer\n            Graphics & Multimedia with videography.</p>\n        </ion-card-content>\n      </ion-card>\n      <ion-card>\n        <img src=\"./assets/about/cfa-abt-5.png\" alt=\"\" />\n        <ion-card-content>\n          <p>The Course Sculpture equips students to understand moulding and casting with various mediums like Clay,\n            Cement, Plaster, Fiber, Bronze, Ceramics, Metal and Wood. They are aquainted to printmaking and painting.\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngIf=\"segment == 'location'\">\n      <ion-card>\n        <img src=\"./assets/about/map.png\" alt=\"\" />\n        <ion-card-header>\n          <ion-card-title>OUR LOCATION</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <p>This university is located in Kadapa in the state of Andhra Pradesh, India. The Site is Located on a\n            hillock overlooking into 'Penna' river and enclosed between Seshachalam and Nallamalla forest ranges. Being\n            in a natural setup the students are stimulated to get creative thoughts. It is being developed by the State\n            Government, under the ownership and guidance of the Ministry of Education. Construction of a new University\n            takes time and to facilitate education to our students, we are hiring a Transit accommodation to begin the\n            classes from this academic year.</p>\n          <br />\n          <p>Kadapa (known previously as Cuddapah) is a municipal city that lies in the area of Rayalaseema and is\n            located in the south-central region of the southern Indian state of Andhra Pradesh and is located very close\n            to the Penna river. Kadapa is easily accessible by air, train and road. The city has its own domestic\n            airport that is about 8 km from the centre of the city. The railway station at Kadapa lies on the\n            Mumbai-Chennai line and hence, the city receives quite a number of trains at regular intervals. The city is\n            well connected to other cities in the state via a good road transport. You have buses and cabs to take you\n            to Kadapa from Chennai, Bangalore and Hyderabad.The nearest international airport is at Chennai( 258km)\n            /Bangalore(250 km)/Hyderabad(400) which makes the city easily accessible to south Indian Metro cities.</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "vbXv":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=about-about-module.js.map