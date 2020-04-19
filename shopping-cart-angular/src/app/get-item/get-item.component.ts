import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { CardModel } from '../cardModel';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-item',
  templateUrl: './get-item.component.html',
  styleUrls: ['./get-item.component.css']
})
export class GetItemComponent implements OnInit {

  items : CardModel[];
  constructor(private router: Router, private itemsService: ItemsService) { }

  
 
  
  ngOnInit() {
  this.itemsService.getCartItems()
    .subscribe( data => {
    this.items = data;
    });
  }
  
  deletCard(item: CardModel): void {
    localStorage.removeItem("deletcardId");
    localStorage.setItem("deletcardId", item.CardID.toString());
    this.router.navigate(['cardDeletion']);
  
  };
  
  editCard(item: CardModel): void {
  localStorage.removeItem("editCardId");
  localStorage.setItem("editCardId", item.CardID.toString());
  this.router.navigate(['cardEdit']);
  };
  
  addCard(): void {
  this.router.navigate(['cardAdd']);
  };


  }



