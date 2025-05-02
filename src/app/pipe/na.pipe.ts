import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'na'
})
export class NaPipe implements PipeTransform {

  transform(value: any,dafaultStr?:string): string {
    console.log("Pipe Executed") 
    if(value != null && value != undefined && value != "") {
      return value;
    } else {
      if(dafaultStr  == undefined) {
        return "NA";
      } else {
        return dafaultStr
      } 
    } 
  }

}
