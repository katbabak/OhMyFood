export class User {
  id?: string;
  email: string;
  password: string;
  name: string;
  // gender: Gender;
  gender: number;
  age: number;
  height: number;
  weight: number;
  // activity: Activity;
  activity: number;
  // kpcf?: KPCF
  private kpcf?: number[];

  /* set kpcf(userParams: number[]) {

  } */

  setKPCF(
    age: number,
    height: number,
    weight: number,
    gender: number,
    activity: number
  ) {
    let coeff: number;
    let kilocalories: number;
    let proteins: number;
    let carbohydrates: number;
    let fats: number;
  
    switch (activity) {
      case 0:
        coeff = 1.2;
        break; // low
      case 1:
        coeff = 1.4;
        break; // medium
      case 2:
        coeff = 1.46;
        break; // high
    }
  
    if (gender === 0) { // male
      kilocalories = weight * 9.99 + height * 6.25 - age * 4.92 + 5 * coeff;
      proteins = kilocalories * 0.2;
      carbohydrates = kilocalories * 0.5;
      fats = kilocalories * 0.3;
    } else { // female
      kilocalories = weight * 9.99 + height * 6.25 - age * 4.92 - 161 * coeff;
      proteins = kilocalories * 0.2;
      carbohydrates = kilocalories * 0.5;
      fats = kilocalories * 0.3;
    }
  
    this.kpcf = [kilocalories, proteins, carbohydrates, fats];
  }
}

export enum Gender {
  male,
  female
}

export enum Activity {
  low,
  medium,
  high
}

export enum KPCF {
  calories,
  proteins,
  carbohydrates,
  fats
}