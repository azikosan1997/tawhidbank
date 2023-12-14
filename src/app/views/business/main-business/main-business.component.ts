import { Component } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {BannerDataType} from "../../../../types/banner-data.type";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-main-business',
  templateUrl: './main-business.component.html',
  styleUrls: ['./main-business.component.scss']
})
export class MainBusinessComponent {

  constructor(private formBuilder: FormBuilder) {
  }
  accountConsulting = this.formBuilder.group({
    fullName: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[A-Za-zА-Яа-я]+(?: [A-Za-zА-Яа-я]+)*$/),
      ],
    ],
    mobileNumber: [
      '+992',
      [
        Validators.required,
        Validators.pattern(/^\+992 \d{3} \d{3} \d{3}$/),
      ],
    ],
  });

  sendConsultingRequest(){
    if (this.accountConsulting.valid){
      console.log(this.accountConsulting.value)
    }
  }

  serviceOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin: 30,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
    nav: false
  }

  bannerData: BannerDataType[] = [
    {
      background: './assets/images/pages/business%20main/b4.png',
      title: "Торговый эквайринг",
      description: "Предоставьте своим клиентам больше возможностей оплаты и увеличьте продажи с помощью POS-терминалов и QR-кодов"
    },
    {
      background: './assets/images/pages/business%20main/b2.png',
      title: "Расчётно-кассовое обслуживание",
      description: "Конвертации, бронирование счёта, валютные переводы и многое другое — всё это под рукой"
    },
    {
      background: './assets/images/pages/business%20main/b3.png',
      title: "Корпоративная Мурабаха",
      description: "Коммерческая сделка продажи, в которой банк прямо указывает стоимость актива и продает его клиенту, добавив прибыль или наценку на него"
    },
  ];

  usefullServices: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 20,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
