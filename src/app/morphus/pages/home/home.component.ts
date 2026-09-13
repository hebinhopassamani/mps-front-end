import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MpsMessageService} from '@core/mps-message/dialog.service';
import {MpsHeaderComponent} from '@core/mps-page/header/header.component';
import { MpsPageComponent } from '@core/mps-page/page/page.component';

@Component({
  selector: 'mps-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [MatButtonModule, MpsPageComponent, MpsHeaderComponent],
})
export class MpsHomeComponent {
  messageService = inject(MpsMessageService);

  butonClique() {
    this.messageService.showTertiary('teste', 'Mensagem');
  }

  back() {}

  newEntity() {}
}
