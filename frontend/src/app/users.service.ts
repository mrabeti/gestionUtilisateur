import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  addUsers(users:any){
    return this.http.post('http://localhost:8080/endpoint/add-user',users)

  }
  listUsers(){
    return this.http.get('http://localhost:8080/endpoint');
  }
  deleteUsers(id:any){
    return this.http.delete('http://localhost:8080/endpoint/del-user/'+id);
  }
  editUsers(id:any){
    return this.http.get('http://localhost:8080/endpoint/user/'+id);

  }
  updateUser(id:any,user:any){
    return this.http.put('http://localhost:8080/endpoint/update-user/'+id,user);
  }
}
