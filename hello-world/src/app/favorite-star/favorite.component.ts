import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles:[
    `

    `
  ]
})
export class FavoriteComponent {
    @Input('is-favorite') isFavorite : boolean;
    @Output('change') change = new EventEmitter();

    onClick()
    {
      this.isFavorite = !this.isFavorite;
      this.change.emit({newValue: this.isFavorite})
    }
}

export interface FavoriteChangedEventArgs
{
  newValue: boolean
}