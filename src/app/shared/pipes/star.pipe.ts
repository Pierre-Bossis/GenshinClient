import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(arg: number): string {
    let valueToReturn:string = ""

    for (let index = 0; index < arg; index++) {
      valueToReturn += "★"
    }
    return valueToReturn
  }

}
