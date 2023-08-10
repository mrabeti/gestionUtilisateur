import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import{UsersService} from'src/app/users.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  editUsers:any;
  id: any;
  constructor(private fr:FormBuilder,
    private routes:Router,
    private UsersService:UsersService,
    private url: ActivatedRoute
    ) { 
      this.editUsers = fr.group(
        {
          first_name:['',Validators.required],
          last_name:['',Validators.required],
          email:['',Validators.required],
          matricule:['',Validators.required]
        }
      )
    }

  ngOnInit(): void {
    this.id = this.url.snapshot.params['id'];
    console.log(this.id);
    this.UsersService.editUsers(this.id)
    .subscribe(data =>{
      this.editUsers.patchValue(data);
    })
  }
  onSubmit() {
    console.log(this.editUsers.value);
    //this.id = this.url.snapshot.params['id'];
    this.UsersService.updateUser(this.id,this.editUsers.value)
      .subscribe((data:any)=>{
      console.log(data);
      this.routes.navigate(['/listUsers']);
    })
  }

}
