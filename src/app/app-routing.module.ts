import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmesCreateComponent } from './components/armes/armes-create/armes-create.component';
import { ArmesDetailsComponent } from './components/armes/armes-details/armes-details.component';
import { ArmesListeComponent } from './components/armes/armes-liste/armes-liste.component';
import { HomeComponent } from './components/home/home.component';
import { MateriauxElevationArmesCreateComponent } from './components/materiaux/materiaux-elevation-armes/materiaux-elevation-armes-create/materiaux-elevation-armes-create.component';
import { MateriauxElevationArmesDetailsComponent } from './components/materiaux/materiaux-elevation-armes/materiaux-elevation-armes-details/materiaux-elevation-armes-details.component';
import { MateriauxElevationArmesListeComponent } from './components/materiaux/materiaux-elevation-armes/materiaux-elevation-armes-liste/materiaux-elevation-armes-liste.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path : 'materiaux-elevation-armes/create', component : MateriauxElevationArmesCreateComponent},
  {path : 'materiaux-elevation-armes/liste', component : MateriauxElevationArmesListeComponent},
  {path : 'materiaux-elevation-armes/:name', component : MateriauxElevationArmesDetailsComponent},
  {path: 'armes/create', component : ArmesCreateComponent},
  {path: 'armes/liste', component : ArmesListeComponent},
  {path: 'armes/:name', component : ArmesDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
