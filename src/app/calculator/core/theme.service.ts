import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private renderer: Renderer2;
  private theme = localStorage.getItem('userTheme');
  themeSubject = new BehaviorSubject<string>(this.theme);

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    if (!this.theme || this.theme === 'dark') {
      this.update(false);
    } else {
      this.update(true);
    }
  }

  update(theme) {
    this.theme = theme ? 'light' : 'dark';
    let prevTheme = theme ? 'dark' : 'light';
    this.themeSubject.next(this.theme);
    localStorage.setItem('userTheme', this.theme);
    this.renderer.removeClass(document.body, prevTheme);
    this.renderer.addClass(document.body, this.theme);
  }
}
