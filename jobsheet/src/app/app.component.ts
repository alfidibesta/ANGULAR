import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'jobsheet';
  courses = [];
  public isCollapsedD = true;
  public isCollapsedDbd = true;
  public isCollapsedH = true;
  public isCollapsedR = true;
}
