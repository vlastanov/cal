import { Component, OnInit, Input } from '@angular/core';
import { Prozorec, Staklopaket } from '../obshta';

@Component({
  selector: 'app-tablica',
  templateUrl: './tablica.component.html',
  styleUrls: ['./tablica.component.css']
})
export class TablicaComponent implements OnInit {

  @Input() tablicaProzorci;

  selectedProzorec: Prozorec;
  prozorec = new Prozorec();
  selectedPro: number;


  displayedColumns = ['id', 'width', 'height', 'type', 'shema', 'kartinka'];

  onSelect(prozorec: Prozorec): void {
    this.selectedProzorec = prozorec;
  }

  getSelected(prozorec: Prozorec): boolean {
    return prozorec.id === this.selectedPro;
  }

  constructor() { }

  ngOnInit() {
  }

}
