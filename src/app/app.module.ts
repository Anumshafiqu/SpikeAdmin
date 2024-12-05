import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './spikeAdmin/admin/admin.component';
import { HighchartsChartModule } from 'highcharts-angular';
// primeng
import { TimelineModule } from 'primeng/timeline';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule,
    TimelineModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CardModule,
    BrowserAnimationsModule 
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
