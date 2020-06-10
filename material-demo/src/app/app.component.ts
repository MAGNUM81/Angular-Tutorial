import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  categories = [
    {name: 'Beginner', selected: false},
    {name: 'Intermediate', selected: false},
    {name: 'Expert', selected: false}
  ];

  selectCategory(cat: any) {
    this.categories
      .filter(c => c !== cat)
      .forEach(c => c.selected = false);

    cat.selected = !cat.selected;
  }
}
