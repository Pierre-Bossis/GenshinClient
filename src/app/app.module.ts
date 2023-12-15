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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProduitsCreateComponent } from './components/produits/produits-create/produits-create.component';
import { ProduitsDetailsComponent } from './components/produits/produits-details/produits-details.component';
import { ProduitsListeComponent } from './components/produits/produits-liste/produits-liste.component';
import { StarPipe } from './shared/pipes/star.pipe';

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
    StarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
