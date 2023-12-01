import { Component } from '@angular/core';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.scss']
})
export class DepositsComponent {
  tabsArray: string[] = ['Условия', 'Коэффициент распределения прибыли'];
  activatedTab: number = 0;

  constructor() {
  }

  setTab(index: number) {
    this.activatedTab = index;
  }
}
