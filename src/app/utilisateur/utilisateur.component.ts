import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  users = [
    { name: "Cyriak", age: 29 },
    { name: "Marie", age: 35 },
    { name: "Benoit", age: 25 }];

  img = "https://www.18h39.fr/wp-content/uploads/2019/04/chat-trop-chou-1250x550.jpg";

  number = 3.1457868;

  constructor() { }

  sayHello = (user: string): void => {
    alert(`${user} vous dit hello`);
  }

  ngOnInit() {
  }

}
