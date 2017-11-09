import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {
  transform(input: string, args?: any): any {
    if (!input) {
      return null;
    }

    var words = input.split(' ');

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (i > 0 && this.isPreposition(word)) {
        words[i] = word.toLowerCase();
      }
      else {
        words[i] = this.toTitleCase(words[i]);
      }
    }

    input = words.join(' ');
    return input;
  }

  private isPreposition(word: string): boolean {
    let prepositions = ["of", "the", "and", "or"];
    return prepositions.includes(word.toLowerCase());
  }

  private toTitleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
}


