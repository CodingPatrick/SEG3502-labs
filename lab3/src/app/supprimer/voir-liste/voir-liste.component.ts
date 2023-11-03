import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../ajouter/item';

@Component({
  selector: 'app-voir-liste',
  templateUrl: './voir-liste.component.html',
  styleUrls: ['./voir-liste.component.css']
})
export class VoirListeComponent implements OnInit {

  @Input() item!: Item;
  @Input() supprimer!: (supprime: string) => void;

  constructor() { }
  ngOnInit(): void {}
}
