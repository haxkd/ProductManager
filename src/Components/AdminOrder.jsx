import React, { useState, useEffect } from 'react';
import Header from './Includes/Header';
import Footer from './Includes/Footer';
import { toast } from 'react-toastify';

const AdminOrder = () => {


    const [editedOrder, setEditedOrder] = useState({
        id: "",
        productName: "",
        customerName: "",
        address: "",
        orderDate: "",
        totalAmount: "",
        quantity: "",
        paymentType: "",
        status: ""
    });

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                setEditedOrder({
                    id: 1,
                    productName: 'Samsung Galaxy S21 Ultra',
                    customerName: 'John Doe',
                    address: '123, Main Street, Bangalore, Karnataka - 560001',
                    orderDate: '15-03-2024',
                    totalAmount: 150.99,
                    quantity: Math.floor(Math.random() * 10) + 1,
                    paymentType: 'Paid',
                    status: 'Shipped'
                });
            } catch (error) {
                console.error('Error fetching Orders:', error);
            }
        };

        fetchOrder();
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedOrder(prevOrder => ({
            ...prevOrder,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    function handleUpdate() {
        toast.success("Order Updated !", {
            position: "top-right"
        });
    }
    function handleDelete() {
        toast.error("Cant Delete a Order !", {
            position: "top-right"
        });
    }


    return (
        <>
            <Header />
            <div className="container mt-4">
                <h1 className="text-center text-purple mainheading">Modify Order</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Product:</label>
                        <input type="text" className="form-control" id="productName" name="productName" value={editedOrder.productName} readOnly={true} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">User:</label>
                        <input type='text' className="form-control" id="customerName" name="customerName" value={editedOrder.customerName} readOnly />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Delivery Address:</label>
                        <textarea className="form-control" id="address" name="address" value={editedOrder.address} onChange={handleChange}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stock" className="form-label">Quantity:</label>
                        <input type="number" className="form-control" id="quantity" name="quantity" value={editedOrder.quantity} readOnly />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Amount:</label>
                        <input type="text" className="form-control" id="totalAmount" name="totalAmount" value={editedOrder.totalAmount} readOnly />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="originalPrice" className="form-label">Payment Status:</label>
                        <input type="text" className="form-control" id="paymentType" name="paymentType" value={editedOrder.paymentType} readOnly />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stock" className="form-label">Status:</label>
                        <select className="form-select" id="status" name="status" value={editedOrder.status} onChange={handleChange}>
                            <option value="Pending">Pending</option>
                            <option value="Processing">Processing</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stock" className="form-label">Order Date:</label>
                        <input type="text" className="form-control" id="orderDate" name="orderDate" value={editedOrder.orderDate} readOnly />
                    </div>
                    <div className="row">
                        <div className="col-6 text-center">
                            <button type="submit" className="btn btn-purple" onClick={handleUpdate}>Update Order</button>
                        </div>
                        <div className="col-6 text-center">
                            <button type="submit" className="btn btn-outline-danger" onClick={handleDelete}>Delete Order</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default AdminOrder