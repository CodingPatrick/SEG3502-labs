import { Component, OnInit } from '@angular/core';
import { Item } from '../ajouter/item';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.css']
})

export class SupprimerComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {}

  items = [new Item("pommes", "5"), new Item("oeufs", "12"), new Item("pain", "1")];
  
  ajouter(ajoute: string){
    for(let i = 0; i < this.items.length; i++) {
      if(this.items[i].nom.toLowerCase() === ajoute.toLowerCase()) {
        return this.items[i]!.ajouter()
      }
    }
    this.items.push(new Item(ajoute, "1"))
  }

  supprimer = (supprime: string): void => {
    for(let i = 0; i < this.items.length; i++) {
      if(this.items[i].nom === supprime ) {
        if (this.items[i].nombre === "1"){
          this.items.splice(i, 1)
          break;
        }
        return this.items[i].enlever()
      }
    }
  }
}