import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.scss']
})
export class UtilisateurComponent implements OnInit {
  allUsers!: User[]

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.onGetUsers()
  }

  onGetUsers() {
    this.userService.findAll().subscribe({
      next: res => {
        debugger
        this.allUsers = res;
      },
    });
  }

}
