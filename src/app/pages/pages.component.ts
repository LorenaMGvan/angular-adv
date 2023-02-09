import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

// esta funcion esta declarada en el custom.js de assets js, se coloca asi de manera global
declare function customInitFunctions(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent  implements OnInit {

  constructor( private SettingsService: SettingsService){ };

  ngOnInit(): void {   
    customInitFunctions();
  }

}
