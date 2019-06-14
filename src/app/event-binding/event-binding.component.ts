import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  buttonname = "My button";
  i = 0;
  spinnerMode = "determinate";
  btnEnable = true;
  selectDisabled = false;
  selectedOption = 1;

  save() {
    console.log("click save");
  }

  inc() {
    this.i++;
    this.buttonname = "" + this.i;
  }

  disable() {
    this.btnEnable = false;
    this.spinnerMode = "indeterminate";
    setTimeout( () => {
      this.btnEnable = true;
      this.spinnerMode = "determinate";
    }, 3000);
  }

  cbChange (event) {
    console.log(event.checked);
    this.selectDisabled = event.checked;
  }

  selectionChange (event) {
    console.log(event.value);
    this.selectedOption = event.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
