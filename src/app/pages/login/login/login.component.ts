import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenTypeOfClass } from 'src/app/interface/token.interface';
import { userTypeOfClass } from 'src/app/interface/user.interface';
import { AuthService } from 'src/app/services/auth.service/auth.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
      private LoginService: LoginService,
      private route:Router
  ){  }

  User : userTypeOfClass;
  ngOnInit(){
    this.initLoginForm();
  }
  loginForm !:FormGroup;

  initLoginForm(){
    this.loginForm = new FormGroup({
      "email" : new FormControl("", [
        Validators.required
      ]),
      "password" : new FormControl("", [
        Validators.required])
    })
  }

  login(){
    if(this.loginForm.valid){
    let email = this.loginForm.get("email")?.value;
    let password =this.loginForm.get("password")?.value;
    this.LoginService.getToken(email,password).subscribe(
        token=>{
          this.LoginService.login(token.token).subscribe(
            (user :userTypeOfClass)=>{
          localStorage.setItem("token",token.token);
              this.LoginService.setUser(user);
              console.log(token);
              this.route.navigate(['/']);
            },
            error=>{
                console.log(error.error);
            }
          )  
        })
    }
  }

  toto(){
    console.log(this.LoginService.getUser());
    
  }
  
  // constructor(private loginService: LoginService,private auth: AuthService){}

  // public loginForm: FormGroup = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl('')
  // })

  // login(){
    
  //   this.loginService.login(this.loginForm.value).subscribe((data: TokenTypeOfClass)=>{
  //     console.log(data);
  //     this.auth.saveToken(data.token);
  //   },
  //     err=>console.log(err)
  //   )
  // }


}


