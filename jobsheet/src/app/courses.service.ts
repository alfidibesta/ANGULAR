import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  getCourses() {
    return [
      { id: 0, name: 'HTML' },
      { id: 1, name: 'PHP' },
      { id: 2, name: 'JavaScript' },
      { id: 3, name: 'AngularJS' },
      { id: 4, name: 'C#' },
      { id: 5, name: '.NET Framework' },
    ];
  }
}
