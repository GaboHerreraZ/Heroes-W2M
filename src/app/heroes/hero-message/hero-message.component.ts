import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../shared/hero.model';

@Component({
  selector: 'app-hero-message',
  templateUrl: './hero-message.component.html',
  styleUrls: ['./hero-message.component.css']
})
export class HeroMessageComponent implements OnInit {

  hero: Hero;

  constructor(public dialogRef: MatDialogRef<HeroMessageComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.hero = this.data;
  }

 
}
