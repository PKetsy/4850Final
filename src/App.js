import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Delivery from './pages/Delivery/Delivery';
import EventHome from './pages/Events/EventHome';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

import AdminHome from './pages/Admin/AdminHome';
import AdminLogin from './pages/Admin/AdminLogin';
import RequireAuth from './pages/Admin/components/RequireAuth';
import AdminLogout from './pages/Admin/AdminLogout';
import AdminEvents from './pages/Admin/AdminEvents';
import AdminSignupPage from './pages/Admin/pages/AdminSignupPage';
import AdminRsvpsHome from './pages/Admin/pages/AdminRsvpsHome';
import AdminMenu from './pages/Admin/pages/MenuAdmin/AdminMenu';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/events" element={<EventHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route exact path="/admin/login" element={<AdminLogin />} />
        <Route exact path="/admin/logout" element={<AdminLogout />} />
        <Route exact path="/admin/signup" element={<AdminSignupPage />} />
        <Route
          exact
          path="/admin"
          element={
            <RequireAuth>
              <AdminHome />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/admin/events"
          element={
            <RequireAuth>
              <AdminEvents />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/admin/rsvps"
          element={
            <RequireAuth>
              <AdminRsvpsHome />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/admin/menu"
          element={
            <RequireAuth>
              <AdminMenu />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
