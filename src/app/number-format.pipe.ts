import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat'
})
export class NumberFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let returnValue: string = value.toString(10);
    if(returnValue.length === 1) { 
      returnValue = '0'.concat(returnValue);
    }
    return returnValue;
  }

}
