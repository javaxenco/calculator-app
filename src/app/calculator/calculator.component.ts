import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ButtonsArray } from './core/buttons-array';
import { ThemeService } from './core/theme.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent implements OnInit {
  @ViewChild('inp') input: ElementRef;
  buttons = ButtonsArray;
  total: string = '';
  theme: string;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.themeSubject.subscribe((theme) => {
      this.theme = theme;
    });
  }

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
      return;
    }

    this.total += val.toString();

    this.input.nativeElement.focus();
  }
}
