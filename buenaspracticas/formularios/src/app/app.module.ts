import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharkDirective } from './directive/shark.directive';
import { MonkeyDirective } from './directive/monkey.directive';

@NgModule({
  declarations: [
    AppComponent,
    SharkDirective,
    MonkeyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
