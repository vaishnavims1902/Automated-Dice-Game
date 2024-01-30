import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.scss'
})
export class DiceComponent {
  dice1:number=0;
  dice2:number=0;
  max:number=6;
  min:number=1;
  rollDices() {
    this.dice1 = Math.floor(Math.random()* (this.max - this.min + 1)) + this.min;
    this.dice2 = Math.floor(Math.random()* (this.max - this.min + 1)) + this.min;
  }

}
