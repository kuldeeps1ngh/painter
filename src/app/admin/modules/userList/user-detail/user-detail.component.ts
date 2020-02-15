import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  addRoomFlag: boolean = false;

  constructor( public dialogRef: MatDialogRef<UserDetailComponent>,
               @Inject(MAT_DIALOG_DATA) public data ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addRoom() {
    this.addRoomFlag = true;
  }

}
