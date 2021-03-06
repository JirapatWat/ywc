import { Component, OnInit } from '@angular/core';
import { ApiService } from "../service/api.service";

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  getData : any;
  constructor(private _data : ApiService){
    this.showData();
  }
  showData(){
    this._data.getData().subscribe(
      (data) => this.getData = data,
      (error) => alert(error),
      () => console.log("Complete!") 
    );
  }
  ngOnInit() {
  }
}
