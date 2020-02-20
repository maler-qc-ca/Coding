import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string;
  @Input() highlightColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostBinding('style.backgroundColor') bgColor: string;

   ngOnInit(){
     this.bgColor = this.defaultColor;
     //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
   }

   @HostListener('mouseenter') xxxx(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.bgColor = this.highlightColor;
   }

   @HostListener('mouseleave') yyyy(eventData: Event){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    this.bgColor = this.defaultColor;
   }

}
