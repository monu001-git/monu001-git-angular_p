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

  toggleStatus(data: any) {
    return this.http.get(`http://localhost:8000/api/status-change/${data.status}/${data.userId}/${data.tableName}`);
  }
  // user url
  getUser() {
    return this.http.get(`http://localhost:8000/api/user`);
  }
  deleteUser(data: any) {
    return this.http.delete('http://localhost:8000/api/delete-user', { body: { id: data.id } });
  }

  updateUserData(data: any) {
    return this.http.get('http://localhost:8000/api/user', { params: { id: data.id } });
  }

  addEditUser(data: any) {
    return this.http.post('http://localhost:8000/api/add-edit-user', data );
  }

}
