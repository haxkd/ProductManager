import React, { useState, useEffect } from 'react';
import Header from './Includes/Header';
import Footer from './Includes/Footer';
import {  toast } from 'react-toastify';

const AdminUser = () => {
    const [editedUser, setEditedUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setEditedUser({
                    id: 2,
                    name: "Jane Smith",
                    email: "jane.smith@example.com",
                    mobile: "+91 9876543211",
                    gender: "female",
                    status: "block",
                    registrationDate: "10-02-2022",
                    address: "456, Park Avenue, Mumbai, Maharashtra - 400001",
                    image: "https://randomuser.me/api/portraits/men/1.jpg"
                  });
            } catch (error) {
                console.error('Error fetching Users:', error);
            }
        };

        fetchUser();
    }, []);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUser(prevUser => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    function handleUpdate(){
        toast.success("User Updated !", {
            position: "top-right"
          });
    }
    function handleDelete(){
        toast.error("Cant Delete a User !", {
            position: "top-right"
          });
    }

    return (
        <>
            <Header />
            <div className="container mt-4">
                <h1 className="text-center text-purple mainheading">Modify User</h1>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                       <img src={editedUser.image} alt={editedUser.name} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" id="name" name="name" value={editedUser.name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">email:</label>
                        <textarea className="form-control" id="email" name="email" value={editedUser.email} onChange={handleChange}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">mobile:</label>
                        <input type="text" className="form-control" id="mobile" name="mobile" value={editedUser.mobile} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">gender:</label>
                        <select className="form-select" id="gender" name="gender" value={editedUser.gender} onChange={handleChange}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="status" className="form-label">status:</label>
                        <select className="form-select" id="status" name="status" value={editedUser.status} onChange={handleChange}>
                            <option value="Active">Active</option>
                            <option value="Block">Block</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">address:</label>
                        <textarea className="form-control" id="address" name="address" value={editedUser.address} onChange={handleChange}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="registrationDate" className="form-label">registrationDate:</label>
                        <input type='text' className="form-control" id="registrationDate" name="registrationDate" value={editedUser.registrationDate} onChange={handleChange}/>
                    </div>
                    <div className="row">
                        <div className="col-6 text-center">
                            <button type="submit" className="btn btn-purple" onClick={handleUpdate}>Update User</button>
                        </div>
                        <div className="col-6 text-center">
                            <button type="submit" className="btn btn-outline-danger" onClick={handleDelete}>Delete User</button>

                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>

    );
};

export default AdminUser;
