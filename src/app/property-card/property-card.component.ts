
import { Component, OnInit  } from '@angular/core';
import { HousingService } from '../housing.service';


@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  // @Input() Property:any;

      properties:any;

   constructor( private hosuing:HousingService) { }

  ngOnInit(): void {
    this.hosuing.getAllproperties().subscribe(
      data=>{
        this.properties=data;
        console.log(data);
      } ,error=>{
        console.log(error);
      }
    )
    // this.hosuing.getAllproperties().subscribe(
    //   (      data: any)=> {
    //     // this.properties=data;
    //     console.log(data);
    //     this.properties=data;
    //   }
    // );
    // this.property=this._service.list;
  }

}
