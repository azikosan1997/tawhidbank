import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tab-financing',
  templateUrl: './tab-financing.component.html',
  styleUrls: ['../tab-panel/tab-panel.component.scss']
})
export class TabFinancingComponent {
  @Input() tariffTitle!: string;
  @Input() tariffs!: any;
  @Input() documents!: any;

  tabsArray: string[] = ['Операции', 'Лимиты', 'Документы'];
  activatedTab: number = 0;

  constructor() {
  }

  setTab(index: number) {
    this.activatedTab = index;
  }
}
