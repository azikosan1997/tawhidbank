import {Component} from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {

  activeTab: string = 'Корпоративное управление банком';

  onTabClick(tab: string) {
    this.activeTab = tab;
    console.log(tab)
  }

  tabLinkName = [
    {
      name: 'Корпоративное управление банком',
    },
    {
      name: 'Финансовые показатели Банка',
    },
    {
      name: 'Комплексное обслуживание физических лиц',
    },
    {
      name: 'Расчётно-кассовое обслуживание',
    },
    {
      name: 'Депозит',
    },

    {
      name: 'Электронные денежные средства',
    },
    {
      name: 'Платёжные терминалы ОАО «ТАВҲидБанк»',
    },
    {
      name: 'Карта рассрочки «Сабз»',
    },
    {
      name: 'Для юридических лиц и индивидуальных предпринимателей',
    },
    {
      name: 'Помощь в использовании приложении Банка',
    },
    {
      name: 'Защита персональных данных клиентов ОАО «тАВҲИДБанк»',
    },
  ]

}
