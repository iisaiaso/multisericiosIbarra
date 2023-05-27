import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email!: string
  password!: string
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  clear() {
    this.email = ""
    this.password = ""
  }
  save() {
    alert('-->> ' + this.email + this.password)
    this.router.navigate(['/'])
  }

}
