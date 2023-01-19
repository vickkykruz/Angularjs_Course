import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  // So when we apply this directive it should change the background to red
  // color: string = 'red';

  // now we can also assign the selector name
  @Input() appHover: string = 'red';

  // Another way is that we can pass @Input and @Ouput Property
  // @Input() color: string = 'red'; // So it will be red by default if the notting being passes

  // We inject ElementRef in directive to apply it go to the Logincomponent.HTML
  // ElementRef allow us to access the elemet of the content
  constructor(private element: ElementRef,
    // Another way is
    // @Inject(DOCUMENT) private douments: Document
    // Last way is
    private render: Renderer2
    ) { 
    console.log(element.nativeElement) // This we are geting the entier element of that context
  }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor  = this.color; // Using this we are changing the backgroun color of the input form
    // this.douments.
    // To access the render
    // this.render.setStyle(this.element.nativeElement, 'backgroundColor', this.color);

    // Chamging from color name to appHover
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', this.appHover);
  }

  // What if we want to do something based on the event
  // HostListers are used to listen to any event which is happening on the padding controller
  @HostListener('mouseenter') onmouseenter() { // So using this 'onmouseenter we are saying when we hover enter it change the bacckground color to green
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', 'green')
  } 

  @HostListener('mouseleave') onMouseLeave()  { // So using this 'onmouseLeave' we are saying when we hover leave it change the bacckground color to white
    this.render.setStyle(this.element.nativeElement, 'backgroundColor', '#ccc')
  } 
}
