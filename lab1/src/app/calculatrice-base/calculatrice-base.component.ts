import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice-base',
  templateUrl: './calculatrice-base.component.html',
  styleUrls: ['./calculatrice-base.component.css']
})
export class CalculatriceBaseComponent {
  premierValue = 0;
  deuxiemeValue = 0;
  resultatValue = 0;
  constructor() { }

  addition(value1: string, value2: string): void {
    this.premierValue = Number(value1);
    this.deuxiemeValue = Number(value2);
    this.resultatValue = this.premierValue + this.deuxiemeValue;
  }

  soustraction(value1: string, value2: string): void {
    this.premierValue = Number(value1);
    this.deuxiemeValue = Number(value2);
    this.resultatValue = this.premierValue - this.deuxiemeValue;
  }

  multiplication(value1: string, value2: string): void {
    this.premierValue = Number(value1);
    this.deuxiemeValue = Number(value2);
    this.resultatValue = this.premierValue * this.deuxiemeValue;
  }

  division(value1: string, value2: string): void {
    this.premierValue = Number(value1);
    this.deuxiemeValue = Number(value2);
    this.resultatValue = this.premierValue / this.deuxiemeValue;
  }

  clear(value1: string, value2: string): void {
    this.premierValue = 0;
    this.deuxiemeValue = 0;
    this.resultatValue = 0;
  }

}