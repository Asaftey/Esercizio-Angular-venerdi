import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/models/user-models';
import { IOrders } from 'src/app/models/user-models';

@Component({
  selector: 'app-user-card-view',
  templateUrl: './user-card-view.component.html',
  styleUrls: ['./user-card-view.component.scss']
})
export class UserCardViewComponent implements OnInit {
  @Input() users!: IUser;
  @Input() orders!: IOrders;
  @Output() deleteUser = new EventEmitter<string>();




  constructor() { }

  ngOnInit(): void {
  }

}
