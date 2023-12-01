import { Component } from '@angular/core';

@Component({
  selector: 'app-vakala',
  templateUrl: './vakala.component.html',
  styleUrls: ['./vakala.component.scss']
})
export class VakalaComponent {
  banner = [
    {
      title: 'ВКЛАД «ВАКАЛА»',
      subtitle: 'Надежные исламские инвестиции',
      image: '/assets/images/pages/deposit%20info/deposit-vakala.png',
      buttonText: 'Открыть вклад'
    }
  ]
  conditionData = [
    {
      image: '/assets/images/pages/deposit%20info/d4.png',
      title: 'Дебетовая карта',
      subtitle: 'в подарок'
    },
    {
      image: '/assets/images/pages/deposit%20info/d2.png',
      title: 'от 1000 сомони',
      subtitle: 'сумма вклада'
    },
    {
      image: '/assets/images/pages/deposit%20info/d3.png',
      title: 'с 1 до 3 года',
      subtitle: 'Cрок вклада'
    },
  ]
  productName: string = 'Вакала';
  tariffTitle: string = 'инвеститционный депозит «Вакала»'
  tariffs = [
    {
      name: 'Валюта вклада',
      value: 'TJS   USD'
    },
    {
      name: 'Минимальная сумма вклада',
      value: 'в эквиваленте 100 долларов'
    },
    {
      name: 'Максимальная сумма вклада',
      value: 'не ограничена'
    },
    {
      name: 'Срок размещения',
      value: 'от 1 до 3 года'
    },
    {
      name: 'Норма прибыли',
      value: 'в зависимости от срока'
    },
    {
      name: 'Дополнительные взносы',
      value: 'не разрешается'
    },
    {
      name: 'Частичные изъятия',
      value: 'не разрешается'
    },
    {
      name: 'Особые условия',
      value: ' не допускается досрочное изъятие вклада'
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
