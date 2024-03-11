import './App.css';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from './Components/AdminDashboard';
import AdminProducts from './Components/AdminProducts'
import AdminProduct from './Components/AdminProduct';
import AdminOrders from './Components/AdminOrders';
import { ToastContainer } from 'react-toastify';

/*

1. Header 
  a. Products
  b. Orders
2. Admin Dashboard
  a. Basic reports of
      sales, product, returns
3. Products ==> show product details
  a. name
  b. description
  b. category
  c. quantity
  d. org price
  e. discount price
  f. stock
  g. iamges[3]

4. single product to edit
5. Orders
  a. Prouct Details
  b. user details
  c. delivery address
  d.  status (pending, processing, travel, delivered)

*/

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/products" element={<AdminProducts />} />
        <Route path="/products/:id" element={<AdminProduct />} />
        <Route path="/orders" element={<AdminOrders />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
