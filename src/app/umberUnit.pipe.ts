import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({
  name: 'umberUnit'
})
export class UmberUnitPipe implements PipeTransform {

  constructor(
    private ppTest: DomSanitizer
  ) {}

  transform(value: any, args?: any): any {
    if (value < 1000) {
      return value/100 + '百' + args
    } else if (value < 10000) {
      return value/1000 + '千' + args
    }
  }

}
