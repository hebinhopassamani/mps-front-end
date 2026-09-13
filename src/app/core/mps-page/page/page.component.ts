import { NgTemplateOutlet } from '@angular/common';
import { Component, ContentChild, TemplateRef } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'mps-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss',
  standalone: true,
  host: {class: 'mps-page'},
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatCheckboxModule, NgTemplateOutlet],  
})
export class MpsPageComponent {  
  @ContentChild('header') header!: TemplateRef<unknown>;
  @ContentChild('content') content!: TemplateRef<unknown>;
  @ContentChild('footer') footer!: TemplateRef<unknown>;
}
