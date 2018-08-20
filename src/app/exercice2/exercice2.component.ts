import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;

  @ViewChild('someInput')
  someInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  changeValeur() {
    console.log("change valeur en " + this.someInput.nativeElement.value);
    this.valeur = this.someInput.nativeElement.value;
  }

}
