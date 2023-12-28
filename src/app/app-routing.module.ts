import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmesCreateComponent } from './components/armes/armes-create/armes-create.component';
import { ArmesDetailsComponent } from './components/armes/armes-details/armes-details.component';
import { ArmesListeComponent } from './components/armes/armes-liste/armes-liste.component';
import { HomeComponent } from './components/home/home.component';
import { MateriauxAmeliorationPersonnagesEtArmesCreateComponent } from './components/materiaux-amelioration-personnages-et-armes/materiaux-amelioration-personnages-et-armes-create/materiaux-amelioration-personnages-et-armes-create.component';
import { MateriauxAmeliorationPersonnagesEtArmesDetailsComponent } from './components/materiaux-amelioration-personnages-et-armes/materiaux-amelioration-personnages-et-armes-details/materiaux-amelioration-personnages-et-armes-details.component';
import { MateriauxAmeliorationPersonnagesEtArmesListeComponent } from './components/materiaux-amelioration-personnages-et-armes/materiaux-amelioration-personnages-et-armes-liste/materiaux-amelioration-personnages-et-armes-liste.component';
import { LivresAptitudeCreateComponent } from './components/materiaux/livres-aptitude/livres-aptitude-create/livres-aptitude-create.component';
import { LivresAptitudeDetailsComponent } from './components/materiaux/livres-aptitude/livres-aptitude-details/livres-aptitude-details.component';
import { LivresAptitudeListeComponent } from './components/materiaux/livres-aptitude/livres-aptitude-liste/livres-aptitude-liste.component';
import { MateriauxAmeliorationPersonnagesCreateComponent } from './components/materiaux/materiaux-amelioration-personnages/materiaux-amelioration-personnages-create/materiaux-amelioration-personnages-create.component';
import { MateriauxAmeliorationPersonnagesDetailsComponent } from './components/materiaux/materiaux-amelioration-personnages/materiaux-amelioration-personnages-details/materiaux-amelioration-personnages-details.component';
import { MateriauxAmeliorationPersonnagesListeComponent } from './components/materiaux/materiaux-amelioration-personnages/materiaux-amelioration-personnages-liste/materiaux-amelioration-personnages-liste.component';
import { MateriauxElevationArmesCreateComponent } from './components/materiaux/materiaux-elevation-armes/materiaux-elevation-armes-create/materiaux-elevation-armes-create.component';
import { MateriauxElevationArmesDetailsComponent } from './components/materiaux/materiaux-elevation-armes/materiaux-elevation-armes-details/materiaux-elevation-armes-details.component';
import { MateriauxElevationArmesListeComponent } from './components/materiaux/materiaux-elevation-armes/materiaux-elevation-armes-liste/materiaux-elevation-armes-liste.component';
import { MateriauxElevationPersonnagesCreateComponent } from './components/materiaux/materiaux-elevation-personnages/materiaux-elevation-personnages-create/materiaux-elevation-personnages-create.component';
import { MateriauxElevationPersonnagesDetailsComponent } from './components/materiaux/materiaux-elevation-personnages/materiaux-elevation-personnages-details/materiaux-elevation-personnages-details.component';
import { MateriauxElevationPersonnagesListeComponent } from './components/materiaux/materiaux-elevation-personnages/materiaux-elevation-personnages-liste/materiaux-elevation-personnages-liste.component';
import { AptitudesCreateComponent } from './components/personnages/aptitudes/aptitudes-create/aptitudes-create.component';
import { ConstellationsCreateComponent } from './components/personnages/constellations/constellations-create/constellations-create.component';
import { PersonnageCreateComponent } from './components/personnages/personnage-create/personnage-create.component';
import { PersonnageDetailsComponent } from './components/personnages/personnage-details/personnage-details.component';
import { PersonnageListeComponent } from './components/personnages/personnage-liste/personnage-liste.component';
import { ProduitsCreateComponent } from './components/produits/produits-create/produits-create.component';
import { ProduitsDetailsComponent } from './components/produits/produits-details/produits-details.component';
import { ProduitsListeComponent } from './components/produits/produits-liste/produits-liste.component';
import { FontaineComponent } from './components/regions/fontaine/fontaine.component';
import { InazumaComponent } from './components/regions/inazuma/inazuma.component';
import { LiyueComponent } from './components/regions/liyue/liyue.component';
import { MondstatComponent } from './components/regions/mondstat/mondstat.component';
import { RegionsComponent } from './components/regions/regions.component';
import { SumeruComponent } from './components/regions/sumeru/sumeru.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { adminGuard } from './shared/guard/admin.guard';

