import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiro2Component,
  ],
  imports: [
    BrowserModule,
    CursosModule//pra importar o modulos dos CursosModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
