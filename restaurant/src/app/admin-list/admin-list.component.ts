import { Component, OnInit } from '@angular/core';
import {Orders} from '../orders';
import{ OrdersServiceService } from '../orders-service.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css'],
  providers:[OrdersServiceService]
})
export class AdminListComponent implements OnInit {

  orders:Orders[]

  constructor(private orderservice: OrdersServiceService ) { }

  ngOnInit() {
       this.orderservice
            .getOrders()
            .then(( ord: Orders[]) => {
               this.orders=ord.map(ord=>{
                return ord;
               });
            });



  }

}
