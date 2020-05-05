import {Component, Input, OnInit} from '@angular/core';
import { FavoriteChangedEventArgs } from "../favorite-star/favorite.component";

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  @Input() course : any;
  constructor() {

  }

  ngOnInit(): void {
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs)
  {
      console.log("Favorite changed: ", eventArgs)
  }
}
