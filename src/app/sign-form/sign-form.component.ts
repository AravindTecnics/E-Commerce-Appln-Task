import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, RequiredValidator, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HousingService } from '../housing.service';
// import { fstatSync } from 'fs';
@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.css']
})
export class SignFormComponent implements OnInit {

  public signupForm! :FormGroup;
  constructor(private formBuilder :FormBuilder,private _router:Router, private _http :HttpClient,private service:HousingService) { }
  ngOnInit() :void {
    this.signupForm=this.formBuilder.group({

      username:[''],
      email:[''],
      password:[''],
      ConfirmPassword:[''],
      phoneNumber:['']

       })
      }

      signup(){

        var newObject ={
          email:this.signupForm.value.email,
          password:this.signupForm.value.password,
        };
        this.service.users.push(newObject);
        console.log(this.service.users);
        alert("saved Succesfully");
        this._router.navigate(['']);
      }

  }








  // registerationForm!: FormGroup;
  // user:any={}





  //    this.registerationForm= new FormGroup(
  //      {
  //        username:new FormControl(null,Validators.required),
  //        email:new FormControl(null,[Validators.required, Validators.email]),
  //        password:new FormControl(null,[Validators.required , Validators.minLength(8)]),
  //         confirmpassword:new FormControl(null,[Validators.required]),
  //         phoneNumber:new FormControl(null,[Validators.required ,Validators.maxLength(10)]),

  //      } ,this.passwordMatchingValidator);
  // }
  // passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
  //   return fc.get('password')?.value === fc.get ('confirmPassword')?.value ? null :
  //     { notmatched: true }
  // };
  // onSubmit(){
  //   console.log( this.registerationForm);
  //   this.user=Object.assign(this.user , this.registerationForm.value);
  //    localStorage.setItem('user' ,JSON.stringify(this.user));
  // }




//   function signUp() {
//     throw new Error('Function not implemented.');
//   }

// function constructor() {
//   throw new Error('Function not implemented.');
// }

// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }
  // GoToLogin(){
  // this._router.navigate([''])
  // }



