import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string) {
    if(value.length === 0 || filterString === ''){
      return value;
    }
    const toDoItems = [];
    for(const toDoItem of value){
      if(toDoItems['name']=== filterString){
        toDoItems.push(toDoItem);
      }
    }
    return toDoItems;
  }

 
}
