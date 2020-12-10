import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AregarLlaveroComponent } from './aregar-llavero/aregar-llavero.component';
import { EditarLlaveroComponent } from './editar-llavero/editar-llavero.component';
import { ListarLlaveroComponent } from './listar-llavero/listar-llavero.component';


const routes: Routes = [
  { path: '', redirectTo: '/agregar-llavero', pathMatch: 'full' },
  { path: 'agregar-llavero', component: AregarLlaveroComponent },
  { path: 'listar-llaveros', component: ListarLlaveroComponent },
  { path: 'editar-llavero/:id', component: EditarLlaveroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }