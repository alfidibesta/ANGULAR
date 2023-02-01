import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormats]',
})
export class InputFormatsDirective {
  constructor(private el: ElementRef) {}
  @Input('format') format: any;

  // @HostListener('focus') onFocus() {
  //   console.log("on focus");
  // }
  // @HostListener('blur') onBlur() {
  //   console.log("on blur");
  // }
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    if (this.format == 'uppercase') {
      this.el.nativeElement.value = value.toUpperCase();
    } else {
      this.el.nativeElement.value = value.toLowerCase();
    }
  }
}
