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

    constructor()
    {

    }

    onHeartClick(){
        this.isActive = !this.isActive;
        if(this.isActive)
          this.likesCount++;
        else
          this.likesCount--;
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
