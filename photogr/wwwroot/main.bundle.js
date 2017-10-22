webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<core-layout></core-layout>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(ngRedux, modalService) {
        this.ngRedux = ngRedux;
        this.modalService = modalService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__store_store_module__ = __webpack_require__("../../../../../src/app/store/store.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_core__ = __webpack_require__("../../../../../src/app/components/core/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_redux_store__["NgReduxModule"],
            __WEBPACK_IMPORTED_MODULE_7__store_store_module__["a" /* StoreModule */],
            __WEBPACK_IMPORTED_MODULE_8__components_core__["a" /* CoreModule */]
        ],
        providers: [],
        entryComponents: [],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/common.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCommonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__photo_uploader_photo_uploader__ = __webpack_require__("../../../../../src/app/components/common/photo-uploader/photo-uploader.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ratings_ratings__ = __webpack_require__("../../../../../src/app/components/common/ratings/ratings.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppCommonModule = (function () {
    function AppCommonModule() {
    }
    return AppCommonModule;
}());
AppCommonModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__photo_uploader_photo_uploader__["a" /* PhotoUploaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__ratings_ratings__["a" /* RatingsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgReduxModule"],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__photo_uploader_photo_uploader__["a" /* PhotoUploaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__ratings_ratings__["a" /* RatingsComponent */]
        ]
    }),
    __metadata("design:paramtypes", [])
], AppCommonModule);

//# sourceMappingURL=common.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_module__ = __webpack_require__("../../../../../src/app/components/common/common.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__common_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/photo-uploader/photo-uploader.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <img id=\"blah\" [src]=\"url\" alt=\"Please upload an Image\" width=\"100%\"/>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <label class=\"custom-file\">\r\n      <input type=\"file\"\r\n             id=\"file\"\r\n             (change)=\"readUrl($event)\"\r\n             class=\"custom-file-input\"\r\n             ngControl\r\n             ngModel>\r\n      <span class=\"custom-file-control\"></span>\r\n    </label>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/common/photo-uploader/photo-uploader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoUploaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhotoUploaderComponent = (function () {
    function PhotoUploaderComponent() {
    }
    PhotoUploaderComponent.prototype.readUrl = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.url = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    return PhotoUploaderComponent;
}());
PhotoUploaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'photo-uploader',
        template: __webpack_require__("../../../../../src/app/components/common/photo-uploader/photo-uploader.html")
    })
], PhotoUploaderComponent);

//# sourceMappingURL=photo-uploader.js.map

/***/ }),

/***/ "../../../../../src/app/components/common/ratings/ratings.html":
/***/ (function(module, exports) {

module.exports = "<div>{{rate}} Ratings</div>"

/***/ }),

/***/ "../../../../../src/app/components/common/ratings/ratings.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RatingsComponent = (function () {
    function RatingsComponent() {
    }
    return RatingsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], RatingsComponent.prototype, "rate", void 0);
RatingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ratings',
        template: __webpack_require__("../../../../../src/app/components/common/ratings/ratings.html")
    })
], RatingsComponent);

//# sourceMappingURL=ratings.js.map

/***/ }),

