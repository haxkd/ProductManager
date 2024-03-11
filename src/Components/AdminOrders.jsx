import React, { useState, useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';

import { Link } from 'react-router-dom';
import Header from './Includes/Header'
import Footer from './Includes/Footer'

const AdminOrders = () => {
    const [orders, setOrders] = useState([]);
    const tableRef = useRef(null);

    useEffect(() => {
        if (orders.length > 0 && tableRef.current) {
            $(tableRef.current).DataTable();
        }
        return () => {
            if ($.fn.DataTable.isDataTable(tableRef.current)) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                $(tableRef.current).DataTable().destroy();
            }
        };
    }, [orders]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                setOrders([
                    {
                        id: 1,
                        productName: 'Samsung Galaxy S21 Ultra',
                        customerName: 'John Doe',
                        address: '123, Main Street, Bangalore, Karnataka - 560001',
                        orderDate: '15-03-2024',
                        totalAmount: 150.99,
                        quantity: Math.floor(Math.random() * 10) + 1,
                        paymentType: 'Paid',
                        status: 'Processing'
                    },
                    {
                        id: 2,
                        productName: 'Apple MacBook Pro 13"',
                        customerName: 'Jane Smith',
                        address: '456, Park Avenue, Mumbai, Maharashtra - 400001',
                        orderDate: '16-03-2024',
                        totalAmount: 99.50,
                        quantity: Math.floor(Math.random() * 10) + 1,
                        paymentType: 'Unpaid',
                        status: 'Shipped'
                    },
                    {
                        id: 3,
                        productName: 'Nike Air Zoom Pegasus 38',
                        customerName: 'Michael Johnson',
                        address: '789, Elm Street, New Delhi, Delhi - 110001',
                        orderDate: '17-03-2024',
                        totalAmount: 249.75,
                        quantity: Math.floor(Math.random() * 10) + 1,
                        paymentType: 'Paid',
                        status: 'Delivered'
                    },
                    {
                        id: 4,
                        productName: 'Sony PlayStation 5',
                        customerName: 'Emily Wilson',
                        address: '101, Oak Lane, Chennai, Tamil Nadu - 600001',
                        orderDate: '18-03-2024',
                        totalAmount: 79.99,
                        quantity: Math.floor(Math.random() * 10) + 1,
                        paymentType: 'Unpaid',
                        status: 'Cancelled'
                    },
                    {
                        id: 5,
                        productName: 'KitchenAid Stand Mixer',
                        customerName: 'David Brown',
                        address: '789, High Street, Kolkata, West Bengal - 700001',
                        orderDate: '19-03-2024',
                        totalAmount: 199.00,
                        quantity: Math.floor(Math.random() * 10) + 1,
                        paymentType: 'Paid',
                        status: 'Shipped'
                    },
                    {
                        id: 6,
                        productName: 'GoPro HERO9 Black',
                        customerName: 'Jessica Taylor',
                        address: '10, Church Road, Hyderabad, Telangana - 500001',
                        orderDate: '20-03-2024',
                        totalAmount: 299.99,
                        quantity: Math.floor(Math.random() * 10) + 1,
                        paymentType: 'Paid',
                        status: 'Processing'
                    },
                    {
                        id: 7,
                        productName: 'Amazon Echo Dot (4th Gen)',
                        customerName: 'Matthew Martinez',
                        address: '456, Garden Lane, Ahmedabad, Gujarat - 380001',
                        orderDate: '21-03-2024',
                        totalAmount: 129.95,
                        quantity: Math.floor(Math.random() * 10) + 1,
                        paymentType: 'Unpaid',
                        status: 'Processing'
                    },
                    {
                        id: 8,
                        productName: 'Fitbit Charge 4',
                        customerName: 'Emma Anderson',
                        address: '101, Maple Street, Pune, Maharashtra - 411001',
                        orderDate: '22-03-2024',
                        totalAmount: 89.50,
                        quantity: Math.floor(Math.random() * 10) + 1,
                        paymentType: 'Paid',
                        status: 'Shipped'
                    },
                    {
                        id: 9,
                        productName: 'LEGO Star Wars Millennium Falcon',
                        customerName: 'Christopher Lee',
                        address: '202, Lake Road, Jaipur, Rajasthan - 302001',
                        orderDate: '23-03-2024',
                        totalAmount: 179.99,
                        quantity: Math.floor(Math.random() * 10) + 1,
                        paymentType: 'Unpaid',
                        status: 'Delivered'
                    },
                    {
                        id: 10,
                        productName: 'Instant Pot Duo 7-in-1',
                        customerName: 'Olivia White',
                        address: '303, Orchard Lane, Lucknow, Uttar Pradesh - 226001',
                        orderDate: '24-03-2024',
                        totalAmount: 49.75,
                        quantity: Math.floor(Math.random() * 10) + 1,
                        paymentType: 'Paid',
                        status: 'Processing'
                    }
                ]);
            } catch (error) {
                console.error('Error fetching order:', error);
            }
        };



        fetchOrders();
    }, []);

    return (
        <>
            <Header />
            <div className="container mt-4">
                <h1 className="text-center text-purple mainheading">Orders</h1>
                <div className="card table-responsive p-1">
                    <table ref={tableRef} className="table table-hover table-striped bg-purple text-purple">
                        <thead>
                            <tr>
                                <th className='text-purple'>#</th>
                                <th className='text-purple'>User</th>
                                <th className='text-purple'>Product</th>
                                <th className='text-purple'>Address</th>
                                <th className='text-purple'>Quantity</th>
                                <th className='text-purple'>Amount</th>
                                <th className='text-purple'>Paid</th>
                                <th className='text-purple'>Status</th>
                                <th className='text-purple'>Date</th>
                                <th className='text-purple'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index}>
                                    <td>{order.id}</td>
                                    <td><Link className='nav-link text-dark' to={`/users/${order.customerName}`}>{order.customerName}</Link></td>
                                    <td><Link className='nav-link text-dark' to={`/products/${order.productName}`}>{order.productName}</Link></td>
                                    <td>{order.address}</td>
                                    <td>{order.quantity}</td>
                                    <td>${order.totalAmount.toFixed(2)}</td>
                                    <td>{order.paymentType}</td>
                                    <td>{order.status}</td>
                                    <td>{order.orderDate}</td>
                                    <td>
                                        <Link to={`/orders/${order.id}`} className="btn btn-purple btn-sm">View</Link>
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

export default AdminOrders