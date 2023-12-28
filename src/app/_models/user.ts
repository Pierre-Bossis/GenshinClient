export interface RegisterForm {
    username : string
    email : string
    motDePasse:string
  }
  
  export interface ConnectedUser {
    id : string
    username : string
    email:string
    role : string
    avatar_Id:number
  }

  export interface LoginForm{
    email:string
    motDePasse:string
  }