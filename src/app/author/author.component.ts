import { AuthorService } from './../author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  title = "Authors";
  authors;
  noOfAuthors;
  constructor(service: AuthorService) {
    this.authors = service.getAuthors();
    this.noOfAuthors = this.authors.length;
  }
}
