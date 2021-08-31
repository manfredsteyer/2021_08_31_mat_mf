import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-file-picker',
  templateUrl: './file-picker.component.html',
  styleUrls: ['./file-picker.component.scss']
})
export class FilePickerComponent {
  toppings = new FormControl();
  buckets = ['test', 'another test'];

  constructor() { }

  clicked(event: any): void {

  }

}