/***/ "../../../../../src/app/components/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_redux_router__ = __webpack_require__("../../../../@angular-redux/router/lib/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page__ = __webpack_require__("../../../../../src/app/components/page/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common__ = __webpack_require__("../../../../../src/app/components/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_login__ = __webpack_require__("../../../../../src/app/components/user/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__photo_create_create__ = __webpack_require__("../../../../../src/app/components/photo/create/create.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__layout_layout__ = __webpack_require__("../../../../../src/app/components/core/layout/layout.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header__ = __webpack_require__("../../../../../src/app/components/core/header/header.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__menu_menu__ = __webpack_require__("../../../../../src/app/components/core/menu/menu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__route__ = __webpack_require__("../../../../../src/app/route.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__user_login__["a" /* LoginModal */],
            __WEBPACK_IMPORTED_MODULE_10__header_header__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_9__layout_layout__["a" /* LayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__menu_menu__["a" /* MenuComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__route__["a" /* appRoutes */]),
            __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgReduxModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_redux_router__["b" /* NgReduxRouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_5__page__["a" /* PageModule */],
            __WEBPACK_IMPORTED_MODULE_6__common__["a" /* AppCommonModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__user_login__["a" /* LoginModal */],
            __WEBPACK_IMPORTED_MODULE_8__photo_create_create__["a" /* CreatePhotoModal */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_9__layout_layout__["a" /* LayoutComponent */]
        ]
    }),
    __metadata("design:paramtypes", [])
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/core/header/header.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light bg-faded\">\r\n\r\n  <form class=\"form-inline\" >\r\n    <input class=\"form-control\" type=\"text\" placeholder=\"Search\">\r\n    <button class=\"btn btn-outline-success\" type=\"button\">Search</button>\r\n  </form>\r\n  <div>\r\n    <button class=\"btn-outline-primary btn\" type=\"button\" (click)=\"newPhoto()\">+</button>\r\n    <button class=\"btn btn-outline-success\" (click)=\"open()\">Sign In</button>\r\n  </div>\r\n  \r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/core/header/header.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_login__ = __webpack_require__("../../../../../src/app/components/user/login.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__photo_create_create__ = __webpack_require__("../../../../../src/app/components/photo/create/create.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(modalService) {
        this.modalService = modalService;
    }
    HeaderComponent.prototype.open = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__user_login__["a" /* LoginModal */]);
    };
    HeaderComponent.prototype.newPhoto = function () {
        var modalRef = this.modalService.open(__WEBPACK_IMPORTED_MODULE_3__photo_create_create__["a" /* CreatePhotoModal */], { size: 'lg' });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'core-header',
        template: __webpack_require__("../../../../../src/app/components/core/header/header.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.js.map

/***/ }),

/***/ "../../../../../src/app/components/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_module__ = __webpack_require__("../../../../../src/app/components/core/core.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__core_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_layout__ = __webpack_require__("../../../../../src/app/components/core/layout/layout.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/core/layout/layout.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"col-3\">\r\n    <core-menu></core-menu>\r\n  </div>\r\n  <div class=\"col\">\r\n    <core-header></core-header>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/core/layout/layout.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    return LayoutComponent;
}());
LayoutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'core-layout',
        template: __webpack_require__("../../../../../src/app/components/core/layout/layout.html")
    })
], LayoutComponent);

//# sourceMappingURL=layout.js.map

/***/ }),

/***/ "../../../../../src/app/components/core/menu/menu.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"list-group\">\r\n  <a routerLink=\"/home\"  class=\"list-group-item list-group-item-action\" routerLinkActive=\"active\">\r\n    Home\r\n  </a>\r\n  <a routerLink=\"/profile\"  class=\"list-group-item list-group-item-action\" routerLinkActive=\"active\">My Photos</a>\r\n  <a href=\"#\" class=\"list-group-item list-group-item-action\">Trending</a>\r\n  <a href=\"#\" class=\"list-group-item list-group-item-action\">Friends</a>\r\n  <a href=\"#\" class=\"list-group-item list-group-item-action\">Events</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/core/menu/menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'core-menu',
        template: __webpack_require__("../../../../../src/app/components/core/menu/menu.html")
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PAGES; });
var PAGES = {
    HOME: "homepage"
};
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/home/home.html":
/***/ (function(module, exports) {

module.exports = "<div>Home</div>\r\n<feature-photo [photo]=featuredPhoto></feature-photo>\r\n\r\n<photo-list [photos]=\"photos$\" [photoType]=\"photoType\"></photo-list>"

/***/ }),

