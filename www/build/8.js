webpackJsonp([8],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailPageModule", function() { return ItemDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_detail__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemDetailPageModule = /** @class */ (function () {
    function ItemDetailPageModule() {
    }
    ItemDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__item_detail__["a" /* ItemDetailPage */]
            ]
        })
    ], ItemDetailPageModule);
    return ItemDetailPageModule;
}());

//# sourceMappingURL=item-detail.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_providers_matricula__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemDetailPage = /** @class */ (function () {
    function ItemDetailPage(navCtrl, matriculaProvider, navParams) {
        this.navCtrl = navCtrl;
        this.matriculaProvider = matriculaProvider;
        this.matricula = navParams.get('matricula');
    }
    ItemDetailPage.prototype.alterarStatus = function (status) {
        this.matriculaProvider.updateStatus(this.matricula, status);
        this.navCtrl.pop();
    };
    ItemDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-detail',template:/*ion-inline-start:"D:\GitHub\sigaa\src\pages\item-detail\item-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ matricula.turma.disciplina.codigo }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="item-detail" padding>\n    <h2>{{matricula.turma.disciplina.codigo + \'-\' + matricula.turma.disciplina.nome + \'-\' + matricula.turma.codigo}}</h2>\n    <p>{{\'Professor: \' + matricula.turma.professores[0].nome}}</p>\n    <p>{{matricula.turma.horariosAula[0].dia + \' : \' + matricula.turma.horariosAula[0].hora}}</p>\n    <p>{{matricula.turma.horariosAula[1].dia + \' : \' + matricula.turma.horariosAula[1].hora}}</p>\n    <p>{{\'Status: \' + matricula.status}}</p>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <button *ngIf="(matricula.status == \'PreMatricula\' || matricula.status == \'Confirmado\')" ion-button icon-left color="danger" (click)="alterarStatus(\'Retirado\')">\n    <ion-icon name="close-circle"></ion-icon>\n    {{\'DELETE_BUTTON\' | translate}}\n  </button>\n  <button *ngIf="(matricula.status == \'PreMatricula\' || matricula.status == \'Retirado\')" ion-button icon-left color="secondary" (click)="alterarStatus(\'Confirmado\')">\n    <ion-icon name="checkmark-circle"></ion-icon>\n    {{\'CONFIRM_BUTTON\' | translate}}\n  </button>\n</ion-footer>'/*ion-inline-end:"D:\GitHub\sigaa\src\pages\item-detail\item-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__mocks_providers_matricula__["a" /* MatriculaProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ItemDetailPage);
    return ItemDetailPage;
}());

//# sourceMappingURL=item-detail.js.map

/***/ })

});
//# sourceMappingURL=8.js.map