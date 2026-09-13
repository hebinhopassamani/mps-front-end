import {Component, EventEmitter, Output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'mps-toolbar',
  templateUrl: './toolbal.component.html',
  styleUrl: './toolbal.component.css',
  standalone: true,
  host: {class: 'topbar-layout'},
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class MpsToolbarComponent {
  @Output() onToggle: EventEmitter<void> = new EventEmitter();

  public toggle() {
    this.onToggle.emit();
  }
}
