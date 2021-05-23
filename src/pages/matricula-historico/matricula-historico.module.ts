import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { MatriculaHistoricoPage } from './matricula-historico';

@NgModule({
  declarations: [
    MatriculaHistoricoPage,
  ],
  imports: [
    IonicPageModule.forChild(MatriculaHistoricoPage),
    TranslateModule.forChild()
  ],
})
export class MatriculaHistoricoPageModule {}
