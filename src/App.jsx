import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import ProductPage from "./pages/ProductPage";
import Layout from "./layout/Layout";
import CreatePage from "./pages/CreatePage"
import DetailPage from "./pages/DetailPage";


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/product',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <ProductPage />
      },
      {
        path: "create",
        element: <CreatePage />
      },
      {
        path: "detail/:id",
        element: <DetailPage />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/" />
  },
]); 

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
