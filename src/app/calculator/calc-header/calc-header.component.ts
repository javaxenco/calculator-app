import {Component, EventEmitter, Output,} from '@angular/core';

@Component({
  selector: 'app-calc-header',
  templateUrl: './calc-header.component.html',
  styleUrls: ['./calc-header.component.scss'],
})
export class CalcHeaderComponent {
  @Output() style: EventEmitter<any> = new EventEmitter<any>()


  theme: string = '';

  sliderChange(val) {
    switch (val.value) {
      case 1:
        this.theme = 'first';
        break;
      case 2:
        this.theme = 'second';
        break;
      case 3:
        this.theme = 'third';
        break;
    }
    this.style.emit(this.theme);
  }
}
