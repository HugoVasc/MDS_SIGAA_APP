import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { Aluno } from '../../models/aluno';
import { MatriculaAluno } from '../../models/matriculaAluno';
import { MatriculaHistorico } from '../../models/matriculaHistorico';
import { AlunoProvider } from '../../providers';
import { MatriculaProvider } from '../../mocks/providers/matricula';
/**
 * Generated class for the MatriculaHistoricoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matricula-historico',
  templateUrl: 'matricula-historico.html',
})
export class MatriculaHistoricoPage {
  currentMatriculasAluno: MatriculaAluno[];
  currentMatriculasHistorico: MatriculaHistorico[];
  currentAluno: Aluno;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alunoProvider: AlunoProvider,
    public matriculaProvider: MatriculaProvider,
    public modalCtrl: ModalController
  ) {
    this.matriculaProvider.setMatriculaInicio();
  this.currentMatriculasAluno = this.matriculaProvider.search();
  this.currentMatriculasHistorico = this.matriculaProvider.searchHistorico();
  this.currentAluno = this.alunoProvider.get();
  console.log(this.currentMatriculasAluno)
}

  ionViewDidLoad() {
  }

}
