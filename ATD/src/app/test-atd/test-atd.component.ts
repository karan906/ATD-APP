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

 public sensorStatus: string = 'GGGGGGGGG'; // Default Sensor Status
 public sensors: { status: string }[] = [];
 public error: string = '';

  constructor() {
    this.updateSensors();
  }

  updateSensors() {
    if (this.sensorStatus.length !== 9) {
      this.error = 'Input must be 9 characters long.';
      return;
    }

    if (!/^[GRY]+$/.test(this.sensorStatus)) {
      this.error = 'Input must contain only G, R, or Y characters.';
      return;
    }
    this.error = '';

    this.sensors = this.sensorStatus.split('').map(status => ({ status }));
  }

}
