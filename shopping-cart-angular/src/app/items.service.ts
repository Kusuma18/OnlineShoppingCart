
import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';  
import { CardModel } from './cardModel';  
import { Observable } from 'rxjs';
  
@Injectable({  
  providedIn: 'root'  
})  
export class ItemsService {  
  
  constructor(private http: HttpClient) { }  
  baseUrl: string = 'https://localhost:44375/';  
  
  getCartItems():Observable<CardModel[]> {  
    return this.http.get<CardModel[]>(this.baseUrl+"/GetCards");  
  }  
  deleteCartItems(id: number) {  
    return this.http.delete<CardModel[]>(this.baseUrl+"/DeleteMyCard/:" + id);  
  }  
  CreateCartItems(card: CardModel) {  
    return this.http.post(this.baseUrl+"/PostMyCard", card);  
  }  
  getCartItemsByCardId(id: number) {  
    return this.http.get<CardModel>(this.baseUrl + '/GetMyCard/:' + id);  
  }  
  updateCartItems(card: CardModel) {  
    return this.http.put(this.baseUrl + '/PutMyCard/' + card.CardID, card);  
  }  
}  