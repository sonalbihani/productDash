import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormControl} from '@angular/forms'
import {  Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm;

  constructor(private fb: FormBuilder, private router: Router) { 
    this.userForm = this.fb.group({
      'fname': this.fb.control('',Validators.required),
      'lname': this.fb.control(''),
      'email': this.fb.control('',[Validators.required,Validators.email]),
      'pass': this.fb.control('',[Validators.required,Validators.minLength(6)])
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
    if(this.userForm.valid){
      var users = JSON.parse(localStorage.getItem("users"));
      console.log(users);
      users = users? users:[];
      var fid;
      if(users.length==0){
        fid=1;
      }
      else{
        fid = users[users.length-1].id+1;
      }
      
      var fvalues = this.userForm.value;
      var current_user = {
        id: fid,
        fname: fvalues.fname,
        lname: fvalues.lname,
        email: fvalues.email,
        pass: fvalues.pass,
      }
      localStorage.setItem("current_user",JSON.stringify(current_user));
      users.push(current_user);
      localStorage.setItem("users",JSON.stringify(users));
      this.router.navigate(['/product-listing'])
    }

  }

}
