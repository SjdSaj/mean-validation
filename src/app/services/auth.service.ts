import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { 

  }

  authen(user:any){
    return this.http.post<any>('http://localhost:3000/login',{'users':user});
  }

  loginCheck(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
  admin(){
    return this.http.get('http://localhost:3000/admin');
  }
}
