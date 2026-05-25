import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Dashboard from "./pages/dashboard/Dashboard";
import Attendance from "./pages/attendance/Attendance";
import Leave from "./pages/leave/Leave";
import Payroll from "./pages/payroll/Payroll";
import Profile from "./pages/profile/Profile";
import Documents from "./pages/documents/Documents";
import Organization from "./pages/organization/Organization";
import Events from "./pages/events/Events";
import Resignation from "./pages/resignation/Resignation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

<Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

        <Route
  path="/attendance"
  element={<Attendance />}
/>

<Route
  path="/leave"
  element={<Leave />}
/>

<Route
  path="/payroll"
  element={<Payroll />}
/>

<Route
  path="/profile"
  element={<Profile />}
/>

<Route
  path="/documents"
  element={<Documents />}
/>

<Route
  path="/organization"
  element={<Organization />}
/>

<Route
  path="/events"
  element={<Events />}
/>

<Route
  path="/resignation"
  element={<Resignation />}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;