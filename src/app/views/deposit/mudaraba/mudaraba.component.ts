import {Component} from '@angular/core';

@Component({
  selector: 'app-mudaraba',
  templateUrl: './mudaraba.component.html',
  styleUrls: ['./mudaraba.component.scss']
})
export class MudarabaComponent {
  banner = [
    {
      title: 'ВКЛАД «МУДАРАБА»',
      subtitle: 'ДЛЯ ПРАВИЛЬНЫХ РЕШЕНИЙ',
      image: './assets/images/pages/deposit%20info/banner-mudaraba.png',
      buttonText: 'Открыть вклад',
    }
  ]
  conditionData = [
    {
      image: './assets/images/pages/deposit%20info/d1.png',
      title: 'Надёжность',
      subtitle: 'защита вкладов'
    },
    {
      image: './assets/images/pages/deposit%20info/d2.png',
      title: 'от 1000 сомони',
      subtitle: 'сумма вклада'
    },
    {
      image: './assets/images/pages/deposit%20info/d3.png',
      title: 'От 3 до 36 месяцев',
      subtitle: 'Срок вклада'
    },
  ]
  productName: string = 'Мудараба';
  tariffTitle: string = 'Инвестиционные депозиты (Мудараба ограниченная и неограниченная)'
  tariffs = [
    {
      name: 'Валюта вклада',
      value: 'TJS   USD   EUR   RUB'
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
      value: 'От 3 до 36 месяцев'
    },
    {
      name: 'Норма прибыли',
      value: 'в зависимости от валюты, суммы и срока вклада'
    },
    {
      name: 'Дополнительные взносы',
      value: 'не допускаются'
    },
    {
      name: 'Частичные изъятия',
      value: 'не допускаются'
    },
    {
      name: 'Особые условия',
      value: 'не допускается досрочное изъятие вклада'
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
