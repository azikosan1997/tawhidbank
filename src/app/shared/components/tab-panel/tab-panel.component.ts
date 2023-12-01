import {Component, Input} from '@angular/core';

@Component({
  selector: 'tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent {
  @Input() tariffTitle!: string;
  @Input() tariffs!: any;
  @Input() documents!: any;

  tabsArray: string[] = ['Тарифы', 'Документы', 'Помощь'];
  activatedTab: number = 0;

  constructor() {
  }

  setTab(index: number) {
    this.activatedTab = index;
  }


}
