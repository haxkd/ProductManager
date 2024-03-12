import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import Header from "./Includes/Header";
import Footer from "./Includes/Footer";
import { Link } from "react-router-dom";
import Calendar from "./Calendar";
const AdminDashboard = () => {
  const salesChartRef = useRef(null);
  const usersChartRef = useRef(null);
  const productChartRef = useRef(null);
  let chartInstance = null;
  let usersInstance = null;
  let productInstance = null;
  let [productReport, setProductReport] = useState({});
  let [orders, setOrders] = useState({
    delivered: 5,
    pending: 7,
    canceled: 2,
    returned: 1,
  });
  const [expectedorders, setExpectedOrders] = useState([]);

  useEffect(() => {
    setExpectedOrders([
      { id: 1, customerName: "John Doe", expectedDeliveryDate: "2024-03-15" },
      { id: 2, customerName: "Jane Smith", expectedDeliveryDate: "2024-04-16" },
      {
        id: 3,
        customerName: "Michael Johnson",
        expectedDeliveryDate: "2024-03-17",
      },
      {
        id: 4,
        customerName: "Emily Wilson",
        expectedDeliveryDate: "2024-03-18",
      },
      {
        id: 5,
        customerName: "David Brown",
        expectedDeliveryDate: "2024-03-18",
      },
      {
        id: 6,
        customerName: "Jessica Taylor",
        expectedDeliveryDate: "2024-03-20",
      },
      {
        id: 7,
        customerName: "Matthew Martinez",
        expectedDeliveryDate: "2024-04-21",
      },
      {
        id: 8,
        customerName: "Emma Anderson",
        expectedDeliveryDate: "2024-03-22",
      },
      {
        id: 9,
        customerName: "Christopher Lee",
        expectedDeliveryDate: "2024-03-23",
      },
      {
        id: 10,
        customerName: "Olivia White",
        expectedDeliveryDate: "2024-04-24",
      },
    ]);

    setProductReport({
      productsData: [65, 59, 80, 81, 56, 55],
      salesData: [45, 39, 70, 71, 46, 55],
      returnsData: [25, 49, 60, 61, 36, 45],
    });
    setOrders({
      delivered: 5,
      pending: 7,
      canceled: 2,
      returned: 1,
    });
  }, []);

  useEffect(() => {
    if (productInstance) {
      productInstance.destroy();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    productInstance = new Chart(productChartRef.current, {
      type: "pie",
      data: {
        labels: ["Delivered", "Pending", "Cancelled", "Returned"],
        datasets: [
          {
            data: Object.values(orders),
            backgroundColor: [
              "rgba(75, 192, 192, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });
    return () => {
      if (productInstance) {
        productInstance.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (Object.keys(productReport).length === 0) {
      return;
    }

    if (chartInstance) {
      chartInstance.destroy();
    }
    if (usersInstance) {
      usersInstance.destroy();
    }

    const hours = Array.from({ length: 24 }, (_, i) => i);
    const usersData = hours.map((hour) => Math.floor(Math.random() * 100));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    chartInstance = new Chart(salesChartRef.current.getContext("2d"), {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            label: "Products",
            data: productReport.productsData,
            backgroundColor: "rgba(255, 193, 7, 0.2)",
            borderColor: "rgba(255, 193, 7, 1)",
            borderWidth: 1,
          },
          {
            label: "Sales",
            data: productReport.salesData,
            backgroundColor: "rgba(66, 255, 117, 0.2)",
            borderColor: "rgba(66, 255, 117, 1)",
            borderWidth: 1,
          },
          {
            label: "Returns",
            data: productReport.returnsData,
            backgroundColor: "rgba(255, 78, 78, 0.2)",
            borderColor: "rgba(255, 78, 78, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    usersInstance = new Chart(usersChartRef.current.getContext("2d"), {
      type: "line",
      data: {
        labels: hours,
        datasets: [
          {
            label: "Users Over Past 24 Hours",
            data: usersData,
            backgroundColor: "rgba(66, 255, 117, 0.2)",
            borderColor: "rgba(66, 255, 117, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

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
                <p className="card-text">
                  {productReport.productsData &&
                    productReport.productsData.reduce(
                      (acc, curr) => acc + curr,
                      0
                    )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total Orders</h5>
                <p className="card-text">
                  {productReport.salesData &&
                    productReport.salesData.reduce(
                      (acc, curr) => acc + curr,
                      0
                    )}
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Total Returns</h5>
                <p className="card-text">
                  {productReport.returnsData &&
                    productReport.returnsData.reduce(
                      (acc, curr) => acc + curr,
                      0
                    )}
                </p>
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
        <div className="row">
          <div className="col-lg mt-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-between">
                  <span>Top Products</span>{" "}
                  <Link className="nav-link text-dark" to="/products">
                    See all
                  </Link>
                </h5>
                <ul className="list-group mt-3 mb-3">
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Samsung Galaxy S21 Ultra</h6>
                      <small className="text-body-secondary">Electronics</small>
                    </div>
                    <span className="text-body-secondary">$12</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Nike Air Zoom Pegasus 38</h6>
                      <small className="text-body-secondary">
                        Sports & Outdoors
                      </small>
                    </div>
                    <span className="text-body-secondary">$8</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">Sony PlayStation 5</h6>
                      <small className="text-body-secondary">Electronics</small>
                    </div>
                    <span className="text-body-secondary">$5</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">LEGO Star Wars Millennium Falcon</h6>
                      <small className="text-body-secondary">Toys & Games</small>
                    </div>
                    <span className="text-body-secondary">$8</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">KitchenAid Stand Mixer</h6>
                      <small className="text-body-secondary">Home & Kitchen</small>
                    </div>
                    <span className="text-body-secondary">$5</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg mt-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-between">
                  <span>Notifications</span>
                  <Link className="nav-link text-dark" to="/products">
                    See all
                  </Link>
                </h5>
                <ul className="list-group mt-3 mb-3">
                  <li className="list-group-item gap-10 d-flex justify-content-between lh-sm">
                    <span className="text-body-secondary">
                      <i className="fa-solid fa-check-double text-success"></i>
                    </span>
                    <div>
                      <h6 className="my-0">
                        Samsung Galaxy S21 Ultra has been delivered
                      </h6>
                      <small className="text-body-secondary">10 minutes ago</small>
                    </div>
                  </li>
                  <li className="list-group-item gap-10 d-flex justify-content-between lh-sm">
                    <span className="text-body-secondary">
                      <i className="fa-brands fa-get-pocket text-info"></i>
                    </span>
                    <div>
                      <h6 className="my-0">
                        Nike Air Zoom Pegasus 38 has been ordered
                      </h6>
                      <small className="text-body-secondary"> 20 minutes ago</small>
                    </div>
                  </li>
                  <li className="list-group-item gap-10 d-flex justify-content-between lh-sm">
                    <span className="text-body-secondary">
                      <i className="fa-solid fa-circle-exclamation text-danger"></i>
                    </span>
                    <div>
                      <h6 className="my-0">Samsung Galaxy S21 Ultra has Stock 0</h6>
                      <small className="text-body-secondary">20 minutes ago</small>
                    </div>
                  </li>
                  <li className="list-group-item gap-10 d-flex justify-content-between lh-sm">
                    <span className="text-body-secondary">
                      <i className="fa-solid fa-check-double text-success"></i>
                    </span>
                    <div>
                      <h6 className="my-0">GoPro HERO9 Black has been deliverd</h6>
                      <small className="text-body-secondary"> 30 minutes ago</small>
                    </div>
                  </li>
                  <li className="list-group-item gap-10 d-flex justify-content-between lh-sm">
                    <span className="text-body-secondary">
                      <i className="fa-solid fa-circle-exclamation text-danger"></i>
                    </span>
                    <div>
                      <h6 className="my-0">Fitbit Charge 4 has been returned</h6>
                      <small className="text-body-secondary"> 30 minutes ago</small>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mt-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Products Overview</h5>
                <canvas ref={productChartRef} />
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Recent Orders</h5>
                <div className="table-responsive">
                  <table className="table table-hover table-striped bg-purple text-purple">
                    <thead>
                      <tr>
                        <th className="text-purple">#</th>
                        <th className="text-purple">User</th>
                        <th className="text-purple">Product</th>
                        <th className="text-purple">Date</th>
                        <th className="text-purple">Price</th>
                        <th className="text-purple">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>John Doe</td>
                        <td>Samsung Galaxy S21 Ultra</td>
                        <td>15/03/2024</td>
                        <td>$150.99</td>
                        <td>Processing</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jane Smith</td>
                        <td>Apple MacBook Pro 13</td>
                        <td>16/03/2024</td>
                        <td>$99.50</td>
                        <td>Shipped</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Michael Johnson</td>
                        <td>Nike Air Zoom Pegasus 38</td>
                        <td>17/03/2024</td>
                        <td>$249.75</td>
                        <td>Delivered</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>David Brown</td>
                        <td>KitchenAid Stand Mixer</td>
                        <td>19/03/2024</td>
                        <td>$199.00</td>
                        <td>Shipped</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Jessica Taylor</td>
                        <td>GoPro HERO9 Black</td>
                        <td>20/03/2024</td>
                        <td>$299.99</td>
                        <td>Processing</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Matthew Martinez</td>
                        <td>Fitbit Charge 4</td>
                        <td>21/03/2024</td>
                        <td>$89.50</td>
                        <td>Shipped</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Christopher Lee</td>
                        <td>LEGO Star Wars Millennium Falcon</td>
                        <td>22/03/2024</td>
                        <td>$179.99</td>
                        <td>Processing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title d-flex justify-content-between">
                  <span>Orders Overview</span>
                </h5>
                <Calendar orders={expectedorders} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminDashboard;
