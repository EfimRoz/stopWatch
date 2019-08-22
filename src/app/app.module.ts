import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { AppComponent } from './app.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { DisplayScreenComponent } from './stopwatch/display-screen/display-screen.component';
import { StylizeNumberDirective } from './stylize-number.directive';
import { NumberFormatPipe } from './number-format.pipe';
import { ActionButtonsComponent } from './stopwatch/action-buttons/action-buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    StopwatchComponent,
    DisplayScreenComponent,
    StylizeNumberDirective,
    NumberFormatPipe,
    ActionButtonsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
