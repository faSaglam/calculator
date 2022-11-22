import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css'],
})
export class BasicComponent implements OnInit {
  numbers1: Array<any> = ['0', '1', '2'];
  numbers2: Array<any> = ['3', '4', '5'];
  numbers3: Array<any> = ['4', '5', '6'];
  numbers4: Array<any> = ['7', '8', '9'];
  symbols: Array<any> = ['+', '-', '*', '/'];
  show = '0';
  currentValue = '';

  constructor() {}

  ngOnInit() {}
  writeToInput(value: string) {
    this.currentValue = this.currentValue + value;
    this.show = this.currentValue;
  }
  equals() {
    this.show = eval(this.currentValue);
    this.currentValue = this.show;
  }
  clear() {
    this.currentValue = '';
    this.show = '0';
  }
  back() {
    this.currentValue = this.currentValue.slice(0, -1);

    this.show = this.currentValue;
    if (this.currentValue == '') {
      this.currentValue = '0';
    }
  }
}
