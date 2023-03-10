import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/shared/models/teacher';
import { TeachersService } from 'src/app/teachers/services/teachers.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {
  teachers !: Teacher[]
  teachers$ !: Promise<Teacher[]>;
  filter !: string;

  constructor(
    private teachersService: TeachersService
  ){

  }

  ngOnInit() {
    this.teachers$ = this.teachersService.getTeachers()
  }


}