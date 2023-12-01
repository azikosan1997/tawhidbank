import { Component } from '@angular/core';

@Component({
  selector: 'app-atms',
  templateUrl: './atms.component.html',
  styleUrls: ['./atms.component.scss']
})
export class AtmsComponent {
  foods: any = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];

  options: google.maps.MapOptions = {
    center: {lat: 38.56189789218196, lng: 68.78516342737},
    zoom: 18,

    styles: [
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          { hue: '#686868' },
          { saturation: 0 },
          { lightness: 0 }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          { color: '#2c2c2c' }
        ]
      },
      {
        featureType: 'buildings',
        elementType: 'geometry',
        stylers: [
          { hue: '#686868' },
          { saturation: -100 }
        ]
      },
      {
        featureType: 'poi',
        stylers: [
          { visibility: 'off' }
        ]
      },
    ]
  };

  atms = [
    {
      address: 'г. Душанбе, ул С. Айни 4/1. (Головной офис)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'г. Душанбе Филиал в р-н. Фирдавсӣ ул А.Кахоров 75 (при филиале)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Согдийская обл. г.Гулистон пос. Зарнисор (при ЦБО)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Согдийская обл. г.Худжанд пос. К.Худжанди 165 (при филиале)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Хатлонская обл. р-н. Кабодиён 2 ул.И.Сомони 35 (при ЦБО)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Хатлонская обл. р-н. Шахритуз 7 ул.И.Сомони 29/8 (при ЦБО)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Сафина р-н.Рудкӣ, ул. И.Сомони, (рынок “Сафина”) (при ЦБО)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'г. Душанбе пр.Рудаки плаза 127 (при ЦБО)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Хатлонская обл. г.Бохтар ул. Норинов 6 (при филиале)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Хатлонская обл. р-н.Шаҳритуз ул. И.Сомони, 26 (при ЦБО)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Хатлонская обл. р-н. Пяндж ул. 50 летия д. 34/7 (при ЦБО)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Хатлонская обл. Дж.Балхи ул. Сино 24 (при ЦБО)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Хатлонская обл. р-н. Пяндж ул. Рудаки б/н (при ЦБО)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'г.Вахдат-45 (Централный рынок) (при ЦБО)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Согдийская обл. г.Хуҷанд ул. К.Хуҷанди 165 (при ЦБО)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Хатлонская обл. р-н. Дусти, джамоат Нури Вахш, (при ЦБО)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Хатлонская обл. р-н. Дж. Балхи, ул. Сино 19, (при ЦБО)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Хатлонская обл. р-н. Ёвон, ул. Мехвар 36а (здания глав. Почта)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Хатлонская обл. р-н. Хуросон, джамоат Айни, пос. Уяли (при ЦБО)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'г.Душанбе, ул. Айни 48, (Бизнес центр "Созидание")',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Согдийская область, р-н. Зафаробод б/н (при ЦБО)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'г. Душанбе, ул С.Айни 29 (ТЦ Ватан)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'г. Душанбе, пос. Гипрозем, ул. Борбад-139 (ТЦ Халиф)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'г. Душанбе, мкр. 103, (ТЦ Сияриён)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'г. Душанбе, ул.Фирдавси 8, (ТЦ Сиёма Молл)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'г. Турсунзода, ул. И.Сомони 8, (при ЦБО)',
      graphic: '24 часа',
      cash: 'Да'
    }
  ]

}
