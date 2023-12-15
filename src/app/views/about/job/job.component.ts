import {Component, ElementRef, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent {
  @ViewChild('job') job!: TemplateRef<ElementRef>;
  selectedFile: any = null;
  constructor(private formBuilder: FormBuilder,
              public dialog: MatDialog) {
  }

  onFileSelected(selectedFile: any) {
    this.selectedFile = selectedFile;
  }

  sendCandidateData() {
    if (this.candidateForm.valid){
      console.log(this.candidateForm);
      console.log(this.selectedFile);
      this.dialog.open(this.job,{
        width: '50%',
        height: '300px'
      });
    }
  }
  closePopup() {
    this.candidateForm.reset();
    this.candidateForm.markAsPristine();
    this.candidateForm.markAsUntouched();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      this.dialog.closeAll();
    }, 10)
  }

  candidateForm = this.formBuilder.group({
    fullname: [
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
    email: [
      '',
      [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]
    ],
    text: ['', Validators.required],
    agree: [false, Validators.required]
  })

  jobs: any[] = [
    {
      duty: 'Сотрудник Банка',
      salary: 'от 6000 сомони',
      city: 'Душанбе'
    },
    {
      duty: 'Стратег финансовой службы',
      salary: 'з.п не указана',
      city: 'Худжанд'
    },
    {
      duty: 'Бизнес аналитик',
      salary: 'от 4500 сомони',
      city: 'Бохтар'
    },
  ]
}
