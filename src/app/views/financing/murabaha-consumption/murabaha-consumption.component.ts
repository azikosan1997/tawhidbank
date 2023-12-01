import { Component } from '@angular/core';

@Component({
  selector: 'app-murabaha-consumption',
  templateUrl: './murabaha-consumption.component.html',
  styleUrls: ['./murabaha-consumption.component.scss']
})
export class MurabahaConsumptionComponent {
  banner = [
    {
      title: 'Потребительская мурабаха',
      subtitle: 'ФИНАНСИРОВАНИЕ ДЛЯ ЧАСТНЫХ ЛИЦ',
      image: './assets/images/pages/financing%20info/banner.png',
      buttonText: 'Оставить заявку',
    }
  ]
  conditionData = [
    {
      image: './assets/images/pages/financing%20info/ft2.png',
      title: 'За 1 минуту',
      subtitle: 'Решение'
    },
    {
      image: './assets/images/pages/deposit%20info/d2.png',
      title: '100 000 сомони',
      subtitle: 'Сумма финансирования'
    },
    {
      image: './assets/images/pages/deposit%20info/d3.png',
      title: 'До 18 месяцев',
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

  periodButton: string[] = ['3 мес.', '6 мес.', '9 мес.', '12 мес.', '18 мес.'];
  loanTitle: string = 'Условия “Потрибительской марабахи”';
  bid: string = '24%';
  docPeriod: string = 'Справка о доходности(мин за 6 мес.)';

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
