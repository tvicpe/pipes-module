import { NgModule } from '@angular/core';
import { Nl2BrPipe, Nl2BrPipeModule } from 'nl2br-pipe';
import { TrustHtmlModule, TrustHtmlPipe } from 'trust-html';

@NgModule({
  declarations: [],
  imports: [
TrustHtmlModule,
    Nl2BrPipeModule
  ],
  exports: [ TrustHtmlPipe, Nl2BrPipe]
})
export class PipesModule { }
