import { Component, Input } from '@angular/core';
import { QuestionResponseComponent } from '../question-response/question-response.component';
import { Message } from '../../types/message.type';

@Component({
  selector: 'chat-dialog',
  standalone: true,
  imports: [
    QuestionResponseComponent
  ],
  templateUrl: './chat-dialog.component.html',
  styleUrl: './chat-dialog.component.scss'
})
export class ChatDialogComponent {

  @Input() message: Message[] = []

}
