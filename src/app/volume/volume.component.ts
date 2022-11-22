import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css'],
})
export class VolumeComponent implements OnInit {
  rectengularPrismVolume!: number;
  sphereVolume!: number;
  coneVolume!: number;
  pyramidVolume!: number;

  elementsOfPyrism = new FormGroup({
    edge1: new FormControl(),
    edge2: new FormControl(),
    edge3: new FormControl(),
    height: new FormControl(),
    radius: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}

  VolumeOfRectanguler() {
    let a = this.elementsOfPyrism.value.edge1;
    let b = this.elementsOfPyrism.value.edge2;
    let c = this.elementsOfPyrism.value.edge3;
    if (a == null || b == null || c == null) {
      this.rectengularPrismVolume = 0;
    }
    this.rectengularPrismVolume = a * b * c;
  }
  VolumeOfPyramid() {
    let a = this.elementsOfPyrism.value.edge1;
    let b = this.elementsOfPyrism.value.edge2;
    let h = this.elementsOfPyrism.value.height;
    if (a == null || b == null || h == null) {
      this.pyramidVolume = 0;
    }
    this.pyramidVolume = (a * b * h) / 3;
  }
  VolumeOfCone() {
    let r = this.elementsOfPyrism.value.radius;
    let h = this.elementsOfPyrism.value.height;
    if (r == null || h == null) {
      this.coneVolume = 0;
    }
    this.coneVolume = (Math.PI * r * r * h) / 3;
  }
  VolumeOfSphere() {
    let r = this.elementsOfPyrism.value.radius;
    if (r == null) {
      this.sphereVolume = 0;
    }
    this.sphereVolume = (4 / 3) * Math.PI * r * r * r;
  }
}
