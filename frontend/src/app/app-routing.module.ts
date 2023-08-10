import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {path:'',component:ListUsersComponent},
  {path:'listUsers',component:ListUsersComponent },
  {path:'addUsers',component:AddUsersComponent },
  {path:'editUsers/:id',component:EditUsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
