import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  setNewPassword = false;
  constructor() { }

  ngOnInit(): void {
  }
  changePassword() {
    this.setNewPassword = true;
  }
  saveNewPassword() {
    this.setNewPassword = false;
  }
}
