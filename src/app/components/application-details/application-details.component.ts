import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss'],
})
export class ApplicationDetailsComponent implements OnInit {
  @ViewChild('sidebar') sidebar: ElementRef;

  constructor() {}

  public toggleSidebar(): void {
    document.getElementById('sidebar').classList.toggle('active');
  }

  ngOnInit(): void {}
}
