import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'courses',
    //#email : template variable
    template: `
        {{ text  | summary:10 }}
    `
})
//basic CSS knowledge about selector
//courses  -> <courses/>
//.courses -> <div class=courses/>
//#courses -> <div id=courses/>
export class CoursesComponent
{
    text = `
    dslfkjbsdfflksjd sdf;oifdhgosdihg ds;oifhdsf. fdsihfsdlkfsd., lksdjifhdslkffdghshg
    `
}
