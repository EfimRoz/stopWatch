import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { DisplayScreenComponent } from './stopwatch/display-screen/display-screen.component';
import { StylizeNumberDirective } from './stylize-number.directive';
import { NumberFormatPipe } from './number-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    StopwatchComponent,
    DisplayScreenComponent,
    StylizeNumberDirective,
    NumberFormatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
