import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styles: [
  ]
})
export class UserCardComponent implements OnInit {

  @Input() public user!: User;

  constructor(
    private userService: UserService
  ){

  }

  ngOnInit(): void {
    if (!this.user) throw Error('User data wasnt found');
  }

  findUser(id:number):void{
    this.userService.getUserById(id).subscribe(user =>{
      console.log(user);
    })
  }

}
