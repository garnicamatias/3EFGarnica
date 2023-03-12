import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/shared/models/teacher';
import { TeachersService } from 'src/app/teachers/services/teachers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {
  teachers !: Teacher[]
  teachers$ !: Observable<Teacher[]>;
  filter !: string;


  constructor(
    private teacherService: TeachersService,
  ){}

  ngOnInit() {
    this.teachers$ = this.teacherService.getTeachers()
  }


}