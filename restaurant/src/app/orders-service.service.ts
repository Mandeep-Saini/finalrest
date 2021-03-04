import{Injectable} from '@angular/core';
import{Http,Response,Headers} from '@angular/http';
import { Orders } from './orders';

import { Restaurant } from './restaurant';
@Injectable()
export class OrdersServiceService {
 
 
  
    private ordersUrl='http://localhost:3000/api/orders';
    private restaurantUrl = 'https://developers.zomato.com/api/v2.1/search?entity_id=3428&entity_type=city';
    httpOptions = {
      headers: new Headers({ 'user-key': '7f0d2284c241df2d70c62a2f724e0276' })
    };
  
    constructor(private http: Http) { }
  
    //get("/api/foods")
  
    getOrders(): Promise<void | Orders[]>{
      //let params=new HttpParams();
      return this.http.get(this.ordersUrl)
                  .toPromise()
                  .then(response => response.json() as Orders[])
                  .catch(this.handleError);
  
    };
    
    getRestaurant(): Promise<void | Restaurant[]> {
  
      let headers = new Headers();
      headers.append('user-key', '7f0d2284c241df2d70c62a2f724e0276');
      //let apiUrl: string = 'https://developers.zomato.com/api/v2.1/search?entity_id=22&entity_type=city';
  
      return this.http.get(this.restaurantUrl, this.httpOptions)
        .toPromise()
        .then(response => response.json() as Restaurant[])
        .catch(this.handleError);
    }
  
    getSingleOrder(orderid: String): Promise<void | Orders> {
      return this.http.get(this.ordersUrl + '/' + orderid)
        .toPromise()
        .then(response => response.json() as Orders)
        .catch(this.handleError);
    };
  
    createOrder(newOrder: Orders): Promise<void | Orders> {
      return this.http.post(this.ordersUrl, newOrder)
        .toPromise()
        .then(response => response.json() as Orders)
        .catch(this.handleError);
    };
    Delete(orderid: string) : Promise<void | string>{
      return this.http.delete(this.ordersUrl + '/' + orderid)
        .toPromise()
        .then(response => response.json() as string)
        .catch(this.handleError);
  
    }
  
    private handleError(error: any) {
      console.log("error");
    }
  
  }
  
  
