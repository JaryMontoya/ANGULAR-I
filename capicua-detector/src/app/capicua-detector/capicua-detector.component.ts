import { Component } from '@angular/core';

@Component({
  selector: 'app-capicua-detector',
  templateUrl: './capicua-detector.component.html',
  styleUrls: ['./capicua-detector.component.css']
})
export class CapicuaDetectorComponent {
  inputValue: string = '';
  message: string = '';

  checkCapicua(value: string): void {
    const num = value.replace(/\D/g, ''); // Elimina cualquier carácter no numérico
    if (num.length > 1) {
      const reversedNum = num.split('').reverse().join('');
      if (num === reversedNum) {
        this.message = `${num} es un número capicúa`;
      } else {
        this.message = `${num} no es un número capicúa`;
      }
    } else {
      this.message = '';
    }
  }
}
