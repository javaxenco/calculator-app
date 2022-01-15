import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ThemeService } from '../core/theme.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-calc-header',
  templateUrl: './calc-header.component.html',
  styleUrls: ['./calc-header.component.scss'],
})
export class CalcHeaderComponent implements OnInit {
  theme: string;
  toggleValue: boolean;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.themeSubject.subscribe((theme) => {
      this.theme = theme;
      this.toggleValue = theme === 'light';
    });
  }

  sliderChange(val) {
    this.themeService.update(val.checked);
  }
}
