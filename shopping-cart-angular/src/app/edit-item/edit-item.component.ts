import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { CardModel } from '../cardModel';  
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  item : CardModel;
editForm: FormGroup;
constructor(private formBuilder: FormBuilder,private router: Router, private itemService: ItemsService) { }

ngOnInit() {
let editCardID = localStorage.getItem("editCardId");
if(!editCardID) {
  alert("Invalid action.")
  this.router.navigate(['cardDisplay']);
  return;
}
this.editForm = this.formBuilder.group({
  CardID: [],
  CardName: [''],
  Description: [''],
  Price: ['']
});
this.itemService.getCartItemsByCardId(+this.item.CardID)
  .subscribe( data => {
	this.editForm.setValue(data);
  });
}

onSubmit() {
this.itemService.updateCartItems(this.editForm.value)
  .pipe()
  .subscribe(
	data => {
	  this.router.navigate(['cardDisplay']);
	},
	error => {
	  alert(error);
	});
}
}