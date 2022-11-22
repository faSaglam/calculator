import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css'],
})
export class RectangleComponent implements OnInit {
  perimeter1!: number;
  area1!: number;
  perimeter2!: number;
  area2!: number;
  perimeter3!: number;
  area3!: number;
  area4!: number;
  elementsOfRectangle = new FormGroup({
    edge1: new FormControl(),
    edge2: new FormControl(),
    edge3: new FormControl(),
    edge4: new FormControl(),
    height1: new FormControl(),
    diagonal1: new FormControl(),
    diagonal2: new FormControl(),
    angle: new FormControl(),
  });

  constructor() {}
  calculateRectangle() {
    let a = this.elementsOfRectangle.value.edge1;
    let b = this.elementsOfRectangle.value.edge2;

    this.perimeter1 = (a + b) * 2;
    this.area1 = a * b;
  }
  calculateParallelEdge() {
    let a = this.elementsOfRectangle.value.edge1;
    let b = this.elementsOfRectangle.value.edge2;
    let ah = this.elementsOfRectangle.value.height1;
    this.area2 = a * ah;
    this.perimeter2 = (a + b) * 2;
  }
  calculateTrapezoid() {
    let a = this.elementsOfRectangle.value.edge1;
    let b = this.elementsOfRectangle.value.edge2;
    let c = this.elementsOfRectangle.value.edge3;
    let d = this.elementsOfRectangle.value.edge4;
    let h = this.elementsOfRectangle.value.height1;
    let m = a * c * 0.5;
    this.perimeter3 = a + b + c + d;
    this.area3 = m * h;
  }
  calculateAreaWithDiagonals() {
    let angle = this.elementsOfRectangle.value.angle;
    let d1 = this.elementsOfRectangle.value.diagonal1;
    let d2 = this.elementsOfRectangle.value.diagonal2;
    let x = this.elementsOfRectangle.value.angle;
    if (angle == 90) {
      x = 1;
    }
    this.area4 = d1 * d2 * Math.sin(x);
  }

  ngOnInit(): void {}
}
