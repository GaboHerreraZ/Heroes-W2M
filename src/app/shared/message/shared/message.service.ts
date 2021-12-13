import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageComponent } from '../component/message.component';
import { Message } from './message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private dialog: MatDialog) { }

  setMessage(message: Message): void {
    this.dialog.open(MessageComponent, {
      data: message
    });
  }

}