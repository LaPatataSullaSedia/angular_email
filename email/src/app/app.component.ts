import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sendMail(ricevente: HTMLInputElement, oggetto: HTMLInputElement, testo:HTMLInputElement): boolean {
    console.log(`mando email: ${ricevente.value} con oggetto: ${oggetto.value}  e testo: ${testo.value}`);
  return false;
  }
}
