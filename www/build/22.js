webpackJsonp([22],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_master__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListMasterPageModule = /** @class */ (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__list_master__["a" /* ListMasterPage */]
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());

//# sourceMappingURL=list-master.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListMasterPage; });
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




var ListMasterPage = /** @class */ (function () {
    function ListMasterPage(navCtrl, alunoProvider, matriculaProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alunoProvider = alunoProvider;
        this.matriculaProvider = matriculaProvider;
        this.modalCtrl = modalCtrl;
        this.matriculaProvider.setMatriculaInicio();
        this.currentMatriculasAluno = this.matriculaProvider.search();
        this.currentAluno = this.alunoProvider.get();
        console.log(this.currentMatriculasAluno);
    }
    /**
     * The view loaded, let's query our items for the list
     */
    ListMasterPage.prototype.ionViewDidLoad = function () {
    };
    /**
     * Navigate to the detail page for this item.
     */
    ListMasterPage.prototype.openItem = function (matricula) {
        this.navCtrl.push('ItemDetailPage', {
            matricula: matricula
        });
    };
    ListMasterPage.prototype.confirmarMatricula = function () {
        this.matriculaProvider.confirmarMatricula();
    };
    ListMasterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list-master',template:/*ion-inline-start:"E:\GitHub\sigaa\src\pages\list-master\list-master.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ \'LIST_MASTER_TITLE\' | translate }}</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="addItem()">\n\n        <ion-icon name="add"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <button ion-item>\n\n    <ion-avatar item-start>\n\n      <img [src]="currentAluno.profilePic" />\n\n    </ion-avatar>\n\n    <h2>{{currentAluno.nome}}</h2>\n\n    <p>{{currentAluno.matricula}}</p>\n\n  </button>\n\n\n\n  <ion-list>\n\n    <ion-item-sliding *ngFor="let matricula of currentMatriculasAluno">\n\n      <button ion-item (click)="openItem(matricula)">\n\n        <h2>{{matricula.turma.disciplina.codigo + \'-\' + matricula.turma.disciplina.nome + \'-\' + matricula.turma.codigo}}</h2>\n\n        <p>{{matricula.status}}</p>\n\n      </button>\n\n\n\n      <ion-item-options>\n\n        <button ion-button color="danger" (click)="deleteItem(item)">\n\n          {{ \'DELETE_BUTTON\' | translate }}\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <button ion-button icon-left color="default" (click)="confirmarMatricula()">\n\n    <ion-icon name="checkmark-circle"></ion-icon>\n\n    {{\'CONFIRM_REGISTRATION_BUTTON\' | translate}}\n\n  </button>\n\n</ion-footer>'/*ion-inline-end:"E:\GitHub\sigaa\src\pages\list-master\list-master.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers__["a" /* AlunoProvider */],
            __WEBPACK_IMPORTED_MODULE_3__mocks_providers_matricula__["a" /* MatriculaProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ListMasterPage);
    return ListMasterPage;
}());

//# sourceMappingURL=list-master.js.map

/***/ })

});
//# sourceMappingURL=22.js.map