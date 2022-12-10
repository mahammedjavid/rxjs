import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { Rxjs2Component } from './rxjs2/rxjs2.component';
import { Rxjs3Component } from './rxjs3/rxjs3.component';
import { Rxjs4Component } from './rxjs4/rxjs4.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SubjectComponent } from './subject/subject.component';
import { Comp1Component } from './subject/comp1/comp1.component';
import { Comp2Component } from './subject/comp2/comp2.component';
import { AsyncComponent } from './async/async.component';
import { ConcatMergeComponent } from './concat-merge/concat-merge.component';
import { MargeMapComponent } from './marge-map/marge-map.component';
import { DynamicHtmlrxJsComponent } from './dynamic-htmlrx-js/dynamic-htmlrx-js.component';
import { SwucthMapProjectComponent } from './swucth-map-project/swucth-map-project.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { SharereplayComponent } from './sharereplay/sharereplay.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    Rxjs2Component,
    Rxjs3Component,
    Rxjs4Component,
    HeaderComponent,
    SubjectComponent,
    Comp1Component,
    Comp2Component,
    AsyncComponent,
    ConcatMergeComponent,
    MargeMapComponent,
    DynamicHtmlrxJsComponent,
    SwucthMapProjectComponent,
    ExhaustMapComponent,
    SharereplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
