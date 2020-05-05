import {Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated, 
  // applying shadowDom encapsulation means only styles declared for this component will be used
  // in the tutorial, the last style element overrides all others, but here it seems that the inline styles property is
  // overriding styleUrls property, but HTML style will override it.
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
