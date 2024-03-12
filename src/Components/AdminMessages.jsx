import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

import { Link } from 'react-router-dom';
import Header from './Includes/Header'
import Footer from './Includes/Footer'

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const tableRef = useRef(null);

  useEffect(() => {
      if (messages.length > 0 && tableRef.current) {
          $(tableRef.current).DataTable();
      }

      return () => {
          if ($.fn.DataTable.isDataTable(tableRef.current)) {
              // eslint-disable-next-line react-hooks/exhaustive-deps
              $(tableRef.current).DataTable().destroy();
          }
      };
  }, [messages]);

  useEffect(() => {
      const fetchmessages = async () => {
          try {
              setMessages([
                {
                  id: 1,
                  name: 'John Doe',
                  email: 'john.doe@example.com',
                  subject: 'Question about product',
                  message: 'I have a question about your product. Can you please provide more information?',
                  date: '10-03-2024',
                  response: '',
                },
                {
                  id: 2,
                  name: 'Jane Smith',
                  email: 'jane.smith@example.com',
                  subject: 'Feedback',
                  message: 'I just wanted to give you some feedback on your service. Overall, I am very satisfied!',
                  date: '12-03-2024',
                  response: 'Thank you for your feedback! We are glad to hear that you are satisfied with our service.',
                },
                {
                  id: 3,
                  name: 'Michael Johnson',
                  email: 'michael.johnson@example.com',
                  subject: 'Technical issue',
                  message: 'I am experiencing some technical issues with your website. Could you please help me resolve them?',
                  date: '14-03-2024',
                  response: 'We apologize for the inconvenience. Our technical team is working on resolving the issue.',
                },
                {
                  id: 4,
                  name: 'Emily Wilson',
                  email: 'emily.wilson@example.com',
                  subject: 'Order status inquiry',
                  message: 'I would like to inquire about the status of my recent order. Can you provide an update?',
                  date: '16-03-2024',
                  response: 'Your order has been shipped and is expected to arrive by the end of this week.',
                },
                {
                  id: 5,
                  name: 'David Brown',
                  email: 'david.brown@example.com',
                  subject: 'Product availability',
                  message: 'I am interested in purchasing one of your products, but I noticed it is out of stock. When will it be available again?',
                  date: '18-03-2024',
                  response: 'We apologize for the inconvenience. The product is expected to be back in stock next month.',
                },
                {
                  id: 6,
                  name: 'Jessica Taylor',
                  email: 'jessica.taylor@example.com',
                  subject: 'Shipping inquiry',
                  message: 'I placed an order a few days ago and haven\'t received any shipping updates. Can you provide information on when it will be shipped?',
                  date: '20-03-2024',
                  response: 'Your order is scheduled for shipping tomorrow. You will receive a confirmation email with tracking details.',
                },
                {
                  id: 7,
                  name: 'Matthew Martinez',
                  email: 'matthew.martinez@example.com',
                  subject: 'Account issue',
                  message: 'I am having trouble accessing my account. It seems like my password is not working. Can you assist me with this?',
                  date: '22-03-2024',
                  response: 'We apologize for the inconvenience. Please check your email for instructions on resetting your password.',
                },
                {
                  id: 8,
                  name: 'Emma Anderson',
                  email: 'emma.anderson@example.com',
                  subject: 'Product inquiry',
                  message: 'I am interested in purchasing one of your products but would like more details about its features. Can you provide additional information?',
                  date: '24-03-2024',
                  response: 'Certainly! Please refer to our product page for detailed information about the features and specifications.',
                },
                {
                  id: 9,
                  name: 'Christopher Lee',
                  email: 'christopher.lee@example.com',
                  subject: 'Feedback',
                  message: 'I recently purchased a product from your store and wanted to share my feedback. Overall, I am impressed with the quality and service.',
                  date: '26-03-2024',
                  response: 'Thank you for your feedback! We appreciate your support and look forward to serving you again in the future.',
                },
                {
                  id: 10,
                  name: 'Olivia White',
                  email: 'olivia.white@example.com',
                  subject: 'Delivery issue',
                  message: 'I received my order today, but one of the items is damaged. What should I do?',
                  date: '28-03-2024',
                  response: 'We apologize for the inconvenience. Please provide details of the damaged item, and we will arrange for a replacement or refund.',
                },
              ]);
          } catch (error) {
              console.error('Error fetching messages:', error);
          }
      };

      fetchmessages();
  }, []);

  return (
    <>
    <Header />
            <div className="container mt-4">
                <h1 className="text-center text-purple mainheading">Messages</h1>
                <div className="card table-responsive p-1">
                    <table ref={tableRef} className="table table-hover table-striped bg-purple text-purple">
                        <thead>
                            <tr>
                                <th className='text-purple'>#</th>
                                <th className='text-purple'>Name</th>
                                <th className='text-purple'>Email</th>
                                <th className='text-purple'>Subject</th>
                                <th className='text-purple'>Date</th>
                                <th className='text-purple'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((message, index) => (
                                <tr key={index}>
                                    <td>{message.id}</td>
                                    <td>{message.name}</td>
                                    <td>{message.email}</td>
                                    <td>{message.subject}</td>
                                    <td>{message.date}</td>
                                    <td>
                                        <Link to={`/messages/${message.id}`} className="btn btn-purple btn-sm">View</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
    </>
  )
}

export default AdminMessages