import { Injectable } from '@angular/core';

import { Disciplina } from '../../models/disciplina';

@Injectable()
export class DisciplinaProvider {
  disciplinas: Disciplina[] = [];

  constructor() {
    let disciplinas = [ {
        "codigo" : "ENE0026",
        "nome" : "INTRODUÇÃO A ENGENHARIA DE REDES DE COMUNICACÃO",
        "cargaHorariaTotal" : 30,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "ENE0334",
        "nome" : "COMPUTACAO PARA ENGENHARIA",
        "cargaHorariaTotal" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "IFD0171",
        "nome" : "FISICA 1",
        "cargaHorariaTotal" : 60,
        "unidadeAcademica" : "IFD"
      }, {
        "codigo" : "IFD0173",
        "nome" : "FISICA 1 EXPERIMENTAL",
        "cargaHorariaTotal" : 30,
        "unidadeAcademica" : "IFD"
      }, {
        "codigo" : "MAT0025",
        "nome" : "CÁLCULO 1",
        "cargaHorariaTotal" : 90,
        "unidadeAcademica" : "MAT"
      }, {
        "codigo" : "MAT0031",
        "nome" : "INTRODUCAO A ALGEBRA LINEAR",
        "cargaHorariaTotal" : 60,
        "unidadeAcademica" : "MAT"
      }, {
        "codigo" : "ENE0013",
        "nome" : "ALGORITMOS E ESTRUTURA DE DADOS",
        "cargaHorariaTotal" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "EST0023",
        "nome" : "PROBABILIDADE E ESTATÍSTICA",
        "cargaHorariaTotal" : 60,
        "unidadeAcademica" : "EST"
      }, {
        "codigo" : "IFD0175",
        "nome" : "FISICA 2",
        "cargaHorariaTotal" : 60,
        "unidadeAcademica" : "IFD"
      }, {
        "codigo" : "MAT0026",
        "nome" : "CÁLCULO 2",
        "cargaHorariaTotal" : 90,
        "unidadeAcademica" : "MAT"
      }, {
        "codigo" : "ENE0039",
        "nome" : "SISTEMAS DIGITAIS",
        "cargaHorariaTotal" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "ENE0040",
        "nome" : "LABORATÓRIO DE SISTEMAS DIGITAIS",
        "cargaHorariaTotal" : 30,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "ENE0022",
        "nome" : "PROJETO TRANSVERSAL EM REDES DE COMUNICAÇÃO 1",
        "cargaHorariaTotal" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "ENE0274",
        "nome" : " FUNDAMENTOS DE REDES",
        "cargaHorariaTotal" : 60,
        "unidadeAcademica" : "ENE"
      }, {
        "codigo" : "IFD0177",
        "nome" : "FISICA 2 EXPERIMENTAL",
        "cargaHorariaTotal" : 60,
        "unidadeAcademica" : "IQD"
      }, {
        "codigo" : "MAT0027",
        "nome" : "CÁLCULO 3",
        "cargaHorariaTotal" : 90,
        "unidadeAcademica" : "MAT"
      },
    ];

    for (let disciplina of disciplinas) {
      this.disciplinas.push(new Disciplina(disciplina));
    }
  }

  search(params?: any) {
    if (!params) {
      return this.disciplinas;
    }

    return this.disciplinas.filter((disciplina) => {
      for (let key in params) {
        let field = disciplina[key].toString();
        if (typeof field == 'string' && this.removeAccentsLowerCase(field.toLowerCase()).indexOf(this.removeAccentsLowerCase(params[key]).toLowerCase()) >= 0) {
          return disciplina;
        } else if (field == params[key]) {
          return disciplina;
        }
      }
      return null;
    });
  }

  get(codigo:string) {
    for(let disciplina of this.disciplinas) {
      if(disciplina.codigo == codigo)
        return disciplina;
    }
  }

  removeAccentsLowerCase (str) {
    var map = {
        '-' : ' ',
        'a' : 'á|à|ã|â|À|Á|Ã|Â',
        'e' : 'é|è|ê|É|È|Ê',
        'i' : 'í|ì|î|Í|Ì|Î',
        'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
        'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
        'c' : 'ç|Ç',
        'n' : 'ñ|Ñ'
    };
    
    for (var pattern in map) {
        str = str.replace(new RegExp(map[pattern], 'g'), pattern);
    };

    return str;
};
}
