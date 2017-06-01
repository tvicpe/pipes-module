import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrustHtmlPipe } from 'trust-html-pipe';
import { Nl2BrPipe } from 'nl2br-pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TrustHtmlPipe,
    Nl2BrPipe
  ],
  exports: [TrustHtmlPipe, Nl2BrPipe]
})
export class PipesModule {
}
