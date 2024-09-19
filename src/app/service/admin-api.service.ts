import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminApiService {
  constructor(private http: HttpClient) { }

  onSubmit(data: any) {
    return this.http.post(`http://localhost:8000/api/login`, data);
  }

  onSubmitreg(data: any) {
    return this.http.post(`http://localhost:8000/api/register`, data);
  }

  toggleStatus(data: any) {
    console.log('data',data)
    return this.http.get(`http://localhost:8000/api/status-change/${data.status}/${data.userId}/${data.tableName}`);
  }
   // user url
  getUser() {
    return this.http.get(`http://localhost:8000/api/user`);
  }
  deleteUser(id:any){
    return this.http.get(`http://localhost:8000/api/delete-user/${id.id}`);
  }
  updateUserData(id:any){
    return this.http.get(`http://localhost:8000/api/user/${id.id}`);
  }
  updateUser(id:any){
    return this.http.get(`http://localhost:8000/api/add-edit-user/${id.id}`);
  }

}
