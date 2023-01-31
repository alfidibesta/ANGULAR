import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  title = 'Belajar Angular';
  Courses;
  constructor(private service: CoursesService) {
    this.Courses = service.getCourses();
  }

  binding = 'property-binding';
  imageUrl =
    'https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
  colSpan = 2;
  isActive = false;

  ngOnInit() {}

  onSave($event: Event) {
    $event.stopPropagation();
    console.log("button sudah diklik", $event);
  }
  onDivClick($event: Event){
    console.log("ini method div", $event);
  }
  nama = 'besta';
  onKeyUp(){
    console.log(this.nama);
  }
}
