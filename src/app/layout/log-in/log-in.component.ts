import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  public wrongCredentials = false;

  constructor(private router: Router, private loginServie: LoginService) { }

  ngOnInit(): void {
  }

  public onSubmit(formData: any) {
    if (this.loginServie.authorization(formData) === true) {
        this.wrongCredentials = false;
        this.router.navigate(['/posts']);
    } else {
        this.wrongCredentials = true;
        (<HTMLInputElement>document.getElementById('username')).value = '';
        (<HTMLInputElement>document.getElementById('password')).value = '';
    }
  }

}
