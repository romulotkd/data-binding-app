import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = "Romulo";
  age = 32;
  person = {
    firstname: "Juliana",
    lastname: " Lacerda",
    age: 13,
    address: "Rua Agostinho de Oliveira, 1046"
  }
  constructor() { }

  ngOnInit() {
  }

}
