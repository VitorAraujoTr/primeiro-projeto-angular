import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontratoComponent } from './cursos/curso-nao-encontrato/curso-nao-encontrato.component';



const routes: Routes = [
    { path: 'cursos', component: CursosComponent},
    { path: 'curso/:id', component: CursoDetalheComponent},
    { path: 'login', component: LoginComponent},
    { path: 'nothing', component: CursoNaoEncontratoComponent},
    { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }