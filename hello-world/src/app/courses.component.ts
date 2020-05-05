import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'courses',
    //#email : template variable
    template: `
        <input #email (keyup.enter)="onKeyUp(email.value)"/>
    `
})
//basic CSS knowledge about selector
//courses  -> <courses/>
//.courses -> <div class=courses/>
//#courses -> <div id=courses/>
export class CoursesComponent
{
    onKeyUp(email)
    {
        console.log(email)
    }
}
