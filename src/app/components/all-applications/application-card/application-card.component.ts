import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-card',
  templateUrl: './application-card.component.html',
  styleUrls: ['./application-card.component.scss'],
})
export class ApplicationCardComponent implements OnInit {
  @Input() applicationName: string;
  @Input() applicationId: string;

  constructor(private router: Router) {}

  public navigateToDetails(applicationId: string): void {
    this.router.navigate(['/application', applicationId]);
  }

  ngOnInit(): void {}
}
