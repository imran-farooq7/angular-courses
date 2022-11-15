import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  courses;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get("api/courses").subscribe((courses) => {
      return (this.courses = courses);
    });
  }
  onCourseSelected(course: Course) {
    console.log("App comp", course);
  }
}
