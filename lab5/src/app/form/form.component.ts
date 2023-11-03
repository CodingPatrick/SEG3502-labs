import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  ngOnInit(): void { }
  items: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {
    this.items = firestore.collection('list').valueChanges();
  }

  check(prenom: string, nom: string, telephone: string, email: string){
    var checkPrenom = this.validatePrenom(prenom);
    var checkNom = this.validateNom(nom);
    var checkTelephone = this.validateTelephone(telephone);
    var checkEmail = this.validateEmail(email);
    if(checkPrenom == true && checkNom == true && checkTelephone == true && checkEmail == true) {
      this.firestore.collection('list').add({prenom: prenom, nom: nom, telephone: telephone, email: email})
    } else {
      alert("Il y a une ou plusieurs erreurs dans le formulaire, il serait important de vérifier les entrées.");
    }
  }

  validatePrenom(prenom: string) {
    if(prenom.length == 0) {
      document.getElementById("invalid-feedback-prenom")!.innerHTML = "ERREUR: Entrez une donnée.";
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
