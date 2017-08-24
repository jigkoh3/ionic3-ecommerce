import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ListGridComponent } from './list-grid';

@NgModule({
  declarations: [
    ListGridComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ListGridComponent
  ]
})
export class ListGridComponentModule {}
