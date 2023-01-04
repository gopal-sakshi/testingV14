/******************************************************************************* */
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
/******************************************************************************* */


// To bootstrap using component ===> import the bootstrapApplication
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// To configure Routes
import { provideRouter, Routes } from '@angular/router';
const routes23 = [
    {
      path: 'feedback-and-chat',
      loadComponent: () => import('./app/feedback-and-chat/feedback-and-chat.component').then(c => c.FeedbackAndChatComponent),
    }
]

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(routes23)
    ]
}).catch(err => console.error(err));
