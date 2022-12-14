import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    
  }

  constructor(public _auth : AuthService,private router : Router) { }

  ngOnInit(): void {
  }

}
