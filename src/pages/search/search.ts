import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DisciplinaProvider } from '../../providers';

import { Item } from '../../models/item';
import { Disciplina } from '../../models/disciplina';
@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentDisciplinas: any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public disciplinaProvider: DisciplinaProvider,
    ) { }
    
  /**
   * Perform a service for the proper items.
   */
   getDisciplinas(ev) {
    let val = ev.target.value;
    if (!val || !val.trim() || val.trim().length < 3) {
      this.currentDisciplinas = [];
      return;
    }
    this.currentDisciplinas = this.disciplinaProvider.search({
      nome: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
   openDisciplina(disciplina: Disciplina) {
    this.navCtrl.push('ItemCreatePage', {
      disciplina: disciplina
    });
  }

}
