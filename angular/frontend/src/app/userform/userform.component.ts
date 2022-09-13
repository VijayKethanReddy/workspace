import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import User from '../entity/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit{
  user:User= new User('Ram', 20, 'ram@gmail.com');
  users: any = [];
  constructor(public userService: UserService) { }
  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    const observable = this.userService.getUsers();
    observable.subscribe(users=>{
      this.users = users;
    })
  }

  deleteUser(userId: number){
    const observable = this.userService.deleteUser(userId);
    observable.subscribe((response)=>{
      this.getUsers();
    })
  }
  
  save(){
    console.log("clicked");
    const observable = this.userService.saveUser(this.user);
    observable.subscribe((response)=>{
      console.log(response);
    },
    (error)=>{
      alert('Something went wrong');
    })
  }

}
