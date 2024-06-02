
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Añadir esta línea

import { AppComponent } from './app.component';
import { CapicuaDetectorComponent } from './capicua-detector/capicua-detector.component';

@NgModule({
  declarations: [
    AppComponent,
    CapicuaDetectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Añadir FormsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
