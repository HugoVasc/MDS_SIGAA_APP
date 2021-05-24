import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, AlertController, NavParams, App } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

import { Disciplina } from '../../models/disciplina';
import { Turma } from '../../models/turma';
import { MatriculaAluno } from '../../models/matriculaAluno';

import { TurmaProvider } from '../../providers';
import { MatriculaProvider } from '../../providers';

export interface AlertMetadata {
  title: string;
  description: string;
  descriptionDetail: string;
  inputName: string;
  okButton: string;
  cancelButton: string;
}

@IonicPage()
@Component({
  selector: 'page-item-create',
  templateUrl: 'item-create.html'
})

export class ItemCreatePage {
  disciplina: Disciplina;
  turma: Turma;
  currentTurmas: any = [];

  alertaConfirmarTurma: AlertMetadata;
  alertaTurmaJaEstaNaMatricula: AlertMetadata;

  constructor(
    public navCtrl: NavController, 
    public viewCtrl: ViewController,
    public turmaProvider: TurmaProvider,
    public matriculaProvider: MatriculaProvider,
    translate: TranslateService,
    private alertCtrl: AlertController,
    navParams: NavParams) {
      this.disciplina = navParams.get('disciplina');
      this.currentTurmas = this.turmaProvider.search({disciplina:this.disciplina.codigo});

      translate.get([
        "ADICIONAR_TURMA_TITLE",
        "ADICIONAR_TURMA_DESCRIPTION",
        "ADICIONAR_TURMA_INPUTNAME",
        "AJUSTAR_TURMA_TITLE",
        "AJUSTAR_TURMA_DESCRIPTION",
        "AJUSTAR_TURMA_DESCRIPTION_DETAIL",
        "TURMA_REPETIDA_TITLE",
        "TURMA_REPETIDA_DESCRIPTION",
        "CANCEL_BUTTON",
        "CONFIRM_BUTTON"
      ]).subscribe(
        (values) => {
          this.alertaConfirmarTurma = {
            title: values.ADICIONAR_TURMA_TITLE,
            description: values.ADICIONAR_TURMA_DESCRIPTION,
            descriptionDetail: '',
            inputName: values.ADICIONAR_TURMA_INPUTNAME,
            okButton: values.CONFIRM_BUTTON,
            cancelButton: values.CANCEL_BUTTON
          };
          this.alertaTurmaJaEstaNaMatricula = {
            title: values.TURMA_REPETIDA_TITLE,
            description: values.TURMA_REPETIDA_DESCRIPTION,
            descriptionDetail: '',
            inputName: '',
            okButton: values.CONFIRM_BUTTON,
            cancelButton: values.CANCEL_BUTTON
          };
        });

  }

  ionViewDidLoad() {

  }

  
  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  processarPedidoMatricula(turma: Turma) {
      this.confirmarPedidoMatricula(turma);
  }

  /**
   * Inserir Matricula
   */
  inserirMatricula(turma: Turma, status: string, prioridade?: number) {
    var matriculaAluno: MatriculaAluno = {
      turma : turma,
      status,
      prioridade,
    };

    if(status === 'Matriculado') {
      matriculaAluno.status = status;
    }
    if(typeof prioridade !== 'undefined') {
      matriculaAluno.prioridade = prioridade;
    }
    this.matriculaProvider.add(matriculaAluno);
  }

  /**
   * Confirmar pedido de matrícula em turma.
   */
  confirmarPedidoMatricula(turma: Turma) {
    // verifica se a turma já está na lista de matricula
    for(let matriculaAluno of this.matriculaProvider.search()) {
      if((matriculaAluno.turma.codigo === turma.codigo) &&
         (matriculaAluno.turma.disciplina.codigo === turma.disciplina.codigo) &&
         ((!matriculaAluno.status)||(matriculaAluno.status === "Pedido")||(matriculaAluno.status === "PreMatricula")||(matriculaAluno.status === "Confirmado")||(matriculaAluno.status === "Matriculado"))) {
           let prompt = this.alertCtrl.create({
             title: this.alertaTurmaJaEstaNaMatricula.title,
             message: this.alertaTurmaJaEstaNaMatricula.description,
             buttons: [
               {
                 text: this.alertaTurmaJaEstaNaMatricula.cancelButton,
               },
             ]
           });
           prompt.present();
           return;
         }
    }

    let prompt = this.alertCtrl.create({
      title: this.alertaConfirmarTurma.title,
      message: this.alertaConfirmarTurma.description,
      inputs: [
        {
          name: 'prioridade',
          placeholder: this.alertaConfirmarTurma.inputName
        },
      ],
      buttons: [
        {
          text: this.alertaConfirmarTurma.cancelButton,
//            handler: data => {
//              alert('Cancelado');
//            }
        },
        {
          text: this.alertaConfirmarTurma.okButton,
          handler: data => {
            var prioridade = parseInt(data.prioridade);
            if(prioridade)
              this.inserirMatricula(turma,'Pedido',prioridade);
            else  
              this.inserirMatricula(turma,'Pedido',10);
              this.navCtrl.pop();
              this.navCtrl.parent.select(0);
          }
        }
      ]
    });
    prompt.present();
  }


  
}
