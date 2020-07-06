import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  user;
  ngOnInit(): void {
    this.user = localStorage.getItem("current-user");
    var container = document.getElementById('navbarResponsive');
    var container2 = document.getElementById('filler');
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

}
