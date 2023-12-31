import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent implements OnInit {
  tabsArray: string[] = ['Душанбе', 'РРП', 'Согд', 'Хатлон'];
  activatedTab: number = 0;

  constructor() {
  }

  ngOnInit() {
  }

  setTab(index: number) {
    this.activatedTab = index;
  }
  customMarkerIcon: any  = {
    url: '/assets/images/pages/about/location/branch.png',
    scaledSize: {
      width: 35,
      height: 40
    }
  };

  branchOptions: google.maps.MapOptions = {
    styles: [
      {
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          {hue: '#686868'},
          {saturation: 0},
          {lightness: 0}
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          {color: '#2c2c2c'}
        ]
      },
      {
        featureType: 'buildings',
        elementType: 'geometry',
        stylers: [
          {hue: '#686868'},
          {saturation: -100},
          {lightness: 0}

        ]
      },
      {
        featureType: 'poi',
        stylers: [
          {visibility: 'off'}
        ]
      },
    ]
  };

  dushanbe = [
    {
      title: 'Головной офис',
      address: 'г. Душанбе, р-н. Шохмансур, ул. Айни 4/1',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Филиал',
      address: 'г. Душанбе, р-н. Фирдавси ул. А.Кахоров 75',
      lat: 38.551445493177454,
      lng: 68.7724729233923
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'г. Душанбе, р-н. И. Сомони, пр. Рудаки 127',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'г. Душанбе р-н.Шохмансур, ул. М. Мастонгулова 32/2, (Терминали №1 международный Аэропорт)',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
  ]

  drs = [
    {
      title: 'Филиал',
      address: 'р-н. Рудаки, пос. Сомониён, ул. Пушкина 42 А',
      lat: 38.44217571403086,
      lng: 68.77431617020443
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Рудаки, пос. Сомониён, ул. И.Сомони 61',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Рудаки, ул. И. Сомони рынок «Сафина»',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Рудаки, ул. И. Сомони рынок «Гандж»',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Рудаки, джамоат М.Турсунзода, кишлак Элок магазин 39',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'г. Вахдат, ул. Фирдавси 45',
      lat: 38.51644382903771,
      lng: 68.72905652489776
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'г. Турсунзода, ул. Б.Гафуров б/н (рынок “Баракат”)',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'г. Турсунзода, ул. Б.Гафуров (станция ЖД)',
      lat: 38.51015026394243,
      lng: 68.23403628253031
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'г. Турсунзода, ул. П.Тоджиев',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'г. Турсунзода, ул. И.Сомони, ТЦ "Детский мир"',
      lat: 38.510628575022515,
      lng: 68.23391763996091
    },
  ]

  sogd = [
    {
      title: 'Филиал',
      address: 'р-н. Зафаробод, ул. Уротеппа д. б/н',
      lat: 40.183887606284834,
      lng: 68.85640966400717
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'пос. Зарнисор, ул. Сомониён 22',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Ашт пос. Шайдон, ул. И.Сомони д. б/н',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'г. Конибодом, ул. И.Сомони 187',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Ашт, джамоат Ашт, пос. Дусти',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'г. Вахдат, ул. Фирдавси 45',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. дж.Расулов, пос. Мехробод, рынок “Ашроф”',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'г. Пенджикент, ул. Рудаки 130',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н.Спитамен, пос. Нов, ул. Ленин, д. б/н',
      lat: 40.152457253711134,
      lng: 69.37475854536234
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. дж. Расулов, джамоат Гулакандоз, ул. Д.Самадов, д. б/н',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Масчох, пос. Бустон, ул. И.Сомони д. б/н',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'г. Истаравшан, пр. И.Сомони, д. б/н',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
  ]

  khatlon = [
    {
      title: 'Филиал',
      address: 'г. Бохтар, ул. Норинов 6',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Дж. Балхи, пос. Исаев, ул. Сино 19 (ТЦ “Бахор”)',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Ёвон, ул. Комсомол (ТЦ “Саъдулло”)',
      lat: 38.31789310128809,
      lng: 69.03685148502663
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Шахритуз, пос. Шахритуз ул. И. Сомони 6',
      lat: 37.265879793495756,
      lng: 68.14301297246037
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Шахритуз, джамоат пос. Шахритуз ул. И. Сомони 14',
      lat: 37.266736936748046,
      lng: 68.14375081776683
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Шахритуз, ул. И. Сомони 1 (рынок ООО “Ином”)',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. А.Джоми, ул. Сомониён 14',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Хуросон, пос. Уяли, джамоат Айни',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Кубодиён, ул. Титов 2',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Джайхун, ул. А. Беруни 1',
      lat: 37.35166676239271,
      lng: 68.67855543992928
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Шахритуз, ул. И. Сомони 10',
      lat: 37.26482089792056,
      lng: 68.14288227356565
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Дусти, джамоат Нури Вахш, село Джангалпарвар',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Ёвон, джамоат пос. хаёти Нав, село А.Навои',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Дж. Балхи, ул. Сино 24',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Пандж, джамоат пос. Пандж, ул. 50 солагии кушунхои сархади 32/2',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Пандж, ул. 50 солагии кушунхои сархади 34/7',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Пандж, джамоат пос. Пандж, ул. Рудаки',
      lat: 37.231909966236145,
      lng: 69.09521797219324
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Шахритуз, ул. И. Сомони 26',
      lat: 37.26609775559223,
      lng: 68.1435512923072
    },
    {
      title: 'Центр банковского обслуживания',
      address: 'р-н. Восеъ, пос. Хулбук, ул. Султони Кабир 82',
      lat: 38.56189522986055,
      lng: 68.78508842680635
    },
  ]
}
