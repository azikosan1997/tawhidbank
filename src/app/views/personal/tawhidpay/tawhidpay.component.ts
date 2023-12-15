import { Component } from '@angular/core';

@Component({
  selector: 'app-tawhidpay',
  templateUrl: './tawhidpay.component.html',
  styleUrls: ['./tawhidpay.component.scss']
})
export class TawhidPayComponent {
  constructor() {
  }
  banner = [
    {
      title: 'TawhidPay',
      subtitle: 'Мобильное приложение',
      image: './assets/images/pages/tawhid%20pay/banner.png',
      buttonText: 'Скачать',
      link: 'https://play.google.com/store/apps/details?id=tj.itservice.tawhidbank&hl=ru',
      description: 'Банк, не выходя из дома в любой точке мира 24/7',
      class: 'card'
    }
  ]
}
