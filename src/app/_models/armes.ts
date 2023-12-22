export interface Armes {
    id:number
    nom:string
    typeArme:string
    description:string
    icone:string
    image:string
    nomStatPrincipale:string
    valeurStatPrincipale:number
    effetPassif:string
    atqBase:number
    rarete:number
}

export interface ArmesForm {
    nom:string
    typeArme:string
    description:string

    nomStatPrincipale:string
    valeurStatPrincipale:number
    effetPassif:string
    atqBase:number
    rarete:number
    selectedMats:number[]
    selectedMatsAmelio:number[]
}
