import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
  //inputs: ['nomeCurso'] também é possível passar os inputs pelo metadado.
})
export class InputPropertyComponent implements OnInit {

  // Declarator Input, com isso conseguimos expor a variavel nome para o selector app-curso
  // Internamente estamos usando como nomeCurso, mas para expor está com nome.
  @Input('nome') nomeCurso: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
