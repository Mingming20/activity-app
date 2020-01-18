import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  //ngModel containers
  public parentnamedata : string;
  public enroll : boolean;
  public selectGender : string;
  public notified : string; //for notification to childtemplate

  //properties for child template inputs
  public namedata : string;
  public enrollment: string;
  public gender : string;
  public declined :any[]
  =[]
  



  constructor() { }

  ngOnInit() {
  }
  apps = []
  submitClicked(){
    this.namedata = this.parentnamedata;
    if (this.enroll){
      this.enrollment = "Yes"
    }
    else{
      this.enrollment = "No"
    }
    this.gender = this.selectGender;
  }

  isDeclined(){
    this.declined.push({"name": this.namedata , "status" : this.enrollment,"gender" : this.gender})
    console.log(this.declined)
  }

}
