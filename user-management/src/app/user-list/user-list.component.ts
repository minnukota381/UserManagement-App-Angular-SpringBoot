// src/app/user-list/user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  // Method to edit a user
  editUser(id: number): void {
    console.log(`Edit user with ID: ${id}`);
    // Implement navigation or logic to edit the user
  }

  // Method to delete a user
  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
      console.log(`User with ID: ${id} deleted`);
    });
  }
}
