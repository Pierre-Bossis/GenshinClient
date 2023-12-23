export interface Aptitudes {
    id:number
    nom:string
    description:string
    isAptitudeCombat:boolean
    icone:string
    personnage_Id:number
}

export interface AptitudesForm {
    nom:string
    description:string
    isAptitudeCombat:boolean
    personnage_Id:number
}
