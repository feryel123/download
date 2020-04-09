import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FrontService } from '../front/front.service';
import { Front } from '../front/front';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  
  id: number;
 front: Front;
  constructor(private route: ActivatedRoute,private router: Router,
    private frontservice: FrontService) {}

  ngOnInit() {
    this.front = new Front();

    this.id = this.route.snapshot.params['id'];
    
    /*this.frontservice.getFront(this.id)
      .subscribe(data => {
        console.log(data)
        this.front = data;
      }, error => console.log(error));
  }
  
  list(){
    this.router.navigate(['wlc-page']);
  }
}*/}
}
