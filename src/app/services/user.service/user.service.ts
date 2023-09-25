import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { userTypeOfClass } from 'src/app/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'https://127.0.0.1:8000/api/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<userTypeOfClass[]> {
    return this.http.get<userTypeOfClass[]>(this.url);
  }

  getUsertById(id: number): Observable<userTypeOfClass> {
    return this.http.get<userTypeOfClass>(`${this.url}/${id}`); // Corrected the URL format
  }
  
  add(user: userTypeOfClass): Observable<userTypeOfClass> {
    
    return this.http.post<userTypeOfClass>("https://127.0.0.1:8000/api/new", user)
      .pipe(
        catchError((error: any) => {
          console.error('Error:', error);
          throw error;
        })
      );
  }

  deleteUser(id: number){
    return this.http.delete<userTypeOfClass>(`${this.url}/${id}`); // Corrected the HTTP method and URL format
  }







}