const routes: Routes = [
  {path : '', redirectTo : 'home', pathMatch : 'full'},
  {path : 'home', component : HomeComponent},
  {path : 'materiaux-elevation-armes/create', canActivate : [adminGuard], component : MateriauxElevationArmesCreateComponent},
  {path : 'materiaux-elevation-armes/liste', component : MateriauxElevationArmesListeComponent},
  {path : 'materiaux-elevation-armes/:name', component : MateriauxElevationArmesDetailsComponent},
  {path : 'materiaux-amelioration-personnages-et-armes/create', canActivate : [adminGuard], component : MateriauxAmeliorationPersonnagesEtArmesCreateComponent},
  {path : 'materiaux-amelioration-personnages-et-armes/liste', component : MateriauxAmeliorationPersonnagesEtArmesListeComponent},
  {path : 'materiaux-amelioration-personnages-et-armes/:name', component : MateriauxAmeliorationPersonnagesEtArmesDetailsComponent},
  {path : 'materiaux-amelioration-personnages/create', canActivate : [adminGuard], component : MateriauxAmeliorationPersonnagesCreateComponent},
  {path : 'materiaux-amelioration-personnages/liste', component : MateriauxAmeliorationPersonnagesListeComponent},
  {path : 'materiaux-amelioration-personnages/:name', component : MateriauxAmeliorationPersonnagesDetailsComponent},
  {path : 'materiaux-elevation-personnages/create', canActivate : [adminGuard], component : MateriauxElevationPersonnagesCreateComponent},
  {path : 'materiaux-elevation-personnages/liste', component : MateriauxElevationPersonnagesListeComponent},
  {path : 'materiaux-elevation-personnages/:name', component : MateriauxElevationPersonnagesDetailsComponent},
  {path : 'livres-aptitude/create', canActivate : [adminGuard], component : LivresAptitudeCreateComponent},
  {path : 'livres-aptitude/liste', component : LivresAptitudeListeComponent},
  {path : 'livres-aptitude/:name', component : LivresAptitudeDetailsComponent},
  {path : 'armes/create', canActivate : [adminGuard], component : ArmesCreateComponent},
  {path : 'armes/liste', component : ArmesListeComponent},
  {path : 'armes/:name', component : ArmesDetailsComponent},
  {path : 'produits/create', canActivate : [adminGuard],component : ProduitsCreateComponent},
  {path : 'produits/liste', component : ProduitsListeComponent},
  {path : 'produits/:name', component : ProduitsDetailsComponent},
  {path : 'personnages/create', canActivate : [adminGuard], component : PersonnageCreateComponent},
  {path : 'personnages/liste', component : PersonnageListeComponent},
  {path : 'personnages/:name', component : PersonnageDetailsComponent},
  {path : 'personnages/:id', component : PersonnageDetailsComponent},
  {path : 'personnages/:id/constellations/create', canActivate : [adminGuard], component : ConstellationsCreateComponent},
  {path : 'personnages/:id/aptitudes/create', canActivate : [adminGuard], component : AptitudesCreateComponent},
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},

  {path : 'regions', component : RegionsComponent},
  {path : 'regions/mondstat', component : MondstatComponent},
  {path : 'regions/liyue', component : LiyueComponent},
  {path : 'regions/inazuma', component : InazumaComponent},
  {path : 'regions/sumeru', component : SumeruComponent},
  {path : 'regions/fontaine', component : FontaineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
