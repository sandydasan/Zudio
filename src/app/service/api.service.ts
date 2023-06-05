import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Zudio } from 'src/model/zudio';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl ='http://localhost:3001/zudio'
  constructor(private http:HttpClient) { }

  getAllCollection():Observable<Zudio>{
     return this.http.get(this.baseUrl)
  }
  viewZudio(zudioId:any){
    return this.http.get(`${this.baseUrl}/${zudioId}`)
  }
  getTypeName(typeId:any){
     return this.http.get('http://localhost:3001/type/'+typeId)
  }
  //function for fetch all groups from localhost:3001/types
  getAllType(){
    return this.http.get('http://localhost:3001/type')
  }

  addZudio(zudioBody:any){
    return this.http.post(this.baseUrl,zudioBody)
  }
  deleteZudio(zudioId:any){
    return this.http.delete(`${this.baseUrl}/${zudioId}`)
  }
  //upadte 
  updateZudio(zudioId:any ,zudioBody:any){
    return this.http.put(`${this.baseUrl}/${zudioId}`,zudioBody)
  }
}
