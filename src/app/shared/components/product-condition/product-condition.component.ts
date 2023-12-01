import {Component, Input} from '@angular/core';

@Component({
  selector: 'product-condition',
  templateUrl: './product-condition.component.html',
  styleUrls: ['./product-condition.component.scss']
})
export class ProductConditionComponent {
    @Input() conditionData!:any;
}
