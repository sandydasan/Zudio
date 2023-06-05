import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-view-zudio',
  templateUrl: './view-zudio.component.html',
  styleUrls: ['./view-zudio.component.css']
})
export class ViewZudioComponent implements OnInit {

  zudioId:string=''
  zudio:any
  typeId:any
  typeName:string=''
  constructor(private activatedRoute:ActivatedRoute, private api:ApiService){}

   ngOnInit(): void {
     this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data);
      this.zudioId=data.zudioId
      console.log(this.zudioId);



    this.api.viewZudio(this.zudioId).subscribe((data:any)=>{
      console.log(data);
      this.zudio=data
      this.typeId=data.typeId
      console.log(this.zudio);
      
      this.api.getTypeName(this.typeId).subscribe((data:any)=>{
        console.log(data);
        this.typeName=data.name
        console.log(this.typeName);
        
        
      })
    })
      
     })
   }

}
