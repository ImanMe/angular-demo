import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent {
  courses;
  btnName: string = "Show Courses";
  allTitle: boolean = true;
  summary() {
    this.allTitle = !this.allTitle;
  }
  loadCourses() {
    if (this.courses == null) {
      this.btnName = "Hide Courses";
      this.courses = [
        { id: 1, title: "course1" },
        { id: 2, title: "course2" },
        { id: 3, title: "course3" },
        { id: 4, title: "course4" },
        { id: 5, title: "course5" },
      ];
    } else {
      this.btnName = "Show Courses"
      this.courses = null;
    }
  }

  addCourse() {
    this.courses.push({ id: 6, title: "course 6" });
  }

  removeCourse(course) {
    var index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  updateCourse(course) {
    course.title = "Updated";
  }

  trackByCourse(index, course) {
    return course ? course.id : undefined;
  }

}
