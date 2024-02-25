import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { ApproutingModule } from './approuting/app.routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { WebsitedesignComponent } from './websitedesign/websitedesign.component';
import { WebdevelopmentComponent } from './webdevelopment/webdevelopment.component';
import { SharedserviceService } from './sharedservices/sharedservice.service';
import { SharedComponent } from './shared/shared.component';
import {HttpModule} from '@angular/http';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { MultipleformComponent } from './multipleform/multipleform.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    WebsitedesignComponent,
    WebdevelopmentComponent,
    SharedComponent,
    ViewdetailComponent,
    MultipleformComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApproutingModule,
    HttpModule
  ],
  providers: [SharedserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
