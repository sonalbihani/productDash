import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormControl} from '@angular/forms'
import {  Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  constructor(private fb: FormBuilder, private router: Router) { 
    this.loginForm = this.fb.group({
      'email': this.fb.control('',[Validators.required]),
      'pass': this.fb.control('',[Validators.required])
    });
    if(localStorage.getItem("current_user")!=null){
      console.log("dsad");     
       document.getElementById("login-id").style.display="none";
       document.getElementById("reg-id").style.display="none";
       document.getElementById("create-id").style.display="block";
       document.getElementById("list-id").style.display="block";
       document.getElementById("out-id").style.display="block";
     }
       else {
        document.getElementById("create-id").style.display="none";
        document.getElementById("list-id").style.display="none";
        document.getElementById("out-id").style.display="none";
        document.getElementById("login-id").style.display="block";
       document.getElementById("reg-id").style.display="block";
       }
  }

  ngOnInit(): void {
  }

  submitForm(){
    if(this.loginForm.valid){
      var users = JSON.parse(localStorage.getItem("users"));
      var fvalues = this.loginForm.value;
      for(var i =0;i<users.length;i++){
        if(users[i].email == fvalues.email){
          if(users[i].pass == fvalues.pass){
            localStorage.setItem("current_user",JSON.stringify(users[i]));
            this.router.navigate(['/product-listing'])
          }
          else{
            alert('Wrong password!');
            this.router.navigate(['/login'])
          }
        }
        else{
          alert('Please register first.')
          this.router.navigate(['/register'])
        }
      }
    }

  }
}
