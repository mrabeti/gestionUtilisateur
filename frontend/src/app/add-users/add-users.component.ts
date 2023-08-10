import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{UsersService} from'src/app/users.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  addUsers:any;
  constructor(private fr:FormBuilder,
    private routes:Router,
    private UsersService:UsersService
    ) { 
      this.addUsers = fr.group(
        {
          first_name:['',Validators.required],
          last_name:['',Validators.required],
          email:['',Validators.required],
          matricule:['',Validators.required]
        }
      )
    }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.addUsers.value);
    this.UsersService.addUsers(this.addUsers.value)
      .subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(['/listUsers']);
    })
  }
}
