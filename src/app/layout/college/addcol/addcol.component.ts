import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,Validators} from '@angular/forms';
import { routerTransition } from '../../../router.animations';
import {FormService} from '../../../form.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-addcol',
  templateUrl: './addcol.component.html',
  styleUrls: ['./addcol.component.scss'],
    animations: [routerTransition()]
})
export class AddcolComponent implements OnInit {

isEdit:boolean = false;

fbKey: string = "";

profileForm = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('[a-z]*')]),
    course: new FormControl('',[Validators.required,Validators.minLength(4),Validators.pattern('[a-z]*')]),
    state:new FormControl(''),
    address: new FormGroup({
    line1: new FormControl(''),
    line2: new FormControl('')
    }),
    city:new FormControl(''),
    key: new FormControl(''),
    pincode:  new FormControl(''),
    type:  new FormControl(''),
    phone:new FormControl(''),
    duration:new FormControl(''),
    fees:new FormControl('')

  });

constructor(private fs:FormService) { 
      if(this.fs.getData() != null)
      {
         this.populateData();
         this.isEdit = true;
      }
      else
         this.isEdit = false;
  }
  populateData()
  {
    console.log(this.fs.getData());
    var d1:any = this.fs.getData();
    
    this.profileForm.setValue(d1);
    this.fbKey = d1.key;
    console.log(d1.key);
  }
  onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.profileForm.value);
  
  var refstr = "colleges/";

  if(this.isEdit == false)
  {
    // add the data in fb
    var ref = firebase.database().ref(refstr);
    ref.push(this.profileForm.value);
  }
  else
  {
    // edit in fb
    refstr += this.fbKey;
    console.log(refstr);
    firebase.database().ref(refstr).update(this.profileForm.value);
    
  }
}
//updateName() {
  //this.profileForm.controls.name.setValue('asdasd');
//}

  

  ngOnInit() {
  }

}
