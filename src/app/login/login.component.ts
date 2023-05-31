import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public userService: UserService) { }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.userService.addUser(form.value.username, form.value.password);
    form.resetForm();
  }
}
