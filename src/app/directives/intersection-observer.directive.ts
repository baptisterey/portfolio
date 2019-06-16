import {Directive, ElementRef, EventEmitter, Inject, OnDestroy, OnInit, Output, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Directive({
  selector: '[appIntersectionObserver]'
})
export class IntersectionObserverDirective implements OnInit, OnDestroy {

  @Output('onIntersection') onIntersection = new EventEmitter();

  private _intersectionObserver?: IntersectionObserver;

  constructor(private _element: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {

  }


  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      this._intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.onIntersection.emit(true);
          }
        });

      });

      this._intersectionObserver.observe(<Element>(this._element.nativeElement));
    } else {
      this.onIntersection.emit(true);
    }
  }

  ngOnDestroy(): void {
    if (this._intersectionObserver) {
      this._intersectionObserver.disconnect();
    }
  }
}
