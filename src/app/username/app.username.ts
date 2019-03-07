import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './app.username.html'
})
export class UsernameComponent implements OnInit {
  userName = '';
  ngOnInit(): void {
  }
  resetUserName() {
    this.userName =  '';
  }
}
