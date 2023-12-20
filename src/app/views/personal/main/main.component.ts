import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {BannerDataType} from "../../../../types/banner-data.type";
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit{


  ngOnInit() {
  }

  tabsArray: string[] = ['Конвертер валют', 'Калькулятор финансирования'];
  activatedTab: number = 0;

  converterArray: string[] = ['Продать', 'Купить'];
  activeConverter: number = 0;

  constructor() {
  }

  setTab(index: number) {
    this.activatedTab = index;
  }

  setConverter(index: number){
    this.activeConverter = index
  }


  mainBannerOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 40,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  serviceOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    margin: 30,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

  bottomCarousel: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  bannerData: BannerDataType[] = [
    {
      background: './assets/images/pages/main/banner-bg.png',
      title: "Кредитная карта \"Сабз\"",
      description: "Кредитная карта “Сабз” для новых возможностей"
    },
    {
      background: './assets/images/pages/main/banner-bg.png',
      title: "Кредитная карта \"Сабз\"",
      description: "Кредитная карта “Сабз” для новых возможностей"
    },
    {
      background: './assets/images/pages/main/banner-bg.png',
      title: "Кредитная карта \"Сабз\"",
      description: "Кредитная карта “Сабз” для новых возможностей"
    },
  ];

  bestProducts = [
    {
      productImage: './assets/images//pages/main/best-products/b1.png',
      imageAlt: 'House',
      productTitle: 'Мурабаха жильё',
      link: '/personal/auto-financing',
      productDescription: 'Финансирование предназначено для физических лиц с целью приобретения недвижимого имущества (жилой дом, квартиры в многоквартирном доме)',
    },
    {
      productImage: './assets/images//pages/main/best-products/b2.png',
      imageAlt: 'Car',
      productTitle: 'Мурабаха авто',
      link: '/personal/auto-financing',
      productDescription: 'Финансирование для физических лиц и индивидуальных предпринимателей для приобретения нового или поддержанного автомобиля.',
    },
    {
      productImage: './assets/images//pages/main/best-products/b3.png',
      imageAlt: 'Phone',
      productTitle: 'Мурабаха Business',
      link: '/business/financing',
      productDescription: 'Финансирование индивидуальных предпринимателей для развития  бизнеса.',
    },
    {
      productImage: './assets/images//pages/main/best-products/b4.png',
      imageAlt: 'Savings',
      productTitle: 'Депозит “Мудараба”',
      link: '/personal/auto-financing',
      productDescription: 'Мудараба - депозит, при котором клиент (партнер) передает свои денежные средства в Банк для доверительного управления. ',
    },
    {
      productImage: './assets/images//pages/main/best-products/b5.png',
      imageAlt: 'Pie chart',
      productTitle: 'Депозит “Вакала”',
      link: '/personal/auto-financing',
      productDescription: 'Сармоягузорӣ ба лоиҳаҳои мутобиқ ба принсипҳои молияи исломӣ',
    },
    {
      productImage: './assets/images//pages/main/best-products/b6.png',
      imageAlt: 'Card',
      productTitle: 'Кредитная карта “Сабз”',
      link: '/personal/auto-financing',
      productDescription: 'Исламские кредитные карты “Сабз” на основе концепции “Хасана” с лимитом 3000 сомони и 6000 сомони с изъятием единовременной комиссии от данных сумм.',
    },
  ]

  services = [
    {
      serviceIcon: './assets/images//pages/main/s1.png',
      iconAlt: 'Icon',
      serviceTitle: 'Платежи и переводы',
      link: '/personal/transfers',
      serviceDescription: ' Переводите деньги и оплачивайте услуги с карт  банка «Тавхидбанк» и других банков.'
    },
    {
      serviceIcon: './assets/images//pages/main/s2.png',
      iconAlt: 'Icon',
      serviceTitle: 'Скидки и акции',
      link: '/personal/transfers',
      serviceDescription: 'Воспользуйтесь выгодными предложениями и скидками для клиентов банка «Тавхидбанк» на развлечения, образование и другие товары и услуги.'
    },
    {
      serviceIcon: './assets/images//pages/main/s3.png',
      iconAlt: 'Icon',
      serviceTitle: 'Обмен валюты',
      link: '/personal/transfers',
      serviceDescription: 'Меняйте валюту в мобильном и интернет-банке.'
    }
  ]

  bottomBanner = [
    {
      image: './assets/images//pages/main/bbt1.png',
      title: 'Переводы без комиссии.',
      link: '/personal/transfers',
      description: 'Денежные переводы в Таджикистан 0%'
    },
    {
      image: './assets/images//pages/main/bbt1.png',
      title: 'Переводы без комиссии.',
      link: '/personal/transfers',
      description: 'Денежные переводы в Таджикистан 0%'
    },
    {
      image: './assets/images//pages/main/bbt1.png',
      title: 'Переводы без комиссии.',
      link: '/personal/transfers',
      description: 'Денежные переводы в Таджикистан 0%'
    },
  ]

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
