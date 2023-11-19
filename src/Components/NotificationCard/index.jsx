import React from 'react'

const NotificationCard = ({ children }) => {
  return (
    <div className="p-[0.88rem] w-[9.785rem] h-[9.95rem] md:w-[11.85625rem] md:h-[10.71875rem] notification-card flex flex-col rounded-[0.525rem] shadow-notificationCard">
      {children}
    </div>
  )
}

export default NotificationCard
