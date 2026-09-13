import {Component, effect, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';
import {RouterOutlet} from '@angular/router';
import {MpsBreakpointService} from '@core/mps-breakpoints/breakpoints.service';
import {MpsBreakPoints} from '@core/mps-breakpoints/breakpoints.types';
import {MpsToolbarComponent} from '@morphus/layout/toolbal/toolbal.component';

@Component({
  selector: 'mps-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule, MpsToolbarComponent],
})
export class MpsLayoutComponent {
  protected breakPointService = inject(MpsBreakpointService);
  protected visible = signal<boolean>(true);
  protected hasBackdrop = signal<boolean>(false);
  protected mode = signal<MatDrawerMode>('side');

  constructor() {
    effect(() => {
      this.changeBreakpoint(this.breakPointService.currentMatch());
    });
  }

  public changeBreakpoint(match: MpsBreakPoints) {
    console.log(match);

    if (match != 'large' && match != 'xlarge' && !this.hasBackdrop()) {
      this.visible.set(false);
      this.hasBackdrop.set(true);
      this.mode.set('over');
    }

    if ((match == 'large' || match == 'xlarge') && this.hasBackdrop()) {
      this.visible.set(true);
      this.hasBackdrop.set(false);
      this.mode.set('side');
    }
  }
}
