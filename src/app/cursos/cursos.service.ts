import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }
  //aqui ele criou uma lista e a sua id getCursos para se comunicar com
  //cursos.components
  getCursos(){
    return ['JAVA', 'EXT JS', 'ANGULAR'];
  }
}
