import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { CursosModule } from './cursos/cursos.module';


// Decorator, NgModule.
// Metadado Declarations: Listamos todas as diretivas, pipes e componentes que iremos utilizar nesse módulo.
// Metadado Imports: Outros módulos que gostariamos de utilizar neste modulo. Ou dentro de algum componente que faz parte deste modulo.
@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [], // Onde colocamos os serviços que ficarão disponíveis para todos os componentes do módulo
  bootstrap: [AppComponent] // Componente que é iniciado.
})

// Declaração da Classe
export class AppModule { }
