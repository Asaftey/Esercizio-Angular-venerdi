import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user-models';
import { USERS } from 'src/app/models/mock-data';


@Component({
  selector: 'app-root-user-component',
  templateUrl: './root-user-component.component.html',
  styleUrls: ['./root-user-component.component.scss']
})
export class RootUserComponentComponent implements OnInit {

  users: IUser[] = USERS;


  constructor() { }

  ngOnInit(): void {
  }
  deleteUser(userId:string){
    this.users = this.users.filter(user =>
      user.id !==userId);
  }

}
