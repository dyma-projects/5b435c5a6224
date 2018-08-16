import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() public compteurEnfant: number;
  @Output() public compteurParentEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("ngOnInit de Exercice1EnfantComponent. compteurEnfant:" + this.compteurEnfant);
  }

  increment(): void {
    this.compteurEnfant = this.compteurEnfant + 1;
    console.log("increment this.compteurEnfant:" + this.compteurEnfant);
    this.compteurParentEvent.emit(this.compteurEnfant);
  }

  decrement(): void {
    this.compteurEnfant = this.compteurEnfant - 1;
    console.log("decrement this.compteurEnfant:" + this.compteurEnfant);
    this.compteurParentEvent.emit(this.compteurEnfant);
  }

}
