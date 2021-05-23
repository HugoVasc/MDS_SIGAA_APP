webpackJsonp([12],{

/***/ 130:
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
webpackEmptyAsyncContext.id = 130;

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cards/cards.module": [
		334,
		11
	],
	"../pages/content/content.module": [
		335,
		10
	],
	"../pages/item-create/item-create.module": [
		336,
		9
	],
	"../pages/item-detail/item-detail.module": [
		337,
		8
	],
	"../pages/list-master/list-master.module": [
		338,
		7
	],
	"../pages/login/login.module": [
		339,
		6
	],
	"../pages/menu/menu.module": [
		340,
		5
	],
	"../pages/search/search.module": [
		341,
		4
	],
	"../pages/settings/settings.module": [
		342,
		3
	],
	"../pages/tabs/tabs.module": [
		343,
		2
	],
	"../pages/tutorial/tutorial.module": [
		344,
		1
	],
	"../pages/welcome/welcome.module": [
		345,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 182;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
 * Api is a generic REST Api handler. Set your API url first.
 */
var Api = /** @class */ (function () {
    function Api(http) {
        this.http = http;
        this.url = 'https://example.com/api/v1';
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]()
            };
        }
        // Support easy query params for GET requests
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlunoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_aluno__ = __webpack_require__(313);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlunoProvider = /** @class */ (function () {
    function AlunoProvider() {
        this.alunos = [];
        this.aluno = undefined;
        var alunos = [{
                "matricula": "180012345",
                "nome": "DANIEL AKIRA ANDO"
            }, {
                "matricula": "180032435",
                "nome": "VICTOR HUGO DE SOUSA"
            }, {
                "matricula": "180049548",
                "nome": "RAYAN JHONNYE ALVES ALEXANDRINO"
            }, {
                "matricula": "180039283",
                "nome": "JADE MARTINS ARANTES"
            }, {
                "matricula": "180059459",
                "nome": "ALINE DOS SANTOS PEREIRA"
            }, {
                "matricula": "190003434",
                "nome": "VINICIUS ALVES DE OLIVEIRA"
            }, {
                "matricula": "190002912",
                "nome": "MAIRA LEITE CONCEICAO"
            }, {
                "matricula": "190003939",
                "nome": "VICTOR NUNES GOMES"
            }, {
                "matricula": "190029293",
                "nome": "VITOR DE AGUIAR CARAZZA"
            }];
        for (var _i = 0, alunos_1 = alunos; _i < alunos_1.length; _i++) {
            var aluno = alunos_1[_i];
            this.alunos.push(new __WEBPACK_IMPORTED_MODULE_1__models_aluno__["a" /* Aluno */](aluno));
        }
    }
    AlunoProvider.prototype.get = function (matricula) {
        if (!matricula)
            return this.aluno;
        for (var _i = 0, _a = this.alunos; _i < _a.length; _i++) {
            var aluno = _a[_i];
            if (aluno.matricula == matricula) {
                aluno.profilePic = "assets/img/speakers/bear.jpg";
                this.aluno = aluno;
                return aluno;
            }
        }
        return undefined;
    };
    AlunoProvider.prototype.search = function (params) {
        if (!params) {
            return this.alunos;
        }
        return this.alunos.filter(function (aluno) {
            for (var key in params) {
                var field = aluno[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    aluno.profilePic = "assets/img/speakers/bear.jpg";
                    return aluno;
                }
                else if (field == params[key]) {
                    aluno.profilePic = "assets/img/speakers/bear.jpg";
                    return aluno;
                }
            }
            return null;
        });
    };
    AlunoProvider.prototype.set = function (aluno) {
        this.aluno = aluno;
        this.aluno.profilePic = "assets/img/speakers/bear.jpg";
    };
    AlunoProvider.prototype.reset = function () {
        this.aluno = undefined;
    };
    AlunoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AlunoProvider);
    return AlunoProvider;
}());

//# sourceMappingURL=aluno.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatriculaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_matriculaAluno__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_matriculaHistorico__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MatriculaProvider = /** @class */ (function () {
    function MatriculaProvider(global) {
        this.global = global;
        this.matriculasAluno = [];
        this.matriculasHistorico = [];
        this.matriculasAlunoInicio = [];
        this.matriculasHistoricoInicio = [];
        this.matriculasAlunoFinal = [];
        this.matriculasHistoricoFinal = [];
        var matriculasAlunoInicio = [
            {
                "status": "PreMatricula",
                "turma": {
                    "codigo": "A",
                    "disciplina": {
                        "nome": "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1",
                        "codigo": "ENE0022",
                        "cargaHorariaTotal": 60,
                        "unidadeAcademica": "ENE"
                    },
                    "horariosAula": [
                        {
                            "dia": "SEG",
                            "hora": "10:00 às 11:50"
                        },
                        {
                            "dia": "QUA",
                            "hora": "10:00 às 11:50"
                        }
                    ],
                    "professores": [
                        {
                            "nome": "UGO SILVA DIAS"
                        }
                    ]
                }
            },
            {
                "status": "PreMatricula",
                "turma": {
                    "codigo": "A",
                    "disciplina": {
                        "nome": "FUNDAMENTOS DE REDES",
                        "codigo": "ENE0274",
                        "cargaHorariaTotal": 60,
                        "unidadeAcademica": "ENE"
                    },
                    "horariosAula": [
                        {
                            "dia": "SEG",
                            "hora": "08:00 às 09:50"
                        },
                        {
                            "dia": "QUA",
                            "hora": "08:00 às 09:50"
                        }
                    ],
                    "professores": [
                        {
                            "nome": "FABIO LUCIO LOPES DE MENDONCA"
                        }
                    ]
                }
            },
            {
                "status": "PreMatricula",
                "turma": {
                    "codigo": "C",
                    "disciplina": {
                        "nome": "FISICA 2 EXPERIMENTAL",
                        "codigo": "IFD0177",
                        "cargaHorariaTotal": 60,
                        "unidadeAcademica": "IFD"
                    },
                    "horariosAula": [
                        {
                            "dia": "TER",
                            "hora": "14:00 às 15:50"
                        },
                        {
                            "dia": "TER",
                            "hora": "16:00 às 17:50"
                        }
                    ],
                    "professores": [
                        {
                            "nome": "FERNANDO LESSA CARNEIRO"
                        }
                    ]
                }
            },
            {
                "status": "PreMatricula",
                "turma": {
                    "codigo": "J",
                    "disciplina": {
                        "nome": "CÁLCULO 3",
                        "codigo": "MAT0027",
                        "cargaHorariaTotal": 90,
                        "unidadeAcademica": "MAT"
                    },
                    "horariosAula": [
                        {
                            "dia": "TER",
                            "hora": "08:00 às 09:50"
                        },
                        {
                            "dia": "QUI",
                            "hora": "08:00 às 09:50"
                        },
                        {
                            "dia": "SEX",
                            "hora": "08:00 às 09:50"
                        }
                    ],
                    "professores": [
                        {
                            "nome": "RADERSON RODRIGUES DA SILVA"
                        }
                    ]
                }
            },
        ];
        for (var _i = 0, matriculasAlunoInicio_1 = matriculasAlunoInicio; _i < matriculasAlunoInicio_1.length; _i++) {
            var matriculaAluno = matriculasAlunoInicio_1[_i];
            this.matriculasAlunoInicio.push(new __WEBPACK_IMPORTED_MODULE_2__models_matriculaAluno__["a" /* MatriculaAluno */](matriculaAluno));
        }
        var matriculasAlunoFinal = [
            {
                "status": "Matriculado",
                "turma": {
                    "codigo": "A",
                    "disciplina": {
                        "nome": "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1",
                        "codigo": "ENE0022",
                        "cargaHorariaTotal": 60,
                        "unidadeAcademica": "ENE"
                    },
                    "horariosAula": [
                        {
                            "dia": "SEG",
                            "hora": "10:00 às 11:50"
                        },
                        {
                            "dia": "QUA",
                            "hora": "10:00 às 11:50"
                        }
                    ],
                    "professores": [
                        {
                            "nome": "UGO SILVA DIAS"
                        }
                    ]
                }
            },
            {
                "status": "Matriculado",
                "turma": {
                    "codigo": "A",
                    "disciplina": {
                        "nome": "FUNDAMENTOS DE REDES",
                        "codigo": "ENE0274",
                        "cargaHorariaTotal": 60,
                        "unidadeAcademica": "ENE"
                    },
                    "horariosAula": [
                        {
                            "dia": "SEG",
                            "hora": "08:00 às 09:50"
                        },
                        {
                            "dia": "QUA",
                            "hora": "08:00 às 09:50"
                        }
                    ],
                    "professores": [
                        {
                            "nome": "FABIO LUCIO LOPES DE MENDONCA"
                        }
                    ]
                }
            },
            {
                "status": "Matriculado",
                "turma": {
                    "codigo": "C",
                    "disciplina": {
                        "nome": "FISICA 2 EXPERIMENTAL",
                        "codigo": "IFD0177",
                        "cargaHorariaTotal": 60,
                        "unidadeAcademica": "IFD"
                    },
                    "horariosAula": [
                        {
                            "dia": "TER",
                            "hora": "14:00 às 15:50"
                        },
                        {
                            "dia": "TER",
                            "hora": "16:00 às 17:50"
                        }
                    ],
                    "professores": [
                        {
                            "nome": "FERNANDO LESSA CARNEIRO"
                        }
                    ]
                }
            },
            {
                "status": "Matriculado",
                "turma": {
                    "codigo": "J",
                    "disciplina": {
                        "nome": "CÁLCULO 3",
                        "codigo": "MAT0027",
                        "cargaHorariaTotal": 90,
                        "unidadeAcademica": "MAT"
                    },
                    "horariosAula": [
                        {
                            "dia": "TER",
                            "hora": "08:00 às 09:50"
                        },
                        {
                            "dia": "QUI",
                            "hora": "08:00 às 09:50"
                        },
                        {
                            "dia": "SEX",
                            "hora": "08:00 às 09:50"
                        }
                    ],
                    "professores": [
                        {
                            "nome": "RADERSON RODRIGUES DA SILVA"
                        }
                    ]
                }
            },
        ];
        for (var _a = 0, matriculasAlunoFinal_1 = matriculasAlunoFinal; _a < matriculasAlunoFinal_1.length; _a++) {
            var matriculaAluno = matriculasAlunoFinal_1[_a];
            this.matriculasAlunoFinal.push(new __WEBPACK_IMPORTED_MODULE_2__models_matriculaAluno__["a" /* MatriculaAluno */](matriculaAluno));
        }
        var matriculasHistorico = [
            {
                "status": "PreMatricula",
                "turma": {
                    "codigo": "A",
                    "disciplina": {
                        "nome": "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1",
                        "codigo": "ENE0022",
                        "cargaHorariaTotal": 60,
                        "unidadeAcademica": "ENE"
                    },
                },
                "dataHora": "2020-03-01T12:00:03"
            },
            {
                "status": "PreMatricula",
                "turma": {
                    "codigo": "A",
                    "disciplina": {
                        "nome": "FUNDAMENTOS DE REDES",
                        "codigo": "ENE0274",
                        "cargaHorariaTotal": 60,
                        "unidadeAcademica": "ENE"
                    },
                },
                "dataHora": "2020-03-01T12:00:03"
            },
            {
                "status": "PreMatricula",
                "turma": {
                    "codigo": "C",
                    "disciplina": {
                        "nome": "FISICA 2 EXPERIMENTAL",
                        "codigo": "IFD0177",
                        "cargaHorariaTotal": 60,
                        "unidadeAcademica": "IFD"
                    },
                },
                "dataHora": "2020-03-01T12:00:03"
            },
            {
                "status": "PreMatricula",
                "turma": {
                    "codigo": "J",
                    "disciplina": {
                        "nome": "CÁLCULO 3",
                        "codigo": "MAT0027",
                        "cargaHorariaTotal": 90,
                        "unidadeAcademica": "MAT"
                    },
                },
                "dataHora": "2020-03-01T12:00:03"
            },
        ];
        for (var _b = 0, matriculasHistorico_1 = matriculasHistorico; _b < matriculasHistorico_1.length; _b++) {
            var matriculaHistorico = matriculasHistorico_1[_b];
            this.matriculasHistoricoInicio.push(new __WEBPACK_IMPORTED_MODULE_3__models_matriculaHistorico__["a" /* MatriculaHistorico */](matriculaHistorico));
        }
        var matriculasHistoricoFinal = [
            {
                "status": "PreMatricula",
                "turma": {
                    "codigo": "A",
                    "disciplina": {
                        "nome": "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1",
                        "codigo": "ENE0022",
                        "cargaHorariaTotal": 60,
                        "unidadeAcademica": "ENE"
                    },
                },
                "dataHora": "2020-03-01T12:00:03"
            },
            {
                "status": "PreMatricula",
                "turma": {
                    "codigo": "A",
                    "disciplina": {
                        "nome": "FUNDAMENTOS DE REDES",
                        "codigo": "ENE0274",
                        "cargaHorariaTotal": 60,
                        "unidadeAcademica": "ENE"
                    },
                },
                "dataHora": "2020-03-01T12:00:03"
            },
            {
                "status": "PreMatricula",
                "turma": {
                    "codigo": "D",
                    "disciplina": {
                        "nome": "FISICA 2 EXPERIMENTAL",
                        "codigo": "IFD0177",
                        "cargaHorariaTotal": 60,
                        "unidadeAcademica": "IFD"
                    },
                },
                "dataHora": "2020-03-01T12:00:03"
            },
            {
                "status": "PreMatricula",
                "turma": {
                    "codigo": "J",
                    "disciplina": {
                        "nome": "CÁLCULO 3",
                        "codigo": "MAT0027",
                        "cargaHorariaTotal": 90,
                        "unidadeAcademica": "MAT"
                    },
                },
                "dataHora": "2020-03-01T12:00:03"
            },
            {
                "status": "Matriculado",
                "turma": {
                    "codigo": "A",
                    "disciplina": {
                        "nome": "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1",
                        "codigo": "ENE0022",
                        "cargaHorariaTotal": 60,
                        "unidadeAcademica": "ENE"
                    },
                },
                "dataHora": "2020-03-08T11:54:03"
            },
            {
                "status": "Matriculado",
                "turma": {
                    "codigo": "A",
                    "disciplina": {
                        "nome": "FUNDAMENTOS DE REDES",
                        "codigo": "ENE0274",
                        "cargaHorariaTotal": 60,
                        "unidadeAcademica": "ENE"
                    },
                },
                "dataHora": "2020-03-08T11:54:03"
            },
            {
                "status": "Retirado",
                "turma": {
                    "codigo": "D",
                    "disciplina": {
                        "nome": "FISICA 2 EXPERIMENTAL",
                        "codigo": "IFD0177",
                        "cargaHorariaTotal": 60,
                        "unidadeAcademica": "IFD"
                    },
                },
                "dataHora": "2020-03-08T11:54:03"
            },
            {
                "status": "Pedido",
                "turma": {
                    "codigo": "C",
                    "disciplina": {
                        "nome": "FISICA 2 EXPERIMENTAL",
                        "codigo": "IFD0177",
                        "cargaHorariaTotal": 60,
                        "unidadeAcademica": "IFD"
                    },
                },
                "dataHora": "2020-03-08T11:54:03"
            },
            {
                "status": "Matriculado",
                "turma": {
                    "codigo": "J",
                    "disciplina": {
                        "nome": "CÁLCULO 3",
                        "codigo": "MAT0027",
                        "cargaHorariaTotal": 90,
                        "unidadeAcademica": "MAT"
                    },
                },
                "dataHora": "2020-03-08T11:54:03"
            },
            {
                "status": "Matriculado",
                "turma": {
                    "codigo": "C",
                    "disciplina": {
                        "nome": "FISICA 2 EXPERIMENTAL",
                        "codigo": "IFD0177",
                        "cargaHorariaTotal": 60,
                        "unidadeAcademica": "IFD"
                    },
                },
                "dataHora": "2020-03-11T14:13:12"
            },
        ];
        for (var _c = 0, matriculasHistoricoFinal_1 = matriculasHistoricoFinal; _c < matriculasHistoricoFinal_1.length; _c++) {
            var matriculaHistorico = matriculasHistoricoFinal_1[_c];
            this.matriculasHistoricoFinal.push(new __WEBPACK_IMPORTED_MODULE_3__models_matriculaHistorico__["a" /* MatriculaHistorico */](matriculaHistorico));
        }
    }
    MatriculaProvider.prototype.setMatriculaInicio = function () {
        this.matriculasAluno = this.matriculasAlunoInicio;
        this.matriculasHistorico = this.matriculasHistoricoInicio;
    };
    MatriculaProvider.prototype.setMatriculaFinal = function () {
        this.matriculasAluno = this.matriculasAlunoFinal;
        this.matriculasHistorico = this.matriculasHistoricoFinal;
    };
    MatriculaProvider.prototype.search = function (params) {
        if (!params) {
            return this.matriculasAluno;
        }
        return this.matriculasAluno.filter(function (matriculaAluno) {
            for (var key in params) {
                var field = matriculaAluno[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return matriculaAluno;
                }
                else if (field == params[key]) {
                    return matriculaAluno;
                }
            }
            return null;
        });
    };
    MatriculaProvider.prototype.searchHistorico = function () {
        var currentFaseMatricula = this.global.getFaseMatricula();
        if (currentFaseMatricula == 'Ajuste' || currentFaseMatricula == 'Comprovante') {
            return this.matriculasHistoricoFinal;
        }
        else {
            return this.matriculasHistorico;
        }
    };
    MatriculaProvider.prototype.add = function (matricula) {
        var matriculaAluno = {
            turma: matricula.turma,
            status: matricula.status,
            prioridade: matricula.prioridade
        };
        this.matriculasAluno.push(matriculaAluno);
    };
    MatriculaProvider.prototype.addHistorico = function (matriculaAluno) {
        var matriculaHistorico = new __WEBPACK_IMPORTED_MODULE_3__models_matriculaHistorico__["a" /* MatriculaHistorico */](matriculaAluno);
        matriculaHistorico.dataHora = this.toISOLocal(new Date());
        this.matriculasHistorico.push(matriculaHistorico);
    };
    MatriculaProvider.prototype.delete = function (matriculaAluno) {
        this.matriculasAluno.splice(this.matriculasAluno.indexOf(matriculaAluno), 1);
    };
    MatriculaProvider.prototype.updateStatus = function (matricula, status) {
        for (var _i = 0, _a = this.matriculasAluno; _i < _a.length; _i++) {
            var matriculaAluno = _a[_i];
            if (matricula.turma.disciplina.codigo == matriculaAluno.turma.disciplina.codigo &&
                matricula.turma.codigo == matriculaAluno.turma.codigo &&
                matricula.status == matriculaAluno.status) {
                matriculaAluno.status = status;
            }
        }
    };
    // Tasks
    MatriculaProvider.prototype.confirmarMatricula = function () {
        var _this = this;
        this.matriculasAluno = this.matriculasAluno.filter(function (matriculaAluno) {
            if (matriculaAluno.status == 'Cancelado') {
                _this.addHistorico(matriculaAluno);
            }
            else {
                return matriculaAluno;
            }
        });
        for (var _i = 0, _a = this.matriculasAluno; _i < _a.length; _i++) {
            var matriculaAluno = _a[_i];
            if (matriculaAluno.status == undefined) {
                matriculaAluno.status = 'Pedido';
                this.addHistorico(matriculaAluno);
            }
            else if (matriculaAluno.status == 'Confirmado') {
                matriculaAluno.status = 'Matriculado';
                this.addHistorico(matriculaAluno);
            }
            else if (matriculaAluno.status == 'Retirado') {
                matriculaAluno.status = 'Retirado-Aluno';
                this.addHistorico(matriculaAluno);
            }
        }
    };
    MatriculaProvider.prototype.ajustarMatricula = function (matriculaAluno, status) {
        if (!status) {
            this.add(matriculaAluno);
            this.addHistorico(matriculaAluno);
        }
        else {
            matriculaAluno.status = status;
            this.addHistorico(matriculaAluno);
            this.delete(matriculaAluno);
        }
    };
    // Util
    MatriculaProvider.prototype.toISOLocal = function (d) {
        var z = function (n) { return ('0' + n).slice(-2); };
        var zz = function (n) { return ('00' + n).slice(-3); };
        var off = d.getTimezoneOffset();
        var sign = off < 0 ? '+' : '-';
        off = Math.abs(off);
        return d.getFullYear() + '-'
            + z(d.getMonth() + 1) + '-' +
            z(d.getDate()) + 'T' +
            z(d.getHours()) + ':' +
            z(d.getMinutes()) + ':' +
            z(d.getSeconds());
    };
    MatriculaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers__["c" /* Global */]])
    ], MatriculaProvider);
    return MatriculaProvider;
}());

