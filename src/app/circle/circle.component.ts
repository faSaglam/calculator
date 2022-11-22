import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css'],
})
export class CircleComponent implements OnInit {
  constructor() {}
  circumference!: number;
  area!: number;
  circumferenreEllipse!: number;
  areaEllipse!: number;

  calculateCircle = new FormGroup({
    diameter: new FormControl(),

    isDiameter: new FormControl(),
  });

  calculateEllipse = new FormGroup({
    minorAxis: new FormControl(),
    majorAxis: new FormControl(),
  });

  calculate() {
    let x = this.calculateCircle.value.diameter;
    if (!this.calculateCircle.value.isDiameter) {
      this.circumference = Math.PI * x * 2;
      this.area = Math.PI * x * x;
    } else {
      this.circumference = Math.PI * x;
      this.area = Math.PI * ((x / 2) * (x / 2));
    }
  }
  calculateE() {
    let a = this.calculateEllipse.value.majorAxis;

    let b = this.calculateEllipse.value.minorAxis;

    if (a && b != 0 && a && b != null) {
      let c = (a * a + b * b) / 2;
      this.areaEllipse = Math.PI * a * b;
      this.circumferenreEllipse = 2 * Math.PI * Math.sqrt(c);
    }
  }

  ngOnInit() {}
}
