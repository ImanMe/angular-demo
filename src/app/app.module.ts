import { SignupFormComponent } from './signup-form/signup-form.component';
import { AuthorService } from './author.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { SummaryPipe } from './summary.pipe';
import { FavouriteComponent } from './favourite/favourite.component';
import { StringFormatComponent } from './string-format/string-format.component';
import { FormatPipe } from './format.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { IfDirectiveComponent } from './if-directive/if-directive.component';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';
import { InputFormatDirective } from './input-format.directive';
import { InputFormatComponent } from './input-format/input-format.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { CourseListComponent } from './course-list/course-list.component';
import { FormBuilderDemoComponent } from './form-builder-demo/form-builder-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorComponent,
    BindingComponent,
    PipeDemoComponent,
    SummaryPipe,
    FavouriteComponent,
    StringFormatComponent,
    SignupFormComponent,
    FormatPipe,
    PanelComponent,
    LikeComponent,
    IfDirectiveComponent,
    SwitchDirectiveComponent,
    ForDirectiveComponent,
    InputFormatDirective,
    InputFormatComponent,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    CourseListComponent,
    FormBuilderDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
