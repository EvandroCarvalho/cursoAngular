import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { ExemploNgContentComponent } from './exemplo-ng-content/exemplo-ng-content.component';


@NgModule({
  declarations: [  //componentes diretivas e pipes
    AppComponent,
    DataBindingComponent,
    OutputPropertyComponent,
    DiretivasComponent,
    ExemploNgContentComponent    
  ],
  imports: [ //outros modulos que podem ser utilizados no AppComponenet ou dentro de algum
    // componenete no declarations
    BrowserModule,
    FormsModule
  ],
  providers: [], //serviços que ficaram disponiveis para a aplicação
  bootstrap: [AppComponent] //componente que servira como container da aplicação  
})
export class AppModule { }
