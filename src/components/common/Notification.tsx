import React, { useEffect } from 'react';
import { XCircle, CheckCircle, AlertCircle, InfoIcon } from 'lucide-react';
import { error } from 'console';

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
  error: `bg-red-100 text-red-800 border-red-300`,
  success: `bg-green-100 text-green-800 border-green-300`,
  warning: `bg-yellow-100 text-yellow-800 border-yellow-300`,
  info: `bg-blue-100 text-blue-800 border-blue-300`,
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

  if (!message) {
    return null;
  }

  return (
    <div
      className={`flex items-center p-4 mb-4 text-sm rounded-lg border ${colorMap[type]}`}
      role="alert"
    >
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
