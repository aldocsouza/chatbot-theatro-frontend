import { Component, Input } from '@angular/core';
import { Message } from '../../types/message.type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'question-response',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './question-response.component.html',
  styleUrl: './question-response.component.scss'
})
export class QuestionResponseComponent{
  @Input() messages!: Message;
}
