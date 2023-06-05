import { Component } from '@angular/core';
import { Zudio } from 'src/model/zudio';
import { ApiService } from '../service/api.service';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  allCollection:Zudio[]=[]

  searchKey:string=''

 constructor(private api:ApiService){}
  

   ngOnInit():void{
    this.getAllCollection()
   }

   getAllCollection(){
    this.api.getAllCollection().subscribe((data:any)=>{
      console.log(data);
      this.allCollection=data
    })
   }




   nameChange(){
    alert('name change')
   }
   search(event:any){
    console.log(event.target.value);
    this.searchKey=event.target.value
   }
   deleteZudio(zudioId:any){
       this.api.deleteZudio(zudioId).subscribe((data:any)=>{
        this.getAllCollection()
        alert('Delete Sucessfully')
       })
   }
  }
  


  


