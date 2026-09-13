import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DestroyRef, effect, inject, Injectable, signal } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { MpsBreakPoints } from '@core/mps-breakpoints/breakpoints.types';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MpsBreakpointService {
  private breakpointObserver = inject(BreakpointObserver);
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {
      if (this.isMobile()) this.currentMatch.set('mobile');
      if (this.isTablet()) this.currentMatch.set('tablet');
      if (this.isWeb()) this.currentMatch.set('web');
      if (this.isLarge()) this.currentMatch.set('large');
      if (this.isXLarge()) this.currentMatch.set('xlarge');
    });
  }

  isMobile = toSignal(this.breakpointObserver.observe([Breakpoints.Handset]).pipe(takeUntilDestroyed(this.destroyRef)).pipe(map(result => result.matches)), { initialValue: false });
  isTablet = toSignal(this.breakpointObserver.observe([Breakpoints.Tablet]).pipe(takeUntilDestroyed(this.destroyRef)).pipe(map(result => result.matches)), { initialValue: false });
  isWeb = toSignal(this.breakpointObserver.observe([Breakpoints.Web]).pipe(takeUntilDestroyed(this.destroyRef)).pipe(map(result => result.matches)), { initialValue: false }); 
  isLarge = toSignal(this.breakpointObserver.observe([Breakpoints.Large]).pipe(takeUntilDestroyed(this.destroyRef)).pipe(map(result => result.matches)), { initialValue: false });
  isXLarge = toSignal(this.breakpointObserver.observe([Breakpoints.XLarge]).pipe(takeUntilDestroyed(this.destroyRef)).pipe(map(result => result.matches)), { initialValue: false });

  public currentMatch = signal<MpsBreakPoints>(this.isMobile() ? 'mobile' : this.isTablet() ? 'tablet' : this.isWeb() ? 'web' : this.isLarge() ? 'large' : 'xlarge');
}
