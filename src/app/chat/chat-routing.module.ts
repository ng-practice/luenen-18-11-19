import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedIn } from '../authentication/lib';
import { ChatRoomComponent } from './containers/chat-room/chat-room.component';
import { ChatMessageDetailsComponent } from './containers/chat-message-details/chat-message-details.component';

const routes: Routes = [
  { path: 'chat', component: ChatRoomComponent, canActivate: [IsLoggedIn] },
  {
    path: 'message/:guid',
    component: ChatMessageDetailsComponent,
    canActivate: [IsLoggedIn]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [IsLoggedIn]
})
export class ChatRoutingModule {}
