import { 
  Component, 
  Inject, 
  OnInit 
} from '@angular/core';
import {  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Message } from '../shared/message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: Message;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Message) { }

  ngOnInit(): void {
    this.message =  this.data;
  }

 

}
