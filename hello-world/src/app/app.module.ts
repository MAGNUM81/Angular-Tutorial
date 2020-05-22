import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite-star/favorite.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TitleCaseComponent } from './title-case/title-case.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CreateCourseFormComponent } from './create-course-form/create-course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { PostsComponent } from './posts/posts.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { PostService } from './services/post.service';
import {CustomTitleCasePipe} from './custom-titlecase.pipe';
import {InputFormatDirective} from './input-format.directive';
import {ElementTitleDirective} from './element-title.directive';
import {CoursesService} from './courses.service';

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
  providers: [
    PostService,
    CoursesService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
