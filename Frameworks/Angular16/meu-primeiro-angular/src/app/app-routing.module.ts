import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pags/inicio/inicio.component';
import { ProdutosComponent } from './pags/produtos/produtos.component';
import { ContatoComponent } from './pags/contato/contato.component';

const routes: Routes = [
  {path: "", component: InicioComponent },
  {path: "produtos", component: ProdutosComponent },
  {path: "contato", component: ContatoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
