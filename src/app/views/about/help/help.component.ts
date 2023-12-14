import {Component, ElementRef, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent {
  @ViewChild('help') help!: TemplateRef<ElementRef>;
  foods = [
    { value: 'Получение/пополнение карты', viewValue: 'Получение/пополнение карты' },
    { value: 'Получение/погашение финансирования', viewValue: 'Получение/погашение финансирования' },
    { value: 'Интернетбанкинг / Личный кабинет', viewValue: 'Интернетбанкинг / Личный кабинет' },
    { value: 'Кошелёк Tawhid Pa', viewValue: 'Кошелёк Tawhid Pay' },
    { value: 'Эквайринг / Онлайн-платежи', viewValue: 'Эквайринг / Онлайн-платежи' },
    { value: 'Покупка авто', viewValue: 'Покупка авто' },
    { value: 'Благодарность', viewValue: 'Благодарность' },
    { value: 'Пожаловаться', viewValue: 'Пожаловаться' },
    { value: 'Сотрудничество', viewValue: 'Сотрудничество' },
    { value: 'Другое', viewValue: 'Другое' },
  ];

  constructor(private formBuilder: FormBuilder,
              public dialog: MatDialog,
              private router: Router) {
  }

  helpForm = this.formBuilder.group({
    topic: ['', Validators.required],
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
    question: ['', Validators.required],
  });

  sendRequest() {
    if (this.helpForm.valid) {
      console.log(this.helpForm.value);
      this.dialog.open(this.help,{
        width: '50%',
        height: '300px'
      });

    } else {
      console.log('Form is not valid. Please check the fields.');
    }
  }

  closePopup() {
    this.helpForm.reset();
    this.helpForm.markAsPristine();
    this.helpForm.markAsUntouched();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.dialog.closeAll();
  }
}
