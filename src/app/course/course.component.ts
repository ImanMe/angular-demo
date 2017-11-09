import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  title: string = 'Course (Simple Component)'
  courses: string[] = ['course1', 'course2', 'course3'];

  ngOnInit() {
  }

}
