import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranHtmlPipe } from '../tranHtml.pipe';
import { UmberUnitPipe } from '../umberUnit.pipe';
import { TestDirective } from '../test.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    TranHtmlPipe,
    UmberUnitPipe,
    TestDirective
  ],
  declarations: [
    TranHtmlPipe,
    UmberUnitPipe,
    TestDirective
  ]
})
export class PipeModuleModule {
  static forRoot() {
    return {
        ngModule: PipeModuleModule,
        providers: [],
    };
 }
}
