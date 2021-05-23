import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Aluno } from '../../models/aluno';

import { Item } from '../../models/item';
import { MatriculaAluno } from '../../models/matriculaAluno';
import { AlunoProvider } from '../../providers';
import { MatriculaProvider } from '../../mocks/providers/matricula';
@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentMatriculasAluno: MatriculaAluno[];
  currentAluno: Aluno;

  constructor(public navCtrl: NavController, 
    public alunoProvider: AlunoProvider,
    public matriculaProvider: MatriculaProvider,
    public modalCtrl: ModalController
    ){
      this.matriculaProvider.setMatriculaInicio();
    this.currentMatriculasAluno = this.matriculaProvider.search();
    this.currentAluno = this.alunoProvider.get();
    console.log(this.currentMatriculasAluno)
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(matricula: MatriculaAluno) {
    this.navCtrl.push('ItemDetailPage', {
      matricula: matricula
    });
  }

  confirmarMatricula(){
    this.matriculaProvider.confirmarMatricula();
  }
}
