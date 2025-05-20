import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteFormComponent } from './componentes/cliente-form/cliente-form.component';
import { ProdutoFormComponent } from './componentes/produto-form/produto-form.component';
import { PedidoFormComponent } from './componentes/pedido-form/pedido-form.component';
import { PedidoListComponent } from './componentes/pedido-list/pedido-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteFormComponent,
    ProdutoFormComponent,
    PedidoFormComponent,
    PedidoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
