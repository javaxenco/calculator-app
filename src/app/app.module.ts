import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CalcHeaderComponent } from './calculator/calc-header/calc-header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CalculatorComponent, CalcHeaderComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
