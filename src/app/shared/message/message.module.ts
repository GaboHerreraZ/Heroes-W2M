import { NgModule } from '@angular/core';
import { MessageComponent } from './component/message.component';
import { CustomCommonModule } from '../modules/custom-common.module';



@NgModule({
  declarations: [MessageComponent],
  imports: [
    CustomCommonModule
  ],
  exports: [
    MessageComponent
  ]
})
export class MessageModule { }
