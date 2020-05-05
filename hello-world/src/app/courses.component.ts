import {Component, OnInit} from '@angular/core';
import {CoursesService} from "./courses.service";

@Component({
    selector: 'courses',
    //DOM style object on w3School
    template: `
        <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    `
})
//basic CSS knowledge about selector
//courses  -> <courses/>
//.courses -> <div class=courses/>
//#courses -> <div id=courses/>
export class CoursesComponent
{
    isActive = true
}
