import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortpipe'
})
export class SortpipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
       return value.sort((a,b)=>{
          var x=a.name.toLowerCase();
          var y=b.name.toLowerCase();
          if(x<y)
          return -1;
          else 
          return 1;

          return 0;
       });
  }

}
