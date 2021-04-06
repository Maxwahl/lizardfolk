import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Filter } from 'src/app/model/filter';
import { PresentationService } from 'src/app/services/presentation.service';

@Component({
  selector: 'app-presentation-statistics',
  templateUrl: './presentation-statistics.component.html',
  styleUrls: ['./presentation-statistics.component.css']
})
export class PresentationStatisticsComponent implements OnInit {

  filter: Filter;
  countDisplay: string;
  error: boolean =false;
  isAre:string = "";
  constructor(private presentationService:PresentationService) { 
    this.filter = {fromDate: '',toDate: ''};
    this.countDisplay = "";
  }


  ngOnInit(): void {
  }


  onSubmit() {
    this.presentationService.getPresentationStatistics(this.filter).subscribe((data=>{this.countDisplay =data.toString();
    this.isAre = (data == 1?"is" :"are")}));

  }
  areDatesNotValid(): boolean {

    if(this.filter.fromDate == '' || this.filter.toDate == ''){
      return false;
    }

    let fromDate = new Date(this.filter.fromDate);
    let toDate = new Date(this.filter.toDate);
    if(toDate<fromDate){
      this.error = true;
    }
    else {
      this.error = false;
    }
    return toDate < fromDate;
  }
}