/***/ "../../../../../src/app/components/page/home/home.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export convertPhotosToArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__photo_actions__ = __webpack_require__("../../../../../src/app/components/photo/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__("../../../../../src/app/components/page/constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var convertPhotosToArray = function (photoDict$) {
    return photoDict$.map(Object(__WEBPACK_IMPORTED_MODULE_4_ramda__["b" /* pipe */])(__WEBPACK_IMPORTED_MODULE_4_ramda__["e" /* values */], Object(__WEBPACK_IMPORTED_MODULE_4_ramda__["d" /* sortBy */])(Object(__WEBPACK_IMPORTED_MODULE_4_ramda__["c" /* prop */])('id'))));
};
var HomeComponent = (function () {
    function HomeComponent(modalService, actions) {
        this.modalService = modalService;
        this.featuredPhoto = {
            id: 1,
            title: 'This is a banner',
            description: 'some info',
            url: './assets/images/banner.jpg'
        };
        this.photoType = __WEBPACK_IMPORTED_MODULE_6__constants__["a" /* PAGES */].HOME;
        actions.loadPhotos();
    }
    return HomeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["select$"])([__WEBPACK_IMPORTED_MODULE_6__constants__["a" /* PAGES */].HOME, 'items'], convertPhotosToArray),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], HomeComponent.prototype, "photos$", void 0);
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',
        template: __webpack_require__("../../../../../src/app/components/page/home/home.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__photo_actions__["a" /* PhotoAPIActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__photo_actions__["a" /* PhotoAPIActions */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_module__ = __webpack_require__("../../../../../src/app/components/page/page.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__page_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__photo__ = __webpack_require__("../../../../../src/app/components/photo/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__("../../../../../src/app/components/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__("../../../../../src/app/components/user/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__("../../../../../src/app/components/page/home/home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__("../../../../../src/app/components/page/profile/profile.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PageModule = (function () {
    function PageModule() {
    }
    return PageModule;
}());
PageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgReduxModule"],
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_3__photo__["a" /* PhotoModule */],
            __WEBPACK_IMPORTED_MODULE_4__common__["a" /* AppCommonModule */],
            __WEBPACK_IMPORTED_MODULE_5__user__["a" /* UserModule */]
        ],
        entryComponents: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfileComponent */]
        ]
    }),
    __metadata("design:paramtypes", [])
], PageModule);

//# sourceMappingURL=page.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/page/profile/profile.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <img src=\"\" width=\"100%\"/>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n            <div>{{user.firstname}} {{user.lastname}}</div>\r\n            <user-type [userType]=user.type></user-type>\r\n            \r\n            <div class=\"mt-4\"></div>\r\n            <user-stats [numberOfPhotos]=user.photos\r\n                        [numberOfFollowers]=user.followers\r\n                        [numberOfFollowing]=user.following></user-stats>\r\n                        \r\n            <div class=\"mt-4\"></div>\r\n            <ratings [rate]=user.rating></ratings>\r\n            <div class=\"mt-4\"></div>\r\n            <user-subscription></user-subscription>\r\n            <div class=\"mt-4\"></div>\r\n            <contact-information></contact-information>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <h2>Featured Album</h2>\r\n            <photo-list [photos]=\"photos$\" [photoType]=\"photoType\"></photo-list>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/page/profile/profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export convertPhotosToArray */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__("../../../../../src/app/components/page/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__photo_actions__ = __webpack_require__("../../../../../src/app/components/photo/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var convertPhotosToArray = function (photoDict$) {
    return photoDict$.map(Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["b" /* pipe */])(__WEBPACK_IMPORTED_MODULE_3_ramda__["e" /* values */], Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["d" /* sortBy */])(Object(__WEBPACK_IMPORTED_MODULE_3_ramda__["c" /* prop */])('id'))));
};
var ProfileComponent = (function () {
    function ProfileComponent(action) {
        this.user = {
            firstname: "John",
            lastname: "Smith",
            type: "Professional",
            rating: 4,
            photos: 10,
            followers: 12,
            following: 10
        };
        this.photoType = __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* PAGES */].HOME;
        //action.loadPhotos()
    }
    return ProfileComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select$"])([__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* PAGES */].HOME, 'items'], convertPhotosToArray),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]) === "function" && _a || Object)
], ProfileComponent.prototype, "photos$", void 0);
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-profile',
        template: __webpack_require__("../../../../../src/app/components/page/profile/profile.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__photo_actions__["a" /* PhotoAPIActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__photo_actions__["a" /* PhotoAPIActions */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.js.map

/***/ }),

/***/ "../../../../../src/app/components/photo/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoAPIActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


