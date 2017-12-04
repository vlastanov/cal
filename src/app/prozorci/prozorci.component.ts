import { Component, OnInit } from '@angular/core';
import { ProzorecService } from './prozorec.service';

import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import {
  FormBuilder, FormControl,
  FormGroup, Validators, AbstractControl
} from '@angular/forms';

@Component({
  selector: 'app-prozorci',
  templateUrl: './prozorci.component.html',
  styleUrls: ['./prozorci.component.css']
})
export class ProzorciComponent implements OnInit {

  get id() { return this.prozorecForm.get('id'); }
  get type() { return this.prozorecForm.get('type'); }
  get shema() { return this.prozorecForm.get('shema'); }
  get width() { return this.prozorecForm.get('width'); }
  get height() { return this.prozorecForm.get('height'); }
  kartinka: number;

  selectedProzorec: Prozorec;
  displayedColumns = ['id', 'width', 'height', 'type', 'shema', 'kartinka'];


  prozorci: Prozorec[] = [];
  tipoveProzorec = tipoveProzorec;
  tipoveShema = tipoveShema;

  prozorec = new Prozorec();
  count = 0;
  staklopaket: Staklopaket = new Staklopaket();


  prozorecForm: FormGroup;
  selectedPro: number;

  constructor(private prozorecService: ProzorecService) { }

  onSelect(prozorec: Prozorec): void {
    this.selectedProzorec = prozorec;
  }

  onClickMe(val: any) {
    this.kartinka = val;
  }

  getSelected(prozorec: Prozorec): boolean {
    return prozorec.id === this.selectedPro;
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('width').value === g.get('height').value
      ? null : { 'mismatch': true };
  }

  ngOnInit() {
    this.prozorecForm = new FormGroup({
      'width': new FormControl('', [Validators.min(250), Validators.max(2500)]),
      'height': new FormControl('', [Validators.min(250), Validators.max(2500)]),
      'type': new FormControl('', [Validators.required]),
      'shema': new FormControl('', [Validators.required]),
    }, this.passwordMatchValidator);



    return this.prozorecService.getProzorci()
      .subscribe(prozorci => this.prozorci = prozorci);

  }

  onSubmit(val: any) {
    const id = this.count++;
    this.prozorci.push(new Prozorec(
      id,
      this.width.value,
      this.height.value,
      this.type.value,
      this.shema.value,
      this.kartinka));

    this.calculateStaklopaket();

  }

  calculateByShema(profil: Profil): void {
    switch (this.shema.value) {
      case 'fix': {
        const razlikaLqvoDqsnoGoreDolu = profil.kasaDebelina - profil.zastapStaklopaketKasa;

        this.staklopaket.width = this.width.value - 2 * razlikaLqvoDqsnoGoreDolu;
        this.staklopaket.height = this.height.value - 2 * razlikaLqvoDqsnoGoreDolu;
        break;
      }
      case 'ednokril': {

        const razlikaLqvoDqsnoGoreDolu = profil.kasaDebelina
          + (profil.kriliDebelina - profil.zastapKriloKasa)
          - profil.zastapStaklopaketKasa;

        this.staklopaket.width = this.width.value - 2 * razlikaLqvoDqsnoGoreDolu;
        this.staklopaket.height = this.height.value - 2 * razlikaLqvoDqsnoGoreDolu;
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

        this.staklopaket.width = this.width.value / 2 - (razlikaLqvo + razlikaDqsno);
        this.staklopaket.height = this.height.value - 2 * razlikaGoreDolu;
        break;
      }
      default: {
        break;
      }
    }
  }

  calculateStaklopaket() {
    switch (this.type.value) {
      case 'KBE': {
        this.calculateByShema(new Kbe());
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

