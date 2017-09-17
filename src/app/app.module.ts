import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* 配置 PrimeNG */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule, ButtonModule } from 'primeng/primeng';
import {DataTableModule, SharedModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { DataTableDemoComponent } from './data-table-demo/data-table-demo.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './data-table-demo/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DataTableDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
