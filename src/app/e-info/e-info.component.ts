import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers:[DataService]
})

export class EInfoComponent implements OnInit {
  inforecieved1: string []=[];
  inforecieved2: string []=[];
  inforecieved3:string []=[];

  getinfofromService1(){
    this.inforecieved1=this.dservice.getInfo1();

  }
  getinfofromService2(){
    this.inforecieved2=this.dservice.getInfo2();
  }
  getinfofromService3(){
    this.inforecieved3=this.dservice.getInfo3();
  }

  constructor(private dservice:DataService) { }

  ngOnInit() {
  }

}
