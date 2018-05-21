(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 centered top full\">\n      <h1>{{title}}</h1>\n    </div>\n  </div>\n</div>\n  <app-list-component></app-list-component>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top {\n  background-color: #0097A7; }\n\n.full {\n  height: 100%;\n  width: 100%; }\n\n.centered {\n  text-align: center; }\n\n.padded {\n  margin-top: 10px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Shopping List';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_component_list_component_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-component/list-component.component */ "./src/app/list-component/list-component.component.ts");
/* harmony import */ var _edit_component_edit_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-component/edit-component.component */ "./src/app/edit-component/edit-component.component.ts");
/* harmony import */ var _item_component_item_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-component/item-component.component */ "./src/app/item-component/item-component.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _list_component_list_component_component__WEBPACK_IMPORTED_MODULE_4__["ListComponentComponent"],
                _edit_component_edit_component_component__WEBPACK_IMPORTED_MODULE_5__["EditComponentComponent"],
                _item_component_item_component_component__WEBPACK_IMPORTED_MODULE_6__["ItemComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit-component/edit-component.component.html":
/*!**************************************************************!*\
  !*** ./src/app/edit-component/edit-component.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='edit'>\n  <h2>{{ edit.name | uppercase }} Details</h2>\n  <div>\n    <label>naam:\n      <input [(ngModel)]=\"edit.name\" placeholder=\"Naam\" />\n    </label>\n    <label>Hoeveelheid\n      <input [(ngModel)]=\"edit.amount\" placeholder=\"Hoeveelheid\">\n    </label>\n  </div>\n\n</div>\n<div>\n  <h2>Nieuw Item</h2>\n  <label>naam:\n    <input placeholder=\"Naam\" #inputName/>\n  </label>\n  <label>Hoeveelheid\n    <input placeholder=\"Hoeveelheid\" #inputAmount>\n  </label>\n  <button (click)='addToList(inputName, inputAmount)' class=\"btn btn-primary\">Add to list</button>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-component/edit-component.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/edit-component/edit-component.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-component/edit-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/edit-component/edit-component.component.ts ***!
  \************************************************************/
/*! exports provided: EditComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponentComponent", function() { return EditComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _item_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item-class */ "./src/app/item-class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EditComponentComponent = /** @class */ (function () {
    function EditComponentComponent() {
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
    }
    EditComponentComponent.prototype.addToList = function (name, amount) {
        // tslint:disable-next-line:radix
        this.event.emit({ name: name.value, amount: parseInt(amount.value) });
    };
    EditComponentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _item_class__WEBPACK_IMPORTED_MODULE_1__["Item"])
    ], EditComponentComponent.prototype, "edit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditComponentComponent.prototype, "event", void 0);
    EditComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-component',
            template: __webpack_require__(/*! ./edit-component.component.html */ "./src/app/edit-component/edit-component.component.html"),
            styles: [__webpack_require__(/*! ./edit-component.component.scss */ "./src/app/edit-component/edit-component.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditComponentComponent);
    return EditComponentComponent;
}());



/***/ }),

/***/ "./src/app/item-class.ts":
/*!*******************************!*\
  !*** ./src/app/item-class.ts ***!
  \*******************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/item-component/item-component.component.html":
/*!**************************************************************!*\
  !*** ./src/app/item-component/item-component.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-body\">\n  <h4 class=\"card-title\">{{item.name | uppercase }}</h4>\n  <p class=\"card-text\">{{item.amount}}</p>\n</div>"

/***/ }),

/***/ "./src/app/item-component/item-component.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/item-component/item-component.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-title {\n  color: #212121; }\n\n.card-text {\n  color: #757575; }\n"

/***/ }),

/***/ "./src/app/item-component/item-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/item-component/item-component.component.ts ***!
  \************************************************************/
/*! exports provided: ItemComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponentComponent", function() { return ItemComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _item_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../item-class */ "./src/app/item-class.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemComponentComponent = /** @class */ (function () {
    function ItemComponentComponent() {
    }
    ItemComponentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _item_class__WEBPACK_IMPORTED_MODULE_1__["Item"])
    ], ItemComponentComponent.prototype, "item", void 0);
    ItemComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-component',
            template: __webpack_require__(/*! ./item-component.component.html */ "./src/app/item-component/item-component.component.html"),
            styles: [__webpack_require__(/*! ./item-component.component.scss */ "./src/app/item-component/item-component.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ItemComponentComponent);
    return ItemComponentComponent;
}());



/***/ }),

/***/ "./src/app/itemlist.ts":
/*!*****************************!*\
  !*** ./src/app/itemlist.ts ***!
  \*****************************/
/*! exports provided: LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST", function() { return LIST; });
var LIST = [{ name: 'banaan', amount: 5 },
    { name: 'citroen', amount: 4 },
    { name: 'ananas', amount: 3 },
    { name: 'limoen', amount: 2 }
];


/***/ }),

/***/ "./src/app/list-component/list-component.component.html":
/*!**************************************************************!*\
  !*** ./src/app/list-component/list-component.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p></p>\n<div class=\"container\">\n  <div class=\"row justify-content-md-center\">\n    <div class=\"col-4\">\n      <app-edit-component [edit]='selectedItem' (event)=\"setList($event)\"></app-edit-component>\n    </div>\n    <div class=\"col-4\">\n      <div class=\"row\" *ngFor='let item of items'>\n        <div class='col-md-12' [class.active]=\"item === selectedItem\" (click)='setActive(item)'>\n          <app-item-component [item]='item'></app-item-component>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/list-component/list-component.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/list-component/list-component.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  padding-bottom: 3px; }\n"

/***/ }),

/***/ "./src/app/list-component/list-component.component.ts":
/*!************************************************************!*\
  !*** ./src/app/list-component/list-component.component.ts ***!
  \************************************************************/
/*! exports provided: ListComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponentComponent", function() { return ListComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _edit_component_edit_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-component/edit-component.component */ "./src/app/edit-component/edit-component.component.ts");
/* harmony import */ var _itemlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../itemlist */ "./src/app/itemlist.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponentComponent = /** @class */ (function () {
    function ListComponentComponent() {
        this.items = _itemlist__WEBPACK_IMPORTED_MODULE_2__["LIST"];
    }
    ListComponentComponent.prototype.setActive = function (item) {
        this.selectedItem = item;
        console.log(item);
    };
    ListComponentComponent.prototype.setList = function (listItem) {
        console.log('Data received');
        this.newItem = listItem;
        this.items.push(this.newItem);
    };
    ListComponentComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_edit_component_edit_component_component__WEBPACK_IMPORTED_MODULE_1__["EditComponentComponent"]),
        __metadata("design:type", _edit_component_edit_component_component__WEBPACK_IMPORTED_MODULE_1__["EditComponentComponent"])
    ], ListComponentComponent.prototype, "EditComponentComponent", void 0);
    ListComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-component',
            template: __webpack_require__(/*! ./list-component.component.html */ "./src/app/list-component/list-component.component.html"),
            styles: [__webpack_require__(/*! ./list-component.component.scss */ "./src/app/list-component/list-component.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponentComponent);
    return ListComponentComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Desktop\Coding\Web Interface\Angular\Shopping\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map