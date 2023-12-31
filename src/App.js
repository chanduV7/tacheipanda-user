import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./components/register";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import Login from "./components/login";
import ProfileForm from "./components/profileForm";

import ViewJob from "./components/viewJob";
import Front from "./components/frontPage";
import Ifollow from "./components/ifollow";
import ViewCompany from "./components/viewCompany";
import SavedJobs from "./components/savedJobs";
import SearchJob from "./components/searchJob";

function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Front/>
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/profile/edit/:userId",
      element: <ProfileForm />,
    },
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/viewJob/:jobId",
      element: <ViewJob />,
    },
    {
      path : "/ifollow",
      element: <Ifollow/>
    },
    {
      path : "viewCompany/:cid",
      element: <ViewCompany/>
    },
    {
      path : "savedJobs/:userId",
      element: <SavedJobs/>
    },
    {
      path:'searchJob',
      element:<SearchJob/>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
