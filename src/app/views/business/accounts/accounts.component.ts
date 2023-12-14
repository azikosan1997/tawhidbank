import {Component} from '@angular/core';

@Component({
  selector: 'app-deposits',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {
  tabsArray: string[] = ['Расчётный счёт', 'Переводы', 'Кассовое обслуживание', 'Другое'];
  activatedTab: number = 0;
  requestType: string = 'НАЧНИТЕ ВМЕСТЕ С НАМИ!'

  constructor() {
  }

  setTab(index: number) {
    this.activatedTab = index;
  }

}
