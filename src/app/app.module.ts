import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {DataScrollerModule} from 'primeng/datascroller';
import {PaginatorModule} from 'primeng/paginator';
import {DataListModule} from 'primeng/datalist';
import {GrowlModule} from 'primeng/growl';
import {TabViewModule} from 'primeng/tabview';

import {PaginateComponent} from './components/paginate/paginate.component';
import {GetjsonService} from './services/getjson.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {ListjsonComponent} from './components/listjson/listjson.component';
import {SelectionComponent} from './components/selection/selection.component';
import {IntropageComponent} from './components/intropage/intropage.component'

import {GivenselectionComponent} from './components/givenselection/givenselection.component';
import {GivenlistjsonComponent} from './components/givenlistjson/givenlistjson.component';
import {GivenpaginateComponent} from './components/givenpaginate/givenpaginate.component';
// import {} from 'primeng/primeng';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {path: '', component: IntropageComponent},
  {path: 'selection', component: SelectionComponent},
  {path: 'givenselection', component: GivenselectionComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ListjsonComponent,
    SelectionComponent,
    PaginateComponent,
    IntropageComponent,
    GivenselectionComponent,
    GivenlistjsonComponent,
    GivenpaginateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    DataScrollerModule,
    PaginatorModule,
    DataListModule,
    GrowlModule,
    TabViewModule
  ],
  providers: [GetjsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
