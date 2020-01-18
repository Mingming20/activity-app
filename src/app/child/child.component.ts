import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() name : string;
  @Input() enrolled : string;
  @Input() gender : string;

  @Output() notify = new EventEmitter();
  @Output() declinedPerson = new EventEmitter();

  approved : any []=[]

  constructor() { }

  ngOnInit() {
  }



  isApproved (){
    this.notify.emit("You're application has been approved!");
    this.approved.push({"name":this.name, "status": this.enrolled, "gender":this.gender});
    console.log(this.approved)

    
  }
  isDeclined(){
    this.notify.emit("Sorry!You're application has been declined.");
    this.declinedPerson.emit();
  }

}
