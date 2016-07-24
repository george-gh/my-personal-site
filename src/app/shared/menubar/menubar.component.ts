import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-menubar',
  templateUrl: 'menubar.component.html',
  styleUrls: ['menubar.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class MenubarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
