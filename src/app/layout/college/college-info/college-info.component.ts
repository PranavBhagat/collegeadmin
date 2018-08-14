import { Component, OnInit } from '@angular/core';
import {colginfo} from '../college-info';
import { routerTransition } from '../../../router.animations';

@Component({
  selector: 'app-college-info',
  templateUrl: './college-info.component.html',
  styleUrls: ['./college-info.component.scss'],

  animations: [routerTransition()]
  })
export class CollegeInfoComponent implements OnInit {
obj:any;
  constructor() {
  	this.obj=colginfo;
   }
  ngOnInit() {
  }

}
