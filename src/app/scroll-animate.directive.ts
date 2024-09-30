import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const bounding = this.el.nativeElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (bounding.top < windowHeight && bounding.bottom > 0) {
      this.renderer.addClass(this.el.nativeElement, 'animate');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'animate');
    }
  }
}
