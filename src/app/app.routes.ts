import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ChatbotComponent } from './pages/chatbot/chatbot.component';

export const routes: Routes = [
    {
      path: "",
      component: HomeComponent
    },
    {
      path: "chat",
      component: ChatbotComponent
    },
    {
      path: "**",
      pathMatch: "full",
      redirectTo: ""
    }
];
