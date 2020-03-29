import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';
import {GiftService} from '../service/gift.service';
import {CategoryService} from '../service/category.service';
import {Category} from '../dto/Category';

@Component({
  selector: 'app-gift-create-form',
  templateUrl: './gift-create-form.component.html',
  styleUrls: ['./gift-create-form.component.css']
})
export class GiftCreateFormComponent implements OnInit {




  categoryName:number;
  constructor(private fromBuilder:FormBuilder,private giftSerice:GiftService,private categoryService:CategoryService) {
   this.addProperty()


  }

  ngOnInit(): void {
  }

  categoryForm=this.fromBuilder.group(
    {
      name:[''],
      description:['']
    }
  )

  giftForm=this.fromBuilder.group({
      name:[''],
  coverImage:[''],
  price:[''],
  description:[''],
  category:[''],
   images:this.fromBuilder.array([]),

  },
  )

  addProperty(){
    let props=this.giftForm.get('images') as FormArray;
    props.push(this.fromBuilder.group({
      name:[''],
      url:['']
    }))
  }

  // this.fromBuilder.group({
  //                          id:[this.categoryForm.get('id')]
  //                        })



  save(){
    console.log(this.giftForm.value);



    this.giftSerice.create(this.giftForm.value).subscribe(data=>console.log(data))
  }

  // categorySave(){
  //   this.categoryService.categorycreate(this.categoryForm.value).subscribe(data=>console.log(data))
  // }

  selectCategory(){
    this.categoryService.findById(1).subscribe(data=> this.categoryName=data.id)

  }







}
