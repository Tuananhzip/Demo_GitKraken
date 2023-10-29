import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChickenComponent } from './chicken/chicken.component';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { PizzaComponent } from './pizza/pizza.component';
import { DrinkComponent } from './drink/drink.component';

@NgModule({
  declarations: [AppComponent, ChickenComponent, HeaderComponent, PizzaComponent, DrinkComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
