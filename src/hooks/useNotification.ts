import { useApp } from '../context/AppContext';
import type { Notification } from '../types';

export function useNotification() {
  const { dispatch } = useApp();

  const showNotification = (type: Notification['type'], message: string) => {
    const notification: Notification = {
      id: Date.now().toString(),
      type,
      message
    };
    dispatch({ type: 'ADD_NOTIFICATION', payload: notification });
  };

  const showSuccess = (message: string) => showNotification('success', message);
  const showError = (message: string) => showNotification('error', message);
  const showInfo = (message: string) => showNotification('info', message);
  const showWarning = (message: string) => showNotification('warning', message);

  return {
    showSuccess,
    showError,
    showInfo,
    showWarning
  };
}