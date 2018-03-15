import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css']
})
export class InputPropertyComponent implements OnInit {
  //decorator Input (importar no pacote angular core) com isso é possivel
  //exportar uma propriedade, no caso a nomeCurso
  //O input pode receber uma variavel como parametro, para que internamente ela possa ter um nome 
  //uma variavel com um nome e externamente ele passe outro nome
  //ex.: Input('nome') nomeCurso:strint ='';
  @Input() nomeCurso:string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
