import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ClarityModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
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
