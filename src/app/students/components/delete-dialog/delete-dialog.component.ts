import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Student } from '../../../shared/models/student';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent {
  constructor(
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    private studentsService: StudentsService,
    @Inject(MAT_DIALOG_DATA) public data: Student
    
    ) {
      let studentToDelete = this.data,
      students = this.studentsService.getStudents();
    }

  
  deleteStudent(studentId : number){
    this.studentsService.deleteStudent(studentId)
  }

}
