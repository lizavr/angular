import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterBasicDirective]',
})
export class BetterBasicDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input('appBetterBasicDirective') highlightColor = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private render: Renderer2) {}
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    console.log('k');
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('mouseenter') mouseover() {
    // this.render.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave() {
    // this.render.setStyle(
    //   this.elRef.nativeElement,
    //   'backgroundColor',
    //   'transparent'
    // );
    this.backgroundColor = this.defaultColor;
  }
}
