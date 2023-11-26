import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title ='NFT';

  constructor(
    private authservice: AuthService
  ){    
  }
  isConected(): boolean {
    return this.authservice.isLogged()
  }

  logedOut(){
    this.authservice.clearToken();
  }





}
