import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { VagasComponent } from './views/vagas/vagas.component';
import { CurriculoComponent } from './views/curriculo/curriculo.component';


//crio as rotas de navegação
const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"vagas", component: VagasComponent},
  {path:"curriculos", component: CurriculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
