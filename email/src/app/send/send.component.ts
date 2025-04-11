import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Email } from './email.model';


@Component({
  selector: 'app-send',
  imports: [AppComponent],
  templateUrl: './send.component.html',
  styleUrl: './send.component.css'
})
export class SendComponent implements OnInit {
  @Input() mail:Email
  constructor(){
    this.mail = new Email("", "", "")
  }

  ngOnInit() {}

}
