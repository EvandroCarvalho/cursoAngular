import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [] //onde importar outros componentes para serem usados neste modulo
  , exports: [
    //exporta o componente, depois faz o import deste modulo no modulo principal 
  ]
})
export class DataBindingModule { }
