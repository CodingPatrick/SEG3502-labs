import { Component, Input, OnInit } from '@angular/core';
import { Contact } from './contact';
import { ContactService } from './service/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  data: Contact[] = [];

  constructor(
    private contactService: ContactService
  ) { }


  ngOnInit() { 
    this.contactService.getContact().forEach( (next) => {
      for (let i = 0; i < next.data.contacts.length; i++){
        let c = next.data.contacts[i]
        this.data.push(new Contact(c.prenom, c.nom, c.telephone, c.email))
      }
    })
  }

  check(prenom: string, nom: string, telephone: string, email: string){
    var checkPrenom = this.validatePrenom(prenom);
    var checkNom = this.validateNom(nom);
    var checkTelephone = this.validateTelephone(telephone);
    var checkEmail = this.validateEmail(email);
    if(checkPrenom == true && checkNom == true && checkTelephone == true && checkEmail == true) {
      let newList = new Contact(prenom, nom, telephone, email);
      this.data.push(newList);
      this.contactService.addContact(newList).subscribe(_ => {});
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
