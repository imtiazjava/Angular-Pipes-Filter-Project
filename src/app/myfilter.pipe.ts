import { PipeTransform, Pipe } from '@angular/core';
@Pipe({
name:'efilter'
})
export class MyFilterPipe implements PipeTransform{
    transform(obj:any,searchEmployee:any):any{
              if(obj.length===0)
              return obj;
             return obj.filter(function(search){
                return search.name.toLowerCase().indexOf(searchEmployee)>-1;
             });
        
    }
}