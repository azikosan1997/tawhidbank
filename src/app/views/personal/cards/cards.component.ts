import {AfterViewInit, Component, ElementRef, TemplateRef, ViewChild} from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import {MatDialog} from "@angular/material/dialog";



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements AfterViewInit {
  @ViewChild('cardPopup') depositPopup!: TemplateRef<ElementRef>;
  tabsArray: string[] = ['Все карты', 'Дебетовые карты', 'Кредитные карты'];
  activatedTab: number = 0;
  value = '';
  mainForm: boolean = true;
  formName: string = 'Оформить заявку на получение карты';

  allCard = [
    {
      cardImage: './assets/images/pages/cards/national-card.png',
      cardTitle: 'Корти миллӣ',
      cardSubTitle: 'онлайн-заявка',
      percent:'10 000 сомони в день',
      percentText: 'максимальный баланс',
      age: 'от 18 до 63 лет',
      ageText: 'возраст',
      feature: '5 000,00 сомони',
      featureText: 'выдача наличных',
      link: '/personal/cards/national'
    },
    {
      cardImage: './assets/images/pages/cards/green-card.png',
      cardTitle: 'Кредитная карта «Cабз»',
      cardSubTitle: 'онлайн-заявка',
      percent:'0%',
      percentText: 'оплата покупок',
      age: 'от 20 до 63 лет',
      ageText: 'возраст',
      feature: 'Бесплатная',
      featureText: 'доставка карты',
      link: '/personal/cards/green'
    },
    {
      cardImage: './assets/images/pages/cards/nameless-card.png',
      cardTitle: 'Безымянная карта',
      cardSubTitle: 'онлайн-заявка',
      percent:'10 000 сомони в день',
      percentText: 'максимальный баланс',
      age: 'от 18 до 63 лет',
      ageText: 'возраст',
      feature: '5 000,00 сомони',
      featureText: 'выдача наличных',
      link: '/personal/cards/nameless'
    },
  ]
  craditCard = [
    {
      cardImage: './assets/images/pages/cards/green-card.png',
      cardTitle: 'Кредитная карта «Cабз»',
      cardSubTitle: 'онлайн-заявка',
      percent:'0%',
      percentText: 'оплата покупок',
      age: 'от 20 до 63 лет',
      ageText: 'возраст',
      feature: 'Бесплатная',
      featureText: 'доставка карты',
      link: '/personal/cards/green'
    },
  ]
  debitCard  = [
    {
      cardImage: './assets/images/pages/cards/national-card.png',
      cardTitle: 'Корти миллӣ',
      cardSubTitle: 'онлайн-заявка',
      percent:'10 000 сомони в день',
      percentText: 'максимальный баланс',
      age: 'от 18 до 63 лет',
      ageText: 'возраст',
      feature: '5 000,00 сомони',
      featureText: 'выдача наличных',
      link: '/personal/cards/national'
    },
    {
      cardImage: './assets/images/pages/cards/nameless-card.png',
      cardTitle: 'Безымянная карта',
      cardSubTitle: 'онлайн-заявка',
      percent:'10 000 сомони в день',
      percentText: 'максимальный баланс',
      age: 'от 18 до 63 лет',
      ageText: 'возраст',
      feature: '5 000,00 сомони',
      featureText: 'выдача наличных',
      link: '/personal/cards/nameless'
    },
  ]

  constructor(private el: ElementRef, public dialog: MatDialog) {
  }

  ngAfterViewInit() {
      setInterval(() =>{
          const tiltElement = this.el.nativeElement.querySelectorAll('.card-item-image');

          VanillaTilt.init(tiltElement, {
              max: 25,
              speed: 400,
              glare: false,
              'max-glare': 0.5,
          });
      }, 1000)
  }

  setTab(index: number) {
    this.activatedTab = index;
  }

  openPopup() {
    this.dialog.open(this.depositPopup,{
      width: '50vw',
      // disableClose: true,
      // hasBackdrop: false,
    });
  }

  closePopup() {
    this.dialog.closeAll();
  }
}
