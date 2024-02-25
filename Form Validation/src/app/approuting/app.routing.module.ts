import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ServiceComponent } from '../service/service.component';
import { ContactComponent } from '../contact/contact.component';
import { WebsitedesignComponent } from '../websitedesign/websitedesign.component';
import { WebdevelopmentComponent } from '../webdevelopment/webdevelopment.component';
import { ViewdetailComponent } from '../viewdetail/viewdetail.component';
import { MultipleformComponent } from '../multipleform/multipleform.component';


const routes:Routes=[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'services',
    children:
    [
        {path:'webdesigning',component:WebsitedesignComponent},
        {path:'webdevelopment',component:WebdevelopmentComponent}
    ]
    
    },
    {path:'contact',component:ContactComponent},
    {path:'viewdetail/:id',component:ViewdetailComponent},
    {path:'multipleform',component:MultipleformComponent}
]

@NgModule({
    exports:[
        RouterModule  
    ],
    imports: [
      RouterModule.forRoot(routes)
    ],
  })

export class ApproutingModule
{

}