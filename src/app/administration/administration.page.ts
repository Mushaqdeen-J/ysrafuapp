import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.page.html',
  styleUrls: ['./administration.page.scss'],
})
export class AdministrationPage implements OnInit {
  segment: string = 'organizational';
  chancellor: string = 'professional';
  publication: string = 'journal';
  constructor() { }

  ngOnInit() {
  }

}
