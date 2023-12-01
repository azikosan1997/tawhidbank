import { Component } from '@angular/core';

@Component({
  selector: 'app-national',
  templateUrl: './national.component.html',
  styleUrls: ['./national.component.scss']
})
export class NationalComponent {
  banner = [
    {
      title: 'КОРТИ МИЛЛИ',
      subtitle: 'ВАША НАЦИОНАЛЬНАЯ КАРТА',
      image: './assets/images/pages/cards%20info/national-card-banner.png',
      buttonText: 'Заказать карту',
      class: 'card'
    }
  ]
  conditionData = [
    {
      image: './assets/images/pages/cards%20info/cd1.png',
      title: '10 000 сомони в день',
      subtitle: 'максимальный баланс'
    },
    {
      image: './assets/images/pages/deposit%20info/d2.png',
      title: '5000 сомони',
      subtitle: 'выдача наличных'
    },
    {
      image: './assets/images/pages/deposit%20info/d3.png',
      title: 'от 18 лет',
      subtitle: 'возраст'
    },
  ]
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
    'Тарифы ОАО "Тавхидбанк" на оказание услуг по картам',
    'Тарифы ОАО "Тавхидбанк" на оказание услуг по картам',
    'Тарифы ОАО "Тавхидбанк" на оказание услуг по картам',
    'Тарифы ОАО "Тавхидбанк" на оказание услуг по картам',
  ]

  questions = [
    {
      question: 'Какой срок действия у карты «Корти милли»? ',
      answer: 'TJS   USD'
    },
    {
      question: 'Сколько стоит выпуск карты?',
      answer: 'в эквиваленте 100 долларов'
    },
    {
      question: 'Могу ли я использовать карту за границей?',
      answer: 'не ограничена'
    },
    {
      question: 'Как привязать карту в Tawhid Pay',
      answer: 'от 1 до 3 года'
    },
    {
      question: 'Что такое CVV2?',
      answer: 'от 1 до 3 года'
    },
  ]
  constructor() {
  }
}
