import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { SampleComponent } from './sample/sample.component';
import { NameComponent } from './name/name.component';
import { ColourComponent } from './colour/colour.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    SampleComponent,
    NameComponent,
    ColourComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
