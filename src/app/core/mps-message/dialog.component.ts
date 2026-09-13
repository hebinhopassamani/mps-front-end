import {Component, inject} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {ActionResult, MessageConfig} from '@core/mps-message/dialog.interface';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatIconModule],
})
export class MpsMessageComponent {
  public dialogRef = inject(MatDialogRef<MpsMessageComponent>);
  public data: MessageConfig = inject(MAT_DIALOG_DATA);
  public confirm: boolean = !this.data.actionConfig?.dobbleConfirmation;

  onConfirm() {
    this.dialogRef.close({resultType: 'confirm', data: this.data?.modalConfig?.data} as ActionResult);
  }

  onclose() {
    this.dialogRef.close({resultType: 'close', data: undefined} as ActionResult);
  }

  onConfirmChange(checked: boolean) {
    this.confirm = checked;
  }
}
