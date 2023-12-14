import { Component } from '@angular/core';

@Component({
  selector: 'app-financing',
  templateUrl: './financing.component.html',
  styleUrls: ['./financing.component.scss']
})
export class FinancingComponent {
  requestType: string = 'Корпоративная Мурабаха'
  conditionData = [
    {
      image: './assets/images/pages/business%20financing/r1.png',
      title: 'до 3 000 000 сомони',
      subtitle: 'желаемая сумма кредита'
    },
    {
      image: './assets/images/pages/business%20financing/r2.png',
      title: 'От 0 до 90',
      subtitle: 'первоначальный взнос'
    },
    {
      image: './assets/images/pages/business%20financing/r3.png',
      title: 'От 3 до 36 месяцев',
      subtitle: 'сроки погашения кредита'
    },
  ]
}
