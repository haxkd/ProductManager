import React, { useState, useEffect,useRef  } from 'react';
import $ from 'jquery';
import 'datatables.net-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import { Link } from 'react-router-dom';
import Header from './Includes/Header'
import Footer from './Includes/Footer'
const AdminUsers = () => {
    const [Users, setUsers] = useState([]);
    const tableRef = useRef(null);


    useEffect(() => {
        if (Users.length > 0 && tableRef.current) {
            $(tableRef.current).DataTable();
        }
        return () => {
            if ($.fn.DataTable.isDataTable(tableRef.current)) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                $(tableRef.current).DataTable().destroy();
            }
        };
    }, [Users]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setUsers([
                    {
                      "id": 1,
                      "name": "John Doe",
                      "email": "john.doe@example.com",
                      "mobile": "+91 9876543210",
                      "gender": "male",
                      "status": "unblock",
                      "registrationDate": "05-03-2023",
                      "address": "123, Main Street, Bangalore, Karnataka - 560001",
                      "image": "https://randomuser.me/api/portraits/men/1.jpg"
                    },
                    {
                      "id": 2,
                      "name": "Jane Smith",
                      "email": "jane.smith@example.com",
                      "mobile": "+91 9876543211",
                      "gender": "female",
                      "status": "block",
                      "registrationDate": "10-02-2022",
                      "address": "456, Park Avenue, Mumbai, Maharashtra - 400001",
                      "image": "https://randomuser.me/api/portraits/women/2.jpg"
                    },
                    {
                      "id": 3,
                      "name": "Michael Johnson",
                      "email": "michael.johnson@example.com",
                      "mobile": "+91 9876543212",
                      "gender": "male",
                      "status": "unblock",
                      "registrationDate": "15-04-2021",
                      "address": "789, Elm Street, New Delhi, Delhi - 110001",
                      "image": "https://randomuser.me/api/portraits/men/3.jpg"
                    },
                    {
                      "id": 4,
                      "name": "Emily Wilson",
                      "email": "emily.wilson@example.com",
                      "mobile": "+91 9876543213",
                      "gender": "female",
                      "status": "block",
                      "registrationDate": "20-06-2020",
                      "address": "101, Oak Lane, Chennai, Tamil Nadu - 600001",
                      "image": "https://randomuser.me/api/portraits/women/4.jpg"
                    },
                    {
                      "id": 5,
                      "name": "David Brown",
                      "email": "david.brown@example.com",
                      "mobile": "+91 9876543214",
                      "gender": "male",
                      "status": "unblock",
                      "registrationDate": "25-08-2019",
                      "address": "789, High Street, Kolkata, West Bengal - 700001",
                      "image": "https://randomuser.me/api/portraits/men/5.jpg"
                    },
                    {
                      "id": 6,
                      "name": "Jessica Taylor",
                      "email": "jessica.taylor@example.com",
                      "mobile": "+91 9876543215",
                      "gender": "female",
                      "status": "block",
                      "registrationDate": "30-10-2018",
                      "address": "10, Church Road, Hyderabad, Telangana - 500001",
                      "image": "https://randomuser.me/api/portraits/women/6.jpg"
                    },
                    {
                      "id": 7,
                      "name": "Matthew Martinez",
                      "email": "matthew.martinez@example.com",
                      "mobile": "+91 9876543216",
                      "gender": "male",
                      "status": "unblock",
                      "registrationDate": "03-12-2017",
                      "address": "456, Garden Lane, Ahmedabad, Gujarat - 380001",
                      "image": "https://randomuser.me/api/portraits/men/7.jpg"
                    },
                    {
                      "id": 8,
                      "name": "Emma Anderson",
                      "email": "emma.anderson@example.com",
                      "mobile": "+91 9876543217",
                      "gender": "female",
                      "status": "block",
                      "registrationDate": "08-02-2016",
                      "address": "101, Maple Street, Pune, Maharashtra - 411001",
                      "image": "https://randomuser.me/api/portraits/women/8.jpg"
                    },
                    {
                      "id": 9,
                      "name": "Christopher Lee",
                      "email": "christopher.lee@example.com",
                      "mobile": "+91 9876543218",
                      "gender": "male",
                      "status": "unblock",
                      "registrationDate": "13-04-2015",
                      "address": "202, Lake Road, Jaipur, Rajasthan - 302001",
                      "image": "https://randomuser.me/api/portraits/men/9.jpg"
                    },
                    {
                      "id": 10,
                      "name": "Olivia White",
                      "email": "olivia.white@example.com",
                      "mobile": "+91 9876543219",
                      "gender": "female",
                      "status": "block",
                      "registrationDate": "18-06-2014",
                      "address": "303, Orchard Lane, Lucknow, Uttar Pradesh - 226001",
                      "image": "https://randomuser.me/api/portraits/women/10.jpg"
                    }
                  ]);
            } catch (error) {
                console.error('Error fetching Users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <>
            <Header />
            <div className="container mt-4">
                <h1 className="text-center text-purple mainheading">Users</h1>
                <div className="card table-responsive p-1">
                    <table ref={tableRef} className="table table-hover table-striped bg-purple text-purple">
                        <thead>
                            <tr>
                                <th className='text-purple'>#</th>
                                <th className='text-purple'>Name</th>
                                <th className='text-purple'>Email</th>
                                <th className='text-purple'>Mobile</th>
                                <th className='text-purple'>Address</th>
                                <th className='text-purple'>Image</th>
                                <th className='text-purple'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.mobile}</td>
                                    <td>{user.address}</td>
                                    <td><img src={user.image} alt={user.name} style={{height:"50px",width:"50px"}} /></td>
                                    
                                    <td>
                                        <Link to={`/Users/${user.id}`} className="btn btn-purple btn-sm">View</Link>
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

export default AdminUsers