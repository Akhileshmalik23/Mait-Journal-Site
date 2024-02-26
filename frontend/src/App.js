import React, { useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
// *-**--*-*-*--*-*-*--*-*-*-*-*-**--*--*-*-
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/account/Login";
import Journal from "./components/journal/Journal";
import CreateJournal from "./components/createJournal/CreateJournal";
import Student from "./components/students/Student";
import JournalData from "./components/journal/JournalData";
import Test from "./components/test/Test";
import Profile from "./components/account/Profile";
import NoMatch from "./components/noMatch/NoMatch";
import Admin from "./components/admin/Admin";
import Notifications from "@mui/icons-material/Notifications";
import AuthorJournal from "./components/journal/authorJournal";
import StudentJournal from "./components/journal/studentJournal";

// =============================

const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? (
    <>
      <Navbar />
      <Outlet />
    </>
  ) : (
    <Navigate replace to="/login" />
  );
};

const App = () => {
  const [isAuthenticated, isUserAuthenticated] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={<Login isUserAuthenticated={isUserAuthenticated} />}
        />

        {/* Setting up a private route */}

        {/* Navbar Routes */}
        <Route
          path="/"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/" element={<Home />} />
        </Route>

        <Route
          path="/journals/"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/journals/" element={<Journal />} />
        </Route>

        <Route
          path="/student/"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/student/" element={<Student />} />
        </Route>

        <Route
          path="/profile"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* -------------------------------------------------- */}

        {/* General Routes */}

        {/* Add id here later*/}
        <Route
          path="/journals/view/"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/journals/view/" element={<JournalData />} />
        </Route>

        <Route
          path="/usercreatejournal"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/usercreatejournal" element={<CreateJournal />} />
        </Route>

        <Route
          path="/notifications"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/notifications" element={<Notifications />} />
        </Route>

        <Route
          path="/test"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/test" element={<Test />} />
        </Route>

        {/* Admin Routes */}

        <Route
          path="/admin"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route path="/admin" element={<Admin />} />
        </Route>

        <Route path="/authorJournal" element={<AuthorJournal />} />
        <Route path="/studentJournal" element={<StudentJournal/>} />

        {/* ---------------------------------- */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
