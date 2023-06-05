import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Zudio } from 'src/model/zudio';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-zudio',
  templateUrl: './add-zudio.component.html',
  styleUrls: ['./add-zudio.component.css']
})
export class AddZudioComponent {


   allTypes:any[]=[]
   zudioName:string=''
   zudio:Zudio={}
  constructor(private api:ApiService, private router:Router){
    this.zudio.typeId="Select Type"
  }
  

  ngOnInit():void{
      this.api.getAllType().subscribe((data:any)=>{
        console.log(data);
        this.allTypes=data
        
      })
    }
      addZudio(){
        this.api.addZudio(this.zudio).subscribe((data:any)=>{
         this.router.navigateByUrl('')
        })
      }
  
}
