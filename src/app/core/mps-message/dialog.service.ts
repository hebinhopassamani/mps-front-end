import {inject, Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MpsMessageComponent} from '@core/mps-message/dialog.component';
import {closeSeveity, confirmSeveity, severityIcon} from '@core/mps-message/dialog.functions';
import {MessageConfig} from '@core/mps-message/dialog.interface';
import {MessageSeverity, MessageType} from '@core/mps-message/dialog.types';

@Injectable({
  providedIn: 'root',
})
export class MpsMessageService {
  private matDialogService = inject(MatDialog);
  public messageType: MessageType = 'none';

  public showPrimary(title: string, message: string): MatDialogRef<MpsMessageComponent, any> {
    return this.showMessage(title, message, 'primary', {});
  }

  public showSecondary(title: string, message: string): MatDialogRef<MpsMessageComponent, any> {
    return this.showMessage(title, message, 'secondary', {});
  }

  public showTertiary(title: string, message: string): MatDialogRef<MpsMessageComponent, any> {
    return this.showMessage(title, message, 'tertiary', {});
  }

  public showSurface(title: string, message: string): MatDialogRef<MpsMessageComponent, any> {
    return this.showMessage(title, message, 'surface', {});
  }

  public showWarn(message: string): MatDialogRef<MpsMessageComponent, any> {
    return this.showMessage('Aviso', message, 'warn', {});
  }

  public showInfo(message: string): MatDialogRef<MpsMessageComponent, any> {
    return this.showMessage('Informação', message, 'info', {});
  }

  public showSuccess(message: string): MatDialogRef<MpsMessageComponent, any> {
    return this.showMessage('Sucesso', message, 'success', {});
  }

  public showError(message: string): MatDialogRef<MpsMessageComponent, any> {
    return this.showMessage('Ops, algo saiu errado', message, 'error', {});
  }

  public showMessage(title: string, message: string, severity?: MessageSeverity, config?: MessageConfig): MatDialogRef<MpsMessageComponent, any> {
    const dialogRef = this.matDialogService.open(MpsMessageComponent, {
      width: config?.modalConfig?.width ?? '500px',
      height: config?.modalConfig?.height ?? '300px',
      closeOnNavigation: config?.modalConfig?.closeOnNavigation ?? true,
      autoFocus: config?.modalConfig?.autoFocus ?? 'dialog',
      disableClose: config?.modalConfig?.disableClose ?? false,
      hasBackdrop: config?.modalConfig?.hasBackdrop ?? true,
      panelClass: severity ?? 'primary',
      data: {
        title: title,
        message: message,
        dobbleConfirmation: config?.actionConfig?.dobbleConfirmation ?? false,
        dobbleConfirmationMessage: config?.actionConfig?.dobbleConfirmationMessage ?? 'Estou ciente que não haverá como reverter esta ação!',
        icon: severityIcon(severity),
        iconColor: config?.iconColor,
        closeSeverity: closeSeveity(config?.closeSeverity),
        closeText: config?.closeText ?? 'Fechar',
        closeIcon: config?.closeIcon ?? 'close',
        actionText: config?.actionConfig?.actionText ?? 'Confirmar',
        actionIcon: config?.actionConfig?.actionIcon ?? 'check',
        actionSeverity: confirmSeveity(config?.actionConfig?.actionSeverity),
        modalConfig: config?.modalConfig,
      },
    });

    dialogRef.addPanelClass(severity == 'info' ? 'morphus-blue' : severity == 'warn' ? 'morphus-orange' : severity == 'success' ? 'morphus-green' : '');

    if (config?.timeout) {
      setTimeout(() => {
        dialogRef.close();
      }, config.timeout);
    }

    return dialogRef;
  }

  public getConfirmation(
    entity: any,
    title: string,
    message: string,
    severity?: MessageSeverity,
    config?: MessageConfig
  ): MatDialogRef<MpsMessageComponent, any> {
    const dialogRef = this.showMessage(title, message, severity ?? 'warn', {
      icon: config?.icon ?? 'cancel',
      iconColor: config?.iconColor ?? 'red',
      closeSeverity: config?.closeSeverity ?? 'warn',
      closeText: config?.closeText ?? 'Cancelar',
      closeIcon: config?.closeIcon ?? 'backspace',
      timeout: config?.timeout,
      actionConfig: {
        dobbleConfirmation: config?.actionConfig?.dobbleConfirmation ?? true,
        dobbleConfirmationMessage: config?.actionConfig?.dobbleConfirmationMessage ?? 'Estou ciente da ação que estou tomando',
        actionSeverity: config?.actionConfig?.actionSeverity ?? severity,
        actionText: config?.actionConfig?.actionText ?? 'Excluir',
        actionIcon: config?.actionConfig?.actionIcon ?? 'delete',
      },
      modalConfig: {data: entity, disableClose: true},
    });

    return dialogRef;
  }
}