;
var PhotoAPIActions = PhotoAPIActions_1 = (function () {
    function PhotoAPIActions() {
        this.loadPhotos = function () { return ({
            type: PhotoAPIActions_1.LOAD_PHOTOS,
            meta: {},
            payload: null
        }); };
        this.loadStarted = function () { return ({
            type: PhotoAPIActions_1.LOAD_STARTED,
            meta: {},
            payload: null,
        }); };
        this.loadSucceeded = function (payload) { return ({
            type: PhotoAPIActions_1.LOAD_SUCCEEDED,
            meta: {},
            payload: payload,
        }); };
        this.loadFailed = function (error) { return ({
            type: PhotoAPIActions_1.LOAD_FAILED,
            meta: {},
            payload: null,
            error: error,
        }); };
    }
    return PhotoAPIActions;
}());
PhotoAPIActions.LOAD_PHOTOS = 'LOAD_PHOTOS';
PhotoAPIActions.LOAD_STARTED = 'LOAD_STARTED';
PhotoAPIActions.LOAD_SUCCEEDED = 'LOAD_SUCCEEDED';
PhotoAPIActions.LOAD_FAILED = 'LOAD_FAILED';
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
    __metadata("design:type", Object)
], PhotoAPIActions.prototype, "loadPhotos", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
    __metadata("design:type", Object)
], PhotoAPIActions.prototype, "loadStarted", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
    __metadata("design:type", Object)
], PhotoAPIActions.prototype, "loadSucceeded", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["dispatch"])(),
    __metadata("design:type", Object)
], PhotoAPIActions.prototype, "loadFailed", void 0);
PhotoAPIActions = PhotoAPIActions_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], PhotoAPIActions);

var PhotoAPIActions_1;
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "../../../../../src/app/components/photo/create/create.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Upload a photo</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body \">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\">\r\n        <photo-uploader></photo-uploader>\r\n      </div>\r\n      <div class=\"col-6\">\r\n        <form connect=\"newImage\">\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputTitle\">Title</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   id=\"inputTitle\"\r\n                   aria-describedby=\"inputTitle\"\r\n                   placeholder=\"Enter Title\"\r\n                   ngControl\r\n                   ngModel>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"inputDescription\">Description</label>\r\n            <textarea class=\"form-control\"\r\n                      id=\"inputDescription\"\r\n                      rows=\"3\"\r\n                      ngControl\r\n                      ngModel></textarea>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                  <input class=\"form-check-input\" type=\"checkbox\"> Enable Selling\r\n                </label>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-sm-6\">\r\n              <div class=\"form-group\">\r\n                <label for=\"inputPrice\">Price</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"inputPrice\" aria-describedby=\"photoPrice\" placeholder=\"Enter Price\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label for=\"album\">Album</label>\r\n            <select class=\"form-control\" id=\"album\">\r\n              <option>1</option>\r\n            </select>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/photo/create/create.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePhotoModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreatePhotoModal = (function () {
    function CreatePhotoModal(activeModal) {
        this.activeModal = activeModal;
    }
    return CreatePhotoModal;
}());
CreatePhotoModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'create-photo-modal',
        template: __webpack_require__("../../../../../src/app/components/photo/create/create.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], CreatePhotoModal);

var _a;
//# sourceMappingURL=create.js.map

/***/ }),

/***/ "../../../../../src/app/components/photo/epics.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoAPIEpics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_observable__ = __webpack_require__("../../../../redux-observable/lib/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__("../../../../../src/app/components/photo/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service__ = __webpack_require__("../../../../../src/app/components/photo/service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PhotoAPIEpics = (function () {
    function PhotoAPIEpics(actions, service) {
        this.actions = actions;
        this.service = service;
    }
    PhotoAPIEpics.prototype.createEpic = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_redux_observable__["a" /* createEpicMiddleware */])(this.createLoadPhotoEpic());
    };
    PhotoAPIEpics.prototype.createLoadPhotoEpic = function () {
        var _this = this;
        return function (action$, store) { return action$
            .ofType(__WEBPACK_IMPORTED_MODULE_7__actions__["a" /* PhotoAPIActions */].LOAD_PHOTOS)
            .switchMap(function () { return _this.service.getAll()
            .map(function (data) { return _this.actions.loadSucceeded(data); })
            .catch(function (response) { return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(_this.actions.loadFailed({
            status: '' + response.status,
        })); })
            .startWith(_this.actions.loadStarted()); }); };
    };
    return PhotoAPIEpics;
}());
PhotoAPIEpics = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__actions__["a" /* PhotoAPIActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__actions__["a" /* PhotoAPIActions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_8__service__["a" /* PhotoAPIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__service__["a" /* PhotoAPIService */]) === "function" && _b || Object])
], PhotoAPIEpics);

