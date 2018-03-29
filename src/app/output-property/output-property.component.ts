<<<<<<< HEAD
import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
=======
import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';
>>>>>>> origin

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor:number = 0;
  @Output() mudouValor = new EventEmitter();
  //Manipular valores acesso ao DOM
  @ViewChild('campoInput') campoValorInput: ElementRef; 

  @ViewChild('inputValor') inputValor: ElementRef

  constructor() { }

  ngOnInit() {
  }

  incrementa(){
<<<<<<< HEAD
    //console.log(this.inputValor.nativeElement.value)
    this.inputValor.nativeElement.value++
    //this.valor++;
    this.mudouValor.emit({
      novoValor: this.inputValor.nativeElement.value
=======
    //console.log(this.campoValorInput.nativeElement.value)
    //this.valor++;
    this.campoValorInput.nativeElement.value++
    this.mudouValor.emit({
      novoValor: this.campoValorInput.nativeElement.value
>>>>>>> origin
    })
  }

  decrementa(){
<<<<<<< HEAD
    this.inputValor.nativeElement.value--
    //this.valor--;
    this.mudouValor.emit({
      novoValor: this.inputValor.nativeElement.value
=======
    //this.valor--;
    this.campoValorInput.nativeElement.value++
    this.mudouValor.emit({
      novoValor: this.campoValorInput.nativeElement.value
>>>>>>> origin
    })
  }
}
