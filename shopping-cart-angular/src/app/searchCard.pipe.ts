import { Pipe, PipeTransform } from '@angular/core';

import { CardModel } from './cardModel';

@Pipe({ name: 'searchCard' })
export class SearchCardPipe implements PipeTransform {
  transform(cards: CardModel[], args?: any): any {

    if(!cards)return null;
    if(!args)return cards;

    args = args.toLowerCase();

    return cards.filter(function(item){
        return JSON.stringify(item).toLowerCase().includes(args);
    });
}

}