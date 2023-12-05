import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './components/page1/page1.component';
import { PageaComponent } from './components/pagea/pagea.component';
import { PagebComponent } from './components/pageb/pageb.component';
import { PagecComponent } from './components/pagec/pagec.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { VerificarMonedaDirective } from './directivas/verificar-moneda.directive';
import { ListaVideoComponent } from './components/lista-video/lista-video.component';
import { ReproductorVideoComponent } from './components/reproductor-video/reproductor-video.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    PageaComponent,
    PagebComponent,
    PagecComponent,
    VerificarMonedaDirective,
    ListaVideoComponent,
    ReproductorVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
