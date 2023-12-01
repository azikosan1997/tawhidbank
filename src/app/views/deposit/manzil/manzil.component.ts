import { Component } from '@angular/core';

@Component({
  selector: 'app-manzil',
  templateUrl: './manzil.component.html',
  styleUrls: ['./manzil.component.scss']
})
export class ManzilComponent {
  banner = [
    {
      title: 'ВКЛАД «МАНЗИЛ»',
      subtitle: 'ПРИОБРЕТИ СВОЙ ДОМ',
      image: '/assets/images/pages/deposit%20info/banner-manzil.png',
      buttonText: 'Открыть вклад',
    }
  ]
  conditionData = [
    {
      image: '/assets/images/pages/deposit%20info/d4.png',
      title: 'Хиба (подарок от банка)',
      subtitle: 'На усмотрение Банка'
    },
    {
      image: '/assets/images/pages/deposit%20info/d2.png',
      title: 'Не ограниченая',
      subtitle: 'сумма вклада'
    },
    {
      image: '/assets/images/pages/deposit%20info/d3.png',
      title: 'Не ограниченый',
      subtitle: 'срок вклада'
    },
  ]
  productName: string = 'Манзил';
  tariffTitle: string = 'Накопительный депозит «Манзил»'
  tariffs = [
    {
      name: 'Валюта вклада',
      value: 'TJS   USD   EUR   RUB'
    },
    {
      name: 'Минимальная сумма вклада',
      value: 'не ограничена'
    },
    {
      name: 'Максимальная сумма вклада',
      value: 'не ограничена'
    },
    {
      name: 'Срок размещения',
      value: 'не ограничена'
    },
    {
      name: 'Норма прибыли',
      value: 'нет'
    },
    {
      name: 'Дополнительные взносы',
      value: 'Разрешается'
    },
    {
      name: 'Частичные изъятия',
      value: 'Разрешается'
    },
    {
      name: 'Особые условия',
      value: 'допускается досрочное изъятие вклада'
    },
  ]
  documents: string[] = [
    'Тарифы ОАО "Тавхидбанк" на оказание услуг по депозитам',
    'Тарифы ОАО "Тавхидбанк" на оказание услуг по депозитам',
    'Тарифы ОАО "Тавхидбанк" на оказание услуг по депозитам',
    'Тарифы ОАО "Тавхидбанк" на оказание услуг по депозитам',
  ]

  constructor() {
  }
}
