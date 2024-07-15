import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { QuestionRequestComponent } from '../../components/question-request/question-request.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IconSendComponent } from '../../icons/icon-send/icon-send.component';
import { ChatDialogComponent } from '../../components/chat-dialog/chat-dialog.component';
import { Message } from '../../types/message.type';
import { ChatApiService } from '../../services/chat-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [
    HeaderComponent,
    QuestionRequestComponent,
    ReactiveFormsModule,
    IconSendComponent,
    ChatDialogComponent,
    CommonModule
  ],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss'
})
export class ChatbotComponent implements OnInit, AfterViewInit{

  formMessage!: FormGroup
  messages: Message[] = []

  constructor(){}

  ngOnInit(): void {
    this.formMessage = new FormGroup({
       message: new FormControl('',[Validators.required, Validators.minLength(1)])
    })
  }

  ngAfterViewInit(): void {
    if (typeof localStorage !== 'undefined') {
      this.messages = JSON.parse(localStorage.getItem('message') ?? '[]');
    }
  }

  requestMessage(message: string){
    this.messages.push({
      type: 'request',
      message: message
    })
    this.updateMessages()
  }

  sendNewMessage(){
    if(this.formMessage.valid){
      this.messages.push({
        type: 'request',
        message: this.formMessage.get("message")?.value
      })
      this.updateMessages()
      this.formMessage.reset()
    }
  }

  updateMessages(){
    localStorage.setItem('message', JSON.stringify(this.messages))
  }
}
