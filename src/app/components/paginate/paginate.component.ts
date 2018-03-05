import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css']
})
export class PaginateComponent implements OnInit {


  @Input() datatoshow: any[];
  constructor() { }
  
  ngOnInit() {
    
  }



}
