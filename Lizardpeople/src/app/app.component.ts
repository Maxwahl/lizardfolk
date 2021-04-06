import { Component, OnDestroy } from '@angular/core';
import { NavigationStart, Router,Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'Lizardpeople';
  event$;

  currUrl:string = '/';
  constructor(private router: Router) {
    this.event$
      =this.router.events
          .subscribe(
            (event: Event) => {
              if(event instanceof NavigationStart) {
                this.currUrl = event.url;
              }
            });
  }
 
  ngOnDestroy() {
    this.event$.unsubscribe();
  } 
}
