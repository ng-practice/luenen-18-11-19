import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { EmptyMessage } from '../../lib';
import { Message } from '../../models';

@Component({
  selector: 'eb-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageCardComponent {
  @Input()
  message: Message = new EmptyMessage();
}