var _a, _b;
//# sourceMappingURL=epics.js.map

/***/ }),

/***/ "../../../../../src/app/components/photo/feature-photo/feature-photo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <img [src]=photo.url width=\"100%\">\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/photo/feature-photo/feature-photo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeaturePhotoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__("../../../../../src/app/components/photo/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeaturePhotoComponent = (function () {
    function FeaturePhotoComponent() {
    }
    FeaturePhotoComponent.prototype.ngOnInit = function () {
        console.log(this.photo);
    };
    return FeaturePhotoComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model__["a" /* IPhoto */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model__["a" /* IPhoto */]) === "function" && _a || Object)
], FeaturePhotoComponent.prototype, "photo", void 0);
FeaturePhotoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'feature-photo',
        template: __webpack_require__("../../../../../src/app/components/photo/feature-photo/feature-photo.html")
    })
], FeaturePhotoComponent);

var _a;
//# sourceMappingURL=feature-photo.js.map

/***/ }),

/***/ "../../../../../src/app/components/photo/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__photo_module__ = __webpack_require__("../../../../../src/app/components/photo/photo.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__photo_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/photo/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IPhoto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return fromServer; });
var IPhoto = (function () {
    function IPhoto() {
    }
    return IPhoto;
}());

var fromServer = function (record) { return ({
    id: record.id,
    title: record.title,
    description: record.description,
    url: record.url
}); };
//# sourceMappingURL=model.js.map

/***/ }),

/***/ "../../../../../src/app/components/photo/photo-item/photo-item.html":
/***/ (function(module, exports) {

module.exports = "<div >\r\n  <div class=\"card\">\r\n    <img class=\"card-img-top\" [src]=\"url$ | async\" alt=\"Card image cap\">\r\n    <div class=\"card-block\">\r\n      <button type=\"button\" class=\"btn btn-outline-primary\">comment</button>\r\n      <button type=\"button\" class=\"btn btn-outline-primary\">favourite</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/photo/photo-item/photo-item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export photoReducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Basic reducer logic.
var photoReducer = function (state, action) {
    if (state === void 0) { state = {}; }
    return action.type === 'ADD_LOC' ? __assign({}, state, { loc: state.loc + action.payload }) :
        state;
};
var PhotoItemComponent = (function () {
    function PhotoItemComponent() {
        var _this = this;
        this.getBasePath = function () { return _this.key ? [_this.photoType, 'items', _this.key] : null; };
    }
    return PhotoItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["select"])('url'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], PhotoItemComponent.prototype, "url$", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PhotoItemComponent.prototype, "key", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PhotoItemComponent.prototype, "photoType", void 0);
PhotoItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["WithSubStore"])({
        basePathMethodName: 'getBasePath',
        localReducer: photoReducer
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'photo-item',
        template: __webpack_require__("../../../../../src/app/components/photo/photo-item/photo-item.html")
    })
], PhotoItemComponent);

var _a;
//# sourceMappingURL=photo-item.js.map

/***/ }),

/***/ "../../../../../src/app/components/photo/photo-list/photo-list.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <photo-item *ngFor=\"let photo of photos | async; trackBy:getKey\"\r\n                [key]=getKey(null,photo)\r\n                [photoType]=\"photoType\"\r\n                class=\"col-md-4\">\r\n    </photo-item>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/photo/photo-list/photo-list.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotoListComponent = (function () {
    function PhotoListComponent() {
    }
    PhotoListComponent.prototype.getKey = function (_, photo) {
        return photo.id;
    };
    return PhotoListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], PhotoListComponent.prototype, "photos", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PhotoListComponent.prototype, "photoType", void 0);
PhotoListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'photo-list',
        template: __webpack_require__("../../../../../src/app/components/photo/photo-list/photo-list.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
    })
], PhotoListComponent);

var _a;
//# sourceMappingURL=photo-list.js.map

