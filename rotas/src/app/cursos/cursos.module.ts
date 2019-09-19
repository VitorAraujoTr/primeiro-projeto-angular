import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontratoComponent } from './curso-nao-encontrato/curso-nao-encontrato.component';
import { CursosService } from './cursos.service';
import { CursosRoutingModule } from './cursos.routing.module';
// import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncontratoComponent
    ],
    imports: [ 
        CommonModule,
        CursosRoutingModule
        // RouterModule 
    ],
    exports: [],
    providers: [CursosService],
})
export class CursosModule {}