import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UserDetailComponent } from './user-detail/user-detail.component';


export interface PeriodicElement {
  position: number;
  name: string;
  email: string;
  phone: number;
  address: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Mr. ABC', email: 'abc@gmail.com', phone: 123456, address: 'Noida, U.P.', status: 'Verified'},
  {position: 2, name: 'Mr. XYZ', email: 'xyz@gmail.com', phone: 78945, address: 'Noida, U.P.', status: 'Not-Verified'},
  {position: 3, name: 'Mr. kkdf', email: 'abc@gmail.com', phone: 123456, address: 'Noida, U.P.', status: 'Verified'},
  {position: 4, name: 'Mr. ABC', email: 'abc@gmail.com', phone: 123456, address: 'Noida, U.P.', status: 'Verified'},
  {position: 5, name: 'Mr. ssd', email: 'abc@gmail.com', phone: 123456, address: 'Noida, U.P.', status: 'Not-Verified'},
  {position: 6, name: 'Mr. ABC', email: 'abc@gmail.com', phone: 123456, address: 'Noida, U.P.', status: 'Verified'}
];

@Component({
  selector: 'app-userList',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'email', 'phone', 'address', 'status', 'info'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  closedData;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( public dialog: MatDialog ) { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  viewUserDetails(userdata) {
    console.log('userdata', userdata);
    const dialogRef = this.dialog.open(UserDetailComponent, {
      width: '800px',
      height: '400px',
      data: userdata
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.closedData = result;
      console.log('ClosedData', this.closedData);
    });
  }

}
