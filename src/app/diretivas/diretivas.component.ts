import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {
  //*ngIf
  cursos:string[] = ['angular']
  mostrarCursos:boolean = false

  //*ngSwitch
  aba:string = 'home';
  

  //*ngFor
  modulos: string[] = ['Angular2', 'Java']

  meuFavorito: boolean = false

  ativo: boolean = false
  
  constructor() { }

  ngOnInit() {
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

  onClick(){
    this.meuFavorito = !this.meuFavorito
  }
  mudarAtivo(){
    this.ativo = !this.ativo
  }

}
