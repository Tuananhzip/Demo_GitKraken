import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChickenComponent } from './chicken/chicken.component';
import { PizzaComponent } from './pizza/pizza.component';
import { DrinkComponent } from './drink/drink.component';

const routes: Routes = [
  { path: 'chicken', component: ChickenComponent },
  { path: 'pizza', component: PizzaComponent },
  { path: 'drink', component: DrinkComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
