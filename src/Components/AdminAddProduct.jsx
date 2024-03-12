import React, { useState } from 'react';
import Header from './Includes/Header';
import Footer from './Includes/Footer';
import { toast } from 'react-toastify';

const AdminAddProduct = () => {
    const [editedProduct, setEditedProduct] = useState({
        id: "",
        name: '',
        description: '',
        category: '',
        quantity: "",
        originalPrice: "",
        discountPrice: "",
        stock: "",
        image: null
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setEditedProduct(prevProduct => ({
            ...prevProduct,
            image: file
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct(prevProduct => ({
            ...prevProduct,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const validateInputs = () => {
        return (
            editedProduct.name.trim() !== '' &&
            editedProduct.description.trim() !== '' &&
            editedProduct.category.trim() !== '' &&
            editedProduct.quantity.trim() !== '' &&
            editedProduct.originalPrice.trim() !== '' &&
            editedProduct.discountPrice.trim() !== '' &&
            editedProduct.stock.trim() !== '' &&
            editedProduct.image !== null
        );
    };

    function handleAdd() {
        if (!validateInputs()) {
            toast.error("Please fill out all fields correctly");
            return;
        }
        toast.success("Product Added !", {
            position: "top-right"
        });
    }
    function handleReset() {
        setEditedProduct({
            id: "",
            name: '',
            description: '',
            category: '',
            quantity: "",
            originalPrice: "",
            discountPrice: "",
            stock: "",
            image: null
        });
    }

    return (
        <>
            <Header />
            <div className="container mt-4">
                <h1 className="text-center text-purple mainheading">Add Product</h1>
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
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image:</label>
                        <input type="file" className="form-control" id="image" name="image" onChange={handleImageChange} accept="image/*" required />
                    </div>
                    <div className="row">
                        <div className="col-6 text-center">
                            <button type="submit" className="btn btn-purple" onClick={handleAdd}>Add Product</button>
                        </div>
                        <div className="col-6 text-center">
                            <button type="submit" className="btn btn-outline-danger" onClick={handleReset}>Reset</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>

    );
};

export default AdminAddProduct;
