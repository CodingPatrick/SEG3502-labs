export class Item {
    public nom: string;
    public nombre: string;

    constructor(nom: string, nombre: string){
        this.nom = nom;
        this.nombre = nombre;
    } 

    public ajouter(){
        this.nombre = String(Number(this.nombre) + 1)
    }

    public enlever(){
        this.nombre = String(Number(this.nombre) - 1)
    }

    public montrer(): string {
       return `${this.nombre} ${this.nom}`
    }
}
