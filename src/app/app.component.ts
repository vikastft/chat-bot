import { Component } from '@angular/core';
import { IChatDateModel } from './IChatDataModel';
import { ChatService } from './chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isComplete = false;
  title = 'chatbot';
  userId: number;
  chatContents: IChatDateModel[] = [];

  constructor(private chatService: ChatService,
    private router: Router) {
  }
  onUserEntered(Id) {
    if (Id) {
      this.chatService.getResponse(Id).subscribe(res => {
        if (res) {
          this.userId = Id;
          for (const chat of res) {
            if (chat['isComplete']) {
              this.isComplete = true;
            }
            chat['responseType'] = 'question';
            this.chatContents.push(chat);
          }
        }
      });
    }
  }

  getChatData(response) {
    this.chatContents.push(<IChatDateModel>{ responseType: 'answer', userResponse: response.userResponse });
    this.chatContents.push(<IChatDateModel>{ responseType: 'question', nextQues: '...' });
    setTimeout(x => window.scrollTo(0, document.body.scrollHeight), 100);
    response['userId'] = this.userId;
    setTimeout(x => {
      this.chatService.getChatData(response).subscribe(res => {
        if (res) {
          this.chatContents.pop();
          for (const chat of res) {
            if (chat['isComplete']) {
              this.isComplete = true;
            }
            chat['responseType'] = 'question';
            this.chatContents.push(chat);
          }
        }
        setTimeout(x => window.scrollTo(0, document.body.scrollHeight), 500);
      });
    }, 1000);
  }
}
