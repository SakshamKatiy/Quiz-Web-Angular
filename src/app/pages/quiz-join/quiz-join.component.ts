import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-quiz-join',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quiz-join.component.html',
  styleUrl: './quiz-join.component.css'
})
export class QuizJoinComponent {
code!:string;
name!:string;
testService = inject(TestService);
join(){
  if(this.code && this.name ){
this.testService.getQuizByCode(this.code).subscribe((result)=>{
  console.log(result);
})
  }else{
     
  }
}
}
