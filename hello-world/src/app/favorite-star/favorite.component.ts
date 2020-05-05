import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
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
