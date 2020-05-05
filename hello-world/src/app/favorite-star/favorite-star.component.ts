import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'favorite-star',
  templateUrl: './favorite-star.component.html',
  styleUrls: ['./favorite-star.component.css']
})
export class FavoriteStarComponent implements OnInit {
  @Input() isActive : boolean;
  constructor() {

  }

  ngOnInit(): void {
  }

  onClick()
  {
    this.isActive = !this.isActive;
    console.log("Button was clicked")
  }
}
