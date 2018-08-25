import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
//import { AddcolComponent } from './addcol.component';
import {Router} from "@angular/router";
import {FormService} from '../../form.service';
import {College} from '../../collegeType';
import {Address} from '../../addressType';
import {Courses} from '../../courseType';
import * as firebase from 'firebase';

import { routerTransition } from '../../router.animations';
@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss'],
  animations: [routerTransition()]

})
export class CollegeComponent implements OnInit {

	collegesData:Array<College> = [];

  courseData:Array<Courses> =[];

  columns = ["Id","Name","Course","Type","Phone","Duration","Fees","Address Line 1","Address Line 2","Pincode","State","City","Action"];

  constructor(private router: Router, private fs: FormService) {

  
   }

  ngOnInit() {
  var ref = firebase.database().ref('colleges/');
  ref.on('value', resp => {
  var mydata = snapshotToArray(resp);
  console.log(mydata);
  this.collegesData = mydata;
  });
  }

  editData(data)
  {
  	this.fs.setData(data);
  	this.router.navigate(["addcol"]);
  }

}
export const snapshotToArray = (snapshot) => {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;        
        returnArr.push(item);
    });
    return returnArr;
};