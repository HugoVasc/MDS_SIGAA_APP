webpackJsonp([11],{

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCreatePageModule", function() { return ItemCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_create__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemCreatePageModule = /** @class */ (function () {
    function ItemCreatePageModule() {
    }
    ItemCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__item_create__["a" /* ItemCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__item_create__["a" /* ItemCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__item_create__["a" /* ItemCreatePage */]
            ]
        })
    ], ItemCreatePageModule);
    return ItemCreatePageModule;
}());

//# sourceMappingURL=item-create.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemCreatePage = /** @class */ (function () {
    function ItemCreatePage(navCtrl, viewCtrl, turmaProvider, matriculaProvider, translate, alertCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.turmaProvider = turmaProvider;
        this.matriculaProvider = matriculaProvider;
        this.alertCtrl = alertCtrl;
        this.currentTurmas = [];
        this.disciplina = navParams.get('disciplina');
        this.currentTurmas = this.turmaProvider.search({ disciplina: this.disciplina.codigo });
        translate.get([
            "ADICIONAR_TURMA_TITLE",
            "ADICIONAR_TURMA_DESCRIPTION",
            "ADICIONAR_TURMA_INPUTNAME",
            "AJUSTAR_TURMA_TITLE",
            "AJUSTAR_TURMA_DESCRIPTION",
            "AJUSTAR_TURMA_DESCRIPTION_DETAIL",
            "TURMA_REPETIDA_TITLE",
            "TURMA_REPETIDA_DESCRIPTION",
            "CANCEL_BUTTON",
            "CONFIRM_BUTTON"
        ]).subscribe(function (values) {
            _this.alertaConfirmarTurma = {
                title: values.ADICIONAR_TURMA_TITLE,
                description: values.ADICIONAR_TURMA_DESCRIPTION,
                descriptionDetail: '',
                inputName: values.ADICIONAR_TURMA_INPUTNAME,
                okButton: values.CONFIRM_BUTTON,
                cancelButton: values.CANCEL_BUTTON
            };
            _this.alertaTurmaJaEstaNaMatricula = {
                title: values.TURMA_REPETIDA_TITLE,
                description: values.TURMA_REPETIDA_DESCRIPTION,
                descriptionDetail: '',
                inputName: '',
                okButton: values.CONFIRM_BUTTON,
                cancelButton: values.CANCEL_BUTTON
            };
        });
    }
    ItemCreatePage.prototype.ionViewDidLoad = function () {
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    ItemCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ItemCreatePage.prototype.processarPedidoMatricula = function (turma) {
        this.confirmarPedidoMatricula(turma);
    };
    /**
     * Inserir Matricula
     */
    ItemCreatePage.prototype.inserirMatricula = function (turma, status, prioridade) {
        var matriculaAluno = {
            turma: turma,
            status: status,
            prioridade: prioridade,
        };
        if (status === 'Matriculado') {
            matriculaAluno.status = status;
        }
        if (typeof prioridade !== 'undefined') {
            matriculaAluno.prioridade = prioridade;
        }
        this.matriculaProvider.add(matriculaAluno);
    };
    /**
     * Confirmar pedido de matrícula em turma.
     */
    ItemCreatePage.prototype.confirmarPedidoMatricula = function (turma) {
        var _this = this;
        // verifica se a turma já está na lista de matricula
        for (var _i = 0, _a = this.matriculaProvider.search(); _i < _a.length; _i++) {
            var matriculaAluno = _a[_i];
            if ((matriculaAluno.turma.codigo === turma.codigo) &&
                (matriculaAluno.turma.disciplina.codigo === turma.disciplina.codigo) &&
                ((!matriculaAluno.status) || (matriculaAluno.status === "Pedido") || (matriculaAluno.status === "PreMatricula") || (matriculaAluno.status === "Confirmado") || (matriculaAluno.status === "Matriculado"))) {
                var prompt_1 = this.alertCtrl.create({
                    title: this.alertaTurmaJaEstaNaMatricula.title,
                    message: this.alertaTurmaJaEstaNaMatricula.description,
                    buttons: [
                        {
                            text: this.alertaTurmaJaEstaNaMatricula.cancelButton,
                        },
                    ]
                });
                prompt_1.present();
                return;
            }
        }
        var prompt = this.alertCtrl.create({
            title: this.alertaConfirmarTurma.title,
            message: this.alertaConfirmarTurma.description,
            inputs: [
                {
                    name: 'prioridade',
                    placeholder: this.alertaConfirmarTurma.inputName
                },
            ],
            buttons: [
                {
                    text: this.alertaConfirmarTurma.cancelButton,
                },
                {
                    text: this.alertaConfirmarTurma.okButton,
                    handler: function (data) {
                        var prioridade = parseInt(data.prioridade);
                        if (prioridade)
                            _this.inserirMatricula(turma, 'Pedido', prioridade);
                        else
                            _this.inserirMatricula(turma, 'Pedido', 10);
                        _this.navCtrl.pop();
                        _this.navCtrl.parent.select(0);
                    }
                }
            ]
        });
        prompt.present();
    };
    ItemCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-create',template:/*ion-inline-start:"E:\GitHub\sigaa\src\pages\item-create\item-create.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ \'ITEM_CREATE_TITLE\' | translate }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item (click)="processarPedidoMatricula(turma)" *ngFor="let turma of currentTurmas">\n\n      <h2>{{turma.disciplina.nome + \'-\' + turma.codigo}}</h2>\n\n      <p>{{turma.disciplina.codigo}}</p>\n\n      <p *ngFor="let professores of turma.professores">{{\'Professor: \' + professores.nome}}</p>\n\n      <p *ngFor="let dataHora of turma.horariosAula">{{dataHora.dia + \' - \' + dataHora.hora}}</p>\n\n    </button>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\GitHub\sigaa\src\pages\item-create\item-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["g" /* TurmaProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers__["e" /* MatriculaProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ItemCreatePage);
    return ItemCreatePage;
}());

//# sourceMappingURL=item-create.js.map

/***/ })

});
//# sourceMappingURL=11.js.map