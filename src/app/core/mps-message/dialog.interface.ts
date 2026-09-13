import {MatDialogConfig} from '@angular/material/dialog';
import {MessageResult, MessageSeverity} from '@core/mps-message/dialog.types';

export interface MessageConfig {
  title?: string;
  message?: string;
  icon?: string;
  iconColor?: string;  
  closeSeverity?: MessageSeverity;
  closeText?: string;
  closeIcon?: string;
  timeout?: number;
  actionConfig?: ActionConfig;
  modalConfig?: MatDialogConfig;
}

export interface ActionConfig {
  dobbleConfirmation?: boolean;
  dobbleConfirmationMessage?: string;  
  actionSeverity?: MessageSeverity;
  actionText?: string;
  actionIcon?: string;
}

export interface ActionResult {
  resultType: MessageResult;
  data: any;
}
