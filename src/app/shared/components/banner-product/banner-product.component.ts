import {Component, Input} from '@angular/core';

@Component({
  selector: 'banner-product',
  templateUrl: './banner-product.component.html',
  styleUrls: ['./banner-product.component.scss']
})
export class BannerProductComponent {
  @Input() bannerData!:any;
  protected readonly window = window;
}
