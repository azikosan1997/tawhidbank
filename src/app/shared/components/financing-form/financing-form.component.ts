import {Component, ElementRef, Input, TemplateRef, ViewChild} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-financing-form',
  templateUrl: './financing-form.component.html',
  styleUrls: ['./financing-form.component.scss']
})
export class FinancingFormComponent {
  @Input() periodButton!: string[];
  @ViewChild('totpCheck') totpCheck!: TemplateRef<ElementRef>;
  @ViewChild('thanks') thanks!: TemplateRef<ElementRef>;
  buttonIndex: number = 0;
  confirmedFirstStep: boolean = false;

  value = '';
  constructor(public dialog: MatDialog,
              private _snackBar: MatSnackBar) {}
  buttonClick(index: number) {
    this.buttonIndex = index;
  }

  openCheckTinPopup() {
    this.dialog.open(this.totpCheck,{
      width: '60wh',
      // disableClose: true,
      // hasBackdrop: false,
    })
  }
  closeCheckTiPopup() {
    this.dialog.closeAll();
  }
  checkTin() {
    this.confirmedFirstStep = !this.confirmedFirstStep;
    this._snackBar.open('Заявка на финансирование успешно отправлена');
    this.dialog.closeAll();
  }

  sendData(){
    this.dialog.open(this.thanks, {
      width: '60wh',
    }).afterClosed().subscribe(() => {
      this.confirmedFirstStep = !this.confirmedFirstStep;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
