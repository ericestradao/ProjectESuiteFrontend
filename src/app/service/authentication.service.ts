import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


export class User{
  constructor(
    public status:string,){}
}

export class JwtResponse{
  constructor(public jwttoken:string,){}
}

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json',
    'Authorization': 'my-jwt-token'
    })
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient)  {}
   authenticate(username:string, password:string): Observable<any>{
     //sessionStorage.setItem("username", username)
    return this.httpClient.post<any>('http://localhost:8080/authenticate',JSON.stringify({"username": username, "password": password}), httpOptions)

}
isUserLoggedIn(){
  let user=sessionStorage.getItem('username')
  return !(user == null)
  

}

isAdmin(){
  if(sessionStorage.getItem('username')==='eric.estrada.o@outlook.com'){
    return true
  }
}

logOut(){
  sessionStorage.removeItem('username')
  sessionStorage.removeItem('token')
}

}
