import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email','gender','ip_address'];
  dataSource: MatTableDataSource<User>;
  //cors-anywhere server adds Access-Control-Allow-Origin: * header to the response
  apiUrl = 'https://cors-anywhere.herokuapp.com/http://storage.googleapis.com/static.aoni.io/demo/user.json';
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private httpClient: HttpClient){
    this.fetchData();
  }

  fetchData(){
    const getUserPromise = this.httpClient.get(this.apiUrl).toPromise();
    getUserPromise.then((data)=>{
      this.createUsers(data);
    }, (error)=>{
      console.log("Promise rejected with " + JSON.stringify(error));
    })
  };

  createUsers(data){
    let users=[];
    data.forEach(user => {
      users.push(new User(user));
    });
    this.dataSource = new MatTableDataSource(users);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  };

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
