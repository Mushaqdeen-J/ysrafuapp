import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'accessibility' },
    { title: 'Academics', url: '/academics', icon: 'school' },
    { title: 'Admissions', url: '/admissions', icon: 'walk' },
    { title: 'Administration', url: '/administration', icon: 'color-palette' },
    { title: 'Examination', url: '/examination', icon: 'bulb' },
    { title: 'Campus Life', url: '/campus', icon: 'bicycle' },
    { title: 'Resources', url: '/resources', icon: 'person' },
    { title: 'ADCET-2020', url: '/adcet', icon: 'newspaper' },
  ];
  constructor() {}
}
