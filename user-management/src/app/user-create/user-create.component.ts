// src/app/user-create/user-create.component.ts
import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  user: User = new User();

  constructor(private userService: UserService) { }

  onSubmit(): void {
    this.userService.createUser(this.user).subscribe(response => {
      console.log('User created:', response);
      this.user = new User();
    });
  }
}
