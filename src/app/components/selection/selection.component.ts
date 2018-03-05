import { Component, OnInit } from '@angular/core';
import { GetjsonService } from '../../services/getjson.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  listshow: Boolean = true;

  showSpinner: Boolean = false;
  datatoshow: any[];
  albumId: number;
  title: string;
  msgs: Message[] = [];

  constructor(private getjson: GetjsonService) { }

  ngOnInit() {
    console.log('mainfunctiongot')
    this.showSpinner = true;
    this.listshow = true;
    this.albumId = null;
    this.title = null;
    this.getjson.getjsonfromapi(null, null).subscribe(data => {
      console.log('datagot')
      this.datatoshow = data;
      this.showSpinner = false;
      console.log(this.datatoshow);
    });
  }

  changesonsearch() {
    if (this.albumId) {
      this.showSpinner = true;
      this.getjson.getjsonfromapi(this.albumId, null).subscribe(data => {
        if (data.length) {
          this.datatoshow = data;
          this.showSpinner = false;
        } else {
          this.msgs = [];
          this.msgs.push({ severity: 'info', summary: 'No Album Matches', detail: 'Search for another AlbumID' });
          this.showSpinner = false;
        }
      });
    } else {
      this.ngOnInit();
    }
  }

  changesonfilter() {
    if (this.title) {
      this.showSpinner = true;
      this.getjson.getjsonfromapi(null, this.title).subscribe(data => {
        if (data.length) {
          this.datatoshow = data;
          this.showSpinner = false;
        } else {
          console.log('infomessage');
          this.msgs = [];
          this.msgs.push({ severity: 'info', summary: 'No Title Matches', detail: 'Search for the exact title' });
          this.title = '';
          this.showSpinner = false;
          this.ngOnInit();
        }
      });
    } else {
      this.ngOnInit();
    }
  }

}
