import { CursosService } from './cursos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalhesComponent } from './curso-detalhes/curso-detalhes.component';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalhesComponent
  ],
  //possiblita a visiblidade da msg do CursosComponenet no browser
  exports: [ 
    CursosComponent
  ],
  //sem esse provider da erro ele precisa importar aqui CursosService
  providers: [ CursosService ],
  imports: [
    CommonModule
  ]
})
export class CursosModule { }
