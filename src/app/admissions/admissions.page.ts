import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admissions',
  templateUrl: './admissions.page.html',
  styleUrls: ['./admissions.page.scss'],
})
export class AdmissionsPage implements OnInit {
  segment:string ='admissions';
  constructor() { }

  ngOnInit() {
  }

}
