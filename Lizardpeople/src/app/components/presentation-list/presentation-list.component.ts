import { Component, OnInit } from '@angular/core';
import { Presentation } from 'src/app/model/presentation';
import { PresentationService } from 'src/app/services/presentation.service';

@Component({
  selector: 'app-presentation-list',
  templateUrl: './presentation-list.component.html',
  styleUrls: ['./presentation-list.component.css']
})
export class PresentationListComponent implements OnInit {
  selectedYear:number;
  presentations: Presentation[]=[];
  months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  constructor(private presentationService:PresentationService) {
    this.selectedYear = new Date(Date.now()).getFullYear(); 
    this.presentationService.getPresentations().subscribe((data)=>this.presentations = data);
  }

  ngOnInit(): void {
  }
  getMonth(dateString:string):number{
    let date = new Date(dateString);
    return date.getMonth();
  }
  getYear(dateString:string):number{
    let date = new Date(dateString);
    return date.getFullYear();
  }

  previousYear(){
    this.selectedYear--;
  }
  nextYear(){
    this.selectedYear++;
  }
}
