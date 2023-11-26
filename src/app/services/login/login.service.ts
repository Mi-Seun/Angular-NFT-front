import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { CreadentialsTypeOfClass } from 'src/app/interface/creadentials';
import { TokenTypeOfClass } from 'src/app/interface/token.interface';
import { userTypeOfClass } from 'src/app/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // url = 'https://127.0.0.1:8000/api/login_check';

  constructor(
    private http : HttpClient
  ) { }

  // login(credentials:CreadentialsTypeOfClass ): Observable<TokenTypeOfClass> {
  //   return this.http.post<TokenTypeOfClass>(this.url, credentials);
  // }

  private User : userTypeOfClass;

  getUser():userTypeOfClass {
  
      return this.User;
  }

  setUser(user :userTypeOfClass) {

    this.User = user;
  }

  url = 'https://127.0.0.1:8000/api/';

  getToken(email : string , password :string ):Observable<TokenTypeOfClass> {

    let object = {username : email, password : password};

    return this.http.post<TokenTypeOfClass>(`${this.url}login_check` , object);

  }

  login(token: string): Observable<userTypeOfClass | any> {

    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
    const httpOptions = {
      headers: headers
    };
    return this.http.get<userTypeOfClass>(`${this.url}user`, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError("Errrrrrror")
      }));
  }

}
