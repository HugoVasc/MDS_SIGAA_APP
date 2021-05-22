import { Injectable } from '@angular/core';

import { Aluno } from '../../models/aluno';
//import { MatriculaProvider } from '../services/matricula';
//import { Api } from '../api/api';

/**
 * Global Variables.
 */
@Injectable()
export class Global {
  periodoLetivo = {      // Período letivo para o qual a matrícula será processada
    numero: 1,
    ano: 2020
  };

  perfil: string;             // Perfil de usuário do aplicativo ("Aluno" , "Coordenador" ou Administrador)
  faseMatricula: string;      // ("Confirmacao", "Processamento", "Ajuste", "Comprovante")
  sufixoGrupo : string;       // Sufixo do grupo, a ser adicionado na URL dos recursos/serviços

  atualizarMatriculaAluno: boolean = false;     // variavel usada para indicar que um novo aluno foi escolhido no app e eh necessario atualizar sua matricula
  atualizarMatriculaHistorico: boolean = false; // variavel usada para indicar que um novo aluno foi escolhido no app e eh necessario atualizar seu historico de matricula

  constructor() {
    this.faseMatricula = 'Confirmacao';
    this.sufixoGrupo = '';
  }

  getPeriodoLetivo() {
    return this.periodoLetivo;
  }

  setPeriodoLetivo(periodoLetivo: string) {
    this.periodoLetivo.ano = parseInt(periodoLetivo.substring(0,4));
    this.periodoLetivo.numero = parseInt(periodoLetivo.substring(5));
  }

  getPerfil() {
    return this.perfil;
  }

  setPerfil(perfil: string) {
    this.perfil = perfil;
  }

  getFaseMatricula() {
    return this.faseMatricula;
  }

  setFaseMatricula(faseMatricula: string) {
    this.faseMatricula = faseMatricula;
  }

  getSufixoGrupo() {
    return this.sufixoGrupo;
  }

  setSufixoGrupo(sufixoGrupo: string) {
    this.sufixoGrupo = sufixoGrupo;
  }

  getAtualizarMatriculaAluno() {
    return this.atualizarMatriculaAluno;
  }

  getAtualizarMatriculaHistorico() {
    return this.atualizarMatriculaHistorico;
  }

  resetAtualizarMatriculaAluno() {
    this.atualizarMatriculaAluno = false;
  }

  resetAtualizarMatriculaHistorico() {
    this.atualizarMatriculaHistorico = false;
  }

  setAluno(aluno: Aluno) {
    this.atualizarMatriculaAluno = true;
    this.atualizarMatriculaHistorico = true;
  }

  resetAluno() {
    this.atualizarMatriculaAluno = false;
    this.atualizarMatriculaHistorico = false;
  }
}
