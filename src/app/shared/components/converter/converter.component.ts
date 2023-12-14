import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent {
  foods: any = [
    {value: 'TJS', viewValue: 'TJS'},
    {value: 'USD', viewValue: 'USD'},
    {value: 'RUB', viewValue: 'RUB'},
    {value: 'EUR', viewValue: 'EUR'},
  ];
  selectedFromCurrency: string = this.foods[0].value;
  selectedToCurrency: string = this.foods[1].value;
}
