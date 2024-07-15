import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconDoubtsComponent } from '../../icons/icon-doubts/icon-doubts.component';
import { IconHistoryComponent } from '../../icons/icon-history/icon-history.component';
import { IconCuriositiesComponent } from '../../icons/icon-curiosities/icon-curiosities.component';

@Component({
  selector: 'question-request',
  standalone: true,
  imports: [
    CommonModule,
    IconDoubtsComponent,
    IconHistoryComponent,
    IconCuriositiesComponent
  ],
  templateUrl: './question-request.component.html',
  styleUrl: './question-request.component.scss'
})
export class QuestionRequestComponent {

  @Output() message = new EventEmitter()

  constructor(){}

  suggestions = [
    {
      title: "Dúvidas",
      icon: 'doubt',
      questions: [
        "Qual o valor para entrar no theatro?",
        "Quando o theatro está aberto?",
      ]
    },
    {
      title: "Curiosidades",
      icon: 'curiosity',
      questions: [
        "Quem era o prefeito na época da criação?",
        "Quantos cômodos existem no theatro?",
        "Quantas peças foram exibidas no theatro?",
      ]
    },
    {
      title: "História",
      icon: 'history',
      questions: [
        "Quando o museu foi criado?",
        "Qual o estilo arquitetônico do prédio?",
        "Quem foi o arquiteto do prédio?",
      ]
    },
  ]

  sendQuestion(question: string){
    this.message.emit(question)
  }

}
