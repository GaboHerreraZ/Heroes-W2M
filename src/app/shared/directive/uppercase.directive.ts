import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[UpperCase]'
})
export class UpperCaseDirective {


  constructor(private el: ElementRef) {
  }


  @HostListener('input', ['$event'])
  onChange(event:any) {
    event.target.value = event.target.value.toUpperCase();
    this.el.nativeElement.style.fontWeight = 900;
  }

}
