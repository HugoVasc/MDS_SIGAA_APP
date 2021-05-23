import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MatriculaAluno } from '../../models/matriculaAluno';
import { MatriculaProvider } from '../../mocks/providers/matricula';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  matricula: MatriculaAluno;

  constructor(
    public navCtrl: NavController,
    public matriculaProvider: MatriculaProvider,
    navParams: NavParams ){
    this.matricula = navParams.get('matricula');
  }

  alterarStatus(status: string){
    this.matriculaProvider.updateStatus(this.matricula, status)
    this.navCtrl.pop();
  }

}
