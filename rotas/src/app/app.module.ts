import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { routing } from './app.routing';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';
// import { CursoNaoEncontratoComponent } from './cursos/curso-nao-encontrato/curso-nao-encontrato.component';
import { AppRoutingModule } from './app.routing.module';
// import { CursosModule } from './cursos/cursos.module';
// import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent//,
    // CursosComponent,
    // CursoDetalheComponent,
    // CursoNaoEncontratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CursosModule,
    // AlunosModule
    // routing
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
