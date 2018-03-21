import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
<<<<<<< HEAD
=======
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
>>>>>>> bf75f6648871e786795527d3a856def6d4ea74c2


@NgModule({
  declarations: [  //componentes diretivas e pipes
    AppComponent,
    DataBindingComponent,
<<<<<<< HEAD
    
=======
    InputPropertyComponent,
    OutputPropertyComponent
>>>>>>> bf75f6648871e786795527d3a856def6d4ea74c2
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
