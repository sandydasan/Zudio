import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allCollection:any[],serachKey:string,propName:string): any[] {

    const result:any=[]

    if(!allCollection || serachKey=='' || propName==''){
      return allCollection
    }

    allCollection.forEach((zudio:any)=>{
      if(zudio[propName].trim().toLowerCase().includes(serachKey.trim().toLocaleLowerCase())){
        result.push(zudio)
      }
    })
    return result;
  }

}
