import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormControl} from '@angular/forms'
import {  Router} from '@angular/router'
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm;

  constructor(private fb: FormBuilder, private router: Router) { 
    this.productForm = this.fb.group({
      'name': this.fb.control('',Validators.required),
      'quant': this.fb.control('',Validators.required),
      'price': this.fb.control('',Validators.required),
      'seller': this.fb.control('',Validators.required)
    })
    
  }

  ngOnInit(): void {
  }
  submitForm(){
    if(this.productForm.valid){
      var existing = JSON.parse(localStorage.getItem("existing"));
      console.log(existing);
      existing = existing? existing:[];
      var fid;
      if(existing.length==0){
        fid =1;
      }
      else{
        fid = existing[existing.length-1].id+1;
      }
      var fvalues = this.productForm.value;
      var entry = {
        id: fid,
        name: fvalues.name,
        quant: fvalues.quant,
        price: fvalues.price,
        seller: fvalues.seller
      }
      localStorage.setItem("entry",JSON.stringify(entry));
      existing.push(entry);
      localStorage.setItem("existing",JSON.stringify(existing));
      this.router.navigate(['/product-listing'])
    }
  }


}
