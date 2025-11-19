import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import TourDetails from "./Pages/TourDetails/TourDetails";

function App() {
  return (
    <>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: <Layout />,
            children: [
              { index: true, element: <Home /> },
              { path: "/tour/:id", element: <TourDetails /> },
            ],
          },
        ])}
      ></RouterProvider>
    </>
  );
}

export default App;
