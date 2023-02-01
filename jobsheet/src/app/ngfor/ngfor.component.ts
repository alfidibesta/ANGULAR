import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css'],
})
export class NgforComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  course = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
    { id: 4, name: 'course4' },
  ];

  constructor() {}

  onAdd() {
    this.course.push({ id: 4, name: 'course5' });
  }

  onRemove(course: any) {
    let index = this.course.indexOf(course);
    this.course.splice(index, 1);
  }

  onChange(course: any) {
    course.name = 'UPDATE';
  }

  courses: any;

  loadCourses() {
    this.courses = [
      { id: 1, name: 'courses1' },
      { id: 2, name: 'courses2' },
      { id: 3, name: 'courses3' },
    ];
  }

  trackCourse(index: any, course: any){
    return course ? course.id : undefined;
  }
}
