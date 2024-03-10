import React from 'react'
import Header from './Includes/Header'
import Footer from './Includes/Footer'

const AdminOrders = () => {
    return (
        <>
            <Header />
            <div className="container mt-4">
                <h1 className="mb-4 text-center text-purple">All Orders</h1>
            </div>
            <Footer />
        </>
    )
}

export default AdminOrders