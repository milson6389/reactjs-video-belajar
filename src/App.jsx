import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/layout/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          index: true,
          element: <h1>Home</h1>,
        },
        {
          path: "/login",
          element: <h1>Login</h1>,
        },
        {
          path: "/register",
          element: <h1>Register</h1>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
