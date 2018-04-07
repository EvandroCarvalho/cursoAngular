import { Component, OnInit, Input, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

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
    //console.log(this.inputValor.nativeElement.value)
    this.inputValor.nativeElement.value++
    //this.valor++;
    this.mudouValor.emit({
      novoValor: this.inputValor.nativeElement.value
    })
  }

  decrementa(){
    this.inputValor.nativeElement.value--
    //this.valor--;
    this.mudouValor.emit({
      novoValor: this.inputValor.nativeElement.value
    })
  }
}
