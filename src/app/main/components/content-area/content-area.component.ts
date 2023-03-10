import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent{

  constructor(
    private router : Router
  ){

  }
  
  catchUrl() : boolean {
    return this.router.url === '/main'
  }

}
