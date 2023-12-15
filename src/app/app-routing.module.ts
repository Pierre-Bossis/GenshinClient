import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmesCreateComponent } from './components/armes/armes-create/armes-create.component';
import { ArmesDetailsComponent } from './components/armes/armes-details/armes-details.component';
import { ArmesListeComponent } from './components/armes/armes-liste/armes-liste.component';
import { HomeComponent } from './components/home/home.component';
import { MateriauxAmeliorationPersonnagesCreateComponent } from './components/materiaux/materiaux-amelioration-personnages/materiaux-amelioration-personnages-create/materiaux-amelioration-personnages-create.component';
import { MateriauxAmeliorationPersonnagesDetailsComponent } from './components/materiaux/materiaux-amelioration-personnages/materiaux-amelioration-personnages-details/materiaux-amelioration-personnages-details.component';
import { MateriauxAmeliorationPersonnagesListeComponent } from './components/materiaux/materiaux-amelioration-personnages/materiaux-amelioration-personnages-liste/materiaux-amelioration-personnages-liste.component';
import { MateriauxElevationArmesCreateComponent } from './components/materiaux/materiaux-elevation-armes/materiaux-elevation-armes-create/materiaux-elevation-armes-create.component';
import { MateriauxElevationArmesDetailsComponent } from './components/materiaux/materiaux-elevation-armes/materiaux-elevation-armes-details/materiaux-elevation-armes-details.component';
import { MateriauxElevationArmesListeComponent } from './components/materiaux/materiaux-elevation-armes/materiaux-elevation-armes-liste/materiaux-elevation-armes-liste.component';
import { PersonnageCreateComponent } from './components/personnages/personnage-create/personnage-create.component';
import { PersonnageDetailsComponent } from './components/personnages/personnage-details/personnage-details.component';
import { PersonnageListeComponent } from './components/personnages/personnage-liste/personnage-liste.component';
import { ProduitsCreateComponent } from './components/produits/produits-create/produits-create.component';
import { ProduitsDetailsComponent } from './components/produits/produits-details/produits-details.component';
import { ProduitsListeComponent } from './components/produits/produits-liste/produits-liste.component';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'materiaux-elevation-armes/create', component : MateriauxElevationArmesCreateComponent},
  {path : 'materiaux-elevation-armes/liste', component : MateriauxElevationArmesListeComponent},
  {path : 'materiaux-elevation-armes/:name', component : MateriauxElevationArmesDetailsComponent},
  {path : 'materiaux-amelioration-personnages/create', component : MateriauxAmeliorationPersonnagesCreateComponent},
  {path : 'materiaux-amelioration-personnages/liste', component : MateriauxAmeliorationPersonnagesListeComponent},
  {path : 'materiaux-amelioration-personnages/;name', component : MateriauxAmeliorationPersonnagesDetailsComponent},
  {path : 'armes/create', component : ArmesCreateComponent},
  {path : 'armes/liste', component : ArmesListeComponent},
  {path : 'armes/:name', component : ArmesDetailsComponent},
  {path : 'produits/create',component : ProduitsCreateComponent},
  {path : 'produits/liste', component : ProduitsListeComponent},
  {path : 'produits/:name', component : ProduitsDetailsComponent},
  {path : 'personnages/create', component : PersonnageCreateComponent},
  {path : 'personnages/liste', component : PersonnageListeComponent},
  {path : 'personnages/:name', component : PersonnageDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
