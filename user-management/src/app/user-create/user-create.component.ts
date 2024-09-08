// user-create.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = this.userForm.value as User;
      this.userService.createUser(user).subscribe({
        next: (response) => {
          console.log('User created:', response);
          this.snackBar.open('User created successfully!', 'Close', { duration: 3000 });
          this.userForm.reset();
        },
        error: (error) => {
          console.error('Error creating user:', error);
          this.snackBar.open('Error creating user. Please try again.', 'Close', { duration: 3000 });
        }
      });
    }
  }
}
