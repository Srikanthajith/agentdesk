import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-givenpaginate',
  templateUrl: './givenpaginate.component.html',
  styleUrls: ['./givenpaginate.component.css']
})
export class GivenpaginateComponent implements OnInit {

  @Input() datatoshow: any[];
  constructor() { }

  ngOnInit() {
  }

}
