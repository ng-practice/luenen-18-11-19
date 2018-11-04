import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'eb-clear-history',
  templateUrl: './clear-history.component.html',
  styleUrls: ['./clear-history.component.scss']
})
export class ClearHistoryComponent {
  @Output()
  clear = new EventEmitter<void>();
}
