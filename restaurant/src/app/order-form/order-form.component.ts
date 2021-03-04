import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
import{ OrdersServiceService } from '../orders-service.service';
import { Orders } from '../orders';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
  providers:[OrdersServiceService]
})
export class OrderFormComponent implements OnInit {
  restaurant: Restaurant[];

  public newOrder:Orders={
    _id:'',
    name:'',
    category:'',
    year:'',
    moviecollection:'',
    ratings:''
  }
  constructor(private orderservice:OrdersServiceService) { }
  ngOnInit() {
    this.getRestaurants();
  }

  getRestaurants(): void {
    this.orderservice.getRestaurant()
      .then((result:Restaurant[]) => { 
        this.restaurant = result['restaurants'].map(item => {
          return {
            name: item.restaurant.name
          }
        });
      });
  }





 
  public createNewOrder(newOrder:Orders):void{
    this.orderservice.createOrder(newOrder);
  }

}
