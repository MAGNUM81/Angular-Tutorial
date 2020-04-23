import {Component} from '@angular/core';

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
    courses = ["course1", "course2", "course3"]
}
