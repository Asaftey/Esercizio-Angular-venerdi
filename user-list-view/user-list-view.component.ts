import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/models/user-models';

@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.scss']
})
export class UserListViewComponent implements OnInit {
@Input() users!: IUser;
@Output() deleteUser = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
