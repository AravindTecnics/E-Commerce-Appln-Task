import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  [x: string]: any;

  constructor(private _http:HttpClient) { }
  getAllproperties(){// here we can use pipe method  and map operator  to avoid one problem that is data mismtach use pipe and map here if we want to avoid some errors in buliting application
  return this._http.get('data/properties.json')
}

users:any=[
  {
    email:'',
    password:""
  }
];

}
