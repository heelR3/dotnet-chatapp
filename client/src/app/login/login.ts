import { Component, inject, signal, Signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../services/auth';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiResponse } from '../models/api-response';
import { Router, RouterLink } from '@angular/router';
import { Button } from "../components/button/button";

@Component({
  selector: 'app-login',
  imports: [MatFormFieldModule, FormsModule, MatIconModule, MatInputModule, MatButtonModule, RouterLink, Button],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email!:string;
  password!:string;

  authService = inject(AuthService);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  hide = signal(false);

  login(){
    this.authService.isLoading.set(true);
    this.authService.login(this.email, this.password).subscribe({
      next:()=>{
        this.authService.me().subscribe();
        this.snackBar.open("Logged in successfully", 'Close', {
          duration: 500,
        });
        this.authService.isLoading.set(false);
      },
      error:(err:HttpErrorResponse)=>{
        let error = err.error as ApiResponse<string>;
        this.snackBar.open(error.error, "Close", {
          duration: 1000,
        });
        this.authService.isLoading.set(false);
      },
      complete:()=>{
        this.router.navigate(["/"]);
        this.authService.isLoading.set(false);
      }
    });

  }

  togglePassword(event:MouseEvent){
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
