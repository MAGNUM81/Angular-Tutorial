import {Pipe, PipeTransform} from "@angular/core";
import {toTitleCase} from "codelyzer/util/utils";
import {TitleCasePipe} from "@angular/common";

@Pipe({
  name: 'customTitlecase'
})
export class CustomTitleCasePipe implements PipeTransform
{

  constructor()
  {
  }
  transform(value: string): any
  {
      if (!value) return null;

      let words = value?.split(" ");
      for (let i = 0; i < words.length; i++){
        let word = words[i];
        if (i > 0 && CustomTitleCasePipe.isPreposition(word)){
          words[i] = word.toLowerCase();
        }
        else {
          words[i] = CustomTitleCasePipe.toTitleCase(word)
        }
      }

      //4. return custom-piped string
      return words.join(" ")
  }

  private static toTitleCase(word: string) : string
  {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase()
  }

  private static isPreposition(word: string): boolean
  {
    let prepositions = ["of", "the"];
    return prepositions.includes(word.toLowerCase())
  }

}
