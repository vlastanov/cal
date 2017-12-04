import { Component, OnInit, Input } from '@angular/core';
import { Prozorec } from '../prozorci.component';
import { ProzorecService } from '../prozorec.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prozorec-detail',
  templateUrl: './prozorec-detail.component.html',
  styleUrls: ['./prozorec-detail.component.css']
})
export class ProzorecDetailComponent implements OnInit {
  @Input()
  prozorec: Prozorec;

  constructor(
    private route: ActivatedRoute,
    private prozorecService: ProzorecService,
     private location: Location) { }

  ngOnInit() {
    // this.getProzorec();
  }

  // getProzorec(): void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.prozorecService.getProzorec(id)
  //     .subscribe(prozorec => this.prozorec = prozorec);
  // }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.prozorecService.updateHero(this.prozorec)
      .subscribe(() => this.goBack());
  }

}
