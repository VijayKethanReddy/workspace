import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from './entity/User';
const API_URL = 'http://localhost:8082/user/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public client: HttpClient) { }

  saveUser(user: User){
    return this.client.post(API_URL, user);
  }

  getUsers(){
    return this.client.get(API_URL);
  }

  deleteUser(userId: number){
    return this.client.delete(API_URL+ userId);
  }
}
