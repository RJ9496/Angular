import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  info1: string[]=["RJ",'3','ab@.net']
  info2: string[]=["King",'4','cd@.net']
  info3: string[]=["Saheba",'5','efb@.net']

getInfo1() :string[]{
  return this.info1
}
getInfo2() :string[]{
  return this.info2
}
getInfo3() :string[]{
  return this.info3
}



  constructor() { }

}