import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css'],
})
export class TriangleComponent implements OnInit {
  constructor() {}
  area1!: number;
  perimeter1!: number;
  area2!: number;

  area3!: number;

  calculateTriangle = new FormGroup({
    edge1: new FormControl(),
    edge2: new FormControl(),
    edge3: new FormControl(),
    angle1: new FormControl(),
    angle2: new FormControl(),
    angle3: new FormControl(),
    height1: new FormControl(),
    height2: new FormControl(),
    height3: new FormControl(),
  });
  calculate3Edge() {
    let a = this.calculateTriangle.value.edge1;
    let b = this.calculateTriangle.value.edge2;
    let c = this.calculateTriangle.value.edge3;
    this.perimeter1 = a + b + c;

    let u = this.perimeter1 / 2;
    let x = u * (a - u) * (b - u) * (c - u) * -1;
    this.area1 = Math.sqrt(x);
  }
  calculate2Edge1Angle() {
    let a = this.calculateTriangle.value.edge1;
    let b = this.calculateTriangle.value.edge2;
    let c = this.calculateTriangle.value.angle3;
    this.area2 = 0.5 * a * b * Math.sin(c);
  }
  calculate1Edge1Heigth() {
    let ah = this.calculateTriangle.value.height1;
    let a = this.calculateTriangle.value.edge1;
    this.area3 = 0.5 * a * ah;
  }

  ngOnInit(): void {}
}
