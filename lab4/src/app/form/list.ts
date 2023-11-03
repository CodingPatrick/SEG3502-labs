export class List {

    public prenom: string;
    public nom: string;
    public telephone: string;
    public email: string;

    constructor(prenom: string, nom: string, telephone: string, email: string) {
        this.prenom = prenom;
        this.nom = nom;
        this.telephone = telephone;
        this.email = email;
    }

    public show(): string {
        return `${this.prenom}, ${this.nom}, ${this.telephone}, ${this.email}`
    }

    public showPrenom(): string {
        return `${this.prenom}`
    }

    public showNom(): string {
        return `${this.nom}`
    }

    public showTelephone(): string {
        return `${this.telephone}`
    }

    public showEmail(): string {
        return `${this.email}`
    }

}
