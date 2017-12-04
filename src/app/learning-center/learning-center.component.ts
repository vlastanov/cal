import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-learning-center',
  templateUrl: './learning-center.component.html',
})
export class LearningCenterComponent implements OnInit {

  temp = 5;

  constructor() { }

  getProductCount() {
    return 2;
  }

  ngOnInit() {
  }

}
