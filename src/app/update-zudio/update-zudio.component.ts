import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { Zudio } from 'src/model/zudio';
import { Type } from 'src/model/type';

@Component({
  selector: 'app-update-zudio',
  templateUrl: './update-zudio.component.html',
  styleUrls: ['./update-zudio.component.css']
})
export class UpdateZudioComponent implements OnInit {
  zudiosId:any

  zudios:Zudio={}
   
  types:Type[]=[] as Type[]

  constructor(private activatedRoute:ActivatedRoute, private api:ApiService , private route:Router){}
  ngOnInit():void{
     this.activatedRoute.params.subscribe((data:any)=>{
      console.log(data.zudioId);
     this.zudiosId=data['zudioId']
      console.log(this.zudiosId);
      this.api.viewZudio( this.zudiosId).subscribe((data:any)=>{
        console.log(data);
        this.zudios=data
      })
      this.api.getAllCollection().subscribe((data:any)=>{
        console.log(data);
        this.types=data
        
      })
     })
  }
  updateZudio(){
      this.api.updateZudio(this.zudiosId,this.zudios).subscribe((data:any)=>{
        console.log(data);
         this.route.navigateByUrl('')
      })
  }

}