/***/ }),

/***/ "../../../../../src/app/components/photo/photo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common__ = __webpack_require__("../../../../../src/app/components/common/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feature_photo_feature_photo__ = __webpack_require__("../../../../../src/app/components/photo/feature-photo/feature-photo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__photo_list_photo_list__ = __webpack_require__("../../../../../src/app/components/photo/photo-list/photo-list.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__photo_item_photo_item__ = __webpack_require__("../../../../../src/app/components/photo/photo-item/photo-item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__create_create__ = __webpack_require__("../../../../../src/app/components/photo/create/create.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions__ = __webpack_require__("../../../../../src/app/components/photo/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__epics__ = __webpack_require__("../../../../../src/app/components/photo/epics.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service__ = __webpack_require__("../../../../../src/app/components/photo/service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PhotoModule = (function () {
    function PhotoModule() {
    }
    return PhotoModule;
}());
PhotoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__feature_photo_feature_photo__["a" /* FeaturePhotoComponent */],
            __WEBPACK_IMPORTED_MODULE_6__photo_list_photo_list__["a" /* PhotoListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__photo_item_photo_item__["a" /* PhotoItemComponent */],
            __WEBPACK_IMPORTED_MODULE_8__create_create__["a" /* CreatePhotoModal */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_redux_store__["NgReduxModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__common__["a" /* AppCommonModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__create_create__["a" /* CreatePhotoModal */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_7__photo_item_photo_item__["a" /* PhotoItemComponent */],
            __WEBPACK_IMPORTED_MODULE_5__feature_photo_feature_photo__["a" /* FeaturePhotoComponent */],
            __WEBPACK_IMPORTED_MODULE_6__photo_list_photo_list__["a" /* PhotoListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__create_create__["a" /* CreatePhotoModal */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__actions__["a" /* PhotoAPIActions */], __WEBPACK_IMPORTED_MODULE_10__epics__["a" /* PhotoAPIEpics */], __WEBPACK_IMPORTED_MODULE_11__service__["a" /* PhotoAPIService */]]
    }),
    __metadata("design:paramtypes", [])
], PhotoModule);

//# sourceMappingURL=photo.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/photo/reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createPhotoAPIReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/components/photo/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ramda__ = __webpack_require__("../../../../ramda/es/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var INITIAL_STATE = {
    items: {},
    loading: false,
    error: null,
};
function createPhotoAPIReducer() {
    return function photoReducer(state, a) {
        if (state === void 0) { state = INITIAL_STATE; }
        var action = a;
        switch (action.type) {
            case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* PhotoAPIActions */].LOAD_STARTED:
                return __assign({}, state, { items: {}, loading: true, error: null });
            case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* PhotoAPIActions */].LOAD_SUCCEEDED:
                return __assign({}, state, { items: Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["a" /* indexBy */])(Object(__WEBPACK_IMPORTED_MODULE_1_ramda__["c" /* prop */])('id'), action.payload), loading: false, error: null });
            case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* PhotoAPIActions */].LOAD_FAILED:
                return __assign({}, state, { items: {}, loading: false, error: action.error });
        }
        return state;
    };
}
//# sourceMappingURL=reducer.js.map

/***/ }),

/***/ "../../../../../src/app/components/photo/service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoAPIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model__ = __webpack_require__("../../../../../src/app/components/photo/model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// A fake API on the internets.
var URLS = {
    HOME_PHOTOS: 'http://www.mocky.io/v2/59e6784b120000e4030358c9'
};
var PhotoAPIService = (function () {
    function PhotoAPIService(http) {
        var _this = this;
        this.http = http;
        this.getAll = function () {
            return _this.http.get(URLS.HOME_PHOTOS)
                .map(function (resp) { return resp.json(); })
                .map(function (records) { return records.map(__WEBPACK_IMPORTED_MODULE_4__model__["b" /* fromServer */]); });
        };
    }
    return PhotoAPIService;
}());
PhotoAPIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PhotoAPIService);

