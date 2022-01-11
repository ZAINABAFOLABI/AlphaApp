export interface User{
  firstName:string,
  lastName:string,
  email:string,
  password:string,
  annualPlayBudget:{
    totalPlay:number,
    totalSpent:number,
    balance:number

  }
  annualWorkBudget:{
    totalWork:number,
    totalSpent:number,
    balance:number

  }
  totalCards:{
    cardsInUse:number,
    totalCards:number,
    inactive:number

  }
}
