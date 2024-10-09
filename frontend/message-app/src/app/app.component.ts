import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string;
  style: string;

  displayMessage(event: { message: string, style: string }): void {
    this.message = event.message;
    this.style = event.style;
  }
}
