import React, { useState,useEffect } from 'react';
import Header from './Includes/Header';
import Footer from './Includes/Footer';


const AdminProduct = ({ productsData }) => {
    const [editedProduct, setEditedProduct] = useState({});
    
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setEditedProduct({
                        id: 1,
                        name: 'Samsung Galaxy S21 Ultra',
                        description: 'Samsung\'s flagship smartphone with 108MP camera, 5G capability, and 120Hz display.',
                        category: 'Electronics',
                        quantity: 100,
                        originalPrice: 1199.99,
                        discountPrice: 999.99,
                        stock: 1
                    });
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProduct();
    }, []);    
    
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle submission to update product data
        console.log('Edited Product:', editedProduct);
        // You can make API call to update product data here
    };

    return (
        <>
        <Header/>
        <div className="container mt-4">
            <h1 className="mb-4 text-center text-purple">Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={editedProduct.name} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <textarea className="form-control" id="description" name="description" value={editedProduct.description} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="category" className="form-label">Category:</label>
                    <input type="text" className="form-control" id="category" name="category" value={editedProduct.category} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">Quantity:</label>
                    <input type="number" className="form-control" id="quantity" name="quantity" value={editedProduct.quantity} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="originalPrice" className="form-label">Original Price:</label>
                    <input type="number" className="form-control" id="originalPrice" name="originalPrice" value={editedProduct.originalPrice} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="discountPrice" className="form-label">Discount Price:</label>
                    <input type="number" className="form-control" id="discountPrice" name="discountPrice" value={editedProduct.discountPrice} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="stock" className="form-label">Stock:</label>
                    <input type="number" className="form-control" id="stock" name="stock" value={editedProduct.stock} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-purple">Update Changes</button>
            </form>
        </div>
        <Footer/>
        </>

    );
};

export default AdminProduct;
