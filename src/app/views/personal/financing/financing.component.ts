import { Component } from '@angular/core';


@Component({
  selector: 'app-financing',
  templateUrl: './financing.component.html',
  styleUrls: ['./financing.component.scss'],
})

export class FinancingComponent {
  constructor() {
  }
  financingInfo = [
    {
      image: './assets/images/pages/financing/f1.png',
      financingSubText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      imageAlt: 'Cart',
      financingName: 'Потрибительская мурабаха',
      financingTextFirst: 'От 20 до 63',
      financingSubFirst: 'возраст',
      financingTextSecond: 'не более 100 000 сомони',
      financingSubSecond: 'сумма финансирования',
      financingTextThird: '18 месяцев',
      financingSubThird: 'срок финансирования',
      financingLink: 'Подробнее о мурабаха',
      financingButton: 'Оставть заявку',
      link: '/personal/financing/murabaha-consumption'
    },
    {
      image: './assets/images/pages/financing/f2.png',
      financingSubText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      imageAlt: 'House',
      financingName: 'Мурабаха жильё',
      financingTextFirst: 'От 18 до 63',
      financingSubFirst: 'возраст',
      financingTextSecond: 'от 1 000$ до 100 000$',
      financingSubSecond: 'сумма финансирования',
      financingTextThird: 'от 5 лет до 11 лет',
      financingSubThird: 'срок финансирования',
      financingLink: 'Подробнее о мурабаха',
      financingButton: 'Оставть заявку',
      link: '/personal/financing/murabaha-house'
    },
    {
      image: './assets/images/pages/financing/f3.png',
      financingSubText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      imageAlt: 'Time',
      financingName: 'Мурабаха Business',
      financingTextFirst: 'От 20 до 63',
      financingSubFirst: 'возраст',
      financingTextSecond: 'не более 3 000 000 сомони',
      financingSubSecond: 'сумма финансирования',
      financingTextThird: '36 месяцев',
      financingSubThird: 'срок финансирования',
      financingLink: 'Подробнее о мурабаха',
      financingButton: 'Оставть заявку',
      link: '/personal/financing/murabaha-business'
    },
    {
      image: './assets/images/pages/financing/f4.png',
      financingSubText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed',
      imageAlt: 'Time',
      financingName: 'Мурабаха авто',
      financingTextFirst: 'От 20 до 63',
      financingSubFirst: 'возраст',
      financingTextSecond: 'не более 1 000 000 сомони',
      financingSubSecond: 'сумма финансирования',
      financingTextThird: 'от 24 до 36 месяцев',
      financingSubThird: 'срок финансирования',
      financingLink: 'Подробнее о мурабаха',
      financingButton: 'Оставть заявку',
      link: '/personal/auto-financing'
    },
    {
      image: './assets/images/pages/financing/f5.png',
      financingSubText: 'Рассчитайте услове по финансированию',
      imageAlt: 'Time',
      financingName: 'Калькулятор финансирования',
      financingTextFirst: '',
      financingSubFirst: '',
      financingTextSecond: '',
      financingSubSecond: '',
      financingTextThird: '',
      financingSubThird: '',
      financingLink: '',
      financingButton: 'Рассчитать',
      link: '/personal/auto-financing'
    },
  ]
}
