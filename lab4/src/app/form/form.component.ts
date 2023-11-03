import { Component, OnInit } from '@angular/core';
import { List } from './list';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { }

  list = [new List("Patrick", "Loranger", "6135555555", "plora079@uottawa.ca")]

  ajouter(prenom: string, nom: string, telephone: string, email: string) {
    for(let i = 0; i < this.list.length; i++) {
      if(this.list[i].prenom == prenom && this.list[i].nom == nom && this.list[i].telephone == telephone && this.list[i].email == email) {
        alert("Ce contact est déjà dans le tableau.")
        return false;
      }
    }
    this.list.push(new List(prenom, nom, telephone, email));
    return true;
  }

  check(prenom: string, nom: string, telephone: string, email: string){
    var checkPrenom = this.validatePrenom(prenom);
    var checkNom = this.validateNom(nom);
    var checkTelephone = this.validateTelephone(telephone);
    var checkEmail = this.validateEmail(email);

    if(checkPrenom == true && checkNom == true && checkTelephone == true && checkEmail == true) {
      this.ajouter(prenom, nom, telephone, email);
    } else {
      alert("Il y a une ou plusieurs erreurs dans le formulaire, il serait important de vérifier les entrées.");
    }
  }

  validatePrenom(prenom: string) {
    if(prenom.length == 0) {
      document.getElementById("invalid-feedback-prenom")!.innerHTML = "ERREUR: Entrez votre prenom.";
      return false;
    }
    document.getElementById("invalid-feedback-prenom")!.innerHTML = "";
    return true;
  }

  validateNom(nom: string) {
    if(nom.length == 0) {
      document.getElementById("invalid-feedback-nom")!.innerHTML = "ERREUR: Entrez votre nom.";
      return false;
    }
    document.getElementById("invalid-feedback-nom")!.innerHTML = "";
    return true;
  }

  validateTelephone(telephone: string) {
    var Regex = /^\(?([1-9]{4})\)?[-.●]?([0-9]{2})[-.●]?([0-9]{4})$/;
    if(Regex.test(telephone) == false) {
      document.getElementById("invalid-feedback-telephone")!.innerHTML = "ERREUR: Entrez un numéro de téléphone valide.";
      return false;
    }
    document.getElementById("invalid-feedback-telephone")!.innerHTML = "";
    return true;
  }

  validateEmail(email: string) {
    var Regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(Regex.test(email) == false) {
      document.getElementById("invalid-feedback-email")!.innerHTML = "ERREUR: Entrez un email valide.";
      return false;
    }
    document.getElementById("invalid-feedback-email")!.innerHTML = "";
    return true;
  }

}
