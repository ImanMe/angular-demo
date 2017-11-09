import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  log(x) {
    console.log("hey");
  }
  submit(y) {
    console.log(y.value);
  }

  paymentMethods = [
    { id: 1, name: "Email" },
    { id: 2, name: "Paypal" },
    { id: 3, name: "Cash at delivery" }
  ];
}
