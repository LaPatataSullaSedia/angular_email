export class Email{
    ricevente: string;
    oggetto: string;
    testo: string;

    constructor(ricevente: string, oggetto: string, testo:string){
        this.ricevente = ricevente
        this.oggetto = oggetto
        this.testo = testo
    }
}