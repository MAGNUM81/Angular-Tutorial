import { Component } from '@angular/core';
import {LikeChangedEventArgs} from "./like/like.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    viewMode = 'map';
}
