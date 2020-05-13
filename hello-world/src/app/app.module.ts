import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite-star/favorite.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CoursesService} from "./courses.service";
import { TitleCaseComponent } from './title-case/title-case.component';
import { CustomTitleCasePipe } from "./custom-titlecase.pipe";
import {TitleCasePipe} from "@angular/common";
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ElementTitleDirective } from './element-title.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CreateCourseFormComponent } from './create-course-form/create-course-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SignupFormComponent,
    CourseComponent,
    FavoriteComponent,
    TitleCaseComponent,
    CustomTitleCasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ElementTitleDirective,
    ContactFormComponent,
    CreateCourseFormComponent,
    NewCourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
