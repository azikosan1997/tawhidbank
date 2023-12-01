import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-p-questions',
  templateUrl: './p-questions.component.html',
  styleUrls: ['./p-questions.component.scss']
})
export class PQuestionsComponent {
  @Input() questions: any;

}
