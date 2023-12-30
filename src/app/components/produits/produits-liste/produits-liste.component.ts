import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Produits } from 'src/app/_models/produits';
import { ProduitsService } from 'src/app/_services/produits.service';
import { AuthService } from '../../../_services/auth.service';

@Component({
  selector: 'app-produits-liste',
  templateUrl: './produits-liste.component.html',
  styleUrls: ['./produits-liste.component.css']
})
export class ProduitsListeComponent {
  role!: string | undefined
  produits: Produits[] = []
  produitsFiltre: Produits[] = []

  constructor(private produitsService: ProduitsService, private route: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.role = this.authService.connectedUser?.role

    this.produitsService.getAll().subscribe((data) => {
      this.produits = data
      this.produitsFiltre = this.produits
      this.totalItems = this.produits.length;
    })
  }

  goDetails(nom: string) {
    this.route.navigate(["produits/" + nom])
  }


  filtre(search: string) {
    this.currentPage = 1;
  
    search = search?.trim().toLowerCase() ?? '';
  
    if (search === '') {
      this.produitsFiltre = this.produits;
    } else {
      this.produitsFiltre = this.produits.filter((produit: Produits) =>
        produit.nom.toLowerCase().includes(search)
      );
    }
  }

  //-------------- Pagination --------------
  pageSize = 10;
  currentPage = 1;
  totalItems!: number
  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }
}
