import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email!: string
  password!: string
  constructor() { }

  ngOnInit(): void {
  }

  ingresar() {
    alert("hola")
    alert(this.email + this.password)
  }
  clear() {
    this.email = ""
    this.password = ""
  }

}
