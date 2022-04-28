import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Employee } from 'src/models/employee';
import { User } from 'src/models/user';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class UserService {
public employee: Observable<Employee>;
 url='http://localhost:3000'
 
  constructor(private http: HttpClient, private router: Router) {}

  getEmployees(){
    return this.http.get<Employee[]>(`${this.url}/employees`);
  }
  deleteEmployees(id: string) {
    return this.http.delete(`${this.url}/employees/${id}`)
        .pipe(map(x => {
            
            return x;
        }));
}

  updateEmployees(id, params) {
    return this.http.put(`${this.url}/employees/${id}`, params)
  }
  getById(id: string) {
    return this.http.get<Employee>(`${this.url}/employees/${id}`);
}
  createEmployee(employee:Employee) {
    return this.http.post(`${this.url}/employees`, employee);
}

login(username, password) :Observable<any>{
  console.log("username",username)
  return this.http.post<any>(`${this.url}/users`, { username, password },httpOptions)
      
}

}
