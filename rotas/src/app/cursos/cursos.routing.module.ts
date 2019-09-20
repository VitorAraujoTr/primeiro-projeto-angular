import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontratoComponent } from './curso-nao-encontrato/curso-nao-encontrato.component';



const cursosRoutes: Routes = [
    { path: '', component: CursosComponent},
    { path: 'nothing', component: CursoNaoEncontratoComponent},
    { path: ':id', component: CursoDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }