import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import{UsersService} from'src/app/users.service';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: any;

  constructor(private fr:FormBuilder,
    private routes:Router,
    private UsersService:UsersService) { }

  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers(){
    this.UsersService.listUsers()
    .subscribe((data:any)=>{
      console.log(data);
      this.users = data;
    })
  }
  delUsers(db:any){
    this.UsersService.deleteUsers(db._id)
    .subscribe(data=>{
      console.log(data);
      this.users = this.users
      .filter((x:any)=>x!==db)
    })
  }

}
