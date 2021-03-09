import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Output,
  Renderer2,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[appMydirective]',
})
export class MydirectiveDirective implements AfterViewInit, OnInit {
  @Input() defaultColor?: string;
  @Input() name?: string;

  @Output() directiveData: EventEmitter<string> = new EventEmitter();
  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(this.defaultColor);

    // el.nativeElement.style.color="red";

    el.nativeElement.value = this.name;
  }
  ngOnInit(): void {
    this.el.nativeElement.style.color = this.defaultColor;
    console.log(this.defaultColor);
    console.log(this.name);
    // console.log(this.el.nativeElement.innerHtml);
    let x = this.renderer.createElement('button');
    x.value = 'submit';
    this.renderer.setAttribute(this.el.nativeElement, 'id', 'newid');
    this.renderer.appendChild(this.el.nativeElement, x);

    this.directiveData.emit('Welcome From Directive');

    this.el.nativeElement.value = this.name;
  }

  ngAfterViewInit(): void {
    console.log(this.defaultColor);
  }
}
