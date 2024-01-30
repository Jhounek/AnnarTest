import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { User, dataUser } from '../interfaces/user.interface';
import { Observable, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl: string = 'https://jsonplaceholder.typicode.com/';

  constructor(
    private http: HttpClient,
  ) { }


  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getUserById(id:number):Observable<User|undefined>{
    return this.http.get<User>(`${this.baseUrl}/users/${id}`)
    .pipe(
      catchError( Error => of(undefined))
    );
  }

  createUser(user:dataUser):Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/users`, user);
  }


}
