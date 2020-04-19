import { Component, OnInit } from '@angular/core';


// import { Items } from '../mock-items'
// import {BackGroundColorDirective} from '../background-grey.directive';
// import {SearchCardPipe} from '../searchCard.pipe';
import { ItemsService } from '../items.service';
import { CardModel } from '../cardModel';  
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
 
  constructor(private formBuilder: FormBuilder,private router: Router, private itemsService: ItemsService) { }
  items : CardModel[];
  addForm: FormGroup;

ngOnInit() {

this.addForm = this.formBuilder.group({
  cardID: [''],
  cardName: [''],
  Description: [''],
  Price: ['']
});

}
onSubmit() {
this.itemsService.CreateCartItems(this.addForm.value)
  .subscribe( data => {
	this.router.navigate(['cardDisplay']);
  });
}
}
