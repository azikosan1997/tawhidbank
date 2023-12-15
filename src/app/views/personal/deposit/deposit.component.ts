import {Component, ElementRef, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent {
  @ViewChild('depositPopup') depositPopup!: TemplateRef<ElementRef>;
  tabsArray: string[] = ['Сравнить вклады', 'Тарифы', 'Условия вклада'];
  activatedTab: number = 0;
  constructor(public dialog: MatDialog) {}

  setTab(index: number) {
    this.activatedTab = index;
  }

  openPopup() {
    this.dialog.open(this.depositPopup,{
      width: '60vw',
      // disableClose: true,
      // hasBackdrop: false,
    });
  }

  closePopup() {
    this.dialog.closeAll();
  }

  depositsInfo = [
    {
      image: './assets/images/pages/deposits/d1.png',
      imageAlt: 'Saving',
      depositName: '«Мудараба»',
      depositTextFirst: 'От 100$(долларов)',
      depositSubFirst: 'сумма вклада',
      depositTextSecond: 'От 3 до 36 месяцев',
      depositSubSecond: 'срок размещения',
      depositTextThird: 'От 20 до 80 ',
      depositSubThird: 'Коэффицент прибили',
      link: '/personal/deposit/mudaraba'
    },
    {
      image: './assets/images/pages/deposits/d2.png',
      imageAlt: 'House',
      depositName: 'Накопительный депозит «Манзил»',
      depositTextFirst: 'Не ограничено',
      depositSubFirst: 'сумма вклада',
      depositTextSecond: 'Не ограничено',
      depositSubSecond: 'срок размещения',
      depositTextThird: 'Хиба (подарок от банка)',
      depositSubThird: 'Коэффицент прибили',
      link: '/personal/deposit/manzil'
    },
    {
      image: './assets/images/pages/deposits/d3.png',
      imageAlt: 'Time',
      depositName: '«Вакала»',
      depositTextFirst: 'От 1000 сомонов',
      depositSubFirst: 'сумма вклада',
      depositTextSecond: 'От 12 до 36 месяцев',
      depositSubSecond: 'срок размещения',
      depositTextThird: 'От 13% до 15% ',
      depositSubThird: 'Коэффицент прибили',
      link: '/personal/deposit/vakala'
    },
  ]
}
