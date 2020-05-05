import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'courses',
    //#email : template variable
    template: `
        <input [value]="email" (keyup.enter)="onKeyUp()"/>
    `
})
//basic CSS knowledge about selector
//courses  -> <courses/>
//.courses -> <div class=courses/>
//#courses -> <div id=courses/>
export class CoursesComponent
{
    email = "me@example.com";
    onKeyUp()
    {
        console.log(this.email)
    }
}
