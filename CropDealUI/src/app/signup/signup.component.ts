import { Component, OnInit } from '@angular/core';
import {  Validators,FormGroup,FormControl } from "@angular/forms";
import { RegisterService } from '../_Services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  responsedata:any;
  rolelist: any = [ 'Farmer', 'Dealer']

  constructor(private service:RegisterService,private route:Router) { }

  ngOnInit(): any {
    
  }
  signupform= new FormGroup({
    userName: new FormControl('',[Validators.required]),
    userAddress: new FormControl('',[Validators.required]),
    userPhnumber:new FormControl('',[Validators.required]),
    userEmail: new FormControl('', [Validators.required]),
    userPassword: new FormControl('',[Validators.required]),
    userAccnumber: new FormControl('',[Validators.required]),
    userIfsc: new FormControl('',[Validators.required]),
    userBankname: new FormControl('',[Validators.required]),
    userType: new FormControl('',Validators.required)
    
  })

  get f(){
   
    return this.signupform.controls;
  }

  changeRole(e:any) {
    console.log(e.target.value);
  }

  Signup(){
    console.log(this.signupform.value)
  if(this.signupform.valid){
    this.service.proceedSignup(this.signupform.value).subscribe(result=>{
      if(result!=null){
       alert("Registraion Sucessfull");
       this.route.navigate(['/Login'])
      }
    }),
    (Error: any) => {
      console.log(Error);
    }
  }
}

}
