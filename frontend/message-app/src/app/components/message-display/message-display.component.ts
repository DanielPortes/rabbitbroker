import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-display',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css']
})
export class MessageDisplayComponent {
  @Input() messageText: string;
  @Input() messageStyle: string;
}
