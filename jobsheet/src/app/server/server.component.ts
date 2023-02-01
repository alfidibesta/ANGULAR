import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-netx-line:component-selector
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
