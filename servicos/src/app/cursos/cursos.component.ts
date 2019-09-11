import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];
  cursosService: CursosService;

  constructor() { 
    this.cursosService = new CursosService();
   }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}
