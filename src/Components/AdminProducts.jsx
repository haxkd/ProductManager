import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Includes/Header'
import Footer from './Includes/Footer'
const AdminProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setProducts([
                    {
                        id: 1,
                        name: 'Samsung Galaxy S21 Ultra',
                        description: 'Samsung\'s flagship smartphone with 108MP camera, 5G capability, and 120Hz display.',
                        category: 'Electronics',
                        quantity: 100,
                        originalPrice: 1199.99,
                        discountPrice: 999.99,
                        stock: 1
                    },
                    {
                        id: 2,
                        name: 'Apple MacBook Pro 13"',
                        description: 'Powerful laptop with Apple M1 chip, 16GB RAM, and 512GB SSD storage.',
                        category: 'Computers',
                        quantity: 50,
                        originalPrice: 1499.99,
                        discountPrice: 1399.99,
                        stock: 2
                    },
                    {
                        id: 3,
                        name: 'Nike Air Zoom Pegasus 38',
                        description: 'Running shoes with responsive cushioning and breathable mesh upper.',
                        category: 'Sports & Outdoors',
                        quantity: 200,
                        originalPrice: 129.99,
                        discountPrice: 109.99,
                        stock: 0
                    },
                    {
                        id: 4,
                        name: 'Sony PlayStation 5',
                        description: 'Next-gen gaming console with 4K gaming, high-speed SSD, and immersive gaming experiences.',
                        category: 'Electronics',
                        quantity: 30,
                        originalPrice: 499.99,
                        discountPrice: 449.99,
                        stock: 4
                    },
                    {
                        id: 5,
                        name: 'KitchenAid Stand Mixer',
                        description: 'Powerful stand mixer for baking and cooking with various attachments and multiple speed settings.',
                        category: 'Home & Kitchen',
                        quantity: 80,
                        originalPrice: 349.99,
                        discountPrice: 299.99,
                        stock: 1
                    },
                    {
                        id: 6,
                        name: 'GoPro HERO9 Black',
                        description: 'Action camera with 5K video, 20MP photos, and waterproof design.',
                        category: 'Electronics',
                        quantity: 60,
                        originalPrice: 449.99,
                        discountPrice: 399.99,
                        stock: 0
                    },
                    {
                        id: 7,
                        name: 'Amazon Echo Dot (4th Gen)',
                        description: 'Smart speaker with Alexa, compact design, and improved sound quality.',
                        category: 'Electronics',
                        quantity: 120,
                        originalPrice: 49.99,
                        discountPrice: 39.99,
                        stock: 7
                    },
                    {
                        id: 8,
                        name: 'Fitbit Charge 4',
                        description: 'Fitness tracker with built-in GPS, heart rate monitor, and sleep tracking.',
                        category: 'Sports & Outdoors',
                        quantity: 90,
                        originalPrice: 149.95,
                        discountPrice: 129.95,
                        stock: 9
                    },
                    {
                        id: 9,
                        name: 'LEGO Star Wars Millennium Falcon',
                        description: 'Iconic Star Wars Millennium Falcon LEGO set with detailed interior and exterior.',
                        category: 'Toys & Games',
                        quantity: 40,
                        originalPrice: 159.99,
                        discountPrice: 139.99,
                        stock: 3
                    },
                    {
                        id: 10,
                        name: 'Instant Pot Duo 7-in-1',
                        description: 'Multi-functional pressure cooker with 14 built-in smart programs for cooking various dishes.',
                        category: 'Home & Kitchen',
                        quantity: 70,
                        originalPrice: 99.95,
                        discountPrice: 89.95,
                        stock: 1
                    }
                ]);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <>
            <Header />
            <div className="container mt-4">
                <h1 className="mb-4 text-center text-purple">All Products</h1>
                <div className="card table-responsive p-1">
                    <table className="table bg-purple text-purple">
                    <thead>
                    <tr>
                        <th className='text-purple'>#</th>
                        <th className='text-purple'>Name</th>
                        <th className='text-purple'>Category</th>
                        <th className='text-purple'>Quantity</th>
                        <th className='text-purple'>Original Price</th>
                        <th className='text-purple'>Discount Price</th>
                        <th className='text-purple'>Stock</th>
                        <th className='text-purple'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.quantity}</td>
                            <td>${product.originalPrice.toFixed(2)}</td>
                            <td>${product.discountPrice.toFixed(2)}</td>
                            <td>{product.stock}</td>
                            <td>
                                <Link to={`/products/${product.id}`} className="btn btn-purple btn-sm">View</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
                    </table>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default AdminProducts