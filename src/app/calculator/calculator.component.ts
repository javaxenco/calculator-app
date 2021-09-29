import {Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalculatorComponent implements OnInit {
  @ViewChild('inp') input: ElementRef;

  total: string = '';
  buttons: Array<string> = [
    '7',
    '8',
    '9',
    'DEL',
    '4',
    '5',
    '6',
    '+',
    '1',
    '2',
    '3',
    '-',
    '.',
    '0',
    '/',
    'x',
    'RESET',
    '=',
  ];
 theme: string = ''

  constructor() {}

  ngOnInit(): void {}

  addValue(val): void {
    if (this.total == null) {
      this.total = '';
    }

    if (val === 'RESET') {
      this.total = '';
      this.input.nativeElement.focus();
      return;
    }

    if (val === 'DEL') {
      this.total = this.total.toString().slice(0, -1);
      this.input.nativeElement.focus();
      return;
    }

    if (val === '.') {
      this.total += val.toString();
      console.log(this.total);

      return;
    }


    this.total += val.toString();


    this.input.nativeElement.focus();
  }

  receiveTheme(theme) {
    this.theme = theme
    console.log(this.theme);
  }
}
