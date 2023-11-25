import { Component, OnInit } from '@angular/core';
import { SidebarInterface } from '../../interfaces/interfaces-modes';

@Component({
     selector: 'app-header',
     templateUrl: './header.component.html',
     styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
     isToggleSidebar!: boolean;

     ngOnInit(): void {
          this.isToggleSidebar = false;
     }

     onToggleSidebar() {
          this.isToggleSidebar ? (this.isToggleSidebar = false) : (this.isToggleSidebar = true);
     }
}
