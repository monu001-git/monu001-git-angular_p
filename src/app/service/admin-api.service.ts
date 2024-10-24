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

  onForgetPassword(data: any) {
    return this.http.post(`http://localhost:8000/api/forget-password`, data);
  }

  onforgetPasswordLink(data: any) {
    return this.http.post(`http://localhost:8000/api/reset-password`, data);
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
    return this.http.post('http://localhost:8000/api/add-edit-user', data);
  }

  //menu url
  parentMaster() {
    return this.http.get('http://localhost:8000/api/parentMaster');
  }

  addEditMenu(data: any) {
    return this.http.post('http://localhost:8000/api/add-edit-menu', data);
  }
  getMenu() {
    return this.http.get('http://localhost:8000/api/menu-tree');
  }

  //content
  addEditContent(data: any) {
    return this.http.post('http://localhost:8000/api/add-edit-content', data);
  }

  getContent() {
    return this.http.get('http://localhost:8000/api/content');
  }

  deleteContent(data: any) {
    return this.http.delete('http://localhost:8000/api/delete-content', { body: { id: data.id } });
  }


  mailSend(data: any) {
    return this.http.post('http://localhost:8000/api/send-mail', data);
  }


  //org
  addEditOrg(data: any) {
    return this.http.post('http://localhost:8000/api/add-edit-org', data);
  }

  getOrg() {
    return this.http.get('http://localhost:8000/api/org');
  }

  deleteOrg(data: any) {
    return this.http.delete('http://localhost:8000/api/delete-org', { body: { id: data.id } });
  }

  //banner 
  getBanner() {
    return this.http.get('http://localhost:8000/api/get-banner');
  }

  addEditBanner(data: any) {
    return this.http.post('http://localhost:8000/api/add-edit-banner', data);
  }

  deleteBanner(data: any) {
    return this.http.delete('http://localhost:8000/api/delete-banner', { body: { id: data.id } });
  }


  //mail
  getMail() {
    return this.http.get('http://localhost:8000/api/mail');
  }


}
