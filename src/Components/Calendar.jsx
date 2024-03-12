import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useNavigate  } from 'react-router-dom';

const Calendar = ({ orders }) => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const formattedEvents = orders.map((order) => ({
      title: `Order #${order.id} - ${order.customerName}`,
      date: order.expectedDeliveryDate,
      orderId: order.id,
    }));
    setEvents(formattedEvents);
  }, [orders]);

  const handleEventClick = (eventInfo) => {
    // Retrieve the orderId from the clicked event
    const orderId = eventInfo.event.extendedProps.orderId;
    // Navigate to the order details page using orderId
    navigate(`/orders/${orderId}`);
    console.log(`Navigating to order details page for orderId: ${orderId}`);
  };

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={handleEventClick}
      />
    </div>
  );
};

export default Calendar;
