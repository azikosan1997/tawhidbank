import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-financing-calculator',
  templateUrl: './financing-calculator.component.html',
  styleUrls: ['./financing-calculator.component.scss']
})
export class FinancingCalculatorComponent {
  @Input() periodButton!: string[];
  @Input() loanTitle!: string;
  @Input() bid!: string;
  @Input() docPeriod!: string;

  buttonIndex: number = 0;

  constructor() {
  }

  buttonClick(index: number) {
    this.buttonIndex = index;
  }

}
