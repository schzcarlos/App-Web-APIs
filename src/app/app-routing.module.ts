import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './components/page1/page1.component';
import { PageaComponent } from './components/pagea/pagea.component';
import { PagebComponent } from './components/pageb/pageb.component';
import { PagecComponent } from './components/pagec/pagec.component';
import { ListaVideoComponent } from './components/lista-video/lista-video.component';
import { ReproductorVideoComponent } from './components/reproductor-video/reproductor-video.component';

const routes: Routes = [
  {path:"page1",component:Page1Component},
  {path:"pagea", component:PageaComponent},
  {path:"pageb", component:PagebComponent},
  {path:"pagec", component:PagecComponent},
  {path:"listaVideo",component:ListaVideoComponent},
  {path:"play/:id", component:ReproductorVideoComponent},
  {path:"", redirectTo:"pagea",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
