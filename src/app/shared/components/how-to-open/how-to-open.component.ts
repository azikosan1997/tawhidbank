import {Component, Input} from '@angular/core';

@Component({
  selector: 'how-to-open',
  templateUrl: './how-to-open.component.html',
  styleUrls: ['./how-to-open.component.scss']
})
export class HowToOpenComponent {
    @Input() productName!: string;
}
