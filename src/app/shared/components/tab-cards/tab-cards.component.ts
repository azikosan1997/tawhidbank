import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-tab-cards',
  templateUrl: './tab-cards.component.html',
  styleUrls: ['../tab-panel/tab-panel.component.scss']
})
export class TabCardsComponent {
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
