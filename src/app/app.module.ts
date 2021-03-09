import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MydirectiveDirective } from './mydirective.directive';
import { D3BarGraphDirective } from './d3-bar-graph.directive';
import { VennDiagramDirective } from './venn-diagram.directive';

@NgModule({
  declarations: [
    AppComponent,
    MydirectiveDirective,
    D3BarGraphDirective,
    VennDiagramDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
