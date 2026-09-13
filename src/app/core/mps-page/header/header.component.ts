import {Component, EventEmitter, HostBinding, input, Input, Output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MpsPageType } from '@core/mps-page/header/header.component.types';
import { MpsColors } from '@core/mps-type/morphus.types';

@Component({
  selector: 'mps-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  host: {class: 'mps-header'},
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatTooltipModule],
})
export class MpsHeaderComponent {
  @Output() backClick: EventEmitter<void> = new EventEmitter();
  @Output() newEntityClick: EventEmitter<void> = new EventEmitter();

  public title = input<string>();
  public icon = input<string>();
  public severity = input<MpsColors>('neutral-variante');
  public type = input<MpsPageType>();

  toolTipDelay = 1000;

  back() {
    this.backClick.emit();
  }

  newEntity() {
    this.newEntityClick.emit();
  }
}
