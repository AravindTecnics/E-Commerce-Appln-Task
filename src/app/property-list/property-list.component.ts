import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties:Array<any>=[
    {
    //creating object here
    "id":1,
    "Name":"Birla-House",
    "type":"House",
    "price":1200000
},
{
  //creating object here
  "id":2,
  "Name":"Urilla-House",
  "type":"House",
  "price":1200000
},
{
  //creating object here
  "id":3,
  "Name":"Urilla-House",
  "type":"House",
  "price":1340000
},
{
  //creating object here
  "id":4,
  "Name":"stella-House",
  "type":"House",
  "price":1400000
},
{
  //creating object here
  "id":2,
  "Name":"Urilla-House",
  "type":"House",
  "price":1200000
}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
