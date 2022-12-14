import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    this.auth.admin().subscribe(res=>{
      console.log(JSON.parse(JSON.stringify(res)));
    })
  }

}
