import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  //aqui criou ou declarou uma variavel que sera chamado abaixo
  nomePortal: string;

  //Aqui criou uma lista vazia que tera o seu get prenchido em cursos.services
  cursos: string[];

  //aqui ele disse que o cursoService sera privado e é importante declara isso
  constructor(private CursosService: CursosService) {
    //aqui ele chamou essa variavel e atribuiu vaor nela para ser importada no html
    this.nomePortal = 'http//loiane.training';

    /*for (let i=0; i<this.cursos.length; i++){
      let curso = this.cursos[i];
    }*/
    //var service =  new CursosService();
    //aqui ele esta se comunicando com o cursosServices pra rodar a lista
    this.cursos = this.CursosService.getCursos();

   }
    
  ngOnInit(): void {
  }

}
