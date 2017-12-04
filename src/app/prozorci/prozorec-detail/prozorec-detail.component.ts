import { Component, OnInit, Input } from '@angular/core';
import { Prozorec } from '../prozorci.component';
import { ProzorecService } from '../prozorec.service';

@Component({
  selector: 'app-prozorec-detail',
  templateUrl: './prozorec-detail.component.html',
  styleUrls: ['./prozorec-detail.component.css']
})
export class ProzorecDetailComponent implements OnInit {
  @Input()
  prozorec: Prozorec;

  constructor(
    private prozorecService: ProzorecService) { }

  ngOnInit() {
  }

}
