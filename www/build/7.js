webpackJsonp([7],{

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatriculaHistoricoPageModule", function() { return MatriculaHistoricoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matricula_historico__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MatriculaHistoricoPageModule = /** @class */ (function () {
    function MatriculaHistoricoPageModule() {
    }
    MatriculaHistoricoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__matricula_historico__["a" /* MatriculaHistoricoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__matricula_historico__["a" /* MatriculaHistoricoPage */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
        })
    ], MatriculaHistoricoPageModule);
    return MatriculaHistoricoPageModule;
}());

//# sourceMappingURL=matricula-historico.module.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatriculaHistoricoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mocks_providers_matricula__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MatriculaHistoricoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatriculaHistoricoPage = /** @class */ (function () {
    function MatriculaHistoricoPage(navCtrl, navParams, alunoProvider, matriculaProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alunoProvider = alunoProvider;
        this.matriculaProvider = matriculaProvider;
        this.modalCtrl = modalCtrl;
        this.matriculaProvider.setMatriculaInicio();
        this.currentMatriculasAluno = this.matriculaProvider.search();
        this.currentMatriculasHistorico = this.matriculaProvider.searchHistorico();
        this.currentAluno = this.alunoProvider.get();
        console.log(this.currentMatriculasAluno);
    }
    MatriculaHistoricoPage.prototype.ionViewDidLoad = function () {
    };
    MatriculaHistoricoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-matricula-historico',template:/*ion-inline-start:"E:\GitHub\sigaa\src\pages\matricula-historico\matricula-historico.html"*/'<!--\n\n  Generated template for the MatriculaHistoricoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{\'HISTORY_TITLE\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let matricula of currentMatriculasHistorico">\n\n      <button ion-item>\n\n        <h2>{{matricula.turma.disciplina.codigo + \'-\' + matricula.turma.disciplina.nome + \'-\' + matricula.turma.codigo}}</h2>\n\n        <p>{{matricula.status + \' - \' + matricula.dataHora}}</p>\n\n      </button>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\GitHub\sigaa\src\pages\matricula-historico\matricula-historico.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* AlunoProvider */],
            __WEBPACK_IMPORTED_MODULE_3__mocks_providers_matricula__["a" /* MatriculaProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MatriculaHistoricoPage);
    return MatriculaHistoricoPage;
}());

//# sourceMappingURL=matricula-historico.js.map

/***/ })

});
//# sourceMappingURL=7.js.map