//# sourceMappingURL=matricula.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tab1Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Tab2Root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Tab3Root; });
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'TutorialPage';
// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
var MainPage = 'TabsPage';
// The initial root pages for our tabs (remove if not using tabs)
var Tab1Root = 'ListMasterPage';
var Tab2Root = 'SearchPage';
var Tab3Root = 'SettingsPage';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(240);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mocks_providers_aluno__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mocks_providers_matricula__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    /**
     * The Settings provider takes a set of default settings for your app.
     *
     * You can add new settings options at any time. Once the settings are saved,
     * these values will not overwrite the saved values (this can be done manually if desired).
     */
    return new __WEBPACK_IMPORTED_MODULE_12__providers__["f" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-create/item-create.module#ItemCreatePageModule', name: 'ItemCreatePage', segment: 'item-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-master/list-master.module#ListMasterPageModule', name: 'ListMasterPage', segment: 'list-master', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tutorial/tutorial.module#TutorialPageModule', name: 'TutorialPage', segment: 'tutorial', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__providers__["b" /* Api */],
                __WEBPACK_IMPORTED_MODULE_12__providers__["c" /* Global */],
                __WEBPACK_IMPORTED_MODULE_11__mocks_providers_matricula__["a" /* MatriculaProvider */],
                __WEBPACK_IMPORTED_MODULE_10__mocks_providers_aluno__["a" /* AlunoProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers__["g" /* User */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                { provide: __WEBPACK_IMPORTED_MODULE_12__providers__["f" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = /** @class */ (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = /** @class */ (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(135);
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
 * A simple settings/config class for storing key/value pairs with persistence.
 */
var Settings = /** @class */ (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = '_settings';
        this._defaults = defaults;
    }
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY)
            .then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_api__ = __webpack_require__(183);
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
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
var User = /** @class */ (function () {
    function User(api) {
        this.api = api;
    }
    /**
     * Send a POST request to our login endpoint with the data
     * the user entered on the form.
     */
    User.prototype.login = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('login', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
            else {
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Send a POST request to our signup endpoint with the data
     * the user entered on the form.
     */
    User.prototype.signup = function (accountInfo) {
        var _this = this;
        var seq = this.api.post('signup', accountInfo).share();
        seq.subscribe(function (res) {
            // If the API returned a successful response, mark the user as logged in
            if (res.status == 'success') {
                _this._loggedIn(res);
            }
        }, function (err) {
            console.error('ERROR', err);
        });
        return seq;
    };
    /**
     * Log the user out, which forgets the session
     */
    User.prototype.logout = function () {
        this._user = null;
    };
    /**
     * Process a login/signup response to store user data
     */
    User.prototype._loggedIn = function (resp) {
        this._user = resp.user;
    };
    User = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__api_api__["a" /* Api */]])
    ], User);
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Global; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { MatriculaProvider } from '../services/matricula';
//import { Api } from '../api/api';
/**
 * Global Variables.
 */
var Global = /** @class */ (function () {
    function Global() {
        this.periodoLetivo = {
            numero: 2,
            ano: 2020
        };
        this.atualizarMatriculaAluno = false; // variavel usada para indicar que um novo aluno foi escolhido no app e eh necessario atualizar sua matricula
        this.atualizarMatriculaHistorico = false; // variavel usada para indicar que um novo aluno foi escolhido no app e eh necessario atualizar seu historico de matricula
        this.faseMatricula = 'Confirmacao';
        this.sufixoGrupo = '';
    }
    Global.prototype.getPeriodoLetivo = function () {
        return this.periodoLetivo;
    };
    Global.prototype.setPeriodoLetivo = function (periodoLetivo) {
        this.periodoLetivo.ano = parseInt(periodoLetivo.substring(0, 4));
        this.periodoLetivo.numero = parseInt(periodoLetivo.substring(5));
    };
    Global.prototype.getPerfil = function () {
        return this.perfil;
    };
    Global.prototype.setPerfil = function (perfil) {
        this.perfil = perfil;
    };
    Global.prototype.getFaseMatricula = function () {
        return this.faseMatricula;
    };
    Global.prototype.setFaseMatricula = function (faseMatricula) {
        this.faseMatricula = faseMatricula;
    };
    Global.prototype.getSufixoGrupo = function () {
        return this.sufixoGrupo;
    };
    Global.prototype.setSufixoGrupo = function (sufixoGrupo) {
        this.sufixoGrupo = sufixoGrupo;
    };
    Global.prototype.getAtualizarMatriculaAluno = function () {
        return this.atualizarMatriculaAluno;
    };
    Global.prototype.getAtualizarMatriculaHistorico = function () {
        return this.atualizarMatriculaHistorico;
    };
    Global.prototype.resetAtualizarMatriculaAluno = function () {
        this.atualizarMatriculaAluno = false;
    };
    Global.prototype.resetAtualizarMatriculaHistorico = function () {
        this.atualizarMatriculaHistorico = false;
    };
    Global.prototype.setAluno = function (aluno) {
        this.atualizarMatriculaAluno = true;
        this.atualizarMatriculaHistorico = true;
    };
    Global.prototype.resetAluno = function () {
        this.atualizarMatriculaAluno = false;
        this.atualizarMatriculaHistorico = false;
    };
    Global = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Global);
    return Global;
}());

//# sourceMappingURL=global.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Aluno; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Aluno = /** @class */ (function () {
    function Aluno(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return Aluno;
}());

//# sourceMappingURL=aluno.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatriculaAluno; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var MatriculaAluno = /** @class */ (function () {
    function MatriculaAluno(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return MatriculaAluno;
}());

//# sourceMappingURL=matriculaAluno.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatriculaHistorico; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or an "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var MatriculaHistorico = /** @class */ (function () {
    function MatriculaHistorico(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            // @ts-ignore
            this[f] = fields[f];
        }
    }
    return MatriculaHistorico;
}());

