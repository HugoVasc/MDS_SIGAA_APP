import { Injectable } from '@angular/core';

import { Aluno } from '../../models/aluno';

@Injectable()
export class AlunoProvider {

  alunos: Aluno[] = [];
  aluno: Aluno = undefined;

  constructor() {
    let alunos = [ {
  "matricula" : "180012345",
  "nome" : "DANIEL AKIRA ANDO"
}, {
  "matricula" : "180032435",
  "nome" : "VICTOR HUGO DE SOUSA"
}, {
  "matricula" : "180049548",
  "nome" : "RAYAN JHONNYE ALVES ALEXANDRINO"
}, {
  "matricula" : "180039283",
  "nome" : "JADE MARTINS ARANTES"
}, {
  "matricula" : "180059459",
  "nome" : "ALINE DOS SANTOS PEREIRA"
}, {
  "matricula" : "190003434",
  "nome" : "VINICIUS ALVES DE OLIVEIRA"
}, {
  "matricula" : "190002912",
  "nome" : "MAIRA LEITE CONCEICAO"
}, {
  "matricula" : "190003939",
  "nome" : "VICTOR NUNES GOMES"
}, {
  "matricula" : "190029293",
  "nome" : "VITOR DE AGUIAR CARAZZA"
} ];

    for (let aluno of alunos) {
      this.alunos.push(new Aluno(aluno));
    }
  }

  get(matricula?: string) {
    if(!matricula)
      return this.aluno;
    for(let aluno of this.alunos) {
      if(aluno.matricula == matricula) {
        aluno.profilePic = "assets/img/speakers/bear.jpg";
        this.aluno = aluno;
        return aluno;
      }
    }
    return undefined;
  }

  search(params?: any) {
    if (!params) {
      return this.alunos;
    }

    return this.alunos.filter((aluno) => {
      for (let key in params) {
        let field = aluno[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          aluno.profilePic = "assets/img/speakers/bear.jpg";
          return aluno;
        } else if (field == params[key]) {
          aluno.profilePic = "assets/img/speakers/bear.jpg";
          return aluno;
        }
      }
      return null;
    });
  }

  set(aluno: Aluno) {
    this.aluno = aluno;
    this.aluno.profilePic = "assets/img/speakers/bear.jpg";
  }

  reset() {
    this.aluno=undefined;
  }
}
