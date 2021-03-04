import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule} from'@angular/http';
import { AdminListComponent } from './admin-list/admin-list.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { FrameworkComponent } from './framework/framework.component';
import { APP_BASE_HREF} from '@angular/common';
import { RouterModule} from '@angular/router';
import{ FormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AdminListComponent,
    OrderFormComponent,
    FrameworkComponent,
    DetailsComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent
   
  ],
  imports: [
    BrowserModule,
    HttpModule,FormsModule,
    RouterModule.forRoot([{
      path: 'login' ,
      component: LoginComponent
    },
    {
      path:'admin',
      component: AdminListComponent
    },
     {
      path:'order',
      component: OrderFormComponent
    },
    {
      path:'contact',
      component: ContactComponent
    },
    {
      path:'about',
      component: AboutComponent
    }, {
      path:'',
      component: HomeComponent
    },
    {
      path:'details/:orderid',
      component: DetailsComponent
    }])
  ],
  providers: [{provide:APP_BASE_HREF,useValue:'/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
