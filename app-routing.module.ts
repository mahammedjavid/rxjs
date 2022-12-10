import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncComponent } from './async/async.component';
import { ConcatMergeComponent } from './concat-merge/concat-merge.component';
import { DynamicHtmlrxJsComponent } from './dynamic-htmlrx-js/dynamic-htmlrx-js.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';
import { MargeMapComponent } from './marge-map/marge-map.component';
import { Rxjs2Component } from './rxjs2/rxjs2.component';
import { Rxjs3Component } from './rxjs3/rxjs3.component';
import { Rxjs4Component } from './rxjs4/rxjs4.component';
import { SearchComponent } from './search/search.component';
import { SharereplayComponent } from './sharereplay/sharereplay.component';
import { SubjectComponent } from './subject/subject.component';
import { SwucthMapProjectComponent } from './swucth-map-project/swucth-map-project.component';

const routes: Routes = [
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'rxjs2', component: Rxjs2Component
  },
  {
    path: 'rxjs3', component: Rxjs3Component
  },
  { path: 'rxjs4', component: Rxjs4Component },
  {
    path: 'subject', component: SubjectComponent
  },
  {
    path: 'async', component: AsyncComponent
  },
  {
    path: 'concat', component: ConcatMergeComponent
  },
  {
    path: 'margeMap', component: MargeMapComponent
  },
  {
    path: 'dynamichtml', component: DynamicHtmlrxJsComponent
  },
  {
    path: 'swicth', component: SwucthMapProjectComponent
  },
  {
    path: 'exhaust', component: ExhaustMapComponent
  },
  {
    path: 'shareReplay', component: SharereplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
