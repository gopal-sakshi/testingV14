import { Component } from '@angular/core';

// To use the Router & other common module features you have to directly import each module into the component.
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeedbackAndChatComponent } from './feedback-and-chat/feedback-and-chat.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FeedbackAndChatComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testingV14';
}
