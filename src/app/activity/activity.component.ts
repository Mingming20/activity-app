import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  colorChange = true;
  fontSize = true;
  image1= "https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2019/07/16/ab06178a-a6a7-11e9-8d5c-2d5b58977904_972x_015731.jpg"
  public title : string = "This is Activity Number 3";

  constructor() { }

  ngOnInit() {
  }
  clickLogin(){
    alert("Hey!You're Logging in...")
    
  }

}
