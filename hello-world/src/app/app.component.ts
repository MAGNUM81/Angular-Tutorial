import { Component } from '@angular/core';
import {LikeChangedEventArgs} from "./like/like.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'hello-world';
    tweet = {
      body: 'Body of a great great tweet...',
      likesCount: 8,
      isLiked: false
    };

    onLikeChanged(eventArgs: LikeChangedEventArgs)
    {
        console.log(eventArgs)
    }
}