var _a;
//# sourceMappingURL=service.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/contact-information/contact-information.html":
/***/ (function(module, exports) {

module.exports = "<h6>Contact Information</h6>\r\n<div class=\"row\">\r\n    <div class=\"col-4\">\r\n        Phone Number\r\n    </div>\r\n    <div class=\"col-8\">\r\n        +1 905 923 2342\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-4\">\r\n        Address\r\n    </div>\r\n    <div class=\"col-8\">\r\n        23 Jofns Ave\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-4\">\r\n        Email\r\n    </div>\r\n    <div class=\"col-8\">\r\n        John.Smth@moahwkcollege.ca\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-4\">\r\n        Website\r\n    </div>\r\n    <div class=\"col-8\">\r\n        www.sdfs.com\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/contact-information/contact-information.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactInformationComponent = (function () {
    function ContactInformationComponent() {
    }
    return ContactInformationComponent;
}());
ContactInformationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contact-information',
        template: __webpack_require__("../../../../../src/app/components/user/contact-information/contact-information.html")
    })
], ContactInformationComponent);

//# sourceMappingURL=contact-information.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_module__ = __webpack_require__("../../../../../src/app/components/user/user.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__user_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/login.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Please sign in</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"loginEmail\">Email address</label>\r\n      <input type=\"email\"\r\n             class=\"form-control\"\r\n             id=\"loginEmail\"\r\n             name=\"email\"\r\n             aria-describedby=\"emailHelp\"\r\n             placeholder=\"Enter email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"loginPassword\">Password</label>\r\n      <input type=\"password\"\r\n             name=\"password\"\r\n             class=\"form-control\"\r\n             id=\"loginPassword\"\r\n             placeholder=\"Password\">\r\n    </div>\r\n    <div class=\"form-check\">\r\n      <label class=\"form-check-label\">\r\n        <input type=\"checkbox\" class=\"form-check-input\">\r\n        Remember Me\r\n      </label>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click')\">Close</button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user/login.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginModal = (function () {
    function LoginModal(activeModal) {
        this.activeModal = activeModal;
    }
    return LoginModal;
}());
LoginModal = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login-modal',
        template: __webpack_require__("../../../../../src/app/components/user/login.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* NgbActiveModal */]) === "function" && _a || Object])
], LoginModal);

var _a;
//# sourceMappingURL=login.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-stats/user-stats.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <p class=\"card-title\">{{numberOfPhotos}} Photos</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <p class=\"card-title\">{{numberOfFollowers}} Followers</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-4\">\r\n            <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                    <p class=\"card-title\">{{numberOfFollowing}} Following</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/user/user-stats/user-stats.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserStatsComponent = (function () {
    function UserStatsComponent() {
    }
    return UserStatsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], UserStatsComponent.prototype, "numberOfPhotos", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], UserStatsComponent.prototype, "numberOfFollowers", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], UserStatsComponent.prototype, "numberOfFollowing", void 0);
UserStatsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-stats',
        template: __webpack_require__("../../../../../src/app/components/user/user-stats/user-stats.html")
    })
], UserStatsComponent);

//# sourceMappingURL=user-stats.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-subscription/user-subscription.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <button type=\"button\" class=\"btn btn-outline-primary \">Friends</button>    \r\n        <button type=\"button\" class=\"btn btn-outline-primary \">Send a message</button> \r\n        <button type=\"button\" class=\"btn btn-outline-warning \">Report this user</button> \r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/user-subscription/user-subscription.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSubscriptionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserSubscriptionComponent = (function () {
    function UserSubscriptionComponent() {
    }
    return UserSubscriptionComponent;
}());
UserSubscriptionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-subscription',
        template: __webpack_require__("../../../../../src/app/components/user/user-subscription/user-subscription.html")
    })
], UserSubscriptionComponent);

//# sourceMappingURL=user-subscription.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user-type/user-type.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col\">\r\n            <span class=\"badge badge-primary\">{{userType}}</span>            \r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/user-type/user-type.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserTypeComponent = (function () {
    function UserTypeComponent() {
    }
    return UserTypeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], UserTypeComponent.prototype, "userType", void 0);
UserTypeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-type',
        template: __webpack_require__("../../../../../src/app/components/user/user-type/user-type.html")
    })
], UserTypeComponent);

