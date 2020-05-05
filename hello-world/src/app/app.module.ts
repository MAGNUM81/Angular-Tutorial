import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { FavoriteStarComponent } from './favorite-star/favorite-star.component';
import {FormsModule} from "@angular/forms";
import {CoursesService} from "./courses.service";
import { TitleCaseComponent } from './title-case/title-case.component';
import { CustomTitleCasePipe } from "./custom-titlecase.pipe";
import {TitleCasePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    FavoriteStarComponent,
    TitleCaseComponent,
    CustomTitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
