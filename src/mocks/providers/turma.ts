import { Injectable } from '@angular/core';

import { Turma } from '../../models/turma';

@Injectable()
export class TurmaProvider {
  turmas: Turma[] = [];

  constructor() {
    let turmas = [ 
      {
        "codigo": "A",
        "vagas": 70,
        "alunosMatriculados": 60,
        "disciplina": {
          "codigo" : "MAT0025",
          "nome" : "CÁLCULO 1",
          "cargaHorariaTotal" : 90,
          "unidadeAcademica" : "MAT"
          },
        "horariosAula": [
          {
            "dia": "SEG",
            "hora": "10:00 às 11:50"
          },
          {
            "dia": "TER",
            "hora": "10:00 às 11:50"
          },
          {
            "dia": "QUI",
            "hora": "10:00 às 11:50"
          }
        ],
        "professores": [
          {
            "nome": "CELIUS ANTONIO MAGALHAES"
          },
          {
            "nome": "LEANDRO MARTINS CIOLETTI"
          }
        ]
    },
    {
      "codigo": "J",
      "vagas": 70,
      "alunosMatriculados": 60,
      "disciplina": {
        "codigo" : "MAT0025",
        "nome" : "CÁLCULO 1",
        "cargaHorariaTotal" : 90,
        "unidadeAcademica" : "MAT"
        },
      "horariosAula": [
        {
          "dia": "SEG",
          "hora": "14:00 às 15:50"
        },
        {
          "dia": "QUA",
          "hora": "14:00 às 15:50"
        },
        {
          "dia": "SEX",
          "hora": "14:00 às 15:50"
        }
      ],
      "professores": [
        {
          "nome": "WANG QIAOLING"
        },
      ]
  },
  {
    "codigo": "O",
    "vagas": 70,
    "alunosMatriculados": 60,
    "disciplina": {
      "codigo" : "MAT0025",
      "nome" : "CÁLCULO 1",
      "cargaHorariaTotal" : 90,
      "unidadeAcademica" : "MAT"
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
        "nome": "LINEU DA COSTA ARAUJO NETO"
      },
    ]
},
{
      "codigo": "A",
      "vagas": 66,
      "alunosMatriculados": 52,
      "disciplina": {
        "codigo" : "MAT0031",
        "nome" : "INTRODUCAO A ALGEBRA LINEAR",
        "cargaHorariaTotal" : 60,
        "unidadeAcademica" : "MAT"
      },
      "horariosAula": [
        {
          "dia": "SEG",
          "hora": "16:00 às 17:50"
        },
        {
          "dia": "QUA",
          "hora": "16:00 às 17:50"
        }
      ],
      "professores": [
        {
          "nome": "PAVEL ZALESSKI"
        },
      ]
  },
  {
    "codigo": "G",
    "vagas": 66,
    "alunosMatriculados": 28,
    "disciplina": {
      "codigo" : "MAT0031",
      "nome" : "INTRODUCAO A ALGEBRA LINEAR",
      "cargaHorariaTotal" : 60,
      "unidadeAcademica" : "MAT"
    },
    "horariosAula": [
      {
        "dia": "TER",
        "hora": "19:00 às 20:50"
      },
      {
        "dia": "QUI",
        "hora": "19:00 às 20:50"
      }
    ],
    "professores": [
      {
        "nome": "ALBERTO MASAYOSHI FARIA OHASHI"
      },
    ]
},
{
    "codigo": "A",
    "vagas": 30,
    "alunosMatriculados": 28,
    "disciplina": {
      "codigo" : "ENE0026",
      "nome" : "INTRODUÇÃO A ENGENHARIA DE REDES DE COMUNICACÃO",
      "cargaHorariaTotal" : 30,
      "unidadeAcademica" : "ENE"
  },
    "horariosAula": [
      {
        "dia": "SEX",
        "hora": "14:00 às 15:50"
      },
    ],
    "professores": [
      {
        "nome": "PAULO ROBERTO DE LIRA GONDIM"
      }
    ]
},
{
  "codigo": "A",
  "vagas": 40,
  "alunosMatriculados": 25,
  "disciplina": {
    "codigo" : "ENE0334",
    "nome" : "COMPUTACAO PARA ENGENHARIA",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "ENE"
},
  "horariosAula": [
    {
      "dia": "QUA",
      "hora": "10:00 às 11:50"
    },
    {
      "dia": "SEX",
      "hora": "10:00 às 11:50"
    }
  ],
  "professores": [
    {
      "nome": "DANIEL GUERREIRO E SILVA"
    }
  ]
},
{
  "codigo": "B",
  "vagas": 40,
  "alunosMatriculados": 25,
  "disciplina": {
    "codigo" : "ENE0334",
    "nome" : "COMPUTACAO PARA ENGENHARIA",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "ENE"
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
      "nome": "VINICIUS PEREIRA GONCALVES"
    }
  ]
},
{
  "codigo": "B",
  "vagas": 30,
  "alunosMatriculados": 12,
  "disciplina": {
    "codigo" : "IFD0171",
    "nome" : "FISICA 1",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "IFD"
},
  "horariosAula": [
    {
      "dia": "TER",
      "hora": "08:00 às 09:50"
    },
    {
      "dia": "QUI",
      "hora": "08:00 às 09:50"
    }
  ],
  "professores": [
    {
      "nome": "CAROLINA MATTE GREGORY"
    }
  ]
},
{
  "codigo": "G",
  "vagas": 60,
  "alunosMatriculados": 38,
  "disciplina": {
    "codigo" : "IFD0171",
    "nome" : "FISICA 1",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "IFD"
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
      "nome": "DEMETRIO ANTONIO DA SILVA"
    }
  ]
},
{
  "codigo": "B",
  "vagas": 30,
  "alunosMatriculados": 12,
  "disciplina": {
    "codigo" : "IFD0173",
    "nome" : "FISICA 1 EXPERIMENTAL",
    "cargaHorariaTotal" : 30,
    "unidadeAcademica" : "IFD"
},
  "horariosAula": [
    {
      "dia": "SEG",
      "hora": "08:00 às 09:50"
    },
  ],
  "professores": [
    {
      "nome": "CAROLINA MATTE GREGORY"
    }
  ]
},
{
  "codigo": "G",
  "vagas": 60,
  "alunosMatriculados": 38,
  "disciplina": {
    "codigo" : "IFD0173",
    "nome" : "FISICA 1 EXPERIMENTAL",
    "cargaHorariaTotal" : 30,
    "unidadeAcademica" : "IFD"
},
  "horariosAula": [
    {
      "dia": "SEX",
      "hora": "08:00 às 09:50"
    },
  ],
  "professores": [
    {
      "nome": "DEMETRIO ANTONIO DA SILVA"
    }
  ]
},
{
  "codigo": "A",
  "vagas": 60,
  "alunosMatriculados": 54,
  "disciplina": {
    "codigo" : "IFD0175",
    "nome" : "FISICA 2",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "IFD"
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
      "nome": "FERNANDO MARQUES CARVALHO"
    }
  ]
},
{
  "codigo": "B",
  "vagas": 80,
  "alunosMatriculados": 13,
  "disciplina": {
    "codigo" : "IFD0175",
    "nome" : "FISICA 2",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "IFD"
},
  "horariosAula": [
    {
      "dia": "TER",
      "hora": "10:00 às 11:50"
    },
    {
      "dia": "QUI",
      "hora": "10:00 às 11:50"
    }
  ],
  "professores": [
    {
      "nome": "ALEXANDRE DODONOV"
    }
  ]
},
{
  "codigo": "A",
  "vagas": 30,
  "alunosMatriculados": 21,
  "disciplina": {
    "codigo" : "ENE0013",
    "nome" : "ALGORITMOS E ESTRUTURA DE DADOS",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "ENE"
},
  "horariosAula": [
    {
      "dia": "TER",
      "hora": "10:00 às 11:50"
    },
    {
      "dia": "QUI",
      "hora": "10:00 às 11:50"
    }
  ],
  "professores": [
    {
      "nome": "VINICIUS PEREIRA GONCALVES"
    }
  ]
},
{
  "codigo": "B",
  "vagas": 30,
  "alunosMatriculados": 12,
  "disciplina": {
    "codigo" : "ENE0013",
    "nome" : "ALGORITMOS E ESTRUTURA DE DADOS",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "ENE"
  },
  "horariosAula": [
    {
      "dia": "SEG",
      "hora": "16:00 às 17:50"
    },
    {
      "dia": "QUA",
      "hora": "16:00 às 17:50"
    }
  ],
  "professores": [
    {
      "nome": "DANIEL GUERREIRO E SILVA"
    }
  ]
},
{
  "codigo": "A",
  "vagas": 60,
  "alunosMatriculados": 54,
  "disciplina": {
    "codigo" : "ENE0039",
    "nome" : "SISTEMAS DIGITAIS",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "ENE"
},
  "horariosAula": [
    {
      "dia": "TER",
      "hora": "16:00 às 17:50"
    },
    {
      "dia": "QUI",
      "hora": "16:00 às 17:50"
    }
  ],
  "professores": [
    {
      "nome": "EDUARDO PEIXOTO FERNANDES DA SILVA"
    }
  ]
},
{
  "codigo": "B",
  "vagas": 60,
  "alunosMatriculados": 45,
  "disciplina": {
    "codigo" : "ENE0039",
    "nome" : "SISTEMAS DIGITAIS",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "ENE"
},
  "horariosAula": [
    {
      "dia": "TER",
      "hora": "14:00 às 15:50"
    },
    {
      "dia": "QUI",
      "hora": "14:00 às 15:50"
    }
  ],
  "professores": [
    {
      "nome": "EDSON MINTSU HUNG"
    }
  ]
},
{
  "codigo": "A",
  "vagas": 20,
  "alunosMatriculados": 16,
  "disciplina": {
    "codigo" : "ENE0040",
    "nome" : "LABORATÓRIO DE SISTEMAS DIGITAIS",
    "cargaHorariaTotal" : 30,
    "unidadeAcademica" : "ENE"
},
  "horariosAula": [
    {
      "dia": "SEG",
      "hora": "10:00 às 11:50"
    },
  ],
  "professores": [
    {
      "nome": "LUIS FERNANDO RAMOS MOLINARO"
    }
  ]
},
{
  "codigo": "B",
  "vagas": 20,
  "alunosMatriculados": 0,
  "disciplina": {
    "codigo" : "ENE0040",
    "nome" : "LABORATÓRIO DE SISTEMAS DIGITAIS",
    "cargaHorariaTotal" : 30,
    "unidadeAcademica" : "ENE"
},
  "horariosAula": [
    {
      "dia": "SEG",
      "hora": "14:00 às 15:50"
    },
  ],
  "professores": [
    {
      "nome": "LUIS FERNANDO RAMOS MOLINARO"
    }
  ]
},
{
  "codigo": "C",
  "vagas": 20,
  "alunosMatriculados": 0,
  "disciplina": {
    "codigo" : "ENE0040",
    "nome" : "LABORATÓRIO DE SISTEMAS DIGITAIS",
    "cargaHorariaTotal" : 30,
    "unidadeAcademica" : "ENE"
},
  "horariosAula": [
    {
      "dia": "SEX",
      "hora": "08:00 às 09:50"
    },
  ],
  "professores": [
    {
      "nome": "LUIS FERNANDO RAMOS MOLINARO"
    }
  ]
},
{
  "codigo": "A",
  "vagas": 150,
  "alunosMatriculados": 130,
  "disciplina": {
    "codigo" : "MAT0026",
    "nome" : "CÁLCULO 2",
    "cargaHorariaTotal" : 90,
    "unidadeAcademica" : "MAT"
},
  "horariosAula": [
    {
      "dia": "SEG",
      "hora": "10:00 às 11:50"
    },
    {
      "dia": "TER",
      "hora": "10:00 às 11:50"
    },
    {
      "dia": "QUI",
      "hora": "10:00 às 11:50"
    }
  ],
  "professores": [
    {
      "nome": "KELLCIO OLIVEIRA ARAUJO"
    }
  ]
},
{
  "codigo": "G",
  "vagas": 150,
  "alunosMatriculados": 104,
  "disciplina": {
    "codigo" : "MAT0026",
    "nome" : "CÁLCULO 2",
    "cargaHorariaTotal" : 90,
    "unidadeAcademica" : "MAT"
},
  "horariosAula": [
    {
      "dia": "SEG",
      "hora": "08:00 às 09:50"
    },
    {
      "dia": "TER",
      "hora": "08:00 às 09:50"
    },
    {
      "dia": "QUI",
      "hora": "08:00 às 09:50"
    }
  ],
  "professores": [
    {
      "nome": "ANGEL RODOLFO BAIGORRI"
    }
  ]
},
{
  "codigo": "A",
  "vagas": 60,
  "alunosMatriculados": 47,
  "disciplina": {
    "codigo" : "EST0023",
    "nome" : "PROBABILIDADE E ESTATÍSTICA",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "EST"
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
      "nome": "LEANDRO TAVARES CORREIA"
    }
  ]
},
{
  "codigo": "B",
  "vagas": 60,
  "alunosMatriculados": 13,
  "disciplina": {
    "codigo" : "EST0023",
    "nome" : "PROBABILIDADE E ESTATÍSTICA",
    "cargaHorariaTotal" : 60,
    "unidadeAcademica" : "EST"
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
      "nome": "HELTON SAULO BEZERRA DOS SANTO"
    }
  ]
},
      {
        "codigo": "A",
        "vagas": 20,
        "alunosMatriculados": 20,
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
    },
    {
        "codigo": "A",
        "vagas": 40,
        "alunosMatriculados": 0,
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
    },
    {
        "codigo": "C",
        "vagas": 20,
        "alunosMatriculados": 0,
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
    },
    {
      "codigo": "D",
      "vagas": 20,
      "alunosMatriculados": 0,
      "disciplina": {
        "nome": "FISICA 2 EXPERIMENTAL",
        "codigo": "IFD0177",
        "cargaHorariaTotal": 60,
        "unidadeAcademica": "IFD"
  },
      "horariosAula": [
        {
          "dia": "SEG",
          "hora": "00:00 às 09:50"
        },
        {
          "dia": "SEG",
          "hora": "10:00 às 11:50"
        }
      ],
      "professores": [
        {
          "nome": "PEDRO AUGUSTO MATOS RODRIGUES"
        }
      ]
    },
    {
      "codigo": "A",
      "vagas": 65,
      "alunosMatriculados": 0,
      "disciplina": {
        "nome": "CÁLCULO 3",
        "codigo": "MAT0027",
        "cargaHorariaTotal": 90,
        "unidadeAcademica": "MAT"
  },
      "horariosAula": [
        {
          "dia": "SEG",
          "hora": "14:00 às 15:50"
        },
        {
          "dia": "QUA",
          "hora": "14:00 às 15:50"
        },
        {
          "dia": "SEX",
          "hora": "14:00 às 15:50"
        },
      ],
      "professores": [
        {
          "nome": "CLAUS AKIRA MATSUSHIGUE"
        }
      ]
    },
        {
        "codigo": "J",
        "vagas": 90,
        "alunosMatriculados": 0,
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
      },    
];

    for (let turma of turmas) {
      this.turmas.push(new Turma(turma));
    }
  }

  search(params?: any) {
    if (!params) {
      return this.turmas;
    }
    if ("disciplina" in params) {
      return this.turmas.filter((turma) => {
        if(turma.disciplina.codigo == params.disciplina) {
              return turma;
        }
        return null;
      });
    }
  }

}
