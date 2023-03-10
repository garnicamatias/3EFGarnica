import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsService } from 'src/app/students/services/students.service';
import { Student } from '../../../shared/models/student';
import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { AddModalComponent } from '../add-modal/add-modal.component';
import { Subscriber, Subscription } from 'rxjs';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';


@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit{

  dataSource !: MatTableDataSource<Student> 
  dataColumns: string[] = ['name', 'fileNumber', 'age', 'isActive', 'gender', 'subject','actions']
  suscription !: Subscription;


  constructor(
    private studentsService : StudentsService,
    private dialog : MatDialog)
    {
  }
  
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Student>();
    this.suscription= this.studentsService
      .getStudents().subscribe((students : Student[])=>{
        this.dataSource.data = students;
      })
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  deleteStudentDialog(student : Student){
    this.dialog.open(DeleteDialogComponent, { data: student })
  }

  editStudent = (student : Student) => {
    this.dialog.open(EditModalComponent, { data: student })
  }

  openAddModal() {
    const dialogRef = this.dialog.open(AddModalComponent)
  }

  openDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteDialogComponent)
  }

}

