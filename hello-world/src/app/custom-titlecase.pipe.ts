import {Pipe, PipeTransform} from "@angular/core";
import {toTitleCase} from "codelyzer/util/utils";
import {TitleCasePipe} from "@angular/common";

@Pipe({
  name: 'customTitlecase'
})
export class CustomTitleCasePipe implements PipeTransform
{
  private prepositions = ["of", "the", "a", "or", "for"];
  constructor(private titleCasePipe: TitleCasePipe)
  {
  }
  transform(value: any, ...args): any
  {
    //1. apply vanilla titleCase
    let vanilla = this.titleCasePipe.transform(value);

    let customized = "";
    //2. split value
    let words = vanilla?.split(" ");
    //3. iterate
    words?.forEach((w, index)=>{
      let toAppend = w;
      if (this.getSanitizedPrepositions().find((p) => w.toLowerCase() === p)) //3.1 if preposition : if not first word, minimize, else YASSS
      {
        if (!(index === 0)){
          toAppend = w.toLowerCase();
        }
      }
      customized += " " + toAppend;
    });

    //4. return custom-piped string
    return customized
  }

  getSanitizedPrepositions() : any[]
  {
      return this.prepositions.map((prep) => prep.toLocaleLowerCase())
  }
}
