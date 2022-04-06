import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { QuizQuestion } from '../quiz-question.model';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions: QuizQuestion[] =[];
  selectedAnswers:(string | undefined)[] =[];
  isGameEnded = false;
  result:number | undefined;

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuizQuestions().subscribe({
      next:resp=>{
        this.questions = resp;
        this.selectedAnswers = new Array(this.questions.length).fill(undefined);
      },
      error: err => console.log(err)
    })
  }

  questionAnswered(answer: string, index:number){
    this.selectedAnswers[index] = answer;
    this.isGameEnded = this.selectedAnswers.filter(a => a === undefined).length ===0;
    if (this.isGameEnded) {
      const points = this.selectedAnswers.filter((a,i) => this.questions[i].correct_answer === a).length;
      this.result = points/this.questions.length;
    }
  }
}
