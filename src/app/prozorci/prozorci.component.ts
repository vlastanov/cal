import { Component, OnInit } from '@angular/core';
import { ProzorecService } from './prozorec.service';
import { Prozorec, Staklopaket2, Staklopaket, Kommerling76, Kbe, Profil, tipoveShema, tipoveProzorec } from './obshta';

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

  prozorci: Prozorec[] = [];
  tipoveProzorec = tipoveProzorec;
  tipoveShema = tipoveShema;
  count = 0;

  staklopaket2: Staklopaket2 = new Staklopaket2();

  prozorecForm: FormGroup;

  constructor(private prozorecService: ProzorecService) { }


  onClickMe(val: any) {
    this.kartinka = val;
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

    this.prozorci = this.prozorecService.getProzorci();
  }

  onSubmit() {
    const id = this.count++;
    const proz = new Prozorec(id,
      this.width.value,
      this.height.value,
      this.type.value,
      this.shema.value,
      this.kartinka);

    this.prozorci.push(proz);

    this.staklopaket2.calculateStaklopaket(proz);

  }



}


