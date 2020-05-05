import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite-star/favorite.component';
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
    FavoriteComponent,
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
