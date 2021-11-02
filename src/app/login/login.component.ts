import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm!: FormGroup;
  // public email!: string;
  // public password!:string;
  // Logup(){
  //   if(this.email=="aravindswamy3110@gmail.com"&& this.password=="1234"){

  //   }
    //

  constructor(private formBuilder :FormBuilder,private _router:Router,private service:HousingService) { }

  email!: string;
  password!: string;


  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({

      email:[''],
      password:['']
       });
  }
  logInUser(){
    this.service.users.forEach( (Element: any) => {

      if(Element.email== this.signupForm.value.email){
        if(Element.email== this.signupForm.value.email && Element.password== this.signupForm.value.password){
          this._router.navigate(['/aravind'])
             }
        else{
          alert("incorrect Inputs");
        }
      }


    });

    // if((this.email=="aravindswamy@gmail.com"&&this.password=="123456") || (this.email=="charantecnics@gmail.com"&&this.password=="1234")){
    //   this._router.navigate(['/aravind'])

    // }
    // else{
    //   console.log("user Unauthouarized")
    //   alert("incorrect Inputs")

    // }

  }
  SignInUser(){

    this._router.navigate(['/sign-form']);
  }

  // submit(){
  //   console.log(this.value)

  // }



  // Logup(){

    //this._router.navigate([])



  }
//   Signup(){
//     this._router.navigate(['/sign-form'])
//   }



// }
