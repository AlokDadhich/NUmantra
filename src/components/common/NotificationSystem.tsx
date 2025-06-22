import React, { useEffect } from 'react';
import { useApp } from '../../context/AppContext';

export default function NotificationSystem() {
  const { state, dispatch } = useApp();

  useEffect(() => {
    state.notifications.forEach(notification => {
      const timer = setTimeout(() => {
        dispatch({ type: 'REMOVE_NOTIFICATION', payload: notification.id });
      }, 3000);

      return () => clearTimeout(timer);
    });
  }, [state.notifications, dispatch]);

  return (
    <div className="notifications-container">
      {state.notifications.map(notification => (
        <div
          key={notification.id}
          className={`${notification.type}-message`}
        >
          {notification.message}
        </div>
      ))}
    </div>
  );
}