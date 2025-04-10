import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-send',
  imports: [],
  templateUrl: './send.component.html',
  styleUrl: './send.component.css'
})
export class SendComponent {
  @HostBinding('attr.class') cssClass = 'card';
  ricevente: string;
  oggetto: string;
  testo: string;
  speciale: boolean;
  chiuso: boolean;
  constructor() {
    this.ricevente = 'Adolf@gmail.com';
    this.testo = 'yo bro droppo alcuni ebrei';
    this.oggetto = 'richiesta x bruciarne altri';
    this.speciale = false;
    this.chiuso = false;
  }
  chiudi() {
    this.votes += 1;
  }
  speciale() {
    this.votes -= 1;
  }
  ngOnInit() {}

}
