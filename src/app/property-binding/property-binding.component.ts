import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  cor: string = "accent";
  cors = ['primary', 'accent', 'warn', ''];
  idx = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.idx = (this.idx + 1) % this.cors.length;
    },500);
  }

}
