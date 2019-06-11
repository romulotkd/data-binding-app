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
    lastname: " Lacerda"
  }
  constructor() { }

  ngOnInit() {
  }

}
