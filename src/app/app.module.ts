import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { BotaoComponent } from './botao/botao.component';


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    BotaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
