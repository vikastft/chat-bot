import { Component } from '@angular/core';
import { IChatDateModel } from './IChatDataModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatbot';
  userID: number;
  chatContents: IChatDateModel[] = [];
  onClick(Id) {
    this.userID = Id;
    this.chatContents = [{ responseType: 'question', nextQues: 'Do you like it?', options: ['Yes', 'No', 'May Be'], inputType: 'button' },
    ];
  }

  optionClicked(option) {
    this.chatContents.push(<IChatDateModel>{ responseType: 'answer', userResponse: option });
    this.chatContents.push(<IChatDateModel>{ responseType: 'question', nextQues: 'Enter reason',
      inputType: 'slider' });
  }
}
