import { Directive, Input, ElementRef, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[stylizeNumber]'
})
export class StylizeNumberDirective {
  @Input('value') private number: number;
  
  constructor(private el: ElementRef) { 
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes.number){
      console.log('input changed');
      if(this.number.toString(10).includes('1')) {
        this.el.nativeElement.style.letterSpacing = '5px';
        this.el.nativeElement.style.marginRight = '-5px';
    
      }
    }
  }

}
