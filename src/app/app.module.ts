import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MateriauxElevationArmesListeComponent } from './components/materiaux/materiaux-elevation-armes/materiaux-elevation-armes-liste/materiaux-elevation-armes-liste.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MateriauxElevationArmesDetailsComponent } from './components/materiaux/materiaux-elevation-armes/materiaux-elevation-armes-details/materiaux-elevation-armes-details.component';
import { MateriauxElevationArmesCreateComponent } from './components/materiaux/materiaux-elevation-armes/materiaux-elevation-armes-create/materiaux-elevation-armes-create.component';
import { ArmesCreateComponent } from './components/armes/armes-create/armes-create.component';
import { ArmesDetailsComponent } from './components/armes/armes-details/armes-details.component';
import { ArmesListeComponent } from './components/armes/armes-liste/armes-liste.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProduitsCreateComponent } from './components/produits/produits-create/produits-create.component';
import { ProduitsDetailsComponent } from './components/produits/produits-details/produits-details.component';
import { ProduitsListeComponent } from './components/produits/produits-liste/produits-liste.component';
import { StarPipe } from './shared/pipes/star.pipe';
import { MateriauxAmeliorationPersonnagesCreateComponent } from './components/materiaux/materiaux-amelioration-personnages/materiaux-amelioration-personnages-create/materiaux-amelioration-personnages-create.component';
import { MateriauxAmeliorationPersonnagesListeComponent } from './components/materiaux/materiaux-amelioration-personnages/materiaux-amelioration-personnages-liste/materiaux-amelioration-personnages-liste.component';
import { MateriauxAmeliorationPersonnagesDetailsComponent } from './components/materiaux/materiaux-amelioration-personnages/materiaux-amelioration-personnages-details/materiaux-amelioration-personnages-details.component';
import { PersonnageCreateComponent } from './components/personnages/personnage-create/personnage-create.component';
import { PersonnageListeComponent } from './components/personnages/personnage-liste/personnage-liste.component';
import { PersonnageDetailsComponent } from './components/personnages/personnage-details/personnage-details.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MondstatComponent } from './components/regions/mondstat/mondstat.component';
import { LiyueComponent } from './components/regions/liyue/liyue.component';
import { InazumaComponent } from './components/regions/inazuma/inazuma.component';
import { SumeruComponent } from './components/regions/sumeru/sumeru.component';
import { FontaineComponent } from './components/regions/fontaine/fontaine.component';
import { RegionsComponent } from './components/regions/regions.component';
import { MateriauxElevationPersonnagesCreateComponent } from './components/materiaux/materiaux-elevation-personnages/materiaux-elevation-personnages-create/materiaux-elevation-personnages-create.component';
import { MateriauxElevationPersonnagesListeComponent } from './components/materiaux/materiaux-elevation-personnages/materiaux-elevation-personnages-liste/materiaux-elevation-personnages-liste.component';
import { MateriauxElevationPersonnagesDetailsComponent } from './components/materiaux/materiaux-elevation-personnages/materiaux-elevation-personnages-details/materiaux-elevation-personnages-details.component';
import { LivresAptitudeCreateComponent } from './components/materiaux/livres-aptitude/livres-aptitude-create/livres-aptitude-create.component';
import { LivresAptitudeListeComponent } from './components/materiaux/livres-aptitude/livres-aptitude-liste/livres-aptitude-liste.component';
import { LivresAptitudeDetailsComponent } from './components/materiaux/livres-aptitude/livres-aptitude-details/livres-aptitude-details.component';
import { MateriauxAmeliorationPersonnagesEtArmesCreateComponent } from './components/materiaux-amelioration-personnages-et-armes/materiaux-amelioration-personnages-et-armes-create/materiaux-amelioration-personnages-et-armes-create.component';
import { MateriauxAmeliorationPersonnagesEtArmesDetailsComponent } from './components/materiaux-amelioration-personnages-et-armes/materiaux-amelioration-personnages-et-armes-details/materiaux-amelioration-personnages-et-armes-details.component';
import { MateriauxAmeliorationPersonnagesEtArmesListeComponent } from './components/materiaux-amelioration-personnages-et-armes/materiaux-amelioration-personnages-et-armes-liste/materiaux-amelioration-personnages-et-armes-liste.component';

@NgModule({
  declarations: [
    AppComponent,
    MateriauxElevationArmesCreateComponent,
    HomeComponent,
    MateriauxElevationArmesDetailsComponent,
    NavbarComponent,
    MateriauxElevationArmesListeComponent,
    ArmesCreateComponent,
    ArmesDetailsComponent,
    ArmesListeComponent,
    ProduitsCreateComponent,
    ProduitsDetailsComponent,
    ProduitsListeComponent,
    StarPipe,
    MateriauxAmeliorationPersonnagesCreateComponent,
    MateriauxAmeliorationPersonnagesListeComponent,
    MateriauxAmeliorationPersonnagesDetailsComponent,
    PersonnageCreateComponent,
    PersonnageListeComponent,
    PersonnageDetailsComponent,
    FooterComponent,
    MondstatComponent,
    LiyueComponent,
    InazumaComponent,
    SumeruComponent,
    FontaineComponent,
    RegionsComponent,
    MateriauxElevationPersonnagesCreateComponent,
    MateriauxElevationPersonnagesListeComponent,
    MateriauxElevationPersonnagesDetailsComponent,
    LivresAptitudeCreateComponent,
    LivresAptitudeListeComponent,
    LivresAptitudeDetailsComponent,
    MateriauxAmeliorationPersonnagesEtArmesCreateComponent,
    MateriauxAmeliorationPersonnagesEtArmesDetailsComponent,
    MateriauxAmeliorationPersonnagesEtArmesListeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
