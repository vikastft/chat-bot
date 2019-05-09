import { Component, ViewChild, ElementRef } from '@angular/core';
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
  showError = false;
  chatContents: IChatDateModel[] = [];
  completeMessage: string;
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  constructor(private chatService: ChatService,
    private router: Router) {
    this.chatContents = [{ responseType: 'question', nextQues: "Hey! I'm EmployeePulse, TFT's new A.I  culture assistant. I'm here to understand your till date experience. Don't worry your chat is confidential with me, I won't share it with anyone.", inputType: 'message' },
    { responseType: 'question', nextQues: 'Please enter your Employee ID.', inputType: 'message' }];
  }
  onUserEntered(Id) {
    if (Id.toString().length === 6) {
      this.showError = false;
      this.chatService.getResponse(Id).subscribe(res => {
        if (res) {
          this.userId = Id;
          for (const chat of res) {
            if (chat['isComplete']) {
              this.isComplete = true;
              this.completeMessage = chat['nextQues'];
            }
            chat['responseType'] = 'question';
            this.chatContents.push(chat);
          }
        }
      });
    } else {
      this.showError = true;
    }
  }

  getChatData(response) {
    this.chatContents.push(<IChatDateModel>{ responseType: 'answer', answer: response });
    this.chatContents.push(<IChatDateModel>{ responseType: 'question', nextQues: '...' });
    setTimeout(x => this.scrollToBottom(), 100);
    response['userId'] = this.userId;
    setTimeout(x => {
      this.chatService.getChatData(response).subscribe(res => {
        if (res) {
          this.chatContents.pop();
          for (const chat of res) {
            if (chat['isComplete']) {
              this.isComplete = true;
              this.completeMessage = chat['nextQues'];
            }
            chat['responseType'] = 'question';
            this.chatContents.push(chat);
          }
        }
        setTimeout(x => this.scrollToBottom(), 500);
      });
    }, 1000);
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
}
