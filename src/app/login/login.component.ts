import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    pswd :''

  }
  

  // Submit function
  submit(){
    this.authService.authen(this.user).subscribe((result)=>{
      localStorage.setItem('token',result.token);
      this.router.navigate(['']);
      console.log(result.token);
      console.log('Success');
    })
  }

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

}
