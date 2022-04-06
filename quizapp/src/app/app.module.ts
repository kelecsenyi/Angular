import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular//material/card';
import { QuizComponent } from './quiz/quiz.component';
import { QuizQuestionComponent } from './quiz-question/quiz-question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuizQuestionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
