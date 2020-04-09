import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',

  styles: [`
  .dropdown-item.focus, .dropdown-item:focus {
      color: #fff;
      text-decoration: none;
      background-color: #000;
      }`]
})
export class LogoutComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  handleLogout(){
    this.router.navigate(['login']);
  }

}


