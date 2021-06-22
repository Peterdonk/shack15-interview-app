import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-application-details-header',
  templateUrl: './application-details-header.component.html',
  styleUrls: ['./application-details-header.component.scss']
})
export class ApplicationDetailsHeaderComponent implements OnInit {

  @Output() toggleSidebar = new EventEmitter();

  constructor() { }

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  ngOnInit(): void {
  }

}
