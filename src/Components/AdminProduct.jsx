import React, { useState, useEffect } from 'react';
import Header from './Includes/Header';
import Footer from './Includes/Footer';
import { toast } from 'react-toastify';

const AdminProduct = () => {
    const [editedProduct, setEditedProduct] = useState({
        id: "",
        name: '',
        description: '',
        category: '',
        quantity: "",
        sold: "",
        originalPrice: "",
        discountPrice: "",
        stock: "",
        image:null
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                setEditedProduct({
                    id: 1,
                    name: 'Samsung Galaxy S21 Ultra',
                    description: 'Samsung\'s flagship smartphone with 108MP camera, 5G capability, and 120Hz display.',
                    category: 'Electronics',
                    quantity: 100,
                    sold: 30,
                    originalPrice: 1199.99,
                    discountPrice: 999.99,
                    stock: 1,
                    image : "https://picsum.photos/400"
                });
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProduct();
    }, []);

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
            editedProduct.name !== '' &&
            editedProduct.description !== '' &&
            editedProduct.category !== '' &&
            editedProduct.quantity !== '' &&
            editedProduct.originalPrice !== '' &&
            editedProduct.discountPrice !== '' &&
            editedProduct.stock !== '' &&
            editedProduct.image !== null
        );
    };
    function handleUpdate() {
        if (!validateInputs()) {
            toast.error("Please fill out all fields correctly");
            return;
        }
        toast.success("Product Updated !", {
            position: "top-right"
        });
    }
    function handleDelete() {
        toast.error("Cant Delete a product !", {
            position: "top-right"
        });
    }

    return (
        <>
            <Header />
            <div className="container mt-4">
                <h1 className="text-center text-purple mainheading">Edit Product</h1>
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
                        <label htmlFor="sold" className="form-label">Sold:</label>
                        <input type="number" className="form-control" id="sold" name="sold" value={editedProduct.sold} readOnly />
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
                        <img className="ms-2 mb-2" src={editedProduct.image} alt={editedProduct.name} style={{width:"100px",height:"60px"}}/>
                        <input type="file" className="form-control" id="image" name="image" onChange={handleImageChange} accept="image/*" required />
                    </div>
                    <div className="row">
                        <div className="col-6 text-center">
                            <button type="submit" className="btn btn-purple" onClick={handleUpdate}>Update Product</button>
                        </div>
                        <div className="col-6 text-center">
                            <button type="button" className="btn btn-outline-danger" onClick={handleDelete}>Delete Product</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>

    );
};

export default AdminProduct;
