import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Student } from '../../../shared/models/student';
import { StudentsService } from '../../services/students.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { StudentsTableComponent } from '../students-table/students-table.component';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent{
  
  constructor(
    public dialog: MatDialog,
    private dialogRef: MatDialogRef<DeleteDialogComponent>,
    private studentsService: StudentsService,
    @Inject(MAT_DIALOG_DATA) public data: Student,
    ) {

    }
  
  deleteStudent(student : Student){
    this.studentsService.deleteStudent(student).subscribe(()=>{
      this.dialogRef.close()
    }
    ) 
  }

}
