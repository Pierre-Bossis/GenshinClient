import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/materiaux/materiaux-elevation-armes/create/create.component';
import { DetailsComponent } from './components/materiaux/materiaux-elevation-armes/details/details.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path : 'materiaux-elevation-armes/create', component : CreateComponent},
  {path : 'materiaux-elevation-armes/:name', component : DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
