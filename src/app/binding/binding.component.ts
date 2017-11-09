import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  source = 'http://lorempixel.com/300/100/';
  title = 'Binding Demo';
  altText = 'Sample Image';
  isActive = true;
  btnText = "Active";
  email = "iman@yahoo.com";
  emailUnderline = "";

  onKeyup(email) {
    this.emailUnderline = email;
  }

  onClick() {
    this.isActive = !this.isActive;
    this.btnText = this.btnText == "Active" ? "InActive" : "Active";
  }
}
