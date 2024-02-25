import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class SharedserviceService {
   dataarray=[];
  constructor(
     private http:Http
  ) {
    
   }


   getData()
   {
     return this.http.get(environment.api_url+'/employees').map(res=>
    {
      return res.json()
    })
   }

   createData(info)
   {
    return this.http.post(environment.api_url+'/create',info).map(res=>
    {
      
    })
   }

   deleteData(id)
   {
    return this.http.delete(environment.api_url+'/delete/'+id).map(res=>
    {
      return res.json()
    })
   }

   updateData(info)
   {
    return this.http.put(environment.api_url+'/update/'+info.id,info).map(res=>
    {
      return res.json()
    })
   }

   getOne(id)
   {
    return this.http.get(environment.api_url+'/employee/'+id).map(res=>
    {
      return res.json()
    })
   }

  
}
