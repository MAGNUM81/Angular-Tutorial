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
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ElementTitleDirective } from './element-title.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CreateCourseFormComponent } from './create-course-form/create-course-form.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClientModule} from '@angular/common/http';

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
    NewCourseFormComponent,
    ChangePasswordFormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
