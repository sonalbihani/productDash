import { Component, OnInit } from '@angular/core';
import {  Router} from '@angular/router'

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  productDetails;
  constructor(private router: Router) { 
    // console.log(JSON.parse(localStorage.getItem("existing")));
    this.productDetails = JSON.parse(localStorage.getItem("existing"));
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
    this.productDetails = JSON.parse(localStorage.getItem("existing"));
    if(localStorage.getItem("current_user")!=null){
      console.log("dsad");     
       document.getElementById("login-id").style.display="none";
       document.getElementById("reg-id").style.display="none";
     }
       else {
        document.getElementById("create-id").style.display="none";
        document.getElementById("list-id").style.display="none";
        document.getElementById("out-id").style.display="none";
       }
  }
  edit(id: number){
    this.router.navigate(['/edit-product',id]);
  }
  delete(id: number){
    this.productDetails = this.productDetails.filter(
      obj =>(obj.id!=id)
    );
    localStorage.setItem("existing",JSON.stringify(this.productDetails));
  }

}
