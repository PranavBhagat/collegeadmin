import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

	formData: any;

  constructor() { }
  
  setData(data)
  {
  	this.formData = data;
  }
  getData()
  {
  	return this.formData;
  }
}
