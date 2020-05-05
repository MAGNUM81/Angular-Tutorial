import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'courses',
    //#email : template variable
    template: `
        {{ course.title | uppercase | lowercase }} <br/>
        {{ course.students | number }} <br/>
        {{ course.rating | number:'2.1-1'}} <br/>
        {{ course.price | currency:'CAD':true:'3.2-2' }} <br/>
        {{ course.releaseDate | date:'dd-MM-yyyy' }} <br/> //angular.io -> datepipe
    `
})
//basic CSS knowledge about selector
//courses  -> <courses/>
//.courses -> <div class=courses/>
//#courses -> <div id=courses/>
export class CoursesComponent
{
    course = {
        title: "Some Very Interesting Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016,3,1, 12, 34)
    }
}
