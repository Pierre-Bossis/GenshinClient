import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Aptitudes } from 'src/app/_models/aptitudes';
import { Armes } from 'src/app/_models/armes';
import { Constellations } from 'src/app/_models/constellations';
import { LivresAptitude } from 'src/app/_models/livres-aptitude';
import { MateriauxAmeliorationPersonnages } from 'src/app/_models/materiaux-amelioration-personnages';
import { MateriauxAmeliorationPersonnagesEtArmes } from 'src/app/_models/materiaux-amelioration-personnages-et-armes';
import { MateriauxElevationPersonnages } from 'src/app/_models/materiaux-elevation-personnages';
import { Personnages } from 'src/app/_models/personnages';
import { Produits } from 'src/app/_models/produits';
import { ArmesService } from 'src/app/_services/armes.service';
import { AuthService } from 'src/app/_services/auth.service';
import { MateriauxAmeliorationPersonnagesEtArmesService } from 'src/app/_services/materiaux-amelioration-personnages-et-armes.service';
import { MateriauxAmeliorationPersonnagesService } from 'src/app/_services/materiaux-amelioration-personnages.service';
import { PersonnagesService } from 'src/app/_services/personnages.service';
import { ProduitsService } from 'src/app/_services/produits.service';

@Component({
  selector: 'app-personnage-details',
  templateUrl: './personnage-details.component.html',
  styleUrls: ['./personnage-details.component.css']
})
export class PersonnageDetailsComponent {
  role!:string | undefined
  personnage!: Personnages

  //many to one
  arme?: Armes
  produit!: Produits
  mat!: MateriauxAmeliorationPersonnages
  constellations: Constellations[] = []
  aptitudes: Aptitudes[] = []

  //many to many
  livresAptitude: LivresAptitude[] = []
  materiauxElevation: MateriauxElevationPersonnages[] = []
  materiauxAmelioPersosArmes: MateriauxAmeliorationPersonnagesEtArmes[] = []

  //add
  receivedId!: number
  formDisplay: boolean = false


  personnageName: string | null = null
  trailer!: SafeResourceUrl;

  constructor(private personnagesService: PersonnagesService,
    private armesService: ArmesService,
    private produitsService: ProduitsService,
    private materiauxAmeliorationPersonnagesService: MateriauxAmeliorationPersonnagesService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router,
    private authService:AuthService) { }

  ngOnInit(): void {
    this.role = this.authService.connectedUser?.role

    this.route.paramMap.subscribe(params => {
      this.personnageName = params.get('name');
    });

    if (this.personnageName != null) {
      this.personnagesService.getByName(this.personnageName).subscribe((data) => {
        this.personnage = data.personnage,
          this.livresAptitude = data.livres,
          this.materiauxElevation = data.matsElevation
        this.materiauxAmelioPersosArmes = data.matsAmelioPersosArmes

        if (data.personnage.arme_Id) {
          this.armesService.getById(data.personnage.arme_Id).subscribe((dataArme) => this.arme = dataArme.arme)
        }

        this.produitsService.getById(data.personnage.produit_Id).subscribe((dataProduit) => this.produit = dataProduit)
        this.materiauxAmeliorationPersonnagesService.getById(data.personnage.materiauxAmeliorationPersonnage_Id).subscribe((dataMat) => this.mat = dataMat)

        this.trailer = this.sanitizer.bypassSecurityTrustResourceUrl(this.personnage.trailerYT);

        this.refreshConstellationsList()
        this.refreshAptitudesList()
      })
    }
  }

  goDetails(nom: string) {
    this.router.navigate(["armes/" + nom])
  }

  displayForm(id: number) {
    this.formDisplay = !this.formDisplay
    this.receivedId = id;
  }

  refreshAptitudesList() {
    this.personnagesService.getAllAptitudes(this.personnage.id).subscribe((data) => this.aptitudes = data)
    this.formDisplay = false
  }

  refreshConstellationsList() {
    this.personnagesService.getAllConstellations(this.personnage.id).subscribe((data) => this.constellations = data)
    this.formDisplay = false
  }
}
