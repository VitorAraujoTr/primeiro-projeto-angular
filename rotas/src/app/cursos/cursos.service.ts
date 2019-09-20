import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos: any[] = [
    { id: 1, nome: 'Angular 2'},
    { id: 2, nome: 'Java'}
  ];

  getCursos(){
    return this.cursos;
  }

  getCurso(id: number){
    for(let i = 0; i < this.cursos.length; i++){
      let curso = this.cursos[i];
        if(curso.id == id){
          return curso;
        }
    }
    return null;
  }

  constructor() { }
}
