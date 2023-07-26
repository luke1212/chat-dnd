import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from "../services/user.service";
import { Subscription } from 'rxjs';
import { User } from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  private usersSub!: Subscription;
  users: User[] = [];

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers();
    this.usersSub = this.userService.getUserUpdateListener().subscribe(
      (users: User[]) => {
        this.users = users;
      }
    )
  }

  // Add user when click on submit button
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.userService.addUser(form.value.username, form.value.password);
    form.resetForm();
  }

  // Delete user by id when click onDelete button
  onDelete(userId: string) {
    console.log("Delete user id: " + userId);
    this.userService.deleteUser(userId);
  }

  // Unsubscribe when component destroyed
  ngOnDestroy(): void {
    this.usersSub.unsubscribe();
  }
}
