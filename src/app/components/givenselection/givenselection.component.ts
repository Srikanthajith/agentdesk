import { Component, OnInit } from '@angular/core';
import { GetjsonService } from '../../services/getjson.service';
import { Message } from 'primeng/api';
import { FilterPipeModule, FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-givenselection',
  templateUrl: './givenselection.component.html',
  styleUrls: ['./givenselection.component.css'],
  providers: [FilterPipe]
})
export class GivenselectionComponent implements OnInit {


  listshow: Boolean = true;

  showSpinner: Boolean = false;
  datatoshow: any[];
  username: string;
  title: string;
  msgs: Message[] = [];
  email: string;

  constructor(private getjson: GetjsonService, private filter: FilterPipe) { }


  ngOnInit() {
    console.log('mainfunctiongot')
    this.showSpinner = true;
    this.listshow = true;
    this.username = null;
    this.email = null;
    this.title = null;
    this.getjson.getjsonfromgiven(null, null).subscribe(data => {
      console.log('datagot')
      this.datatoshow = data;
      this.showSpinner = false;
      console.log(this.datatoshow);
    });
  }


  changesonsearch() {
    console.log(this.username);
    console.log(this.email);
    if (this.username && this.email) {
      this.getjson.getjsonfromgiven(null, null).subscribe(data => {
        this.datatoshow = this.filter.transform(data, {firstname: this.username, email: this.email});
      });
    } else if (this.username) {
      this.getjson.getjsonfromgiven(null, null).subscribe(data => {
        this.datatoshow = this.filter.transform(data, {firstname: this.username});
      });
    } else if (this.email) {
      this.getjson.getjsonfromgiven(null, null).subscribe(data => {
        this.datatoshow = this.filter.transform(data, {email: this.email});
      });
    } else {
      this.getjson.getjsonfromgiven(null, null).subscribe(data => {
        this.datatoshow = data;
      });
    }
  }

  onListTypeChange(event: any) {
    if (event.index === 0) {
      this.getjson.getjsonfromgiven(null, null).subscribe(data => {
        this.datatoshow = data;
      });
    } else if (event.index === 1) {
      this.getjson.getjsonfromgiven(null, null).subscribe(data => {
        this.datatoshow = this.filter.transform(data, {agency_name: 'NULL'});
      });

    }
  }

}
