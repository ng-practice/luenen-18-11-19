import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'eb-clear-history',
  templateUrl: './clear-history.component.html',
  styleUrls: ['./clear-history.component.scss']
})
export class ClearHistoryComponent {
  @Input()
  isNothingToClear = true;

  @Output()
  clear = new EventEmitter<void>();
}
