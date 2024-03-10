import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commaToArray',
  standalone: true,
})
export class CommaToArrayPipe implements PipeTransform {
  transform(value: string): any[] {
    return value.split(',');
  }
}
