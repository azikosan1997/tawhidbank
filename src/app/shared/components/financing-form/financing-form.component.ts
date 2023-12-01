import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-financing-form',
  templateUrl: './financing-form.component.html',
  styleUrls: ['./financing-form.component.scss']
})
export class FinancingFormComponent {
  @Input() periodButton!: string[];
  buttonIndex: number = 0;

  value = '';
  constructor() {
  }
  buttonClick(index: number) {
    this.buttonIndex = index;
  }
}
