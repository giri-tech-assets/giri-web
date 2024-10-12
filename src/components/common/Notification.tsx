import React, { useEffect } from 'react';
import { XCircle, CheckCircle, AlertCircle, InfoIcon } from 'lucide-react';

type NotificationType = 'error' | 'success' | 'warning' | 'info';

interface NotificationProps {
  type: NotificationType;
  message: string;
  onClose: () => void;
  duration?: number;
}

const iconMap = {
  error: XCircle,
  success: CheckCircle,
  warning: AlertCircle,
  info: InfoIcon,
};

const colorMap = {
  error: 'bg-red-100 text-red-800 border-red-300',
  success: 'bg-green-100 text-green-800 border-green-300',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-300',
  info: 'bg-blue-100 text-blue-800 border-blue-300',
};

export const Notification: React.FC<NotificationProps> = ({
  type,
  message,
  onClose,
  duration = 5000,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const Icon = iconMap[type];

  return (
    <div className={`flex items-center p-4 mb-4 text-sm rounded-lg border ${colorMap[type]}`} role="alert">
      <Icon className="flex-shrink-0 inline w-5 h-5 mr-3" />
      <span className="sr-only">{type}</span>
      <div>{message}</div>
      <button
        type="button"
        className={`ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 inline-flex h-8 w-8 ${colorMap[type]} hover:bg-opacity-75`}
        aria-label="Close"
        onClick={onClose}
      >
        <span className="sr-only">Close</span>
        <XCircle className="w-5 h-5" />
      </button>
    </div>
  );
};

// Usage example
export const NotificationExample: React.FC = () => {
  const [notifications, setNotifications] = React.useState<Array<{ id: number; type: NotificationType; message: string }>>([]);

  const addNotification = (type: NotificationType, message: string) => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, type, message }]);
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  return (
    <div className="fixed top-5 right-5 w-72">
      {notifications.map(({ id, type, message }) => (
        <Notification
          key={id}
          type={type}
          message={message}
          onClose={() => removeNotification(id)}
        />
      ))}
      <div className="mt-4 space-x-2">
        <button onClick={() => addNotification('error', 'This is an error message')} className="px-4 py-2 bg-red-500 text-white rounded">
          Add Error
        </button>
        <button onClick={() => addNotification('success', 'This is a success message')} className="px-4 py-2 bg-green-500 text-white rounded">
          Add Success
        </button>
        <button onClick={() => addNotification('warning', 'This is a warning message')} className="px-4 py-2 bg-yellow-500 text-white rounded">
          Add Warning
        </button>
        <button onClick={() => addNotification('info', 'This is an info message')} className="px-4 py-2 bg-blue-500 text-white rounded">
          Add Info
        </button>
      </div>
    </div>
  );
};
