import {Component} from '@angular/core';
import {CoursesService} from "./courses.service";

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
    `
})
//basic CSS knowledge about selector
//courses  -> <courses/>
//.courses -> <div class=courses/>
//#courses -> <div id=courses/>
export class CoursesComponent
{
    title = "List of courses";
    courses;
    constructor()
    {
        let service = new CoursesService();
        this.courses = service.getCourses();
    }
}
