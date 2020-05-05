import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
    getCourses(){
      console.log("CoursesService was queried!");
        return [
          {
            name:"Course 1",
            price:194.99,
            isFavorite:false
          },
          {
            name:"Course 2",
            price:99.99,
            isFavorite: true
          },
          {
            name: "Course 3",
            price: 18.99,
            isFavorite: false
          }
        ]
    }
    constructor() { }
}
