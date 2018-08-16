import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public compteur: number = 23;

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit de Exercice1Component. compteur:" + this.compteur);
  }

  public compteurParent(cmpTransmit: number): void {
    console.log("compteurParent : event.value:" + cmpTransmit);
    this.compteur = cmpTransmit;
  }

}
