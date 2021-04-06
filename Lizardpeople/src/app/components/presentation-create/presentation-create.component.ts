import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Presentation } from 'src/app/model/presentation';
import { PresentationService } from 'src/app/services/presentation.service';

@Component({
  selector: 'app-presentation-create',
  templateUrl: './presentation-create.component.html',
  styleUrls: ['./presentation-create.component.css']
})
export class PresentationCreateComponent implements OnInit {

  presentation: Presentation;
  errorMessage:string = "";
  constructor(private presentationService:PresentationService,private router: Router) { 
    this.presentation = {
      title: "",
      fromDate: "",
      toDate:"",
      location:""
    };
  }

  ngOnInit(): void {
  }


  isEndingTimeValid(): boolean{
    let starting:Date = new Date(this.presentation.fromDate);
    let ending:Date = new Date(this.presentation.fromDate);
    ending.setHours(Number.parseInt(this.presentation.toDate.split(":")[0]),Number.parseInt(this.presentation.toDate.split(":")[1]));
    return ending > starting;
  }

  onSubmit(){
    let starting:Date = new Date(this.presentation.fromDate);
    let ending:Date = new Date(this.presentation.fromDate);
    let backUpToDate = this.presentation.toDate;
    ending.setHours(Number.parseInt(this.presentation.toDate.split(":")[0]),Number.parseInt(this.presentation.toDate.split(":")[1]));
    this.presentation.toDate = ending.toJSON();
    this.errorMessage = '';
    this.presentationService.createPresentation(this.presentation).subscribe(()=>this.router.navigateByUrl("/presentation-list"),
      (error) => {
        console.log(error);
        this.errorMessage = error.error;
        this.presentation.toDate = backUpToDate;
      });
  }
}
