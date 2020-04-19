import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';
import { CardModel } from '../cardModel';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.css']
})
export class DeleteItemComponent implements OnInit {
  items : CardModel[];
  CardDeleted : string;
  constructor(private router: Router, private itemsService: ItemsService) { }

  ngOnInit() {
    this.deleteItems();
  }
  deleteItems(){
    var idToBeDeleted = localStorage.getItem("deletcardId");
    
    this.itemsService.deleteCartItems(+idToBeDeleted)
    .subscribe( data => {
    this.items = this.items.filter(u => u !== u);
    });
    this.CardDeleted = idToBeDeleted;
  }
 
}
