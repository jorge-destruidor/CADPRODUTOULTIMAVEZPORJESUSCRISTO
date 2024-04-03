import { Component } from '@angular/core';
import { Product } from '../product';
import { FormBuilder, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [];
  productFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.productFormGroup = formBuilder.group({
      id:[''],
      nome:[''],
      descricao:['']

    });
  }

  save(){
    this.products.push(this.productFormGroup.value);
  }
}
//"batatinhafrita"
