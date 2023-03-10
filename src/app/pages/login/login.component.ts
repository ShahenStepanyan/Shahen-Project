import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/service/request.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ RequestService ]
})
export class LoginComponent implements OnInit {
  Form: any;
  url:string = 'https://reqres.in/api/login'
  admtoken:any
  
  constructor(public fb: FormBuilder,public request: RequestService) { 
    alert(`email: eve.holt@reqres.in
      password: cityslicka`)
  }

  ngOnInit(): void {
    this.Form = this.fb.group( {
      email: ["", Validators.compose(
        [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])],
      password:["", Validators.compose(
        [Validators.required,Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)])],
    });
  }

save():any {
  this.request.postData(this.url, this.Form.value).subscribe((data:object) => {
    this.admtoken = data
    localStorage.setItem('token', this.admtoken.token)
  });
  if (localStorage.getItem("token")) {
    return window.location.href = 'admin';
  }
}

}
