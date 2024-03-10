import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import Header from './Includes/Header';
import Footer from './Includes/Footer';

const AdminDashboard = () => {
    const salesChartRef = useRef(null);
    const usersChartRef = useRef(null);
    let chartInstance = null;
    let usersInstance = null;
    let [productReport, setProductReport] = useState({});


    useEffect(() => {
        setProductReport({
            "productsData": [65, 59, 80, 81, 56, 55],
            "salesData": [45, 39, 70, 71, 46, 55],
            "returnsData": [25, 49, 60, 61, 36, 45],
        });
    }, []);

    useEffect(() => {

        if (Object.keys(productReport).length === 0) {
            return; // Wait for productReport to be populated
        }

        if (chartInstance) {
            chartInstance.destroy(); // Destroy previous chart instance if it exists
        }
        if (usersInstance) {
            usersInstance.destroy(); // Destroy previous chart instance if it exists
        }

        const hours = Array.from({ length: 24 }, (_, i) => i);
        const usersData = hours.map(hour => Math.floor(Math.random() * 100));





        // eslint-disable-next-line react-hooks/exhaustive-deps
        chartInstance = new Chart(salesChartRef.current.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        label: 'Products',
                        data: productReport.productsData,
                        backgroundColor: 'rgba(255, 193, 7, 0.2)',
                        borderColor: 'rgba(255, 193, 7, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Sales',
                        data: productReport.salesData,
                        backgroundColor: 'rgba(66, 255, 117, 0.2)',
                        borderColor: 'rgba(66, 255, 117, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Returns',
                        data: productReport.returnsData,
                        backgroundColor: 'rgba(255, 78, 78, 0.2)',
                        borderColor: 'rgba(255, 78, 78, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });



        // eslint-disable-next-line react-hooks/exhaustive-deps
        usersInstance = new Chart(usersChartRef.current.getContext('2d'), {
            type: 'line',
            data: {
                labels: hours,
                datasets: [{
                    label: 'Users Over Past 24 Hours',
                    data: usersData,
                    backgroundColor: 'rgba(66, 255, 117, 0.2)',
                    borderColor: 'rgba(66, 255, 117, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });


        // Cleanup function
        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
            if (usersInstance) {
                usersInstance.destroy();
            }
        };
    }, [productReport]);

    return (
        <>
            <Header />
            <div className="container mt-4">
                <div className="row g-4">
                    <div className="col-6 col-lg">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Total Users</h5>
                                <p className="card-text">100</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Total Products</h5>
                                <p className="card-text">{productReport.productsData && productReport.productsData.reduce((acc, curr) => acc + curr, 0)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Total Orders</h5>
                                <p className="card-text">{productReport.salesData && productReport.salesData.reduce((acc, curr) => acc + curr, 0)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-lg">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Total Returns</h5>
                                <p className="card-text">{productReport.returnsData && productReport.returnsData.reduce((acc, curr) => acc + curr, 0)}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Sales Overview</h5>
                                <canvas ref={salesChartRef} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Users Overview</h5>
                                <canvas ref={usersChartRef} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default AdminDashboard;
