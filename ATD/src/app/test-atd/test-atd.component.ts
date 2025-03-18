import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-atd',
  imports: [FormsModule, CommonModule],
  templateUrl: './test-atd.component.html',
  styleUrl: './test-atd.component.scss'
})
export class TestAtdComponent {

 public sensorDefaultValue: string = 'GGGGGGGGG'; 
 public sensors: { status: string }[] = [];
 public errorMsg: string = '';

  constructor() {
    this.sensorsUpdated();
  }

  sensorsUpdated() {
    if (this.sensorDefaultValue.length !== 9) {
      this.errorMsg = 'Input must be 9 characters long.';
      return;
    }
    if (!/^[GRY]+$/.test(this.sensorDefaultValue)) {
      this.errorMsg = 'Input must contain only G, R, or Y characters.';
      return;
    }
    this.errorMsg = '';
    this.sensors = this.sensorDefaultValue.split('').map(status => ({ status }));
  }

}
