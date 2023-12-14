import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-file-getter',
  templateUrl: './file-getter.component.html',
  styleUrls: ['./file-getter.component.scss']
})
export class FileGetterComponent {
  @Output() fileSelected: EventEmitter<any> = new EventEmitter();
  selectedFile: any = null;

  constructor() {
  }

  handleFileInput(event: any) {
    const fileInput = event.target;
    const file = fileInput.files[0];

    if (file) {
      this.selectedFile = file;
      console.log('Selected file:', file.name);
      this.fileSelected.emit(file);
    } else {
      console.log('File not selected');
    }
  }
}
