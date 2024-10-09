import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css']
})
export class MessageInputComponent implements OnInit {
  messageForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.messageForm = this.fb.group({
      message: ['', Validators.required],
      style: ['bold', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.messageForm.valid) {
      const { message, style } = this.messageForm.value;
      // Emita o evento para o componente pai com a mensagem e o estilo
    }
  }
}
