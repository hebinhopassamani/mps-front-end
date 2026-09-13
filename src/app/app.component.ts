import {Component, HostBinding, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
  host: {class: 'app-component'},
})
export class AppComponent {}
