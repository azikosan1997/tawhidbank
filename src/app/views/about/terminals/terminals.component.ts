import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-terminals',
  templateUrl: './terminals.component.html',
  styleUrls: ['./terminals.component.scss']
})
export class TerminalsComponent implements OnInit {

  tabsArray:string[] = ['Головной офис', 'ш. Бохтар', 'н. Шахритуз', 'н. Рудаки', 'н. Фирдавси', 'ш. Худжанд']
  activatedTab: number = 0;

  setTab(index: number) {
    this.activatedTab = index;
  }
  headquarter: boolean = true;
  bohktar: boolean = false;
  shahrituz: boolean = false;
  rudaki: boolean = false;
  firdavsi: boolean = false;
  khujand: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  showListOne() {
    this.bohktar = true;
    this.headquarter = false;
    this.shahrituz = false;
    this.rudaki = false;
    this.firdavsi = false;
    this.khujand = false;
  }
  showListTwo() {
    this.bohktar = false;
    this.headquarter = false;
    this.shahrituz = true;
    this.rudaki = false;
    this.firdavsi = false;
    this.khujand = false;
  }
  showListThree() {
    this.bohktar = false;
    this.headquarter = false;
    this.shahrituz = false;
    this.rudaki = true;
    this.firdavsi = false;
    this.khujand = false;
  }
  showListFour() {
    this.bohktar = false;
    this.headquarter = false;
    this.shahrituz = false;
    this.rudaki = false;
    this.firdavsi = true;
    this.khujand = false;
  }
  showListFive() {
    this.bohktar = false;
    this.headquarter = false;
    this.shahrituz = false;
    this.rudaki = false;
    this.firdavsi = false;
    this.khujand = true;
  }


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

  bokhtarTerminals = [
    {
      address: 'Филиал ҶСК “Тавҳидбонк” дар ш.Бохтар кучаи Норинов',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Дусти дж.Нури Вахш ҷамоати Ҷангалпарвар',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Ҷ.Балхи 2   кучаи Сино 19',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Уяли 1 шахраки Уяли',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ А.Чоми 1 кучаи Сомониён',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Вахш кучаи И.Сомони 39',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Панч к. 50 солагии Кушунхои сархади',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Чайхун кучаи А.Беруни 1',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Панҷ - 3',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Ҷ.Балхи-1 н.Ҷалолидини Балхи кучаи Ленин',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Бохтар 3 кучаи Мирзокодирова дох. магозаи №2',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Балхи -3 н.Ҷ.Балхи кучаи Сино',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Балхи - 4 н.Ҷ.Балхи кучаи Сино №24',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Балхи - 5 н.Ҷ.Балхи кучаи Сино',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Ҷоми - 3 н.А.Ҷоми кучаи Сомониён',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХб Уяли - 2 н.Хуросон деҳаи Уяли',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Панҷ - 2 кучаи 50 солагии қушунҳои сарҳади № 34/7',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Панҷ 4 кучаи 50 қушунҳои сарҳади',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Дусти-2 шаҳраки Гараути кучаи. Чавонон № 10',
      graphic: '24 часа',
      cash: 'Да'
    }
  ]
  shahrituzTerminals = [
    {
      address: 'МХБ Шаҳритуз-1 н.Шаҳритуз кучаи И.Сомони 14',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ н.Шахритуз 3 кучаи И.Сомони 10',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Қубодиён -2 кучаи И.Сомони 35',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ н.Шахритуз 4 кучаи И.Сомони 1',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Шаҳритус-2 н.Шахритуз, к.И.Сомонӣ 6',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Қубодиён- 3 кучаи И.Сомони 186, а',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Филиал дар н.Шахритуз',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Қубодиён- 1 кучаи титов №2',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Шаҳритуз-5 н.Шаҳритуз деҳоти И.Сомони 49/6',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Шаҳритуз-6 н.Шаҳритух деҳоти И.Сомони 39А',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Шахритуз-7 н.Шаҳритуз деҳоти И.Сомони 39/8',
      graphic: '24 часа',
      cash: 'Да'
    },

  ]
  rudakiTerminals = [
    {
      address: 'Филиал ҶСК “Тавҳидбонк” дар н.Рудаки',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Ваҳдат–45 ш.Ваҳдат (дохили бозори марказӣ)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Ёвон-4 н.Ёвон',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Ёвон-2 н.Ёвон ҷ/ш. Ҳаёти Нав, деҳаи А.Навоӣ',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Борбад –15 ш.Душанбе, н.Сино, куч. Борбад-15 (Бозори деҳқон)',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Элок н.Рудакӣ, ҷ/д. Турсунзода, деҳ. Элок, мағозаи 39',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Сомони -61 Н.Рудакӣ, куч. И.Сомонӣ-61',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Ёвон-1 н.Ёвон, кучаи Комсомол, Базарная',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Ёвон-3 н.Ёвон, Ҷ.Норин деҳ. Тамошотеппа',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Ганҷ н.Рудакӣ, кучаи Сомониён (Бозори Ганҷ)',
      graphic: '24 часа',
      cash: 'Да'
    }
  ]
  firdavsiTerminals = [
    {
      address: 'МХБ Фурудгоҳ н Шоҳмансур кучаи м.Мастонгулов 32/2',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Турсунзода 1 к. Б.Ғафуров 3А',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Турсунзода 2 к.Б.Ғафуров 5',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Нисормуҳамад 10/17',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Турсунзода 3 к.П.Тоҷиев',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Қарабоев 110 ш.Душанбе, н.Фирдавсӣ',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Рудаки Плаза',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Филиал дар ш.Душанбе н.Фирдавси кучаи Қаҳоров 75',
      graphic: '24 часа',
      cash: 'Да'
    },
  ]
  khujandTerminals = [
    {
      address: 'МХБ н. Ашт, ж/д Ашт, город Дусти',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ-Зарнисор',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Зафаробод н.Зафаробод, кучаи Уротеппа б/р',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Истаравшан',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Ҷ.Расулов',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Махаллаи 34 ш.Хучанд, махаллаи 34, кӯчаи 30-солагии Ғалаба',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ н.Ашт, шахраки Шайидон.кучаи И.Сомони № 61/9',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ н.Спитамен ш.Нов. кучаи Ленина б/р',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Панҷакент Проспект Рудаки 130',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Канибадам ш.Конибодом кучаи И.Сомони 168',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Зафаробод-2 н.Зафаробод кучаи И.Сомони б/н',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ Ғулакандоз',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'МХБ МХБ Мастшоҳ',
      graphic: '24 часа',
      cash: 'Да'
    },
    {
      address: 'Филиал ҶСК Тавҳидбонк дар ш.Хуҷанд',
      graphic: '24 часа',
      cash: 'Да'
    },
  ]
}
