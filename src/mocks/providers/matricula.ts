import { Injectable } from '@angular/core';

import { Global } from '../../providers';
import { Matricula } from '../../models/matricula';
import { MatriculaAluno } from '../../models/matriculaAluno';
import { MatriculaHistorico } from '../../models/matriculaHistorico';

@Injectable()
export class MatriculaProvider {
  matriculasAluno: MatriculaAluno[] = [];
  matriculasHistorico: MatriculaHistorico [] = [];

  matriculasAlunoInicio: MatriculaAluno[] = [];
  matriculasHistoricoInicio: MatriculaHistorico [] = [];

  matriculasAlunoFinal: MatriculaAluno[] = [];
  matriculasHistoricoFinal: MatriculaHistorico [] = [];

  constructor(public global: Global) {
    let matriculasAlunoInicio = [
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

    for (let matriculaAluno of matriculasAlunoInicio) {
      this.matriculasAlunoInicio.push(new MatriculaAluno(matriculaAluno));
    }

    let matriculasAlunoFinal = [
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

    for (let matriculaAluno of matriculasAlunoFinal) {
      this.matriculasAlunoFinal.push(new MatriculaAluno(matriculaAluno));
    }


    let matriculasHistorico = [
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
  
    for (let matriculaHistorico of matriculasHistorico) {
      this.matriculasHistoricoInicio.push(new MatriculaHistorico(matriculaHistorico));
    }

    let matriculasHistoricoFinal = [
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
  
    for (let matriculaHistorico of matriculasHistoricoFinal) {
      this.matriculasHistoricoFinal.push(new MatriculaHistorico(matriculaHistorico));
    }
  }

  setMatriculaInicio() {
    this.matriculasAluno = this.matriculasAlunoInicio;
    this.matriculasHistorico = this.matriculasHistoricoInicio;
  }

  setMatriculaFinal() {
    this.matriculasAluno = this.matriculasAlunoFinal;
    this.matriculasHistorico = this.matriculasHistoricoFinal;
  }

  search(params?: any) {
    if (!params) {
        return this.matriculasAluno;
    }

    return this.matriculasAluno.filter((matriculaAluno) => {
      for (let key in params) {
        let field = matriculaAluno[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return matriculaAluno;
        } else if (field == params[key]) {
          return matriculaAluno;
        }
      }
      return null;
    });
  }

  searchHistorico() {
    var currentFaseMatricula = this.global.getFaseMatricula();
    if(currentFaseMatricula=='Ajuste' || currentFaseMatricula=='Comprovante') {
      return this.matriculasHistoricoFinal;
    }
    else {
      return this.matriculasHistorico;
    }
  }

  add(matricula: Matricula) {
    var matriculaAluno: MatriculaAluno = {
      turma: matricula.turma,
      status: matricula.status,
      prioridade: matricula.prioridade
    }
    this.matriculasAluno.push(matriculaAluno);
  }

  addHistorico(matriculaAluno: MatriculaAluno) {
    var matriculaHistorico = new MatriculaHistorico(matriculaAluno);
    matriculaHistorico.dataHora = this.toISOLocal(new Date());
    this.matriculasHistorico.push(matriculaHistorico);
  }

  delete(matriculaAluno: MatriculaAluno) {
    this.matriculasAluno.splice(this.matriculasAluno.indexOf(matriculaAluno), 1);
  }

  updateStatus(matricula: MatriculaAluno, status: string) {
    for(let matriculaAluno of this.matriculasAluno) {
      if(matricula.turma.disciplina.codigo == matriculaAluno.turma.disciplina.codigo &&
         matricula.turma.codigo == matriculaAluno.turma.codigo &&
         matricula.status == matriculaAluno.status) {
        matriculaAluno.status = status;
      }  
    }  
  }

  // Tasks
  confirmarMatricula() {
    this.matriculasAluno = this.matriculasAluno.filter(matriculaAluno => {
      if(matriculaAluno.status=='Cancelado') {
        this.addHistorico(matriculaAluno);
      }
      else {
        return matriculaAluno;
      }
    });

    for(let matriculaAluno of this.matriculasAluno) {
      if(matriculaAluno.status == undefined) {
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
  }

  ajustarMatricula(matriculaAluno : MatriculaAluno, status? : string) {
    if(!status) {
      this.add(matriculaAluno);
      this.addHistorico(matriculaAluno);
    }  
    else {
      matriculaAluno.status = status;
      this.addHistorico(matriculaAluno);
      this.delete(matriculaAluno);
    }  
  }

  // Util
  toISOLocal(d) {
    var z  = n =>  ('0' + n).slice(-2);
    var zz = n => ('00' + n).slice(-3);
    var off = d.getTimezoneOffset();
    var sign = off < 0? '+' : '-';
    off = Math.abs(off);
  
    return d.getFullYear() + '-'
           + z(d.getMonth()+1) + '-' +
           z(d.getDate()) + 'T' +
           z(d.getHours()) + ':'  + 
           z(d.getMinutes()) + ':' +
           z(d.getSeconds());
  }
}
