import {Component, ElementRef, Inject, Input, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'cui-footer',
  template: `<ng-content></ng-content>`
})
export class FooterComponent implements OnInit, OnDestroy {
  @Input() fixed: boolean;

  private readonly fixedClass = 'c-footer-fixed';

  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer2,
    private hostElement: ElementRef
  ) {
    renderer.addClass(hostElement.nativeElement, 'c-footer');
  }

  ngOnInit(): void {
    this.isFixed(this.fixed);
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(this.hostElement.nativeElement, this.fixedClass);
  }

  isFixed(fixed: boolean = this.fixed): void {
    if (fixed) {
      this.renderer.addClass(this.hostElement.nativeElement, this.fixedClass);
    }
  }
}
