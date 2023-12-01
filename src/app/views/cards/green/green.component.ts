import { Component } from '@angular/core';

@Component({
  selector: 'app-green',
  templateUrl: './green.component.html',
  styleUrls: ['./green.component.scss']
})
export class GreenComponent {
  banner = [
    {
      title: 'КРЕДИТНАЯ КАРТА “САБЗ”',
      subtitle: 'ДЕНЬГИ ВСЕГДА ПОД РУКОЙ',
      image: './assets/images/pages/cards%20info/green-card-banner.png',
      buttonText: 'Заказать карту',
      class: 'card'
    }
  ]
  conditionData = [
    {
      image: './assets/images/pages/cards%20info/cd1.png',
      title: '0% оплата',
      subtitle: 'покупок'
    },
    {
      image: './assets/images/pages/deposit%20info/d2.png',
      title: '6000 сомони',
      subtitle: 'максимальная сумма'
    },
    {
      image: './assets/images/pages/deposit%20info/d3.png',
      title: 'от 20 до 63 лет',
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
    'Тарифы ОАО "Тавхидбанк" на оказание услуг по депозитам',
    'Тарифы ОАО "Тавхидбанк" на оказание услуг по депозитам',
    'Тарифы ОАО "Тавхидбанк" на оказание услуг по депозитам',
    'Тарифы ОАО "Тавхидбанк" на оказание услуг по депозитам',
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
}
