import {
  Directive,
  ElementRef,
  HostListener,
  AfterViewInit,
  Input
} from "@angular/core";

@Directive({
  selector: "[wtHighlight]"
})
export class HighlightDirective implements AfterViewInit {
  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'red';
  }

  @Input() defaultColor: string;

  @Input("wtHighlight") highlightColor: string;

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || "purple");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight("orange");
  }

  ngAfterViewInit() {
    // setTimeout(() => {
    //   this.highlight('yellow')
    // }, 1500);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
