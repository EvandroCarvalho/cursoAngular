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
  declarations: [
    AppComponent,
    DataBindingComponent,
<<<<<<< HEAD
    
=======
    InputPropertyComponent,
    OutputPropertyComponent
>>>>>>> bf75f6648871e786795527d3a856def6d4ea74c2
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
