import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value:any,args: any): any {
    let results=[]

    if(args.length==0) results=value
    else{

      for(let data of value){
        if(data.userId==args){
          results.push(data)
        }
      }
    }
    

    return results
  }

}
