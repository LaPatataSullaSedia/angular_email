import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SendComponent } from './send/send.component';
import { Email } from './send/email.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,SendComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'marro';
  emails:Email[]
  constructor(){
    this.emails = [
      new Email("adolf@gmail.com", "spagna", "come ocnquistare"),
      new Email("mussolini@gmail.com", "libia", "come perdere"),
      new Email("iroito@gmail.com", "cina", "come commettere crimini di guerra")
    ]
  }

  sendMail(ricevente: HTMLInputElement, oggetto: HTMLInputElement, testo:HTMLInputElement){
    console.log(`mando email: ${ricevente.value} con oggetto: ${oggetto.value}  e testo: ${testo.value}`);
    this.emails.push(new Email(ricevente.value, oggetto.value,testo.value));
    ricevente.value = '';
    oggetto.value = '';
    testo.value = '';
  }
}
