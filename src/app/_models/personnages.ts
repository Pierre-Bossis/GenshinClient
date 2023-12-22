export interface Personnages {
    id:number
    nom:string,
    oeilDivin:string
    typeArme:string
    lore:string
    nationalite:string
    trailerYT:string
    splashArt:string
    portrait:string
    dateSortie:Date
    arme_Id?:number
    materiauxAmeliorationPersonnage_Id:number
    produit_Id:number
    rarete:number
}

export interface PersonnagesForm{
    nom:string,
    oeilDivin:string
    typeArme:string
    lore:string
    nationalite:string
    trailerYT:string
    dateSortie:Date
    armeId?:number
    materiauxAmeliorationPersonnageId:number
    produitId:number
    rarete:number
    selectedLivres:number[]
    selectedMatsElevation:number[]
    selectedMatsAmelioPersosArmes:number[]
}