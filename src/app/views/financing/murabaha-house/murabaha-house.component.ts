import { Component } from '@angular/core';

@Component({
  selector: 'app-murabaha-house',
  templateUrl: './murabaha-house.component.html',
  styleUrls: ['./murabaha-house.component.scss']
})
export class MurabahaHouseComponent {
  banner = [
    {
      title: 'МУРАБАХА ЖАЛЬЁ',
      subtitle: 'ФИНАНСИРОВАНИЕ ДЛЯ ЧАСТНЫХ ЛИЦ',
      image: '/assets/images/pages/financing%20info/banner-house.png',
      buttonText: 'Оставить заявку',
    }
  ]
  conditionData = [
    {
      image: '/assets/images/pages/financing%20info/ft2.png',
      title: 'Быстрое одобрение',
      subtitle: 'финансирования'
    },
    {
      image: '/assets/images/pages/deposit%20info/d2.png',
      title: '500 000 сомони',
      subtitle: 'Сумма финансирования'
    },
    {
      image: '/assets/images/pages/deposit%20info/d3.png',
      title: 'До 60 месяцев',
      subtitle: 'Срок финансирования'
    },
  ]
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

  periodButton: string[] = ['1 год', '2 года', '3 года', '4 года', '5 лет',];
  loanTitle: string = 'Условия “Мурабаха жильё”';
  bid: string = '23%';
  docPeriod: string = 'Справка о доходности(мин за 1 год.)';

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
