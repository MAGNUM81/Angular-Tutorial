import {Component, OnInit} from '@angular/core';
import {CoursesService} from "./courses.service";

@Component({
    selector: 'courses',
    //DOM style object on w3School
    template: `
        <div (click)="onDivClicked()">
            <button (click)="onSave($event)">Save</button>
        </div>

    `
})
//basic CSS knowledge about selector
//courses  -> <courses/>
//.courses -> <div class=courses/>
//#courses -> <div id=courses/>
export class CoursesComponent
{
    onSave($event)
    {
        $event.stopPropagation(); //this call stops an event from bubbling further up the tree
        console.log("Button was clicked", $event);
    }

    onDivClicked()
    {
        //Clicking the button will make the event bubble up the DOM tree
        console.log("Div was clicked")
    }
}
