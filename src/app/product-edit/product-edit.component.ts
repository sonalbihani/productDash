import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormControl} from '@angular/forms'
import {  ActivatedRoute, Router} from '@angular/router'
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  editForm;
  productDets;
  pid;
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { 
    this.route.params.subscribe((productId) =>{
      this.pid = productId.productId;
    })
     this.productDets = JSON.parse(localStorage.getItem("existing")).find(
       obj => obj.id == this.pid
     );
    this.editForm = this.fb.group({
      'name': this.fb.control(this.productDets.name,Validators.required),
      'quant': this.fb.control(this.productDets.quant,Validators.required),
      'price': this.fb.control(this.productDets.price,Validators.required),
      'seller': this.fb.control(this.productDets.seller,Validators.required)
    })
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
    if(this.editForm.valid){
      var existing = JSON.parse(localStorage.getItem("existing"));
      console.log(existing);
      var fvalues = this.editForm.value;
      for(var i=0;i<existing.length;i++){
        if(existing[i].id==this.pid){
          existing[i].name = fvalues.name;
          existing[i].price = fvalues.price;
          existing[i].quant = fvalues.quant;
          existing[i].seller = fvalues.seller;
          break;
        }
      }
      localStorage.setItem("existing",JSON.stringify(existing));
      this.router.navigate(['/product-listing'])
    }
  }

}
