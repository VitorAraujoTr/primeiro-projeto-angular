import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';

const alunosRoutes: Routes = [
    {path: '', component: AlunosComponent, children:[
        {path: 'alunos/novo', component: AlunoFormComponent},
        {path: 'alunos/:id', component: AlunoDetalheComponent},
        {path: 'alunos/:id/editar', component: AlunoFormComponent}
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }