import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public name?: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem("name")) {
      this.name = localStorage.getItem("name")?.toString();
    }

    if (location.pathname.split('/')[1]==="") {
      this.router.navigate(['/posts']);
    }
  }

  logOut() {
    localStorage.clear();
    // giving cookie with expired date just clears the cookie.
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    this.router.navigate(['/log-in']);
  }

}
