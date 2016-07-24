import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { MenubarComponent } from './shared/menubar';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [MenubarComponent, ROUTER_DIRECTIVES],
})
export class AppComponent {
  
}
