import {Pipe, PipeTransform} from "@angular/core";
import {toTitleCase} from "codelyzer/util/utils";
import {TitleCasePipe} from "@angular/common";

@Pipe({
  name: 'customTitlecase'
})
export class CustomTitleCasePipe implements PipeTransform
{
  private prepositions = ["of", "the"];
  constructor()
  {
  }
  transform(value: string): any
  {
      if (!value) return null;
      //1. apply vanilla titleCase

      let customized = "";
      //2. split value
      let words = value?.split(" ");
      //3. iterate
      for (var i = 0; i < words.length; i++){
        if (i > 0 && this.prepositions.includes(words[i].toLowerCase())){
          words[i] = words[i].toLowerCase();
        }
        else {
          words[i] = words[i].substr(0, 1).toUpperCase() + words[i].substr(1).toLowerCase()
        }
      }

      //4. return custom-piped string
      return words.join(" ")
  }
}
