import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: any = 'http://google.com';
  curtir:boolean = true;
  urlImagem = '#';
  texto: string;
  valorAtual:string;
  valorSalvo:string;
  isMouseOver: boolean = false;
  nome:string = 'abc';
  nome2:string = 'def'
  pessoa: any = {
    nome : 'nome',
    idade: 'idade'
  }

  getValue = () => 2;
  getCurtir = () => this.curtir;

  botaoClicado = () => alert("rá");

  onKeyUp(event: KeyboardEvent) {
    console.log((<HTMLInputElement>event.target).value);
    this.valorAtual = (<HTMLInputElement>event.target).value
  } 

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
  constructor() { }

  ngOnInit() {
  }

}
