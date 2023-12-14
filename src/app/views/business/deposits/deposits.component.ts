import { Component } from '@angular/core';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.scss']
})
export class DepositsComponent {
  tabsArray: string[] = ['Условия', 'Коэффициент распределения прибыли'];
  activatedTab: number = 0;
  requestType: string = 'Ограниченная мудараба';

  constructor() {
  }

  setTab(index: number) {
    this.activatedTab = index;
  }

  conditionData = [
    {
      image: './assets/images/pages/investments/r1.png',
      title: 'Надёжность',
      subtitle: 'защита инвесторов'
    },
    {
      image: './assets/images/pages/investments/r2.png',
      title: 'Профессиональное',
      subtitle: 'управление'
    },
    {
      image: './assets/images/pages/investments/r3.png',
      title: 'Гибкие условия',
      subtitle: 'периода инвестирования'
    },
  ]
}
