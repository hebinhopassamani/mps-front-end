import {MessageSeverity} from '@core/mps-message/dialog.types';

export const confirmSeveity = (severity?: MessageSeverity): string => {
  switch (severity) {
    case 'primary':
      return 'primary';
    case 'secondary':
      return 'tertiary';
    case 'tertiary':
      return 'secondary';
    case 'surface':
      return 'primary';
    case 'warn':
      return 'tertiary';
    case 'info':
      return 'primary';
    case 'success':
      return 'secondary';
    case 'error':
      return 'warn';
    default:
      return 'primary';
  }
};

export const closeSeveity = (severity?: MessageSeverity): string => {
  switch (severity) {
    case 'primary':
      return 'secondary';
    case 'secondary':
      return 'secondary';
    case 'tertiary':
      return 'tertiary';
    case 'surface':
      return 'surface';
    case 'warn':
      return 'warn';
    case 'info':
      return 'surface';
    case 'success':
      return 'success';
    case 'error':
      return 'tertiary';
    default:
      return 'primary';
  }
};

export const severityIcon = (severity?: MessageSeverity): string => {
  switch (severity) {
    case 'primary':
      return 'menu';
    case 'secondary':
      return 'menu_open';
    case 'tertiary':
      return 'width_normal';
    case 'surface':
      return 'view_cozy';
    case 'warn':
      return 'warning';
    case 'info':
      return 'info';
    case 'success':
      return 'done_outline';
    case 'error':
      return 'disabled_by_default';
    default:
      return 'drafts';
  }
};

export const classBySeverity = (severity?: MessageSeverity): string => {
  switch (severity) {
    case 'warn':
      return 'warn morphus-orange';
    case 'info':
      return 'info morphus-blue';
    case 'success':
      return 'success morphus-green';
    case 'primary':
      return 'primary';
    case 'secondary':
      return 'secondary';
    case 'tertiary':
      return 'tertiary';
    case 'surface':
      return 'surface';
    case 'error':
      return 'error';
    default:
      return 'primary';
  }
};
