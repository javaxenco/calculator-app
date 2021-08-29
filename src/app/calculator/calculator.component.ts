import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
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
    this.total += val.toString();

    //marto numberebs amatebs inputshi sxvas arapers jer
  }
}
