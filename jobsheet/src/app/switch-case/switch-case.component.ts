import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css'],
})
export class SwitchCaseComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  viewMode = 'something';
  constructor() {}
}
