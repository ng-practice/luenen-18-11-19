import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublishMessageComponent } from './components/publish-message/publish-message.component';
import { MessageCardComponent } from './components/message-card/message-card.component';

@NgModule({
  declarations: [PublishMessageComponent, MessageCardComponent],
  imports: [CommonModule]
})
export class ChatModule {}
