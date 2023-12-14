import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-terminals',
  templateUrl: './terminals.component.html',
  styleUrls: ['./terminals.component.scss']
})
export class TerminalsComponent implements OnInit {

  tabsArray:string[] = ['Головной офис', 'г. Бохтар', 'р. Шахритуз', 'р. Рудаки', 'р. Фирдавси', 'г. Худжанд']
  activatedTab: number = 0;

  setTab(index: number) {
    this.activatedTab = index;
  }

  constructor() {
  }

  ngOnInit() {
  }

  regions: any = [
    {value: 'headquarter', viewValue: 'Головной офис'},
    {value: 'pizza-1', viewValue: 'г. Бохтар'},
    {value: 'tacos-2', viewValue: 'р. Шахритуз'},
    {value: 'tacos-2', viewValue: 'р. Рудаки'},
    {value: 'tacos-2', viewValue: 'р. Фирдавси'},
    {value: 'tacos-2', viewValue: 'г. Худжанд'},
  ];
  customMarkerIcon: any  = {
    url: './assets/images/pages/about/location/terminal.png',
    scaledSize: {
      width: 35,
      height: 40
    }
  };
  options: google.maps.MapOptions = {
    center: {lat: 38.56189789218196, lng: 68.78516342737},
    zoom: 15,

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

  bokhtarTerminals: any  = [
    {
      address: 'Филиал ОАО “Тавхидбанк”, г. Бохтар, ул. Норинов 6',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.834672724724285,
      lng: 68.7768289
    },
    {
      address: 'ЦБО Дусти дж.Нури Вахш, Джангалпарвар',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.533220528806446,
      lng: 68.4747486264298
    },
    {
      address: 'ЦБО Дж.Балхи 2, ул. Сино 19',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.834576185947505,
      lng: 68.77680629223237
    },
    {
      address: 'ЦБО Уяли 1, пос. Уяли',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.265942940978356,
      lng: 68.14375347810767
    },
    {
      address: 'ЦБО А. Джоми 1 ул. Сомониён',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.947684777890096,
      lng: 68.79507545163665
    },
    {
      address: 'ЦБО Вахш ул. И.Сомони 39',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.533220528806446,
      lng: 68.4747486264298
    },
    {
      address: 'ЦБО Панч ул. 50 солагии Кушунхои сархади',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.231909966236145,
      lng: 69.09521797219324
    },
    {
      address: 'ЦБО Джайхун, ул. А.Беруни 1',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.35166676239271,
      lng: 68.67855543992928
    },
    {
      address: 'ЦБО Пандж - 3',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.23052618698867,
      lng: 69.10134162341434
    },
    {
      address: 'ЦБО Дж.Балхи-1 р.Джалолидини Балхи ул. Ленин',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.834576185947505,
      lng: 68.77680629223237
    },
    {
      address: 'ЦБО Бохтар 3 ул. Мирзокодирова, магазин №2',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'ЦБО Балхи -3 р.Дж.Балхи ул. Сино',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.834576185947505,
      lng: 68.77680629223237
    },
    {
      address: 'ЦБО Балхи - 4, р.Дж. Балхи, ул. Сино №24',
      graphic: '24 часа',
      cash: 'Да',
      lat: 38.419035734912605,
      lng: 68.9510612406925
    },
    {
      address: 'ЦБО Балхи - 5, р.Дж. Балхи, ул. Сино',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'ЦБО Джоми - 3, р.А.Джоми, ул. Сомониён',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.947684777890096,
      lng: 68.79507545163665
    },
    {
      address: 'ЦБО Уяли - 2, р.Хуросон, городок Уяли',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.265942940978356,
      lng: 68.14375347810767
    },
    {
      address: 'ЦБО Пандж - 2 ул. 50 солагии Кушунхои сархади № 34/7',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.23202660984037,
      lng: 69.09504978402842
    },
    {
      address: 'ЦБО Пандж 4 ул. 50 Кушунхои сархади',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.23052618698867,
      lng: 69.10134162341434
    },
    {
      address: 'ЦБО Дусти-2 городок Гараути ул. Джавонон № 10',
      graphic: '24 часа',
      cash: 'Да'
    }
  ]
  shahrituzTerminals: any[] = [
    {
      address: 'ЦБО Шахритуз-1, р.Шахритуз, ул. И.Сомони 14',
      graphic: '24 часа',
      cash: 'Да',
      lat:37.266736936748046,
      lng: 68.14375081776683
    },
    {
      address: 'ЦБО р.Шахритуз 3, ул. И.Сомони 10',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.264941,
      lng: 68.142894
    },
    {
      address: 'ЦБО Кубодиён - 2, ул. И.Сомони 35',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'ЦБО р.Шахритуз 4, ул. И.Сомони 1',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.27091352113215,
      lng: 68.14780437476817
    },
    {
      address: 'ЦБО Шахритус-2, р.Шахритуз, ул.И.Сомони 6',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.265879793495756,
      lng: 68.14301297246037
    },
    {
      address: 'ЦБО Кубодиён- 3, ул. И.Сомони 186',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Филиал в р.Шахритуз',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.27091352113215,
      lng: 68.14780437476817
    },
    {
      address: 'ЦБО Кубодиён- 1 ул. Титов №2',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.40440211688423,
      lng: 68.18330518555403
    },
    {
      address: 'ЦБО Шахритуз-5, р.Шахритуз, И.Сомони 49/6',
      graphic: '24 часа',
      cash: 'Да',
      lat: 37.270929095723915,
      lng: 68.14781389850828
    },
    {
      address: 'ЦБО Шахритуз-6, р.Шахритуз, И.Сомони 39А',
      graphic: '24 часа',
      cash: 'Да',

    },
    {
      address: 'ЦБО Шахритуз-7, р.Шахритуз, И.Сомони 39/8',
      graphic: '24 часа',
      cash: 'Да'
    },

  ]
  rudakiTerminals: any[] = [
    {
      address: 'Филиал ОАО “Тавхидбанк”, в р.Рудаки',
      graphic: '24 часа',
      cash: 'Да',
      lat: 38.44217571403086,
      lng: 68.77431617020443
    },
    {
      address: 'ЦБО Вахдат–45, г.Вахдат (внутри центрального рынка)',
      graphic: '24 часа',
      cash: 'Да',
      lat: 38.51644193923049,
      lng: 68.72903455531606
    },
    {
      address: 'ЦБО Ёвон-4, р.Ёвон',
      graphic: '24 часа',
      cash: 'Да',
      lat: 38.31789310128809,
      lng: 69.03685148502663
    },
    {
      address: 'ЦБО Ёвон-2, р.Ёвон, Хаёти Нав, А.Навои',
      graphic: '24 часа',
      cash: 'Да',
      lat: 38.15845610998668,
      lng: 68.86280611455751
    },
    {
      address: 'ЦБО Борбад – 15, ул.Душанбе, р.Сино, ул. Борбад-15 (Рынок Дехкон)',
      graphic: '24 часа',
      cash: 'Да',
      lat: 38.514257365658665,
      lng: 68.74298765044999
    },
    {
      address: 'ЦБО Элок р.Рудаки, дж/д. Турсунзода, Элок, магазин 39',
      graphic: '24 часа',
      cash: 'Да',
      lat: 38.48864331548067,
      lng: 68.78417191555036
    },
    {
      address: 'ЦБО Сомони - 61, н.Рудаки, ул. И.Сомони - 61',
      graphic: '24 часа',
      cash: 'Да',
      lat: 38.44081604051886,
      lng:  68.77410178489158
    },
    {
      address: 'ЦБО Ёвон-1, р.Ёвон, ул. Комсомол, Базарная',
      graphic: '24 часа',
      cash: 'Да',
      lat: 38.31789310128809,
      lng: 69.03685148502663
    },
    {
      address: 'ЦБО Ёвон-3, р.Ёвон, ул. Норинова, Тамошотеппа',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'ЦБО Гандж, р.Рудаки, ул. Сомониён (Рынок Гандж)',
      graphic: '24 часа',
      cash: 'Да',
      lat: 38.44061611917932,
      lng: 68.7722295024488
    }
  ]
  firdavsiTerminals: any[] = [
    {
      address: 'ЦБО Аеропорт, р. Шохмансур, ул. Мастонгулов 32/2',
      graphic: '24 часа',
      cash: 'Да',
      lat: 38.55774884481649,
      lng: 68.80793773813296
    },
    {
      address: 'ЦБО Турсунзода 1, ул. Б.Гафуров 3А',
      graphic: '24 часа',
      cash: 'Да',
      lat: 38.51012676398436,
      lng: 68.23386087525601
    },
    {
      address: 'ЦБО Турсунзода 2, ул.Б.Гафуров 5',
      graphic: '24 часа',
      cash: 'Да',
      lat: 38.51015026394243,
      lng: 68.23403628253031
    },
    {
      address: 'ЦБО Турсунзода 3, ул.П.Тоджиев',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'ЦБО Карабоев 110 ул.Душанбе, р.Фирдавси',
      graphic: '24 часа',
      cash: 'Да',
      lat: 38.513386,
      lng: 68.233606
    },
    {
      address: 'ЦБО Рудаки Плаза',
      graphic: '24 часа',
      cash: 'Да',
      lat: 38.59620676769875,
      lng: 68.78644512922176
    },
    {
      address: 'Филиал в Душанбе, р.Фирдавси, ул. Кахоров 75',
      graphic: '24 часа',
      cash: 'Да',
      lat: 38.551445493177454,
      lng: 68.7724729233923
    },
  ]
  khujandTerminals: any[] = [
    {
      address: 'ЦБО р. Ашт, город Дусти',
      graphic: '24 часа',
      cash: 'Да',
      lat: 40.7454251416812,
      lng: 70.6532405865697
    },
    {
      address: 'ЦБО-Зарнисор',
      graphic: '24 часа',
      cash: 'Да',
      lat: 40.648154585648705,
      lng: 69.59697737186997
    },
    {
      address: 'ЦБО Зафаробод, р.Зафаробод, ул. Уротеппа б/р',
      graphic: '24 часа',
      cash: 'Да',
      lat: 40.18372038994417,
      lng: 68.85646230817353
    },
    {
      address: 'ЦБО Истаравшан',
      graphic: '24 часа',
      cash: 'Да',
      lat: 39.90268781999013,
      lng: 69.00094544013601
    },
    {
      address: 'ЦБО Дж.Расулов',
      graphic: '24 часа',
      cash: 'Да',
      lat: 40.15844329527259,
      lng: 69.52216163672212
    },
    {
      address: 'ЦБО ул.Худжанд, микр 34, ул. 30-солагии Галаба',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'ЦБО р.Ашт, городок Шайидор.ул. И.Сомони № 61/9',
      graphic: '24 часа',
      cash: 'Да',
      lat: 40.66432771565648,
      lng: 70.35635373698958
    },
    {
      address: 'ЦБО р.Спитамен, Нов, ул. Ленина',
      graphic: '24 часа',
      cash: 'Да',
      lat: 40.51727262860877,
      lng: 69.32952989304242
    },
    {
      address: 'ЦБО Панджакент, Проспект Рудаки 130',
      graphic: '24 часа',
      cash: 'Да',
      lat:  39.49702589981844,
      lng: 67.61126435717992
    },
    {
      address: 'ЦБО Канибадам, г.Конибадам, ул. И.Сомони 168',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'ЦБО Зафаробод-2, р.Зафаробод, ул. И.Сомони',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'ЦБО Гулакандоз',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'ЦБО Масчох',
      graphic: '24 часа',
      cash: 'Да',
      lat: 40.517280789649625,
      lng: 69.32954516611875
    },
    {
      address: 'Филиал ОАО "Тавхидбанк" в г.Худжанд',
      graphic: '24 часа',
      cash: 'Да',
      lat: 40.28156761785792,
      lng: 69.62303701427719
    },
  ]
}
