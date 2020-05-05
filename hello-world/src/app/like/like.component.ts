import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
    @Input('isActive') isActive: boolean;
    @Input('likesCount') likesCount: number;
    @Output('change') change = new EventEmitter();

    onHeartClick(){

        this.likesCount += (this.isActive) ? -1 : 1;
        this.isActive = !this.isActive;
        this.change.emit({
          newValue: this.isActive,
          newLikesCount: this.likesCount
        })
    }

}

export interface LikeChangedEventArgs
{
    newValue: boolean
    newLikeCount: number
}
