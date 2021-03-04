import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import{ OrdersServiceService } from '../orders-service.service';
import { Orders } from '../orders';
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers:[OrdersServiceService]
})
export class DetailsComponent implements OnInit {
  orders:Orders
  constructor(private orderservice:OrdersServiceService,
    private route: ActivatedRoute,
     private router: Router) { }

    //  newOrder : Orders;
     public newOrder = {} as Orders;
  ngOnInit() {
    this.route.params.pipe(
      switchMap((params:Params)=>{
        return this.orderservice.getSingleOrder(params['orderid'])
      }))
      .subscribe((newOrder: Orders)=>{
        this.newOrder = newOrder;
       
      });
    }

      public Delete(orderid: string) : void {
        this.orderservice.Delete(orderid);
        this.router.navigate(['']);
      }
  
}
