import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { userTypeOfClass } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/services/user.service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user: userTypeOfClass | undefined;
  userList: userTypeOfClass[] = [];
  userSelect: userTypeOfClass | undefined;

  
  constructor(private userService: UserService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.getAllusers();

    this.route.params.subscribe(params => {
      const userId = +params['id'];
      this.getUserById(userId);
    });
  }

  getAllusers() {
    this.userService.getUsers().subscribe(
      (userListResult :userTypeOfClass[] )  =>
    {
      for(let i = 0 ; i < userListResult.length ; i++) {
    }
    this.userList = userListResult;

  });
  }

  viewOneUser(id: number) {
    this.userService.getUsertById(id).subscribe(userResult => {
      this.userSelect = userResult;
      console.log(this.userSelect);
    });
  }


  getUserById(id: number) {
    this.userService.getUsertById(id).subscribe(userResult => {
      this.user = userResult;
    });
  }
}



