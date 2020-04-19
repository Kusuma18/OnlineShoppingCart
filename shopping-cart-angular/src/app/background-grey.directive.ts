import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[background-greyColor]'
})
export class BackGroundColorDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'grey';
    }
}