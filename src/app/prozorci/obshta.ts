import { Output, EventEmitter } from '@angular/core';

export class Prozorec {
  constructor(
    public id?: number,
    public width?: number,
    public height?: number,
    public type?: string,
    public shema?: string,
    public kartinka?: number
  ) { }
}


export const tipoveProzorec = [
  { value: 'KBE', viewValue: 'KBE' },
  { value: 'Kommerling 76', viewValue: 'Kommerling 76' },
  { value: 'KMG 4', viewValue: 'KMG 4' }
];

export const tipoveShema = [
  { value: 'ednokril', viewValue: 'еднокрил', },
  { value: 'dvukril', viewValue: 'двукрил' },
  { value: 'fix', viewValue: 'фикс' }
];


export interface Profil {
  kasaDebelina: number;
  kriliDebelina: number;
  letqshDelitelDebelina: number;
  zastapStaklopaketKasa: number;
  zastapKriloKasa: number;
  zastapLetqshDelitelKrilo: number;

}

export class Kbe implements Profil {
  kasaDebelina = 63;
  kriliDebelina = 77;
  letqshDelitelDebelina = 64;
  zastapStaklopaketKasa = 15;
  zastapKriloKasa = 28;
  zastapLetqshDelitelKrilo = 28;
}


export class Kommerling76 implements Profil {
  kasaDebelina = 67;
  kriliDebelina = 78;
  letqshDelitelDebelina = 66;
  zastapStaklopaketKasa = 16;
  zastapKriloKasa = 29;
  zastapLetqshDelitelKrilo = 30;
}


export class Staklopaket {
  id = 0;
  width = 0;
  height = 0;
  type = '';
  shema = '';
}


export class Staklopaket2 {

  prozz: Prozorec;

  staklopaket: Staklopaket = new Staklopaket();


  calculateByShema(profil: Profil): void {
    switch (this.prozz.shema) {
      case 'fix': {
        const razlikaLqvoDqsnoGoreDolu = profil.kasaDebelina - profil.zastapStaklopaketKasa;

        this.staklopaket.width = this.prozz.width - 2 * razlikaLqvoDqsnoGoreDolu;
        this.staklopaket.height = this.prozz.height - 2 * razlikaLqvoDqsnoGoreDolu;
        break;
      }
      case 'ednokril': {

        const razlikaLqvoDqsnoGoreDolu = profil.kasaDebelina
          + (profil.kriliDebelina - profil.zastapKriloKasa)
          - profil.zastapStaklopaketKasa;

        this.staklopaket.width = this.prozz.width - 2 * razlikaLqvoDqsnoGoreDolu;
        this.staklopaket.height = this.prozz.height - 2 * razlikaLqvoDqsnoGoreDolu;
        console.log(this.staklopaket.width);
        break;
      }
      case 'dvukril': {
        const razlikaLqvo = profil.kasaDebelina
          + (profil.kriliDebelina - profil.zastapKriloKasa)
          - profil.zastapStaklopaketKasa;
        const razlikaDqsno = (profil.letqshDelitelDebelina - 2 * profil.zastapLetqshDelitelKrilo) / 2
          + profil.kriliDebelina
          - profil.zastapStaklopaketKasa;
        const razlikaGoreDolu = profil.kasaDebelina
          + (profil.kriliDebelina - profil.zastapKriloKasa)
          - profil.zastapStaklopaketKasa;

        this.staklopaket.width = this.prozz.width / 2 - (razlikaLqvo + razlikaDqsno);
        this.staklopaket.height = this.prozz.height - 2 * razlikaGoreDolu;
        break;
      }
      default: {
        break;
      }
    }
  }

  calculateStaklopaket(proz: Prozorec) {
    this.prozz = proz;
    switch (proz.type) {
      case 'KBE': {
        this.calculateByShema(new Kbe());
        console.log(this.staklopaket);
        break;
      }
      case 'Kommerling 76': {
        this.calculateByShema(new Kommerling76());
        break;
      }
      case 'KMG 4': {
        break;
      }
      default: {
        break;
      }
    }
  }
}

