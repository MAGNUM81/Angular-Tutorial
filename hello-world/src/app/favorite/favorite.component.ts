import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite-star',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
    isActive: boolean;
  constructor() {

  }

  ngOnInit(): void {
  }

    onClick()
    {
        this.isActive = !this.isActive
    }
}
