import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-equiring',
  templateUrl: './equiring.component.html',
  styleUrls: ['./equiring.component.scss']
})
export class EquiringComponent {

  constructor(private formBuilder: FormBuilder) {

  }

  acquiringForm = this.formBuilder.group({
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

  sendAcquiringRequest() {
    if (this.acquiringForm.valid){
      console.log(this.acquiringForm)
    }
  }

}
