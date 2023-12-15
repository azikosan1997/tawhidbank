import {Component, ElementRef, EventEmitter, Input, Output, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-financing-form',
  templateUrl: './financing-form.component.html',
  styleUrls: ['./financing-form.component.scss']
})
export class FinancingFormComponent {
  @Input() periodButton!: string[];
  @ViewChild('totpCheck') totpCheck!: TemplateRef<ElementRef>;
  @ViewChild('thanks') thanks!: TemplateRef<ElementRef>;
  @Output() fileSelected: EventEmitter<any> = new EventEmitter();
  selectedFile: any = null;
  buttonIndex: number = 0;
  confirmedFirstStep: boolean = false;
  loanAmount: number = 0;
  loanPeriod: number = 1;

  constructor(public dialog: MatDialog,
              private formBuilder: FormBuilder) {

  }

  onFileSelected(selectedFile: any) {
    this.selectedFile = selectedFile;
  }

  firstStep = this.formBuilder.group({
    tin: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\d{9}$/),
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

  secondStep = this.formBuilder.group({
    surname: ['', Validators.required],
    name: ['', Validators.required],
    fathersName: ['', Validators.required],
    mobileNumber: [
      '+992',
      [
        Validators.required,
        Validators.pattern(/^\+992 \d{3} \d{3} \d{3}$/),
      ],
    ],
    email: [
      '',
      [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]
    ],
    birthDate: ['', Validators.required],
    agree: [false, Validators.required]
  });

  totpStep = this.formBuilder.group({
    totp: [
      '',
      [
        Validators.required,
        Validators.pattern(/^\d{6}$/),
      ],
    ],
  });

  buttonClick(index: number) {
    this.buttonIndex = index;
  }

  openCheckTinPopup() {
    if (this.firstStep.valid) {
      this.dialog.open(this.totpCheck, {
        width: '60wh',
        // disableClose: true,
        // hasBackdrop: false,
      })
    }

  }

  closeCheckTiPopup() {
    this.dialog.closeAll();
  }

  checkTin() {
    this.confirmedFirstStep = !this.confirmedFirstStep;
    this.dialog.closeAll();
  }

  sendData() {
    console.log(this.selectedFile)
    console.log(this.secondStep.value)
    this.dialog.open(this.thanks, {
      width: '60wh',
    }).afterClosed().subscribe(() => {
      this.confirmedFirstStep = !this.confirmedFirstStep;
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  }

  calculateFillPercentage(): number {
    return ((this.loanAmount - 10000) / (500000 - 10000)) * 100;
  }

  updateSlider() {
    this.loanAmount = Math.min(500000, Math.max(10000, this.loanAmount));
  }

  updateSliderThree() {
    this.loanPeriod = Math.min(60, Math.max(1, this.loanPeriod));
  }

  calculateFillPercentageThree(): number {
    return (this.loanPeriod / 60) * 100;
  }

}
