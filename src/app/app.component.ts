import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RetypeConfirm } from './validators/retype-confirm.validator';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  password : FormControl;
  retypePassword : FormControl;
  constructor() {
    this.password = new FormControl('asdfgh', [Validators.required]);
    this.retypePassword = new FormControl('asdfghj', [Validators.required, RetypeConfirm(this.password.value)]);
  }

  ngOnInit() {
  }
}
