import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'mps-page-content',
  templateUrl: './mps-page-content.component.html',
  styleUrl: './mps-page-content.component.scss',
  standalone: true,
  host: {class: 'mps-page-content'},
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatCheckboxModule],
})
export class MpsContentComponent {}
