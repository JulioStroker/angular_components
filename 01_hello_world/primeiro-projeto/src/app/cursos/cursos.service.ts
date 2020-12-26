import { Injectable } from '@angular/core';

// Decorator que é utilizado para a injeção de dependencia.
@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return ['Java', 'Ext Js', 'Angular'];
  }
}
