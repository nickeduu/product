import { Component } from '@angular/core';
import { product } from '../product';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-component',
  standalone: false,
  templateUrl: './product-component.html',
  styleUrl: './product-component.css'
})
export class ProductComponent {
  products: product[] = [];
  formGroupProduct: FormGroup;

  constructor(private formBuilder : FormBuilder){
    this.formGroupProduct = this.formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      price: ['']
    });
  }

  save() {
    this.products.push(this.formGroupProduct.value);

  }
}
