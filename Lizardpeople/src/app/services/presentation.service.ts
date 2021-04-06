import { Injectable } from '@angular/core';
import { Filter } from '../model/filter';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Presentation } from '../model/presentation';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'accept': '*/*'
  })
  }

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  createPresentation(presentation: Presentation) {
    return this.http.post<Presentation[]>(this.url,presentation,httpOptions).pipe(
      catchError(this.handleError)
      );
  }
  url="http://localhost:29513/api/Presentation/"
  constructor(private http: HttpClient) { }

  getPresentationStatistics(filter:Filter){
    return this.http.get<number>(this.url+"statistic?fromDate="+filter.fromDate+"&toDate="+filter.toDate,httpOptions).pipe(
      catchError(this.handleError)
      );
  }

  getPresentations(){
    return this.http.get<Presentation[]>(this.url,httpOptions).pipe(
      catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse){
    console.error("There was an error: "+error.message);
    return throwError(error);
  }
}

