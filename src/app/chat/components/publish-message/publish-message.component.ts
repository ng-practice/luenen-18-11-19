import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgxHotkeysService } from '@balticcode/ngx-hotkeys';
import { MessageDraft } from '../../models';

@Component({
  selector: 'eb-publish-message',
  templateUrl: './publish-message.component.html',
  styleUrls: ['./publish-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublishMessageComponent implements OnInit {
  @Output()
  send = new EventEmitter<MessageDraft>();
  messageField = new FormControl('', Validators.required);

  constructor(private _hotKeys: NgxHotkeysService) {
    this._registerHotkeys();
  }

  emitMessage(): boolean {
    if (!this.messageField.valid) {
      return false;
    }

    this.send.emit({
      text: this.messageField.value,
      writtenAt: new Date()
    });

    this.messageField.reset();

    return false;
  }

  ngOnInit() {}

  private _registerHotkeys() {
    this._hotKeys.register({
      combo: 'ctrl+enter',
      handler: () => this.emitMessage(),
      description: 'Send Message to Chat Partners'
    });
  }
}
