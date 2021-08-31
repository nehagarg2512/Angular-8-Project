import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dashToSpace',
})
export class convertToSpace implements PipeTransform {
  transform(value: string, character: string) {
    return value.replace('-', character);
  }
}
