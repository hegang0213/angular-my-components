import { Component, Injectable, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user';

import { ClarityIcons, userIcon, infoCircleIcon } from '@cds/core/icon';
import { ClrDatagridStringFilterInterface } from '@clr/angular';

ClarityIcons.addIcons(userIcon, infoCircleIcon);

class NameFilter implements ClrDatagridStringFilterInterface<User> {
  accepts (item: User, search: string): boolean {
    console.log(search);
    return item.name.toLowerCase().indexOf(search) >= 0;
  }
}

class EmailFilter implements ClrDatagridStringFilterInterface<User> {
  accepts (user: User, search: string): boolean {
    console.log(search);
    return user.name.toLowerCase().indexOf(search) >= 0;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ClarityModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}) 

export class AppComponent implements OnInit {
  search = 'u';
  // nameFilter = new NameFilter();
  // emailFilter = new EmailFilter();

  users: User[] = [];
  selectedUser:any = null;
  selection:User[] = [];

  constructor(private userServer: UserService) {}

  ngOnInit (): void {
    this.getList();
  }

  getList () {
    this.userServer
      .getUserList()
      .subscribe(
        response => {
          this.users = response;
          console.log(response);
        }
      );
  }

  
}
