import {Component, ElementRef, Input, OnInit, OnDestroy, Inject, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

import { asideMenuCssClasses } from '../shared';

@Component({
  selector: 'cui-aside',
  templateUrl: './aside.component.html'
})
export class AsideComponent implements OnInit, OnDestroy {
  @Input() display: any;
  @Input() fixed: boolean;
  @Input() offCanvas: boolean;

  private readonly fixedClass = 'c-sidebar-fixed';

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {
    renderer.addClass(hostElement.nativeElement, 'c-sidebar-right');
  }

  ngOnInit(): void {
    this.isFixed(this.fixed);
    this.isOffCanvas(this.offCanvas);
    this.displayBreakpoint(this.display);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.hostElement.nativeElement, this.fixedClass);
  }

  isFixed(fixed: boolean = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.hostElement.nativeElement, this.fixedClass);
    }
  }

  isOffCanvas(offCanvas: boolean = this.offCanvas): void {
    if (offCanvas) {
      this.renderer.addClass(this.hostElement.nativeElement, 'aside-menu-off-canvas');
    }
  }

  displayBreakpoint(display: any = this.display): void {
    if (display !== false ) {
      const cssClass = this.display ? `c-sidebar-right-${this.display}-show` : asideMenuCssClasses[0];
      this.renderer.addClass(this.hostElement.nativeElement, cssClass);
    }
  }
}