//# sourceMappingURL=matriculaHistorico.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(translate, platform, settings, config, statusBar, splashScreen) {
        var _this = this;
        this.translate = translate;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages__["a" /* FirstRunPage */];
        this.pages = [
            { title: 'Tutorial', component: 'TutorialPage' },
            { title: 'Welcome', component: 'WelcomePage' },
            { title: 'Tabs', component: 'TabsPage' },
            { title: 'Cards', component: 'CardsPage' },
            { title: 'Content', component: 'ContentPage' },
            { title: 'Login', component: 'LoginPage' },
            { title: 'Signup', component: 'SignupPage' },
            { title: 'Master Detail', component: 'ListMasterPage' },
            { title: 'Menu', component: 'MenuPage' },
            { title: 'Settings', component: 'SettingsPage' },
            { title: 'Search', component: 'SearchPage' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.initTranslate();
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('pt-br');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('pt-br'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "<ion-menu [content]=\"content\" type=\"overlay\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Pages</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n  <ion-nav #content [root]=\"rootPage\"></ion-nav>"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers__["f" /* Settings */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(183);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__ = __webpack_require__(307);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__mocks_providers_items__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(309);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(310);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__user_user__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_global__ = __webpack_require__(312);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__global_global__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mocks_providers_aluno__ = __webpack_require__(184);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__mocks_providers_aluno__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mocks_providers_matricula__ = __webpack_require__(185);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__mocks_providers_matricula__["a"]; });







//# sourceMappingURL=index.js.map

/***/ })

},[227]);
//# sourceMappingURL=main.js.map