//# sourceMappingURL=user-type.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_subscription_user_subscription__ = __webpack_require__("../../../../../src/app/components/user/user-subscription/user-subscription.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_type_user_type__ = __webpack_require__("../../../../../src/app/components/user/user-type/user-type.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_stats_user_stats__ = __webpack_require__("../../../../../src/app/components/user/user-stats/user-stats.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_information_contact_information__ = __webpack_require__("../../../../../src/app/components/user/contact-information/contact-information.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_subscription_user_subscription__["a" /* UserSubscriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_3__user_type_user_type__["a" /* UserTypeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__user_stats_user_stats__["a" /* UserStatsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__contact_information_contact_information__["a" /* ContactInformationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__user_subscription_user_subscription__["a" /* UserSubscriptionComponent */],
            __WEBPACK_IMPORTED_MODULE_3__user_type_user_type__["a" /* UserTypeComponent */],
            __WEBPACK_IMPORTED_MODULE_4__user_stats_user_stats__["a" /* UserStatsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__contact_information_contact_information__["a" /* ContactInformationComponent */]
        ]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_page_home_home__ = __webpack_require__("../../../../../src/app/components/page/home/home.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_page_profile_profile__ = __webpack_require__("../../../../../src/app/components/page/profile/profile.ts");


var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__components_page_home_home__["a" /* HomeComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_1__components_page_profile_profile__["a" /* ProfileComponent */] }
];
//# sourceMappingURL=route.js.map

/***/ }),

/***/ "../../../../../src/app/store/epics.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootEpics; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_photo_epics__ = __webpack_require__("../../../../../src/app/components/photo/epics.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RootEpics = (function () {
    function RootEpics(animalEpics) {
        this.animalEpics = animalEpics;
    }
    RootEpics.prototype.createEpics = function () {
        return [
            this.animalEpics.createEpic()
        ];
    };
    return RootEpics;
}());
RootEpics = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__components_photo_epics__["a" /* PhotoAPIEpics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__components_photo_epics__["a" /* PhotoAPIEpics */]) === "function" && _a || Object])
], RootEpics);

var _a;
//# sourceMappingURL=epics.js.map

/***/ }),

/***/ "../../../../../src/app/store/reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_form__ = __webpack_require__("../../../../@angular-redux/form/dist/source/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_router__ = __webpack_require__("../../../../@angular-redux/router/lib/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_photo_reducer__ = __webpack_require__("../../../../../src/app/components/photo/reducer.ts");




var rootReducer = Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_form__["composeReducers"])(Object(__WEBPACK_IMPORTED_MODULE_1__angular_redux_form__["defaultFormReducer"])(), Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    homepage: Object(__WEBPACK_IMPORTED_MODULE_3__components_photo_reducer__["a" /* createPhotoAPIReducer */])(),
    routes: __WEBPACK_IMPORTED_MODULE_2__angular_redux_router__["c" /* routerReducer */]
}));
//# sourceMappingURL=reducers.js.map

/***/ }),

/***/ "../../../../../src/app/store/store.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_router__ = __webpack_require__("../../../../@angular-redux/router/lib/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_form__ = __webpack_require__("../../../../@angular-redux/form/dist/source/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers__ = __webpack_require__("../../../../../src/app/store/reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__epics__ = __webpack_require__("../../../../../src/app/store/epics.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StoreModule = (function () {
    function StoreModule(ngRedux, devTools, ngReduxRouter, rootEpics) {
        ngRedux.configureStore(__WEBPACK_IMPORTED_MODULE_4__reducers__["a" /* rootReducer */], {}, rootEpics.createEpics().slice(), devTools.isEnabled() ? [devTools.enhancer()] : []);
        if (ngReduxRouter) {
            ngReduxRouter.initialize();
        }
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_redux_form__["provideReduxForms"])(ngRedux);
    }
    return StoreModule;
}());
StoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgReduxModule"]],
        providers: [__WEBPACK_IMPORTED_MODULE_5__epics__["a" /* RootEpics */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["DevToolsExtension"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["DevToolsExtension"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_redux_router__["a" /* NgReduxRouter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_redux_router__["a" /* NgReduxRouter */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__epics__["a" /* RootEpics */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__epics__["a" /* RootEpics */]) === "function" && _d || Object])
], StoreModule);

var _a, _b, _c, _d;
//# sourceMappingURL=store.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map