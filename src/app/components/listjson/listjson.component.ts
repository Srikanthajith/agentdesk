import { Component, OnInit, Input } from '@angular/core';
import {GetjsonService} from './../../services/getjson.service';

@Component({
  selector: 'app-listjson',
  templateUrl: './listjson.component.html',
  styleUrls: ['./listjson.component.css']
})
export class ListjsonComponent implements OnInit {

  @Input() datatoshow: any[];
  constructor() { }

  ngOnInit() {
  }

}
