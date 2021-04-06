import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PresentationStatisticsComponent } from './components/presentation-statistics/presentation-statistics.component';
import { PresentationListComponent } from './components/presentation-list/presentation-list.component';
import { PresentationCreateComponent } from './components/presentation-create/presentation-create.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PresentationStatisticsComponent,
    PresentationCreateComponent,
    PresentationListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'', component:PresentationListComponent},
      {path: 'presentation-list', component: PresentationListComponent},
      {path: 'presentation-create', component: PresentationCreateComponent},
      {path: 'presentation-statistics',component: PresentationStatisticsComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
