import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
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

  constructor() {}

  ngOnInit(): void {}

  addValue(val): void {
    if (this.total == null) {
      this.total = '';
    }

    if (val === 'RESET') {
      this.total = '';
      this.input.nativeElement.focus();
      //custom directive focusis sheidzleba ikos gasaketebeli sul ro focusshi ikos input
      return;
    }

    if (val === 'DEL') {
      this.total = this.total.toString().slice(0, -1);
      this.input.nativeElement.focus();
      return;
    }

    if (val === '+') {
      this.total += val.toString();
      console.log(this.total);

      return;
    }

    this.total += val.toString();
    //marto numberebs amatebs inputshi sxvas arapers jer

    this.input.nativeElement.focus();
  }
}
