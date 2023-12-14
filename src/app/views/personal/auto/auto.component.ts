import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent {
  constructor(private formBuilder: FormBuilder) {
  }

  autoFinancingForm = this.formBuilder.group({
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

  sendAutoFinancingRequest() {
    if (this.autoFinancingForm.valid){
      console.log(this.autoFinancingForm.value);
    }
  }
}
