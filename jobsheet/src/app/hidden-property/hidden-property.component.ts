import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidden-property',
  templateUrl: './hidden-property.component.html',
  styleUrls: ['./hidden-property.component.css'],
})
export class HiddenPropertyComponent implements OnInit {
  courses = [];
  constructor() {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
}
