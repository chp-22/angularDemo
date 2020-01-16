import { Directive, Input, ViewContainerRef ,TemplateRef } from '@angular/core';

@Directive({
  selector: '[ppOne]'
})
export class TestDirective {

  @Input()
  set ppOne(codition: Boolean) {
    if (!codition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear()
    }
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) { }

}
