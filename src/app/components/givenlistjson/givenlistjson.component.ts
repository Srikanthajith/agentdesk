import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-givenlistjson',
  templateUrl: './givenlistjson.component.html',
  styleUrls: ['./givenlistjson.component.css']
})
export class GivenlistjsonComponent implements OnInit {

  @Input() datatoshow: any[];
  constructor() { }

  ngOnInit() {
  }

}
