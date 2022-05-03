import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css']
})
export class EInfoComponent implements OnInit {
  inforecieved1: string []=[];
  inforecieved2: string []=[];
  inforecieved3:string []=[];

  getinfofromService1(){}
  getinfofromService2(){}
  getinfofromService3(){}

  constructor() { }

  ngOnInit() {
  }

}