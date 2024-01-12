import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Roles } from 'src/roles.citizen';

@Component({
     selector: 'app-dashbaord',
     templateUrl: './dashbaord.component.html',
     styleUrls: ['./dashbaord.component.scss'],
})
export class DashbaordComponent implements OnInit {
     nbAdmin: number = 0;
     nbClient: number = 0;
     visiteur: number = 0;

     //  bailleur!:
     constructor(private userService: UserService) {}

     ngOnInit(): void {
         this.userService.findAll().subscribe({
          next:(res)=>{
            this.onTrieUSer(res)

          }
         });
     }

     onTrieUSer(users: User[]) {
      
          users.forEach(user => {
               if (user.roleTem === Roles.Admin) {
                    this.nbAdmin++;
               } else {
                    this.nbClient++;
               }
          });
     }
}
